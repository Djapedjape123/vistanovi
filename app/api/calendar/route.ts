import { NextResponse } from 'next/server';

// Onemogućavamo Vercel keširanje
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const icalUrl = process.env.ICAL_BOOKING_URL;
    
    if (!icalUrl) {
      console.error('Nije pronađen ICAL_BOOKING_URL u .env.local fajlu');
      return NextResponse.json({ disabledRanges: [] });
    }

    const response = await fetch(icalUrl, { 
      cache: 'no-store',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/calendar'
      }
    });

    if (!response.ok) {
      console.error('Booking je odbio zahtev.');
      return NextResponse.json({ disabledRanges: [] });
    }

    const icsData = await response.text();
    const disabledRanges = [];
    
    // Naš sopstveni super-precizni parser: Sečemo tekst fajla na komade gde počinje svaki događaj
    const events = icsData.split('BEGIN:VEVENT');

    for (let i = 1; i < events.length; i++) {
      const ev = events[i];

      // Izvlačimo tačne brojeve za Godinu, Mesec i Dan, ignorišući sve vremenske zone!
      const startMatch = ev.match(/DTSTART(?:;.*?)?:(\d{4})(\d{2})(\d{2})/);
      const endMatch = ev.match(/DTEND(?:;.*?)?:(\d{4})(\d{2})(\d{2})/);

      if (startMatch) {
        const sYear = parseInt(startMatch[1]);
        const sMonth = parseInt(startMatch[2]) - 1; // U JavaScriptu meseci idu od 0 (Jan) do 11 (Dec)
        const sDay = parseInt(startMatch[3]);
        
        // Koristimo striktno Date.UTC da izbegnemo pomeranje datuma zbog Vercel servera
        const checkInDate = new Date(Date.UTC(sYear, sMonth, sDay));
        let checkOutDate = new Date(Date.UTC(sYear, sMonth, sDay));

        if (endMatch) {
          const eYear = parseInt(endMatch[1]);
          const eMonth = parseInt(endMatch[2]) - 1;
          const eDay = parseInt(endMatch[3]);
          checkOutDate = new Date(Date.UTC(eYear, eMonth, eDay));
        } else {
          // Ako je Booking poslao ručni blok (samo 1 dan), dodajemo 1 dan manuelno
          checkOutDate.setUTCDate(checkOutDate.getUTCDate() + 1);
        }

        // ZLATNO PRAVILO: Oslobađamo dan odlaska (-1 dan)
        checkOutDate.setUTCDate(checkOutDate.getUTCDate() - 1);

        // Osiguranje da "do datuma" nikad ne bude pre "od datuma" (to inače lomi kalendar)
        if (checkOutDate < checkInDate) {
          checkOutDate = new Date(checkInDate);
        }

        disabledRanges.push({
          from: checkInDate.toISOString(),
          to: checkOutDate.toISOString(),
        });
      }
    }

    return NextResponse.json({ disabledRanges });

  } catch (error) {
    console.error('Kritična greška pri čitanju iCal kalendara:', error);
    return NextResponse.json({ disabledRanges: [] }); 
  }
}
