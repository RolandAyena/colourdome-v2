import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

function getSmtpTransporter() {
  const host = process.env.SMTP_HOST?.trim();
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER?.trim();
  const password = process.env.SMTP_PASSWORD;

  if (!host || !user || !password || !Number.isInteger(port)) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass: password },
  });
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

    const transporter = getSmtpTransporter();
    const recipients = (process.env.MAIL_TO || '')
      .split(',')
      .map((address) => address.trim())
      .filter(Boolean);
    const mailFrom = process.env.MAIL_FROM?.trim() || process.env.SMTP_USER?.trim();

    if (!transporter || recipients.length === 0 || !mailFrom) {
      console.error('Configuration SMTP incomplète. Vérifiez SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, MAIL_FROM et MAIL_TO.');
      return NextResponse.json(
        { error: 'Configuration email manquante.' },
        { status: 503 }
      );
    }

    const info = await transporter.sendMail({
      from: mailFrom,
      // Une adresse principale est nécessaire ; les boîtes de l’équipe sont en copie cachée.
      to: mailFrom,
      bcc: recipients,
      replyTo: email,
      subject: lang === 'en'
        ? `New Appointment Request — ${name}`
        : `Nouvelle demande de rendez-vous — ${name}`,
      html: generateEmailTemplate({ ...body, name, phone, service }, lang),
    });

    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (err: unknown) {
    console.error('Erreur serveur API Contact:', err);
    return NextResponse.json(
      { error: 'Impossible d’envoyer le message pour le moment.' },
      { status: 500 }
    );
  }
}
