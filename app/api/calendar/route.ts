import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const icalUrl = process.env.ICAL_BOOKING_URL;
    const disabledRanges = [];

    // 1. POVLACENJE SA BOOKINGA (postojeći kod)
    if (icalUrl) {
      const response = await fetch(icalUrl, { 
        cache: 'no-store',
        headers: { 'User-Agent': 'Mozilla/5.0' }
      });
      
      if (response.ok) {
        const icsData = await response.text();
        const lines = icsData.split(/\r?\n/);
        let currentEvent: any = null;

        for (const line of lines) {
          if (line.startsWith('BEGIN:VEVENT')) currentEvent = {};
          else if (line.startsWith('END:VEVENT')) {
            if (currentEvent && currentEvent.start) {
              const checkInDate = new Date(currentEvent.start);
              let checkOutDate = currentEvent.end ? new Date(currentEvent.end) : new Date(checkInDate.getTime() + 86400000);
              const actualDisabledEnd = new Date(checkOutDate.getTime() - 86400000);
              disabledRanges.push({ from: checkInDate.toISOString(), to: actualDisabledEnd.toISOString() });
            }
            currentEvent = null;
          } else if (currentEvent) {
            if (line.startsWith('DTSTART')) {
              const match = line.match(/:(\d{4})(\d{2})(\d{2})/);
              if (match) currentEvent.start = Date.UTC(parseInt(match[1]), parseInt(match[2]) - 1, parseInt(match[3]));
            } else if (line.startsWith('DTEND')) {
              const match = line.match(/:(\d{4})(\d{2})(\d{2})/);
              if (match) currentEvent.end = Date.UTC(parseInt(match[1]), parseInt(match[2]) - 1, parseInt(match[3]));
            }
          }
        }
      }
    }

    // 2. DODAVANJE RUČNIH BLOKADA IZ JSON FAJLA
    try {
      const manualFilePath = path.join(process.cwd(), 'manual-blocks.json');
      const manualData = await fs.readFile(manualFilePath, 'utf-8');
      const manualBlocks = JSON.parse(manualData);
      
      manualBlocks.forEach((block: { from: string, to: string }) => {
        disabledRanges.push({
          from: new Date(block.from).toISOString(),
          to: new Date(block.to).toISOString()
        });
      });
    } catch (e) {
      console.log("Nema manual-blocks.json ili je prazan, preskačemo...");
    }

    return NextResponse.json({ disabledRanges });

  } catch (error) {
    return NextResponse.json({ disabledRanges: [], error: String(error) }); 
  }
}