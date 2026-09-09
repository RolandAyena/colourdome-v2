'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Building2, Scale, Calculator, Building, Globe, TrendingUp, 
  Phone, Mail, MapPin, Calendar, CheckCircle2, ArrowRight, 
  Sun, Moon, X, Menu, ShieldCheck, Clock, Users, Award, FileText,
  Briefcase, HeartHandshake, FileCheck, Landmark, Search, Check, Layers, ChevronRight, ArrowUp,
  Smartphone
} from 'lucide-react';

import ServicesCoverflow from './components/ServicesCoverflow';
import WhyChooseUsTimeline from './components/WhyChooseUsTimeline';

// --- DICTIONNAIRE DE TRADUCTIONS COMPLET & CORRIGÉ ---
const translations = {
  fr: {
    pageTitle: "Colour Dome Montréal — Comptabilité & Conseil Juridique",
    topTag: "Cabinet de Services-conseils · Comptabilité & Droit",
    address: "2015 Drummond, Suite 1005 · Montréal, Québec H3G 1W9",
    bookCta: "Prendre rendez-vous",
    heroTitle: "Cabinet de Comptabilité",
    heroTitle2: "& de Conseil Juridique",
    heroSub: "« Un accompagnement sur mesure, une tranquillité d'esprit garantie »",
    heroCard1Title: "Nos Services",
    heroCard1Sub: "Comptabilité, fiscalité, droit des affaires & conseil stratégique",
    heroCard2Title: "Pourquoi nous choisir",
    heroCard2Sub: "Notre valeur ajoutée, nos points forts et nos engagements",
    heroCard3Title: "Le Cabinet",
    heroCard3Sub: "Qui nous sommes, notre équipe et nos valeurs",
    heroCard4Title: "Contact & RDV",
    heroCard4Sub: "Prendre rendez-vous, nous écrire ou nous appeler",
    whyUs: "Pourquoi nous choisir",
    
    // Services Tabs & Content
    s1Badge: "Structure de nos Services",
    s1Title1: "Nos Domaines", s1Title2: "d'Expertise",
    s1Intro: "Un accompagnement complet et rigoureux, adapté à chaque étape de votre parcours professionnel, fiscal et patrimonial.",
    tabEntreprises: "Entreprises & PME",
    tabParticuliers: "Particuliers & Familles",
    tabInternational: "Diaspora & International",
    moreInfo: "En savoir plus",

    // Forces & Défis
    s2Eye: "Analyse Comparée",
    s2Title: "Pourquoi choisir Colour Dome ?",
    forcesTitle: "Nos Points Forts",
    defisTitle: "Défis que nous résolvons",
    f1Title: "Expertise pluridisciplinaire", f1Desc: "Comptabilité, fiscalité et droit réunis sous un même toit.",
    f2Title: "Spécialisation Diaspora", f2Desc: "Maîtrise des enjeux fiscaux transfrontaliers et d'implantation au Canada.",
    f3Title: "17+ ans d'expérience", f3Desc: "Une équipe aguerrie aux réalités des PME et particuliers montréalais.",
    f4Title: "Réponse garantie en 48h", f4Desc: "Chaque dossier traité avec réactivité et transparence.",
    d1Title: "Complexité fiscale croissante", d1Desc: "Naviguer dans les règles TPS/TVQ, IS, et conventions bilatérales.",
    d2Title: "Contrôles fiscaux imprévus", d2Desc: "Préparation, défense et représentation devant les autorités.",
    d3Title: "Structuration d'entreprise", d3Desc: "Choix de la bonne entité juridique pour optimiser et protéger.",
    d4Title: "Transmission patrimoniale", d4Desc: "Planification successorale et optimisation des plus-values.",
    s2Note: "Un premier échange est toujours gratuit et sans engagement. Notre équipe analyse votre situation et vous propose un plan d'action concret sous 48h.",
    
    // Approach Section
    s3Eye: "Méthodologie",
    s3Title: "Notre Approche en 4 Étapes",
    s3Intro: "Une démarche structurée, transparente et orientée résultats — pour que chaque décision soit éclairée.",
    step1Num: "Étape 01", step1Label: "Diagnostic", step1Title: "Écoute & Analyse", step1Desc: "Rencontre initiale gratuite. Audit complet de votre situation financière, fiscale et juridique pour identifier les enjeux prioritaires.",
    step2Num: "Étape 02", step2Label: "Stratégie", step2Title: "Plan d'Action Sur Mesure", step2Desc: "Élaboration d'une feuille de route personnalisée : optimisation fiscale, restructuration juridique ou planification patrimoniale.",
    step3Num: "Étape 03", step3Label: "Exécution", step3Title: "Mise en Œuvre & Suivi", step3Desc: "Exécution rigoureuse du plan avec reporting périodique. Vous restez informé à chaque étape, en toute transparence.",
    step4Num: "Étape 04", step4Label: "Optimisation", step4Title: "Amélioration Continue", step4Desc: "Veille réglementaire permanente. Révisions annuelles et ajustements proactifs pour maximiser votre performance dans la durée.",
    
    // Key stats
    expYears: "Années d'expérience", expSub: "Fondé à Montréal",
    clientsServed: "Clients accompagnés", clientsSub: "Particuliers & Entreprises",
    satisfactionRate: "Taux de satisfaction", satisfactionSub: "Mesuré annuellement",
    responseTime: "Délai de réponse", responseSub: "Garanti sur chaque dossier",
    
    // About Section
    aboutEye: "Dispositif & Coordination",
    aboutTitle: "Qui Nous Sommes",
    aboutTagline: "« Un cabinet dédié à votre succès, ancré dans la rigueur et la proximité. »",
    aboutBody: "Colour Dome Montréal est un cabinet pluridisciplinaire spécialisé dans les services comptables, fiscaux et juridiques. Depuis plus de 17 ans, nous accompagnons entrepreneurs, particuliers et membres de la diaspora dans leurs défis financiers et juridiques au Canada.",
    actor1Title: "Entreprises & PME", actor1Desc: "Structuration, comptabilité & fiscalité des sociétés",
    actor2Title: "Particuliers & Familles", actor2Desc: "Déclarations, patrimoine & planification fiscale",
    actor3Title: "Diaspora & International", actor3Desc: "Fiscalité transfrontalière & implantation au Canada",
    actor4Title: "Investisseurs", actor4Desc: "Immobilier, plus-values & optimisation patrimoniale",
    
    // Contact Section
    contactEye: "Engagement Collectif",
    contactTitle: "Parlons de votre situation",
    contactText: "Un premier échange est toujours gratuit et sans engagement. Notre équipe vous répond sous 48h.",
    formTitle: "Prendre rendez-vous",
    firstName: "Prénom *", lastName: "Nom *", email: "Courriel *", phone: "Téléphone",
    serviceSelect: "Service souhaité *", message: "Message *", submitBtn: "Envoyer ma demande",
    selectOptionDefault: "-- Choisissez un service --",
    optAccounting: "Comptabilité & Tenue de livres",
    optTax: "Fiscalité des Sociétés & Particuliers",
    optLegal: "Droit des Affaires & Intégration",
    optRealEstate: "Fiscalité Immobilière & Transfrontalière",
    optOther: "Autre demande",
    successMsg: "Votre message a bien été envoyé. Nous vous répondrons sous 48h.",
    errorMsg: "Votre message n’a pas pu être envoyé. Veuillez réessayer.",
    serviceUnavailableMsg: "Le service de messagerie est momentanément indisponible.",
    sendingMsg: "Envoi en cours…",

    city: "Montréal",
    addressCity: "2015 Drummond, Suite 1005 Montréal, Québec H3G 1W9",

    // Footer
    footerDesc: "Cabinet spécialisé dans les services comptables, fiscaux et juridiques. Établi à Montréal, Canada depuis 2009.",
    footerRights: "© 2026 Colour Dome Montréal · Tous droits réservés. Agence web 1020web"
  },
  en: {
    pageTitle: "Colour Dome Montreal — Accounting & Legal Consulting",
    topTag: "Consulting Firm · Accounting & Law",
    address: "2015 Drummond, Suite 1005 · Montreal, Quebec H3G 1W9",
    bookCta: "Book an Appointment",
    heroTitle: "Accounting Firm",
    heroTitle2: "& Legal Advisory",
    heroSub: "« Tailored support, guaranteed peace of mind »",
    heroCard1Title: "Our Services",
    heroCard1Sub: "Accounting, taxation, business law & strategic advisory",
    heroCard2Title: "Why Choose Us",
    heroCard2Sub: "Our value proposition, key strengths and commitments",
    heroCard3Title: "The Firm",
    heroCard3Sub: "Who we are, our team and our values",
    heroCard4Title: "Contact & Appointments",
    heroCard4Sub: "Book an appointment, write or call us",
    whyUs: "Why Choose Us",
    
    // Services Tabs & Content
    s1Badge: "Our Service Structure",
    s1Title1: "Our Areas of", s1Title2: "Expertise",
    s1Intro: "Comprehensive and rigorous support, tailored to every stage of your professional, tax, and estate journey.",
    tabEntreprises: "Businesses & SMEs",
    tabParticuliers: "Individuals & Families",
    tabInternational: "Diaspora & International",
    moreInfo: "Learn more",

    // Forces & Défis
    s2Eye: "Comparative Analysis",
    s2Title: "Why Choose Colour Dome?",
    forcesTitle: "Our Strengths",
    defisTitle: "Challenges We Solve",
    f1Title: "Multidisciplinary expertise", f1Desc: "Accounting, taxation and law all under one roof.",
    f2Title: "Diaspora Specialization", f2Desc: "Deep expertise in cross-border tax issues and Canadian business setup.",
    f3Title: "17+ years of experience", f3Desc: "A seasoned team well-versed in the realities of Montreal SMEs and individuals.",
    f4Title: "Guaranteed 48h response", f4Desc: "Every file handled with responsiveness and full transparency.",
    d1Title: "Growing tax complexity", d1Desc: "Navigating GST/QST, corporate tax, and bilateral treaty rules.",
    d2Title: "Unexpected tax audits", d2Desc: "Preparation, defense and representation before tax authorities.",
    d3Title: "Business structuring", d3Desc: "Choosing the right legal entity to optimize and protect your interests.",
    d4Title: "Estate and succession planning", d4Desc: "Succession planning and capital gains optimization.",
    s2Note: "An initial consultation is always free and non-binding. Our team analyzes your situation and proposes a concrete action plan within 48 hours.",
    
    // Approach Section
    s3Eye: "Methodology",
    s3Title: "Our 4-Step Approach",
    s3Intro: "A structured, transparent, results-driven process — so every decision is well-informed.",
    step1Num: "Step 01", step1Label: "Diagnosis", step1Title: "Listen & Analyze", step1Desc: "Free initial meeting. Complete audit of your financial, tax and legal situation to identify priority issues.",
    step2Num: "Step 02", step2Label: "Strategy", step2Title: "Tailored Action Plan", step2Desc: "Development of a personalized roadmap: tax optimization, legal restructuring or estate planning.",
    step3Num: "Step 03", step3Label: "Execution", step3Title: "Implementation & Monitoring", step3Desc: "Rigorous execution with periodic reporting. You stay informed at every step, with full transparency.",
    step4Num: "Step 04", step4Label: "Optimization", step4Title: "Continuous Improvement", step4Desc: "Ongoing regulatory monitoring. Annual reviews and proactive adjustments to maximize long-term performance.",
    
    // Key stats
    expYears: "Years of experience", expSub: "Founded in Montreal",
    clientsServed: "Clients served", clientsSub: "Individuals & Businesses",
    satisfactionRate: "Satisfaction rate", satisfactionSub: "Measured annually",
    responseTime: "Response time", responseSub: "Guaranteed on every file",
    
    // About Section
    aboutEye: "Structure & Coordination",
    aboutTitle: "Who We Are",
    aboutTagline: "« A firm dedicated to your success, rooted in rigor and proximity. »",
    aboutBody: "Colour Dome Montreal is a multidisciplinary firm specializing in accounting, tax, and legal services. For over 17 years, we have supported entrepreneurs, individuals, and members of the diaspora with their financial and legal challenges in Canada.",
    actor1Title: "Businesses & SMEs", actor1Desc: "Structuring, accounting & corporate taxation",
    actor2Title: "Individuals & Families", actor2Desc: "Tax returns, estate & tax planning",
    actor3Title: "Diaspora & International", actor3Desc: "Cross-border taxation & Canadian business setup",
    actor4Title: "Investors", actor4Desc: "Real estate, capital gains & wealth optimization",
    
    // Contact Section
    contactEye: "Collective Commitment",
    contactTitle: "Let's Talk About Your Situation",
    contactText: "An initial consultation is always free and non-binding. Our team responds within 48 hours.",
    formTitle: "Book an Appointment",
    firstName: "First Name *", lastName: "Last Name *", email: "Email *", phone: "Phone",
    serviceSelect: "Select a service *", message: "Message *", submitBtn: "Send my request",
    selectOptionDefault: "-- Select a service --",
    optAccounting: "Accounting & Bookkeeping",
    optTax: "Corporate & Personal Taxation",
    optLegal: "Business Law & Advisory",
    optRealEstate: "Real Estate & Cross-Border Tax",
    optOther: "Other Inquiry",
    successMsg: "Your message has been sent successfully. We will respond within 48h.",
    errorMsg: "Your message could not be sent. Please try again.",
    serviceUnavailableMsg: "The messaging service is temporarily unavailable.",
    sendingMsg: "Sending…",

    city: "Montreal",
    addressCity: "2015 Drummond, Suite 1005 Montreal, Québec H3G 1W9",
    
    // Footer
    footerDesc: "Firm specialized in accounting, tax, and legal services. Established in Montreal, Canada for over 17 years.",
    footerRights: "© 2026 Colour Dome Montreal · All rights reserved. Web agency 1020web"
  }
};

