import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Učitavamo tvoj Resend ključ iz .env.local fajla
const resend = new Resend(process.env.RESEND_API_KEY);

// Mejl vlasnika (gde će stizati zahtevi za rezervacije)
const OWNER_EMAIL = 'emilijagolubov@live.ca'; 

export async function POST(req: Request) {
  try {
    // 1. Čekamo da dobijemo sve podatke iz tvog formData (iz page.tsx)
    const body = await req.json();
    const { 
      name, 
      email, 
      phone, 
      guests, 
      hasPets, 
      checkIn, 
      checkOut, 
      nights, 
      totalPrice 
    } = body;

    // 2. Proveravamo da li su stigle osnovne informacije
    if (!name || !email || !checkIn || !checkOut) {
      return NextResponse.json(
        { error: 'Nedostaju podaci za rezervaciju' }, 
        { status: 400 }
      );
    }

    // 3. Šaljemo e-mail vlasnici koristeći Resend
    const { data, error } = await resend.emails.send({
      from: 'Vista Novi Booking <onboarding@resend.dev>', // Za sada ostavi ovako zbog Resend free tier-a
      to: OWNER_EMAIL,
      subject: `🛎️ Nova Rezervacija: ${name} (${checkIn} - ${checkOut})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; padding: 20px; border-radius: 10px; color: #333;">
          
          <div style="background-color: #1F3325; color: #C19A5B; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0;">Nova Rezervacija!</h1>
            <p style="margin: 5px 0 0 0; color: #F5EFE6;">Stigao je novi upit sa sajta Vista Novi.</p>
          </div>

          <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #ddd; border-top: none;">
            
            <h3 style="color: #1F3325; border-bottom: 2px solid #C19A5B; padding-bottom: 5px; margin-top: 0;">Detalji Gosta</h3>
            <ul style="list-style: none; padding: 0; margin-bottom: 30px;">
              <li style="margin-bottom: 10px;"><strong>Ime i Prezime:</strong> ${name}</li>
              <li style="margin-bottom: 10px;"><strong>E-mail adresa:</strong> <a href="mailto:${email}" style="color: #C19A5B;">${email}</a></li>
              <li style="margin-bottom: 10px;"><strong>Broj telefona:</strong> ${phone}</li>
            </ul>

            <h3 style="color: #1F3325; border-bottom: 2px solid #C19A5B; padding-bottom: 5px;">Detalji Boravka</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Dolazak (Check-in):</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">${checkIn}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Odlazak (Check-out):</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">${checkOut}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Broj noćenja:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">${nights} noćenja</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Broj gostiju:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">${guests} osoba</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Kućni ljubimci:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">${hasPets ? 'Da (Zahteva se provera)' : 'Ne'}</td>
              </tr>
              <tr style="background-color: rgba(193, 154, 91, 0.1);">
                <td style="padding: 15px 10px; border-radius: 5px 0 0 5px; color: #1F3325;"><strong>Ukupna cena (procena):</strong></td>
                <td style="padding: 15px 10px; border-radius: 0 5px 5px 0; text-align: right; color: #1F3325; font-size: 1.2em;"><strong>${totalPrice} €</strong></td>
              </tr>
            </table>

            <p style="font-size: 0.9em; color: #666; text-align: center; margin-top: 40px; margin-bottom: 0;">
              *Ova poruka je automatski generisana sa sistema za rezervacije. Kontaktirajte gosta za konačnu potvrdu.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend greška:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error('Kritična greška pri slanju rezervacije:', error);
    return NextResponse.json(
      { error: 'Greška na serveru.' },
      { status: 500 }
    );
  }
}