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

      <p style="background: #f4f4f4; padding: 15px; border-radius: 5px;">
        ${data.message}
      </p>
    </div>
  `;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      message,
      service,
      lang = 'fr',
    } = body;

    const name = `${firstName || ''} ${lastName || ''}`.trim();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        {
          error:
            lang === 'en'
              ? 'Required fields are missing'
              : 'Champs obligatoires manquants',
        },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error('RESEND_API_KEY est absente.');
      return NextResponse.json(
        { error: 'Configuration email manquante.' },
        { status: 503 }
      );
    }

    const mailTo = process.env.MAIL_TO || 'rolanddevjunior@gmail.com';
    const mailFrom =
      process.env.MAIL_FROM || 'onboarding@resend.dev';

    console.log('RESEND_API_KEY présente : Oui');
    console.log('MAIL_FROM :', mailFrom);
    console.log('MAIL_TO :', mailTo);

    const resendResponse = await fetch(
      'https://api.resend.com/emails',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: mailFrom,
          to: mailTo
            .split(',')
            .map((email) => email.trim())
            .filter(Boolean),
          subject:
            lang === 'en'
              ? `New Appointment Request — ${name}`
              : `Nouvelle demande de rendez-vous — ${name}`,
          html: generateEmailTemplate(
            {
              ...body,
              name,
              phone,
              service,
            },
            lang
          ),
        }),
      }
    );

    const data = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error('Erreur Resend:', data);

      return NextResponse.json(
        {
          error: data,
        },
        { status: resendResponse.status }
      );
    }

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (err: any) {
    console.error('Erreur serveur API Contact:', err);

    return NextResponse.json(
      {
        error: err.message || 'Erreur interne du serveur',
      },
      { status: 500 }
    );
  }
}