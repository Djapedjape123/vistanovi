import { NextResponse } from 'next/server';
import ical from 'node-ical';

// OVO JE NAJBITNIJE: Govorimo Vercelu i Next.js-u da NIKADA ne keširaju ovu rutu
// Uvek mora da se izvrši uživo kada korisnik otvori sajt
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const icalUrl = process.env.ICAL_BOOKING_URL;
    
    if (!icalUrl) {
      console.error('Nije pronađen ICAL_BOOKING_URL u .env.local fajlu');
      return NextResponse.json({ disabledRanges: [] });
    }

    // Dodali smo cache: 'no-store' da bismo zaobišli svaki mogući Vercel Cache
    const response = await fetch(icalUrl, { 
      cache: 'no-store',
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
      if (!event) continue;

      // Sada tražimo samo da događaj ima START. 
      // END nam više nije obavezan uslov da bismo ušli u petlju!
      if (event.type === 'VEVENT' && event.start) {
        const checkInDate = new Date(event.start as Date);
        let checkOutDate;
        
        // PAMETNA LOGIKA:
        // Ako postoji 'end' (Prava rezervacija), koristimo njega.
        // Ako NE postoji (Ti si ručno zatvorio dan u Bookingu), dodajemo tačno 1 dan (24h)
        if (event.end) {
          checkOutDate = new Date(event.end as Date);
        } else {
          checkOutDate = new Date(checkInDate.getTime() + (24 * 60 * 60 * 1000));
        }
        
        // ZLATNO PRAVILO: Oslobađamo dan odlaska za sledeće goste
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