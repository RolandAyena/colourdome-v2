'use client';

import React from 'react';

interface WhyChooseUsTimelineProps {
  lang?: 'fr' | 'en';
  darkMode?: boolean;
  bookCta?: string;
}

export default function WhyChooseUsTimeline({
  lang = 'fr',
  darkMode = false,
  bookCta = 'Prendre rendez-vous'
}: WhyChooseUsTimelineProps) {
  const isFrench = lang === 'fr';

  const items = isFrench
    ? [
        {
          number: '01',
          label: 'Réactivité',
          title: 'Réponse en 48h',
          text: 'Une équipe disponible et attentive à chaque étape de votre parcours.'
        },
        {
          number: '02',
          label: 'Expertise',
          title: 'Une équipe intégrée',
          text: 'Comptabilité, fiscalité et droit réunis sous un seul et même toit.'
        },
        {
          number: '03',
          label: 'International',
          title: 'Une vision transfrontalière',
          text: 'Un accompagnement fiable et spécialisé pour la diaspora et le Canada.'
        },
        {
          number: '04',
          label: 'Expérience',
          title: '17+ ans à vos côtés',
          text: 'Une expertise solide et reconnue pour sécuriser et protéger vos intérêts.'
        }
      ]
    : [
        {
          number: '01',
          label: 'Responsiveness',
          title: 'Response within 48h',
          text: 'A team available and attentive at every step of your journey.'
        },
        {
          number: '02',
          label: 'Expertise',
          title: 'One integrated team',
          text: 'Accounting, tax and legal expertise all under one single roof.'
        },
        {
          number: '03',
          label: 'International',
          title: 'A cross-border view',
          text: 'Reliable, specialized support for the diaspora and Canada.'
        },
        {
          number: '04',
          label: 'Experience',
          title: '17+ years beside you',
          text: 'Proven, trusted expertise to secure and protect your interests.'
        }
      ];

  return (
    <section className={`py-12 sm:py-16 md:py-24 border-y overflow-hidden transition-colors duration-300 ${darkMode ? 'border-slate-800 bg-slate-950 text-white' : 'border-slate-200 bg-white text-slate-950'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
        
        {/* Entête minimaliste */}
        <div className="mb-10 sm:mb-14 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-1 sm:mb-2 block font-mono">
              04 · {isFrench ? 'Notre différence' : 'Our difference'}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold font-serif tracking-tight leading-tight">
              {isFrench ? 'Pourquoi nous choisir ?' : 'Why choose us?'}
            </h2>
          </div>
          <p className={`max-w-md text-xs sm:text-sm md:text-base leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {isFrench
              ? 'Un accompagnement simple, réactif et sur mesure, axé sur la clarté et la sérénité.'
              : 'Simple, responsive, tailored support focused on clarity and peace of mind.'}
          </p>
        </div>

        {/* Grille typographique dépouillée */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          {items.map((item) => (
            <div 
              key={item.number} 
              className={`flex flex-col justify-between border-t pt-5 sm:pt-6 ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}
            >
              <div>
                <span className={`font-mono text-xs font-semibold block mb-3 sm:mb-6 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                  {item.number} / {item.label}
                </span>
                
                <h3 className="text-lg sm:text-xl font-bold font-serif mb-2 sm:mb-3 leading-snug">
                  {item.title}
                </h3>
                
                <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton d'action épuré */}
        <div className="mt-12 sm:mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-red-600 hover:text-red-700 transition-colors py-2 border-b-2 border-red-600"
          >
            {bookCta}
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}