// app/api/send/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Gazdaricin mejl (zameniti sa njenom pravom adresom)
const OWNER_EMAIL = 'emilijagolubov@live.ca';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      fullName, 
      email, 
      phone, 
      message 
    } = body;

    // Validacija osnovnih polja
    if (!fullName || !email || !message) {
      return NextResponse.json({ error: 'Fale obavezna polja.' }, { status: 400 });
    }

    // 1. MEJL ZA GAZDARICU (Obaveštenje o novoj kontakt poruci)
    const ownerEmailData = await resend.emails.send({
      from: 'Vista Novi Kontakt <onboarding@resend.dev>',
      to: OWNER_EMAIL,
      subject: `✉️ Nova Poruka sa sajta: ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #1F3325; color: #F5EFE6; padding: 30px; border-radius: 12px;">
          <h2 style="color: #C19A5B; border-bottom: 2px solid #C19A5B; padding-bottom: 10px;">
            ✉️ Nova Kontakt Poruka - Vista Novi
          </h2>
          <p>Dobili ste novu poruku preko kontakt forme na sajtu!</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px; color: #F5EFE6;">
            <tr><td style="padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.1); width: 80px;"><strong>Od:</strong></td><td style="padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.1);">${fullName}</td></tr>
            ${phone ? `<tr><td style="padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>Telefon:</strong></td><td style="padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.1);"><a href="tel:${phone}" style="color: #C19A5B;">${phone}</a></td></tr>` : ''}
            <tr><td style="padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.1);"><strong>E-mail:</strong></td><td style="padding: 8px; border-bottom: 1px solid rgba(255,255,255,0.1);"><a href="mailto:${email}" style="color: #C19A5B;">${email}</a></td></tr>
          </table>

          <div style="background-color: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; border: 1px solid #C19A5B; margin-top: 20px;">
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>

          ${phone ? `
          <div style="margin-top: 30px; text-align: center;">
            <a href="tel:${phone}" style="background-color: #C19A5B; color: #1F3325; font-weight: bold; padding: 12px 24px; text-decoration: none; border-radius: 30px; display: inline-block;">
              📞 Pozovi ${fullName}
            </a>
          </div>
          ` : ''}
        </div>
      `,
    });

    // 2. MEJL ZA GOSTA (Potvrda prijema poruke)
    await resend.emails.send({
      from: 'Vista Novi <onboarding@resend.dev>',
      to: email,
      subject: `✨ Primili smo vašu poruku - Vista Novi`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #1F3325; color: #F5EFE6; padding: 30px; border-radius: 12px; max-width: 600px; margin: auto;">
          <h2 style="color: #C19A5B; text-align: center;">Hvala vam, ${fullName}!</h2>
          <p style="text-align: center; font-size: 16px;">Vaša poruka je uspešno zaprimljena.</p>
          
          <div style="background-color: rgba(255,255,255,0.05); padding: 20px; border-radius: 8px; border: 1px solid #C19A5B; margin: 20px 0;">
            <h4 style="color: #C19A5B; margin-top: 0; margin-bottom: 10px;">Sadržaj vaše poruke:</h4>
            <p style="white-space: pre-wrap; font-style: italic; color: #F5EFE6; margin: 0;">"${message}"</p>
          </div>

          <p style="font-size: 14px; color: #F5EFE6; text-align: center;">
            Pročitaćemo vašu poruku i kontaktiraćemo vas u najkraćem mogućem roku.
          </p>

          <p style="text-align: center; color: #C19A5B; font-weight: bold; margin-top: 30px;">
            Vista Novi Team | Ledinci, Fruška gora
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