import { NextResponse } from 'next/server';

function escapeHtml(value: unknown) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function generateEmailTemplate(data: Record<string, unknown>, lang: string) {
  const isEn = lang === 'en';
  const label = (fr: string, en: string) => (isEn ? en : fr);

  return `
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
      <h2>${label('Nouvelle demande de contact', 'New Contact Request')}</h2>
      <p><strong>${label('Nom', 'Name')} :</strong> ${escapeHtml(data.name)}</p>
      <p><strong>${label('Courriel', 'Email')} :</strong> ${escapeHtml(data.email)}</p>
      <p><strong>${label('Téléphone', 'Phone')} :</strong> ${escapeHtml(data.phone || 'N/A')}</p>
      <p><strong>${label('Service demandé', 'Service')} :</strong> ${escapeHtml(data.service || 'N/A')}</p>
      <p><strong>${label('Message', 'Message')} :</strong></p>
      <p style="background: #f4f4f4; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${escapeHtml(data.message)}</p>
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
        { error: lang === 'en' ? 'Required fields are missing' : 'Champs obligatoires manquants' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY?.trim();
    if (!apiKey) {
      console.error('RESEND_API_KEY est absente. Ajoutez-la aux variables d’environnement de production.');
      return NextResponse.json(
        { error: 'Configuration email manquante.' },
        { status: 503 }
      );
    }

    const mailTo = process.env.MAIL_TO?.trim() || 'rolanddevjunior@gmail.com';
    const mailFrom = process.env.MAIL_FROM?.trim() || 'onboarding@resend.dev';

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: mailFrom,
        to: mailTo.split(',').map((address) => address.trim()).filter(Boolean),
        subject: lang === 'en'
          ? `New Appointment Request — ${name}`
          : `Nouvelle demande de rendez-vous — ${name}`,
        reply_to: email,
        html: generateEmailTemplate({ ...body, name, phone, service }, lang),
      }),
    });

    const data = await resendResponse.json();
    if (!resendResponse.ok) {
      console.error('Erreur Resend:', data);
      return NextResponse.json({ error: data }, { status: resendResponse.status });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: unknown) {
    console.error('Erreur serveur API Contact:', err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}
