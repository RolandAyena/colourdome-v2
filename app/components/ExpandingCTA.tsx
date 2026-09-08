'use client';

import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';

interface ExpandingCTAProps {
  lang: 'fr' | 'en';
  darkMode: boolean;
  bookCta: string;
}

export default function ExpandingCTA({ lang, darkMode, bookCta }: ExpandingCTAProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  // Animation de zoom déclenchée pendant le défilement
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 95%', 'center 50%'],
  });

  // Facteur d'agrandissement (zoom de 0.72 à 1.0)
  const scale = useTransform(scrollYProgress, [0, 1], reduceMotion ? [1, 1] : [0.72, 1]);
  // Adaptation dynamique des bordures lors du zoom
  const borderRadius = useTransform(scrollYProgress, [0, 1], reduceMotion ? ['20px', '20px'] : ['48px', '20px']);
  const opacity = useTransform(scrollYProgress, [0, 0.35], reduceMotion ? [1, 1] : [0.4, 1]);
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [32, 0]);

  const content = {
    fr: {
      badge: 'Accompagnement sur mesure',
      title: 'Passez à la vitesse supérieure dans la gestion de votre entreprise',
      sub: "Bénéficiez d'un diagnostic complet offert et d'une feuille de route stratégique personnalisée sous 48 h.",
      bullets: ['Sans engagement', 'Analyse financière & juridique', 'Réponse garantie sous 48 h'],
      secondary: 'Découvrir nos services',
    },
    en: {
      badge: 'Tailored support',
      title: 'Take your business management to the next level',
      sub: 'Get a free comprehensive diagnostic and a tailored strategic roadmap within 48 hours.',
      bullets: ['No commitment', 'Financial & legal review', 'Guaranteed response within 48 hours'],
      secondary: 'Discover our services',
    },
  }[lang];

  return (
    <section
      ref={containerRef}
      id="approche"
      aria-labelledby="approche-title"
      className={`relative overflow-hidden py-20 sm:py-28 ${darkMode ? 'bg-slate-950' : 'bg-slate-50'}`}
    >
      {/* Conteneur large (max-w-7xl) pour permettre l'amplitude du zoom */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-2 sm:px-4">
        <motion.div
          style={{ scale, y, borderRadius, opacity }}
          className="relative isolate overflow-hidden border border-slate-800 bg-slate-900 px-6 py-14 text-center text-white shadow-2xl transition-shadow duration-300 sm:px-12 sm:py-16 md:px-16 md:py-20"
        >
          {/* Subtile texture de fond neutre */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03),transparent_70%)]" />

          <div className="relative mx-auto max-w-3xl">
            {/* Badge haut */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-800/50 px-4 py-1.5 text-xs font-normal tracking-wide text-slate-300 backdrop-blur-sm">
              <ShieldCheck size={16} className="text-slate-400" aria-hidden="true" />
              <span>{content.badge}</span>
            </div>

            {/* Titre principal */}
            <h2
              id="approche-title"
              className="mx-auto mb-5 font-serif text-2xl font-bold leading-snug text-white sm:text-3xl md:text-4xl"
            >
              {content.title}
            </h2>

            {/* Sous-titre */}
            <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
              {content.sub}
            </p>

            {/* Puces informatives */}
            <div className="mb-10 flex flex-wrap items-center justify-center gap-3 text-xs font-normal text-slate-300 sm:gap-5 sm:text-sm">
              {content.bullets.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/40 px-3.5 py-1.5"
                >
                  <CheckCircle2 size={15} className="text-slate-400" aria-hidden="true" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-col items-center justify-center gap-3.5 sm:flex-row">
              <a
                href="#contact"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium text-slate-950 transition-colors duration-200 hover:bg-slate-200 sm:w-auto"
              >
                <Calendar size={17} aria-hidden="true" />
                <span>{bookCta}</span>
                <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a
                href="#services"
                className="flex w-full items-center justify-center rounded-full border border-slate-700 bg-transparent px-7 py-3 text-sm font-medium text-slate-300 transition-colors duration-200 hover:border-slate-500 hover:text-white sm:w-auto"
              >
                {content.secondary}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}