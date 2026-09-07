import { NextResponse } from 'next/server';

// Le type est déclaré localement pour que l’endpoint reste correctement reconnu
// même si les types Node ne sont pas encore chargés par l’éditeur.
declare const process: {
  env: {
    RESEND_API_KEY?: string;
    MAIL_TO?: string;
    MAIL_FROM?: string;
  };
};

const MAX_LENGTHS = {
  firstName: 80,
  lastName: 80,
  email: 254,
  phone: 40,
  service: 120,
  message: 5000,
} as const;

function clean(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const firstName = clean(body.firstName, MAX_LENGTHS.firstName);
    const lastName = clean(body.lastName, MAX_LENGTHS.lastName);
    const email = clean(body.email, MAX_LENGTHS.email);
    const phone = clean(body.phone, MAX_LENGTHS.phone);
    const service = clean(body.service, MAX_LENGTHS.service);
    const message = clean(body.message, MAX_LENGTHS.message);

    if (!firstName || !lastName || !email || !service || !message || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: 'Veuillez remplir correctement tous les champs obligatoires.' },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipients = (process.env.MAIL_TO || 'info@colourdome.ca')
      .split(',')
      .map((address) => address.trim())
      .filter(Boolean);
    const sender = process.env.MAIL_FROM || 'Colour Dome Montréal <onboarding@resend.dev>';

    if (!apiKey || recipients.length === 0) {
      console.error('Email configuration is incomplete: RESEND_API_KEY and MAIL_TO are required.');
      return NextResponse.json(
        { success: false, error: 'Le service de messagerie est momentanément indisponible.' },
        { status: 503 },
      );
    }

    const subject = `Nouvelle demande de rendez-vous — ${firstName} ${lastName}`;
    const text = [
      'Nouvelle demande reçue depuis le site Colour Dome Montréal',
      '',
      `Nom : ${firstName} ${lastName}`,
      `Courriel : ${email}`,
      `Téléphone : ${phone || 'Non renseigné'}`,
      `Service demandé : ${service}`,
      '',
      'Message :',
      message,
    ].join('\n');

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: sender,
        to: recipients,
        reply_to: email,
        subject,
        text,
      }),
    });

    if (!resendResponse.ok) {
      const details = await resendResponse.text();
      console.error('Email provider rejected the message:', details);
      return NextResponse.json(
        { success: false, error: 'Le message n’a pas pu être envoyé. Veuillez réessayer.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Une erreur est survenue. Veuillez réessayer.' },
      { status: 500 },
    );
  }
}