export default function HomePage() {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const [isSending, setIsSending] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const revealElements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -12% 0px',
      threshold: 0.12,
    });

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormError('');
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);
    setFormError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, lang }), // <--- Inclusion de la langue actuelle
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        if (response.status === 503) {
          throw new Error(t.serviceUnavailableMsg);
        }

        // Traitement du message d'erreur si result.error est un objet
        let extractedError = result.error;
        if (typeof result.error === 'object' && result.error !== null) {
          extractedError = result.error.message || JSON.stringify(result.error);
        }

        throw new Error(extractedError || t.errorMsg);
      }

      setFormSubmitted(true);
      setFormData({ firstName: '', lastName: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => setFormSubmitted(false), 5000);
    } catch (error) {
      setFormError(error instanceof Error ? error.message : t.errorMsg);
    } finally {
      setIsSending(false);
    }
  };

  // Dynamic Structured Services Data
  const servicesData = [
    {
      id: '01',
      icon: Calculator,
      title: lang === 'fr' ? "Comptabilité & Tenue de Livres" : "Accounting & Bookkeeping",
      tag: lang === 'fr' ? "Comptabilité" : "Accounting",
      badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
      desc: lang === 'fr'
        ? "Bilan annuel, états de résultat, cycle comptable complet et suivi de trésorerie."
        : "Full handling of your accounting cycle, including financial statements, balance sheets, and cash flow tracking.",
      features: lang === 'fr'
        ? ["Bilan & Comptes de résultats", "Tenue mensuelle/trimestrielle", "Déclarations TPS/TVQ"]
        : ["Monthly & quarterly bookkeeping", "Certified financial statements & balance sheets", "GST/QST sales tax returns"]
    },
    {
      id: '02',
      icon: Landmark,
      title: lang === 'fr' ? "Fiscalité des Particuliers & Sociétés" : "Personal & Corporate Taxation",
      tag: lang === 'fr' ? "Fiscalité" : "Taxation",
      badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
      desc: lang === 'fr'
        ? "Déclarations de revenus, optimisation fiscale, crédits d'impôt et restructuration."
        : "Rigorous tax preparation and optimization for businesses, individuals, and families.",
      features: lang === 'fr'
        ? ["Déclarations T1/TP1 & T2/CO-17", "Optimisation de la rémunération", "Gestion des acomptes provisionnels"]
        : ["GST/QST, T2, CO-17, T1 & TP1 returns", "Tax planning and deduction optimization", "Installments and tax risk management"]
    },
    {
      id: '03',
      icon: Scale,
      title: lang === 'fr' ? "Droit des Affaires & Conseil Juridique" : "Business Law & Legal Advisory",
      tag: lang === 'fr' ? "Droit & Juridique" : "Legal",
      badgeColor: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
      desc: lang === 'fr'
        ? "Incorporation d'entreprises, rédaction de contrats, conventions d'actionnaires et litiges."
        : "Business incorporation, commercial contract drafting and review, shareholder agreements, and corporate governance.",
      features: lang === 'fr'
        ? ["Incorporation provinciale & fédérale", "Livre de société & mises à jour", "Contrats commerciaux & baux"]
        : ["Federal & provincial incorporation", "Minute book maintenance & updates", "Commercial contracts & leases"]
    },
    {
      id: '04',
      icon: Building,
      title: lang === 'fr' ? "Fiscalité Immobilière & Patrimoine" : "Real Estate Taxation & Estate",
      tag: lang === 'fr' ? "Immobilier" : "Real Estate",
      badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
      desc: lang === 'fr'
        ? "Gestion des gains en capital, transmission du patrimoine et structures d'investissement."
        : "Tax management for real estate investments, capital gains, corporate structuring, and estate planning.",
      features: lang === 'fr'
        ? ["Planification successorale", "Optimisation des gains en capital", "Structures de détention immobilière"]
        : ["Estate planning & family wealth", "Capital gains optimization", "Real estate holding structures"]
    },
    {
      id: '05',
      icon: Globe,
      title: lang === 'fr' ? "International & Diaspora" : "International & Diaspora",
      tag: lang === 'fr' ? "Stratégie & Conseil" : "Strategy & Advisory",
      badgeColor: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
      desc: lang === 'fr'
        ? "Fiscalité transfrontalière, règles de résidence et accompagnement à l'implantation au Canada."
        : "Dedicated support for non-residents, expatriates, and diaspora members: tax treaties, asset transfers, and Canadian setup.",
      features: lang === 'fr'
        ? ["Analyse des conventions fiscales", "Transfert d'actifs internationaux", "Statut de résidence fiscale"]
        : ["Tax treaty applications", "Foreign property reporting (T1135)", "Canadian business setup & tax status"]
    },
    {
      id: '06',
      icon: Briefcase,
      title: lang === 'fr' ? "Conseil & Accompagnement Stratégique" : "Strategic Advisory & Support",
      tag: lang === 'fr' ? "Stratégie & Conseil" : "Strategy & Advisory",
      badgeColor: "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20",
      desc: lang === 'fr'
        ? "Diagnostic financier, restructuration d'entreprise, audits et levées de fonds."
        : "Financial health diagnostics, business restructuring, preparation for tax audits, and management dashboards.",
      features: lang === 'fr'
        ? ["Diagnostic financier 360°", "Défense en cas de contrôle fiscal", "Tableaux de bord de gestion"]
        : ["360° Financial diagnostics", "Tax audit representation (CRA/Revenu Québec)", "Management dashboards & forecasting"]
    }
  ];

  return (
    <div className={`${darkMode ? 'dark' : ''} min-h-screen font-sans transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
      {/* --- TOP BAR --- */}
      <div className={`border-b text-xs py-2 px-4 md:px-12 transition-colors ${darkMode ? 'bg-slate-900 border-slate-800 text-slate-400' : 'bg-white border-slate-200 text-slate-600'}`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-center md:text-left">
            <span className="italic font-serif font-medium text-red-600 dark:text-red-400">{t.topTag}</span>
            <span className="hidden md:inline text-slate-300 dark:text-slate-700">|</span>
            <span className="hidden md:inline">{t.address}</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="tel:5147318811" className="flex items-center gap-1 hover:text-red-600 transition-colors">
              <Smartphone size={13} /> 514-731-8811
            </a>
            <a href="mailto:info@colourdome.ca" className="flex items-center gap-1 hover:text-red-600 transition-colors">
              <Mail size={13} /> info@colourdome.ca
            </a>
            
            {/* Lang Switcher */}
            <div className="flex items-center gap-2 ml-2 pl-2 border-l border-slate-200 dark:border-slate-800">
              <button 
                onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
                className="px-2 py-0.5 rounded font-bold text-xs bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 hover:bg-red-200 transition-all"
              >
                {lang.toUpperCase()}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- COLOR BAND ACCENT --- */}
      <div className="h-1 w-full grid grid-cols-4">
        <div className="bg-emerald-500"></div>
        <div className="bg-amber-400"></div>
        <div className="bg-red-600"></div>
        <div className="bg-blue-600"></div>
      </div>

      {/* --- NAVIGATION --- */}
      <nav className={`sticky top-0 z-40 transition-all duration-300 border-b ${scrolled ? (darkMode ? 'bg-slate-900/90 border-slate-800 backdrop-blur-md shadow-lg' : 'bg-white/90 border-slate-200 backdrop-blur-md shadow-md') : (darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200')}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-12 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div>
              <div className="font-bold text-lg leading-none tracking-tight flex items-center gap-1">
                <span>Colour</span>
                <span className="text-red-600">Dome</span>
              </div>
              <p className="text-xs italic font-serif text-slate-500 dark:text-slate-400 mt-1">{t.city}</p>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-red-600 transition-colors">{t.heroCard3Title}</a>
            <a href="#services" className="hover:text-red-600 transition-colors">{t.heroCard1Title}</a>
            <a href="#why-us" className="hover:text-red-600 transition-colors">{t.whyUs}</a>
            <a 
              href="#contact" 
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Calendar size={16} />
              {t.bookCta}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className={`md:hidden border-b px-6 py-4 flex flex-col gap-4 font-medium ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 dark:border-slate-800">{t.heroCard3Title}</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 dark:border-slate-800">{t.heroCard1Title}</a>
            <a href="#why-us" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 dark:border-slate-800">{t.whyUs}</a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="bg-red-600 text-white font-semibold py-3 rounded-lg text-center flex justify-center items-center gap-2 mt-2"
            >
              <Calendar size={18} />
              {t.bookCta}
            </a>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-b from-slate-100 via-slate-50 to-white">
        
        {/* Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/colour-dome.png"
            alt="Colour Dome Montréal"
            fill
            className="object-cover object-center opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-white/40"></div>
        </div>

        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[260px] font-bold opacity-[0.03] pointer-events-none select-none font-serif text-slate-900">
          CDM
        </div>
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-red-600/10 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
          
          {/* Main Hero Card */}
          <div data-reveal className="reveal reveal-rise max-w-4xl mx-auto rounded-2xl p-8 md:p-14 text-center border shadow-2xl relative backdrop-blur-md bg-white/85 border-white/90">

            <div className="flex justify-center mb-6">
              <Image
                src="/image.png"
                alt="Colour Dome Montréal"
                width={220}
                height={70}
                className="theme-logo object-contain h-16 md:h-20 w-auto"
                priority
              />
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-serif mb-6 leading-tight text-slate-900">
              {t.heroTitle} <br className="hidden md:inline" />
              <span className="text-red-600">{t.heroTitle2}</span>
            </h1>
            <p className="text-lg md:text-xl italic font-serif text-slate-600 mb-8 max-w-2xl mx-auto">
              {t.heroSub}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="#contact" className="bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-3.5 rounded-xl shadow-lg hover:shadow-red-600/20 transition-all flex items-center gap-2">
                {t.bookCta}
                <ArrowRight size={18} />
              </a>
              <a href="#services" className="font-medium px-8 py-3.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-800 transition-all">
                {t.heroCard1Title}
              </a>
            </div>
          </div>

          {/* 4 Cards Grid - Key Entrance Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 items-stretch">
            
            {/* Card 1 */}
            <a 
              href="#services"
              data-reveal
              className="reveal reveal-rise reveal-delay-1 h-full p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group relative overflow-hidden flex flex-col bg-white/90 border-slate-200 hover:border-emerald-500/50"
            >
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Calculator size={24} />
              </div>
              <h3 className="font-bold text-lg font-serif mb-2 flex items-center justify-between text-slate-900">
                {t.heroCard1Title}
                <ArrowRight size={16} className="text-slate-400 group-hover:text-emerald-500 transition-colors transform group-hover:translate-x-1" />
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                {t.heroCard1Sub}
              </p>
              <div className="h-1 w-full bg-emerald-500 absolute bottom-0 left-0"></div>
            </a>

            {/* Card 2 */}
            <a 
              href="#why-us"
              data-reveal
              className="reveal reveal-rise reveal-delay-2 h-full p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group relative overflow-hidden flex flex-col bg-white/90 border-slate-200 hover:border-red-500/50"
            >
              <div className="w-12 h-12 rounded-lg bg-red-500/10 text-red-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp size={24} />
              </div>
              <h3 className="font-bold text-lg font-serif mb-2 flex items-center justify-between text-slate-900">
                {t.heroCard2Title}
                <ArrowRight size={16} className="text-slate-400 group-hover:text-red-500 transition-colors transform group-hover:translate-x-1" />
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                {t.heroCard2Sub}
              </p>
              <div className="h-1 w-full bg-red-600 absolute bottom-0 left-0"></div>
            </a>

            {/* Card 3 */}
            <a 
              href="#about"
              data-reveal
              className="reveal reveal-rise reveal-delay-3 h-full p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group relative overflow-hidden flex flex-col bg-white/90 border-slate-200 hover:border-blue-500/50"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Building2 size={24} />
              </div>
              <h3 className="font-bold text-lg font-serif mb-2 flex items-center justify-between text-slate-900">
                {t.heroCard3Title}
                <ArrowRight size={16} className="text-slate-400 group-hover:text-blue-500 transition-colors transform group-hover:translate-x-1" />
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                {t.heroCard3Sub}
              </p>
              <div className="h-1 w-full bg-blue-600 absolute bottom-0 left-0"></div>
            </a>

            {/* Card 4 */}
            <a 
              href="#contact"
              data-reveal
              className="reveal reveal-rise reveal-delay-4 h-full p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group relative overflow-hidden flex flex-col bg-white/90 border-slate-200 hover:border-teal-500/50"
            >
              <div className="w-12 h-12 rounded-lg bg-teal-500/10 text-teal-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Calendar size={24} />
              </div>
              <h3 className="font-bold text-lg font-serif mb-2 flex items-center justify-between text-slate-900">
                {t.heroCard4Title}
                <ArrowRight size={16} className="text-slate-400 group-hover:text-teal-500 transition-colors transform group-hover:translate-x-1" />
              </h3>
              <p className="text-base text-slate-600 leading-relaxed">
                {t.heroCard4Sub}
              </p>
              <div className="h-1 w-full bg-teal-600 absolute bottom-0 left-0"></div>
            </a>

          </div>
        </div>
      </section>

      {/* --- SECTION QUI NOUS SOMMES --- */}
      <section id="about" className={`py-20 border-y ${darkMode ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Column 1 */}
            <div data-reveal className="reveal reveal-slide-left">
              <span className="text-sm font-bold uppercase tracking-widest text-red-600 dark:text-red-400 mb-2 block font-serif">
                {t.aboutEye}
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold font-serif mb-6">
                {t.aboutTitle}
              </h2>
              
              <p className="text-xl italic font-serif text-slate-800 dark:text-slate-200 border-l-4 border-red-600 pl-4 mb-6 leading-relaxed">
                {t.aboutTagline}
              </p>

              <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
                {t.aboutBody}
              </p>

              {/* 4 Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
                
                <div data-reveal className={`reveal reveal-fade reveal-delay-1 h-full p-5 rounded-xl border flex items-start gap-4 transition-all hover:shadow-md ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <Building2 className="text-emerald-600 shrink-0 mt-0.5" size={24} />
                  <div>
                    <h4 className="font-bold text-base mb-1 text-slate-900 dark:text-white">{t.actor1Title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-normal">{t.actor1Desc}</p>
                  </div>
                </div>

                <div data-reveal className={`reveal reveal-fade reveal-delay-2 h-full p-5 rounded-xl border flex items-start gap-4 transition-all hover:shadow-md ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <Users className="text-amber-600 shrink-0 mt-0.5" size={24} />
                  <div>
                    <h4 className="font-bold text-base mb-1 text-slate-900 dark:text-white">{t.actor2Title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-normal">{t.actor2Desc}</p>
                  </div>
                </div>

                <div data-reveal className={`reveal reveal-fade reveal-delay-3 h-full p-5 rounded-xl border flex items-start gap-4 transition-all hover:shadow-md ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <Globe className="text-red-600 shrink-0 mt-0.5" size={24} />
                  <div>
                    <h4 className="font-bold text-base mb-1 text-slate-900 dark:text-white">{t.actor3Title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-normal">{t.actor3Desc}</p>
                  </div>
                </div>

                <div data-reveal className={`reveal reveal-fade reveal-delay-4 h-full p-5 rounded-xl border flex items-start gap-4 transition-all hover:shadow-md ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
                  <Briefcase className="text-blue-600 shrink-0 mt-0.5" size={24} />
                  <div>
                    <h4 className="font-bold text-base mb-1 text-slate-900 dark:text-white">{t.actor4Title}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-normal">{t.actor4Desc}</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Column 2 */}
            <div data-reveal className="reveal reveal-slide-right relative">
              <div className="relative h-[480px] lg:h-[560px] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 group">
                <Image
                  src="/qui-sommes-nous.jpg"
                  alt="Colour Dome Montréal"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/50 dark:border-slate-800/50 shadow-lg flex items-center justify-between">
                  <div>
                    <p className="font-serif font-bold text-xl text-slate-900 dark:text-white">Colour Dome {t.city}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {lang === 'fr' ? "Services comptables, fiscaux & juridiques" : "Accounting, Tax & Legal Services"}
                    </p>
                  </div>
                  <span className="text-2xl font-black text-red-600 dark:text-red-500 font-serif">17+ {lang === 'fr' ? 'ans' : 'yrs'}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* --- SERVICES --- */}
      <ServicesCoverflow
        services={servicesData}
        moreInfo={t.moreInfo}
        bookCta={t.bookCta}
        lang={lang}
        darkMode={darkMode}
      />

      {/* --- SECTION WHY CHOOSE US --- */}
      <section id="why-us">
        <WhyChooseUsTimeline
          lang={lang}
          darkMode={darkMode}
          bookCta={t.bookCta}
        />
      </section>

      {/* --- SECTION CONTACT & FORM --- */}
      <section id="contact" className={`py-20 md:py-28 ${darkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Info Contact */}
            <div data-reveal className="reveal reveal-slide-left space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-400 mb-2 block font-serif">
                  {t.contactEye}
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold font-serif mb-4">
                  {t.contactTitle}
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg">
                  {t.contactText}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-red-600/10 text-red-600 dark:text-red-400 shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-base mb-1">{lang === 'fr' ? "Adresse du cabinet" : "Office Address"}</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{t.addressCity}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-red-600/10 text-red-600 dark:text-red-400 shrink-0">
                    <Smartphone size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-base mb-1">{lang === 'fr' ? "Téléphone direct" : "Direct Phone"}</h4>
                    <a href="tel:5147318811" className="text-sm text-slate-600 dark:text-slate-400 hover:text-red-600 transition-colors">
                      514-731-8811
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-red-600/10 text-red-600 dark:text-red-400 shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-base mb-1">Fax</h4>
                    <a href="tel:5147310285" className="text-sm text-slate-600 dark:text-slate-400 hover:text-red-600 transition-colors">
                      514-731-0285
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-red-600/10 text-red-600 dark:text-red-400 shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 className="font-bold text-base mb-1">{lang === 'fr' ? "Courriel" : "Email"}</h4>
                    <a href="mailto:info@colourdome.ca" className="text-sm text-slate-600 dark:text-slate-400 hover:text-red-600 transition-colors">
                      info@colourdome.ca
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div data-reveal className={`reveal reveal-slide-right p-8 md:p-10 rounded-2xl border shadow-xl ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <h3 className="text-2xl font-bold font-serif mb-6">{t.formTitle}</h3>

              {formSubmitted ? (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm">
                  {t.successMsg}
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {formError && (
                    <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs">
                      {formError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">{t.firstName}</label>
                      <input 
                        type="text" 
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleFormChange}
                        className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-red-600 ${darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">{t.lastName}</label>
                      <input 
                        type="text" 
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleFormChange}
                        className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-red-600 ${darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">{t.email}</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleFormChange}
                        className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-red-600 ${darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">{t.phone}</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-red-600 ${darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">{t.serviceSelect}</label>
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleFormChange}
                      className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-red-600 ${darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`}
                    >
                      <option value="">{t.selectOptionDefault}</option>
                      <option value="Comptabilité">{t.optAccounting}</option>
                      <option value="Fiscalité">{t.optTax}</option>
                      <option value="Juridique">{t.optLegal}</option>
                      <option value="International">{t.optRealEstate}</option>
                      <option value="Autre">{t.optOther}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">{t.message}</label>
                    <textarea 
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleFormChange}
                      className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-red-600 ${darkMode ? 'bg-slate-800 border-slate-700 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-all shadow-lg hover:shadow-red-600/20 disabled:opacity-50"
                  >
                    {isSending ? t.sendingMsg : t.submitBtn}
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className={`py-12 border-t text-sm ${darkMode ? 'bg-slate-950 border-slate-800 text-slate-400' : 'bg-slate-900 text-slate-400 border-slate-800'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Bloc Logo + Marque + Description */}
          <div className="flex items-center gap-6">
            <Image
              src="/logo.png"
              alt="Logo Colour Dome Montréal"
              width={150}
              height={50}
              
              priority
            />

            <div className="flex flex-col space-y-1">
              <div className="font-bold text-xl text-white tracking-wide flex items-center gap-1.5">
                <span>Colour</span>
                <span className="text-red-600">Dome</span>
                <span className="text-sm font-normal text-slate-400 ml-1">{t.city}</span>
              </div>
              <p className="text-xs md:text-sm text-slate-400 max-w-md leading-relaxed">
                {t.footerDesc}
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-xs text-center md:text-right shrink-0">
            <p>{t.footerRights}</p>
          </div>

        </div>
      </footer>

      {/* --- SCROLL TO TOP BUTTON --- */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label={lang === 'fr' ? "Remonter en haut de la page" : "Scroll to top"}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-red-600 text-white shadow-xl hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all transform hover:scale-110"
        >
          <ArrowUp size={20} />
        </button>
      )}

    </div>
  );
}