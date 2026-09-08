import { NextResponse } from 'next/server';

function generateEmailTemplate(data: any, lang: string) {
  const isEn = lang === 'en';
  return `
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
      <h2>${isEn ? 'New Contact Request' : 'Nouvelle demande de contact'}</h2>
      <p><strong>${isEn ? 'Name' : 'Nom'} :</strong> ${data.name}</p>
      <p><strong>${isEn ? 'Email' : 'Courriel'} :</strong> ${data.email}</p>
      <p><strong>${isEn ? 'Phone' : 'Téléphone'} :</strong> ${data.phone || 'N/A'}</p>
      <p><strong>${isEn ? 'Service' : 'Service demandé'} :</strong> ${data.service}</p>
      <p><strong>${isEn ? 'Message' : 'Message'} :</strong></p>
      <p style="background: #f4f4f4; padding: 15px; border-radius: 5px;">${data.message}</p>
    </div>
  `;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, message, service, lang = 'fr' } = body;

    // Fusion du prénom et du nom
    const name = `${firstName || ''} ${lastName || ''}`.trim();

    // Validation des champs requis
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { 
          error: lang === 'en' 
            ? 'Required fields are missing' 
            : 'Champs obligatoires manquants' 
        },
        { status: 400 }
      );
    }

    const payload = { ...body, name };

    // Vérification de la présence de la clé API dans la console du serveur
    console.log("RESEND_API_KEY présente :", !!process.env.RESEND_API_KEY);
    console.log(
      "RESEND_API_KEY début :",
      process.env.RESEND_API_KEY?.substring(0, 5)
    );
    console.log(
      "MAIL_FROM :",
      process.env.MAIL_FROM
    );
    console.log(
      "MAIL_TO :",
      process.env.MAIL_TO
    );

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.MAIL_FROM || 'onboarding@resend.dev',
        // Remplacez 'votre-email@gmail.com' par l'adresse liée à votre compte Resend
        to: process.env.MAIL_TO 
          ? process.env.MAIL_TO.split(',') 
          : ['rolanddevjunior@gmail.com'], 
        subject: lang === 'en'
          ? `New Appointment Request — ${name}`
          : `Nouvelle demande de rendez-vous — ${name}`,
        html: generateEmailTemplate(payload, lang),
      }),
    });

    const data = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error('Erreur retournée par Resend:', data);
      return NextResponse.json({ error: data }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error('Erreur serveur API Contact:', err);
    return NextResponse.json(
      { error: err.message || 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}