'use client';

import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface FooterProps {
  lang: 'fr' | 'en';
}

export default function Footer({ lang }: FooterProps) {
  const isFr = lang === 'fr';

  const content = {
    contactTitle: isFr ? 'Discutons de votre projet' : "Let's discuss your project",
    contactSub: isFr
      ? 'Prenez rendez-vous avec nos experts pour un diagnostic financier et juridique sur mesure.'
      : 'Schedule a call with our experts for a tailored financial and legal review.',
    phone: '+229 01 23 45 67 89',
    email: 'contact@3scores.com',
    address: isFr ? 'Cotonou, Bénin' : 'Cotonou, Benin',
    rights: isFr ? 'Tous droits réservés.' : 'All rights reserved.',
    navHeader: isFr ? 'Navigation' : 'Navigation',
    legalHeader: isFr ? 'Mentions Légales' : 'Legal',
  };

  const navLinks = [
    { label: isFr ? 'Accueil' : 'Home', href: '#hero' },
    { label: isFr ? 'Services' : 'Services', href: '#services' },
    { label: isFr ? 'À propos' : 'About', href: '#about' },
    { label: isFr ? 'Tarifs' : 'Pricing', href: '#pricing' },
    { label: isFr ? 'Contact' : 'Contact', href: '#contact' },
  ];

  const legalLinks = [
    { label: isFr ? 'Politique de confidentialité' : 'Privacy Policy', href: '#privacy' },
    { label: isFr ? "Conditions d'utilisation" : 'Terms of Service', href: '#terms' },
    { label: isFr ? 'Mentions légales' : 'Legal Notice', href: '#legal' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300">
      {/* --- SECTION CONTACT EN DARK MODE --- */}
      <section id="contact" className="relative overflow-hidden border-b border-slate-800/80 py-16 sm:py-24">
        {/* Texture de fond subtile */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.02),transparent_70%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            
            {/* Colonne gauche : Infos & Accroche */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-3.5 py-1 text-xs font-normal text-slate-400">
                  <ShieldCheck size={14} className="text-slate-400" />
                  <span>{isFr ? 'Contact direct' : 'Direct contact'}</span>
                </div>
                <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
                  {content.contactTitle}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-400">
                  {content.contactSub}
                </p>
              </div>

              {/* Coordonnées */}
              <div className="mt-8 space-y-4 text-sm sm:text-base">
                <a
                  href={`tel:${content.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 text-slate-300 transition-colors hover:text-white"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900">
                    <Phone size={18} className="text-slate-400" />
                  </div>
                  <span>{content.phone}</span>
                </a>

                <a
                  href={`mailto:${content.email}`}
                  className="flex items-center gap-3 text-slate-300 transition-colors hover:text-white"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900">
                    <Mail size={18} className="text-slate-400" />
                  </div>
                  <span>{content.email}</span>
                </a>

                <div className="flex items-center gap-3 text-slate-300">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-800 bg-slate-900">
                    <MapPin size={18} className="text-slate-400" />
                  </div>
                  <span>{content.address}</span>
                </div>
              </div>
            </div>

            {/* Colonne droite : Formulaire simplifié */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-sm">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-slate-400">
                    {isFr ? 'Nom complet' : 'Full name'}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:border-slate-600 focus:outline-none focus:ring-1 focus:ring-slate-600"
                    placeholder={isFr ? 'Jean Dupont' : 'John Doe'}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-slate-400">
                    {isFr ? 'Adresse e-mail' : 'Email address'}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:border-slate-600 focus:outline-none focus:ring-1 focus:ring-slate-600"
                    placeholder="jean@entreprise.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-slate-400">
                    {isFr ? 'Message' : 'Message'}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="mt-1 w-full rounded-lg border border-slate-800 bg-slate-950 px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:border-slate-600 focus:outline-none focus:ring-1 focus:ring-slate-600"
                    placeholder={isFr ? 'Dites-nous en plus sur vos besoins...' : 'Tell us about your needs...'}
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-slate-950 transition-colors duration-200 hover:bg-slate-200"
                >
                  <span>{isFr ? 'Envoyer le message' : 'Send message'}</span>
                  <ArrowUpRight size={16} />
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER : NAVIGATION & MENTIONS --- */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          
          {/* Logo & Résumé */}
          <div className="md:col-span-2">
            <a href="#hero" className="font-serif text-xl font-bold text-white">
              3Scores
            </a>
            <p className="mt-3 max-w-sm text-xs leading-relaxed text-slate-400">
              {isFr
                ? 'Plateforme d’analyse financière, de scoring d’entreprise et d’accompagnement juridique.'
                : 'Financial analysis, corporate scoring, and legal support platform.'}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white">
              {content.navHeader}
            </p>
            <ul className="mt-4 space-y-2.5 text-xs">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-slate-400 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Liens légaux */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white">
              {content.legalHeader}
            </p>
            <ul className="mt-4 space-y-2.5 text-xs">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-slate-400 transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-slate-900 pt-6 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} 3Scores. {content.rights}</p>
        </div>
      </div>
    </footer>
  );
}