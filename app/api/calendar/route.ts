import { NextResponse } from 'next/server';
import ical from 'node-ical';

export const revalidate = 3600; 

export async function GET() {
  try {
    const icalUrl = process.env.ICAL_BOOKING_URL;
    
    if (!icalUrl) {
      console.error('Nije pronađen ICAL_BOOKING_URL u .env.local fajlu');
      return NextResponse.json({ disabledRanges: [] });
    }

    const response = await fetch(icalUrl, { 
      next: { revalidate: 3600 },
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/calendar'
      }
    });

    if (!response.ok) {
      console.error('Booking je odbio zahtev. Status:', response.status);
      return NextResponse.json({ disabledRanges: [] });
    }

    const icsData = await response.text();

    if (!icsData || icsData.trim() === '') {
      console.error('Booking je vratio prazan fajl');
      return NextResponse.json({ disabledRanges: [] });
    }

    const events = ical.sync.parseICS(icsData);
    
    if (!events || typeof events !== 'object') {
      console.error('Nema događaja u iCal fajlu ili je parsiranje puklo');
      return NextResponse.json({ disabledRanges: [] });
    }

    const disabledRanges = [];

    for (const event of Object.values(events)) {
      // 1. Osiguravamo TypeScript da 'event' postoji i nije undefined
      if (!event) continue;

      // 2. Proveravamo tip događaja i prisustvo datuma
      if (event.type === 'VEVENT' && event.start && event.end) {
        const checkInDate = new Date(event.start as Date);
        const checkOutDate = new Date(event.end as Date);
        
        const actualDisabledEnd = new Date(checkOutDate.getTime() - 24 * 60 * 60 * 1000);

        disabledRanges.push({
          from: checkInDate,
          to: actualDisabledEnd, 
        });
      }
    }

    return NextResponse.json({ disabledRanges });

  } catch (error) {
    console.error('Kritična greška pri čitanju iCal kalendara:', error);
    return NextResponse.json({ disabledRanges: [] }); 
  }
}