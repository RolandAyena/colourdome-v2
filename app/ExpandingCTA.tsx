'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Calendar, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ExpandingCTAProps {
  lang: 'fr' | 'en';
  darkMode: boolean;
  bookCta: string;
}

export default function ExpandingCTA({ lang, darkMode, bookCta }: ExpandingCTAProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "center 50%"]
  });

  // Zoom au défilement
  const scale = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
  
  // Conserve les bords bien arrondis (de 48px à 24px)
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["48px", "24px"]);
  
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.4, 1]);

  // Ombre sous la carte avec la teinte exacte #e7000b
  const boxShadow = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "0px 10px 30px rgba(231, 0, 11, 0.15)",
      "0px 20px 50px rgba(231, 0, 11, 0.35)"
    ]
  );

  const content = {
    fr: {
      badge: "Accompagnement Sur-Mesure",
      title: "Passez à la vitesse supérieure dans la gestion de votre entreprise",
      sub: "Bénéficiez d'un diagnostic complet offert et d'une feuille de route stratégique personnalisée sous 48h.",
      bullets: [
        "Sans engagement",
        "Analyse financière & juridique",
        "Réponse garantie en 48h"
      ],
      btnSecondary: "Découvrir nos offres"
    },
    en: {
      badge: "Tailored Support",
      title: "Take your business management to the next level",
      sub: "Get a free comprehensive diagnostic and a tailored strategic roadmap within 48 hours.",
      bullets: [
        "No commitment",
        "Financial & legal review",
        "Guaranteed 48h response"
      ],
      btnSecondary: "Discover our plans"
    }
  }[lang];

  return (
    <div 
      ref={containerRef} 
      id="approche" 
      className={`py-16 sm:py-24 relative ${darkMode ? 'bg-slate-950' : 'bg-slate-50/50'}`}
    >
      <div className="w-full max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          style={{
            scale,
            borderRadius,
            opacity,
            boxShadow,
            // Utilisation directe de la couleur exacte #e7000b
            background: 'linear-gradient(135deg, #e7000b 0%, #c40009 60%, #990007 100%)'
          }}
          className="px-6 py-12 sm:px-12 sm:py-16 md:p-20 text-center relative border border-white/20 overflow-hidden backdrop-blur-xl text-white transition-colors duration-300"
        >
          {/* Reflets lumineux internes */}
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-white/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-black/25 rounded-full blur-3xl pointer-events-none"></div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/20 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold uppercase tracking-wider text-red-100 mb-6 shadow-sm">
            <ShieldCheck size={16} className="text-white" />
            <span>{content.badge}</span>
          </div>

          {/* Titre */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold font-serif mb-5 leading-tight max-w-4xl mx-auto text-white tracking-tight">
            {content.title}
          </h2>

          {/* Sous-titre */}
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
            {content.sub}
          </p>

          {/* Puces de réassurance */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-10 text-xs sm:text-sm text-white font-medium">
            {content.bullets.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-black/20 px-3.5 py-1.5 rounded-full border border-white/20 backdrop-blur-md">
                <CheckCircle2 size={16} className="text-white" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Boutons d'action */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="#contact"
              style={{ color: '#e7000b' }}
              className="w-full sm:w-auto bg-white hover:bg-slate-100 font-bold px-8 py-3.5 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-base"
            >
              <Calendar size={18} />
              <span>{bookCta}</span>
              <ArrowRight size={18} />
            </a>

            <a
              href="#services"
              className="w-full sm:w-auto bg-black/20 hover:bg-black/35 text-white border border-white/30 font-semibold px-8 py-3.5 rounded-full backdrop-blur-md transition-all flex items-center justify-center text-base"
            >
              {content.btnSecondary}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}