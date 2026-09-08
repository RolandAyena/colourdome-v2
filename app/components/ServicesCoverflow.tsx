'use client';

import React, { useMemo, useRef, useState, useEffect, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, MousePointer2 } from 'lucide-react';

type Service = {
  id: string;
  title: string;
  tag: string;
  desc: string;
  features: string[];
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  badgeColor?: string;
};

type Props = {
  services: Service[];
  moreInfo: string;
  bookCta: string;
  lang: 'fr' | 'en';
  darkMode: boolean;
};

const SERVICE_IMAGES: Record<string, string> = {
  '01': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=88',
  '02': 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=88',
  '03': 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=88',
  '04': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=88',
  '05': 'https://images.unsplash.com/photo-1521292270410-a8c4d716d518?auto=format&fit=crop&w=1200&q=88',
  '06': 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=88',
};

export default function ServicesCoverflow({
  services,
  moreInfo,
  bookCta,
  lang,
  darkMode,
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [dragging, setDragging] = useState(false);

  const startX = useRef(0);
  const currentX = useRef(0);
  const total = services.length;

  const goTo = useCallback((index: number) => {
    if (!total) return;
    setActiveIndex((index + total) % total);
    setHovered(false);
  }, [total]);

  // Autoplay (Défilement automatique)
  useEffect(() => {
    if (hovered || dragging) return;
    const interval = setInterval(() => {
      goTo(activeIndex + 1);
    }, 4500);
    return () => clearInterval(interval);
  }, [activeIndex, hovered, dragging, goTo]);

  const visible = useMemo(() => {
    return services
      .map((service, index) => {
        let offset = index - activeIndex;
        if (offset > total / 2) offset -= total;
        if (offset < -total / 2) offset += total;
        return { service, offset };
      })
      .filter(({ offset }) => Math.abs(offset) <= 1);
  }, [services, activeIndex, total]);

  const pointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    startX.current = e.clientX;
    currentX.current = e.clientX;
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const pointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (dragging) currentX.current = e.clientX;
  };

  const pointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    const delta = currentX.current - startX.current;
    setDragging(false);

    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}

    if (Math.abs(delta) > 45) {
      goTo(activeIndex + (delta < 0 ? 1 : -1));
    }
  };

  return (
    <section
      id="services"
      className={`relative w-full overflow-hidden py-16 md:py-24 ${
        darkMode ? 'bg-[#090a0c]' : 'bg-[#f7f6f3]'
      }`}
    >
      <div className="pointer-events-none absolute left-1/2 top-[54%] h-[620px] w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/[0.025] blur-3xl" />

      <div className="relative w-full px-4 sm:px-6 md:px-10 lg:px-14">
        {/* En-tête */}
        <header className="mx-auto mb-8 flex max-w-[1500px] flex-col gap-6 md:mb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="font-mono text-[11px] font-bold tracking-[0.28em] text-red-600">03</span>
              <span className={`h-px w-12 ${darkMode ? 'bg-white/10' : 'bg-black/10'}`} />
              <span className={`text-[10px] font-bold uppercase tracking-[0.25em] ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
                {lang === 'fr' ? 'Structure de nos services' : 'Our services'}
              </span>
            </div>

            <h2 className={`font-serif text-3xl font-black leading-[1.1] tracking-[-0.02em] md:text-4xl lg:text-5xl ${darkMode ? 'text-white' : 'text-slate-950'}`}>
              {lang === 'fr' ? 'Nos Domaines' : 'Our Areas'}
              <br />
              <span className="text-red-600">
                {lang === 'fr' ? "d'Expertise" : 'of Expertise'}
              </span>
            </h2>

            <p className={`mt-3 max-w-2xl text-sm leading-7 md:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              {lang === 'fr'
                ? 'Une expertise pluridisciplinaire pour accompagner les décisions qui comptent.'
                : 'Multidisciplinary expertise for the decisions that matter.'}
            </p>
          </div>

          <div className={`hidden border-l pl-6 md:block ${darkMode ? 'border-white/10' : 'border-black/10'}`}>
            <div className={`font-mono text-4xl font-bold ${darkMode ? 'text-white' : 'text-slate-950'}`}>
              {String(activeIndex + 1).padStart(2, '0')}
            </div>
            <div className="font-mono text-[10px] tracking-[0.2em] text-slate-400">
              / {String(total).padStart(2, '0')}
            </div>
          </div>
        </header>

        {/* Zone Carrousel */}
        <div className="relative w-full">
          <div
            className={`relative mx-auto flex h-[580px] w-full items-center justify-center touch-pan-y select-none md:h-[650px] ${dragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            onPointerDown={pointerDown}
            onPointerMove={pointerMove}
            onPointerUp={pointerUp}
            onPointerCancel={() => setDragging(false)}
          >
            {visible.map(({ service, offset }) => {
              const center = offset === 0;
              const left = offset === -1;
              const x = center ? 0 : left ? -560 : 560;
              const y = center ? 0 : 25;
              const scale = center ? (hovered ? 1.02 : 1) : 0.85;

              return (
                <article
                  key={service.id}
                  className="absolute inset-x-0 top-0 mx-auto w-[340px] sm:w-[420px] md:w-[480px] lg:w-[540px]"
                  style={{
                    zIndex: center ? 30 : 10,
                    opacity: center ? 1 : 0.45,
                    transform: `
                      translateX(${x}px)
                      translateY(${y}px)
                      scale(${scale})
                    `,
                    transformOrigin: 'center center',
                    transition: dragging
                      ? 'none'
                      : 'transform 800ms cubic-bezier(0.16,1,0.3,1), opacity 800ms ease',
                    pointerEvents: center ? 'auto' : 'none',
                  }}
                >
                  <div
                    className={`relative h-[560px] overflow-hidden rounded-[28px] border md:h-[630px] ${
                      darkMode ? 'border-white/10 bg-[#111317]' : 'border-black/[0.08] bg-white'
                    } ${
                      hovered && center
                        ? darkMode
                          ? 'shadow-[0_38px_110px_rgba(0,0,0,.55)]'
                          : 'shadow-[0_38px_100px_rgba(15,23,42,.18)]'
                        : darkMode
                          ? 'shadow-[0_24px_70px_rgba(0,0,0,.30)]'
                          : 'shadow-[0_24px_70px_rgba(15,23,42,.10)]'
                    }`}
                    onMouseEnter={() => center && setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                  >
                    {/* Image */}
                    <div
                      className="absolute inset-x-0 bottom-[45%] overflow-hidden transition-[height] duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                      style={{ height: hovered && center ? '68%' : '55%' }}
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                        style={{
                          backgroundImage: `url("${SERVICE_IMAGES[service.id] ?? SERVICE_IMAGES['01']}")`,
                          transform: hovered && center ? 'scale(1.06)' : 'scale(1)',
                        }}
                      />
                      <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-t from-[#111317] via-transparent to-black/10' : 'bg-gradient-to-t from-white via-transparent to-black/5'}`} />
                      <div className={`absolute inset-0 bg-gradient-to-br from-red-600/25 via-transparent to-transparent transition-opacity duration-700 ${hovered && center ? 'opacity-100' : 'opacity-0'}`} />
                    </div>

                    {/* Tag haut */}
                    <div className="absolute left-6 right-6 top-6 z-30 flex items-center justify-between">
                      <span className="border border-white/30 bg-black/30 px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                        {service.tag}
                      </span>
                      <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-white">
                        {service.id}
                      </span>
                    </div>

                    {/* Détails du service */}
                    <div className="absolute inset-x-0 bottom-0 z-40 h-[45%] px-7 pb-7 pt-4 md:px-8 md:pb-8">
                      <div className={`mb-3 h-[2px] bg-red-600 transition-all duration-700 ${hovered && center ? 'w-20' : 'w-10'}`} />

                      {/* Titre Serif */}
                      <h3 className={`font-serif text-2xl font-black leading-[1] md:text-[32px] ${darkMode ? 'text-white' : 'text-slate-950'}`}>
                        {service.title}
                      </h3>

                      {/* Description révisée avec font-sans lisible */}
                      <p className={`mt-2.5 line-clamp-2 font-sans text-xs leading-relaxed md:text-[13px] md:leading-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        {service.desc}
                      </p>

                      {/* Section Livrables avec typographie épurée */}
                      <div className="mt-4">
                        <div className="mb-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-red-600">
                          {lang === 'fr' ? 'Livrables inclus' : 'Included deliverables'}
                        </div>
                        <ul className="space-y-1.5 font-sans text-xs md:text-[13px]">
                          {service.features.slice(0, 3).map((feature) => (
                            <li key={feature} className="flex items-start gap-2.5">
                              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                              <span className={`font-medium ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <span className={`text-[9px] font-bold uppercase tracking-[0.2em] ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                          {moreInfo}
                        </span>

                        <a
                          href="#contact"
                          onPointerDown={(e) => e.stopPropagation()}
                          className={`group flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-500 ${
                            darkMode
                              ? 'border-white/15 text-white hover:border-red-500 hover:bg-red-600'
                              : 'border-black/10 text-slate-950 hover:border-red-600 hover:bg-red-600 hover:text-white'
                          }`}
                          aria-label={`${moreInfo}: ${service.title}`}
                        >
                          <ArrowRight size={16} className="transition-transform duration-500 group-hover:translate-x-1" />
                        </a>
                      </div>
                    </div>

                    <div className={`pointer-events-none absolute inset-0 rounded-[26px] ring-1 ring-inset transition-all duration-700 ${hovered && center ? 'ring-red-600/40' : 'ring-transparent'}`} />
                  </div>
                </article>
              );
            })}
          </div>

          {/* Navigation bas (Boutons flèches fixés) */}
          <div className="relative z-50 mx-auto mt-2 flex max-w-[1500px] items-center justify-between">
            <div className={`flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
              <MousePointer2 size={13} />
              <span className="hidden sm:inline">
                {lang === 'fr' ? 'Glisser ou cliquer' : 'Drag or click'}
              </span>
            </div>

            {/* Indicator dots */}
            <div className="flex items-center gap-2">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    goTo(index);
                  }}
                  aria-label={service.title}
                  className={`h-2 rounded-full transition-all duration-700 ${
                    index === activeIndex
                      ? 'w-10 bg-red-600'
                      : darkMode
                        ? 'w-2 bg-white/20 hover:bg-white/40'
                        : 'w-2 bg-black/15 hover:bg-black/30'
                  }`}
                />
              ))}
            </div>

            {/* Flèches défilantes corrigées */}
            <div className="relative z-50 flex items-center gap-2">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  goTo(activeIndex - 1);
                }}
                aria-label={lang === 'fr' ? 'Service précédent' : 'Previous service'}
                className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border transition-all duration-500 ${
                  darkMode
                    ? 'border-white/10 text-white hover:border-red-500 hover:bg-red-600'
                    : 'border-black/10 text-slate-950 hover:border-red-600 hover:bg-red-600 hover:text-white'
                }`}
              >
                <ChevronLeft size={18} />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  goTo(activeIndex + 1);
                }}
                aria-label={lang === 'fr' ? 'Service suivant' : 'Next service'}
                className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border transition-all duration-500 ${
                  darkMode
                    ? 'border-white/10 text-white hover:border-red-500 hover:bg-red-600'
                    : 'border-black/10 text-slate-950 hover:border-red-600 hover:bg-red-600 hover:text-white'
                }`}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`mx-auto mt-8 flex max-w-[1500px] flex-col gap-4 border-t pt-6 md:flex-row md:items-center md:justify-between ${darkMode ? 'border-white/10' : 'border-black/10'}`}>
          <p className={`max-w-xl text-xs leading-6 md:text-sm ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
            {lang === 'fr'
              ? 'Un accompagnement sur mesure, de la comptabilité à la stratégie.'
              : 'Tailored support, from accounting to strategy.'}
          </p>

          <a href="#contact" className="group inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-red-600">
            {bookCta}
            <ArrowRight size={14} className="transition-transform duration-500 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}