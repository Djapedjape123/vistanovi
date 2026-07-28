// app/api/send/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Gazdaricin mejl (zameniti sa njenom pravom adresom)
const OWNER_EMAIL = 'emilijagolubov@gmail.com';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      fullName, 
      email, 
      phone, 
      checkIn, 
      checkOut, 
      guests, 
      totalPrice, 
      nights, 
      note 
    } = body;

    // Validacija osnovnih polja
    if (!fullName || !email || !phone || !checkIn || !checkOut) {
      return NextResponse.json({ error: 'Fale obavezna polja.' }, { status: 400 });
    }

    // 1. MEJL ZA GAZDARICU (Obaveštenje o novoj rezervaciji)
    const ownerEmailData = await resend.emails.send({
      from: 'Vista Nova Rezervacije <onboarding@resend.dev>',
      to: OWNER_EMAIL,
      subject: `🚨 Nova Rezervacija: ${fullName} (${checkIn} - ${checkOut})`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #1F3325; color: #F5EFE6; padding: 30px; border-radius: 12px;">
          <h2 style="color: #C19A5B; border-bottom: 2px solid #C19A5B; padding-bottom: 10px;">
            🏡 Nova Rezervacija - Vista Nova
          </h2>
          <p>Stigao je nov upit za rezervaciju preko sajta!</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px; color: #F5EFE6;">
            <tr><td style="padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Gost:</strong></td><td style="padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.1);">${fullName}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Telefon:</strong></td><td style="padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.1);"><a href="tel:${phone}" style="color: #C19A5B;">${phone}</a></td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>E-mail:</strong></td><td style="padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.1);">${email}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Dolazak:</strong></td><td style="padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.1);">${checkIn}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Odlazak:</strong></td><td style="padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.1);">${checkOut} (${nights} noćenja)</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Broj gostiju:</strong></td><td style="padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.1);">${guests} osoba</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Procena zarade:</strong></td><td style="padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.1); font-size: 18px; color: #C19A5B;"><strong>${totalPrice} €</strong></td></tr>
            ${note ? `<tr><td style="padding: 8px;"><strong>Napomena:</strong></td><td style="padding: 8px;">${note}</td></tr>` : ''}
          </table>

          <div style="margin-top: 30px; text-align: center;">
            <a href="tel:${phone}" style="background-color: #C19A5B; color: #1F3325; font-weight: bold; padding: 12px 24px; text-decoration: none; border-radius: 30px; display: inline-block;">
              📞 Pozovi Gosta Odmah
            </a>
          </div>
        </div>
      `,
    });

    // 2. MEJL ZA GOSTA (Potvrda prijema upita)
    await resend.emails.send({
      from: 'Vista Nova <onboarding@resend.dev>',
      to: email,
      subject: `✨ Primljen vaš upit za rezervaciju - Vista Nova`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #1F3325; color: #F5EFE6; padding: 30px; border-radius: 12px; max-width: 600px; margin: auto;">
          <h2 style="color: #C19A5B; text-align: center;">Hvala vam, ${fullName}!</h2>
          <p style="text-align: center; font-size: 16px;">Vaš upit za boravak u vikendici <strong>Vista Nova</strong> je uspešno zaprimljen.</p>
          
          <div style="background-color: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; border: 1px solid #C19A5B; margin: 20px 0;">
            <h4 style="color: #C19A5B; margin-top: 0;">Detalji upita:</h4>
            <p>🗓️ <strong>Datumi:</strong> ${checkIn} — ${checkOut} (${nights} noćenja)</p>
            <p>👥 <strong>Gosti:</strong> ${guests} osoba</p>
            <p>💰 <strong>Ukupna procena:</strong> ${totalPrice} €</p>
          </div>

          <p style="font-size: 14px; color: #F5EFE6; text-align: center;">
            Uskoro ćemo vas kontaktirati putem telefona radi potvrde rezervacije i svih detalja.
          </p>

          <p style="text-align: center; color: #C19A5B; font-weight: bold; margin-top: 30px;">
            Vista Nova Team | Ledinci, Fruška gora
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, ownerEmailData });
  } catch (error) {
    console.error('E-mail error:', error);
    return NextResponse.json({ error: 'Greška pri slanju e-maila.' }, { status: 500 });
  }
}