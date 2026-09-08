'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Building2, Scale, Calculator, Building, Globe, TrendingUp, 
  Phone, Mail, MapPin, Calendar, CheckCircle2, ArrowRight, 
  Sun, Moon, X, Menu, ShieldCheck, Clock, Users, Award, FileText,
  Briefcase, HeartHandshake, FileCheck, Landmark, Search, Check, Sparkles, ArrowUpRight
} from 'lucide-react';

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
    heroCard2Title: "Notre Approche",
    heroCard2Sub: "Méthodologie en 4 étapes pour un accompagnement sur mesure",
    heroCard3Title: "Le Cabinet",
    heroCard3Sub: "Qui nous sommes, notre équipe et nos valeurs",
    heroCard4Title: "Contact & RDV",
    heroCard4Sub: "Prendre rendez-vous, nous écrire ou nous appeler",
    
    // Engagements
    engagement1Title: "Réponse garantie en 48h", engagement1Sub: "Réactivité sur chaque dossier",
    engagement2Title: "Confidentialité totale", engagement2Sub: "Données & échanges sécurisés",
    engagement3Title: "Expertise bilingue", engagement3Sub: "Service complet FR & EN",
    engagement4Title: "Transparence tarifaire", engagement4Sub: "Devis clair sans frais cachés",

    // Services
    s1Badge: "Domaines d'Intervention",
    s1Title1: "Nos", s1Title2: "Expertises Clés",
    s1Intro: "Une prise en charge globale conçue pour sécuriser vos opérations et maximiser vos performances financières et juridiques.",
    
    // Categories
    catAll: "Tous les services",
    catCompta: "Comptabilité",
    catFisc: "Fiscalité",
    catJuri: "Droit & Juridique",
    catStrat: "Stratégie & Conseil",

    // Services List
    svc1Title: "Comptabilité & Tenue de Livres", 
    svc1Desc: "Bilan annuel, états de résultat, cycle comptable complet et suivi de trésorerie.",
    svc1Deliverables: ["Bilan & Comptes de résultats", "Tenue mensuelle/trimestrielle", "Déclarations TPS/TVQ"],
    
    svc2Title: "Fiscalité des Particuliers & Sociétés", 
    svc2Desc: "Déclarations de revenus, optimisation fiscale, crédits d'impôt et restructuration.",
    svc2Deliverables: ["Déclarations T1/TP1 & T2/CO-17", "Optimisation de la rémunération", "Gestion des acomptes provisionnels"],

    svc3Title: "Droit des Affaires & Conseil Juridique", 
    svc3Desc: "Incorporation d'entreprises, rédaction de contrats, conventions d'actionnaires et litiges.",
    svc3Deliverables: ["Incorporation provinciale & fédérale", "Livre de société & mises à jour", "Contrats commerciaux & baux"],

    svc4Title: "Fiscalité Immobilière & Patrimoine", 
    svc4Desc: "Gestion des gains en capital, transmission du patrimoine et structures d'investissement.",
    svc4Deliverables: ["Planification successorale", "Optimisation des gains en capital", "Structures de détention immobilière"],

    svc5Title: "International & Diaspora", 
    svc5Desc: "Fiscalité transfrontalière, règles de résidence et accompagnement à l'implantation au Canada.",
    svc5Deliverables: ["Analyse des conventions fiscales", "Transfert d'actifs internationaux", "Statut de résidence fiscale"],

    svc6Title: "Conseil & Accompagnement Stratégique", 
    svc6Desc: "Diagnostic financier, restructuration d'entreprise, audits et levées de fonds.",
    svc6Deliverables: ["Diagnostic financier 360°", "Défense en cas de contrôle fiscal", "Tableaux de bord de gestion"],

    quote: "« Penser et construire ensemble votre avenir financier et juridique, en toute sérénité. »",

    // Approach Section
    s3Eye: "Méthodologie",
    s3Title: "Notre Approche en 4 Étapes",
    s3Intro: "Un parcours structuré et transparent pour transformer la complexité comptable et juridique en levier de croissance.",
    
    step1Num: "01", step1Label: "Analyse", step1Title: "Diagnostic & Audit Initial", 
    step1Desc: "Évaluation complète de votre situation actuelle, analyse des risques fiscaux/juridiques et clarification de vos objectifs prioritaires.",
    step1Deliverables: ["Évaluation des risques", "Bilan comptable révisé", "Rapport de diagnostic gratuit"],

    step2Num: "02", step2Label: "Planification", step2Title: "Feuille de Route Sur-Mesure", 
    step2Desc: "Élaboration d'un plan d'action personnalisé intégrant les arbitrages fiscaux, le calendrier réglementaire et les structures juridiques adaptées.",
    step2Deliverables: ["Plan d'optimisation fiscale", "Structure juridique cible", "Devis & calendrier détaillé"],

    step3Num: "03", step3Label: "Exécution", step3Title: "Déploiement & Suivi Actif", 
    step3Desc: "Mise en œuvre rigoureuse des procédures : tenue des livres, déclarations, rédaction des actes et accompagnement auprès des autorités.",
    step3Deliverables: ["Dépôt des déclarations", "Production des états financiers", "Compte-rendu de gestion mensuel"],

    step4Num: "04", step4Label: "Pérennisation", step4Title: "Optimisation & Veille Continue", 
    step4Desc: "Suivi annuel proactif, ajustements stratégiques selon l'évolution des lois et anticipation des opportunités financières.",
    step4Deliverables: ["Revue annuelle de performance", "Mise à jour réglementaire", "Planification de la paie/dividendes"],

    // General
    contactTitle: "Parlons de votre situation",
    contactText: "Un premier échange est toujours gratuit et sans engagement. Notre équipe vous répond sous 48h.",
    formTitle: "Prendre rendez-vous",
    firstName: "Prénom *", lastName: "Nom *", email: "Courriel *", phone: "Téléphone",
    serviceSelect: "Service souhaité *", message: "Message *", submitBtn: "Envoyer ma demande",
    successMsg: "Votre message a bien été envoyé. Nous vous répondrons sous 48h.",
    errorMsg: "Votre message n’a pas pu être envoyé. Veuillez réessayer.",
    sendingMsg: "Envoi en cours…",
    footerDesc: "Cabinet spécialisé dans les services comptables, fiscaux et juridiques. Établi à Montréal, Canada depuis plus de 15 ans.",
    footerRights: "© 2026 Colour Dome Montréal · Tous droits réservés"
  },
  en: {
    pageTitle: "Colour Dome Montréal — Accounting & Legal Consulting",
    topTag: "Consulting Firm · Accounting & Law",
    address: "2015 Drummond, Suite 1005 · Montréal, Québec H3G 1W9",
    bookCta: "Book an Appointment",
    heroTitle: "Accounting Firm",
    heroTitle2: "& Legal Advisory",
    heroSub: "« Tailored support, guaranteed peace of mind »",
    heroCard1Title: "Our Services",
    heroCard1Sub: "Accounting, taxation, business law & strategic advisory",
    heroCard2Title: "Our Approach",
    heroCard2Sub: "4-step methodology for tailored support",
    heroCard3Title: "The Firm",
    heroCard3Sub: "Who we are, our team and our values",
    heroCard4Title: "Contact & Appt.",
    heroCard4Sub: "Book an appointment, write or call us",

    // Engagements
    engagement1Title: "Guaranteed 48h response", engagement1Sub: "Responsiveness on every file",
    engagement2Title: "Total confidentiality", engagement2Sub: "Secured data & exchanges",
    engagement3Title: "Bilingual expertise", engagement3Sub: "Full FR & EN service",
    engagement4Title: "Transparent pricing", engagement4Sub: "Clear quote with no hidden fees",

    // Services
    s1Badge: "Areas of Expertise",
    s1Title1: "Our", s1Title2: "Core Services",
    s1Intro: "Comprehensive management designed to secure your operations and maximize your financial and legal performance.",
    
    // Categories
    catAll: "All Services",
    catCompta: "Accounting",
    catFisc: "Taxation",
    catJuri: "Corporate Law",
    catStrat: "Strategy & Advisory",

    // Services List
    svc1Title: "Accounting & Bookkeeping", 
    svc1Desc: "Annual balance sheet, income statements, full accounting cycle, and cash flow management.",
    svc1Deliverables: ["Balance sheet & Income statements", "Monthly/quarterly bookkeeping", "GST/QST tax filings"],
    
    svc2Title: "Personal & Corporate Taxation", 
    svc2Desc: "Tax returns, tax optimization, tax credits, and corporate restructuring.",
    svc2Deliverables: ["T1/TP1 & T2/CO-17 Tax returns", "Compensation optimization", "Instalment tax payment management"],

    svc3Title: "Business Law & Legal Advisory", 
    svc3Desc: "Business incorporation, contract drafting, shareholders' agreements, and legal dispute management.",
    svc3Deliverables: ["Provincial & Federal incorporation", "Minute books & corporate updates", "Commercial contracts & leases"],

    svc4Title: "Real Estate Tax & Wealth Management", 
    svc4Desc: "Capital gains optimization, estate transmission, and investment structures.",
    svc4Deliverables: ["Estate planning", "Capital gains optimization", "Real estate holding structures"],

    svc5Title: "International & Diaspora Services", 
    svc5Desc: "Cross-border taxation, tax residency rules, and support for settling business in Canada.",
    svc5Deliverables: ["Tax treaty analysis", "International asset transfers", "Tax residency status determination"],

    svc6Title: "Strategic Advisory & Consulting", 
    svc6Desc: "Financial diagnosis, corporate restructuring, tax audit defense, and capital fundraising.",
    svc6Deliverables: ["360° Financial diagnosis", "Tax audit representation", "Management dashboards"],

    quote: "« Building together your financial and legal future, with complete peace of mind. »",

    // Approach Section
    s3Eye: "Methodology",
    s3Title: "Our 4-Step Approach",
    s3Intro: "A structured and transparent process designed to convert accounting and legal complexity into growth opportunities.",
    
    step1Num: "01", step1Label: "Analysis", step1Title: "Diagnosis & Initial Audit", 
    step1Desc: "Comprehensive review of your current situation, tax and legal risk assessment, and clarification of priority goals.",
    step1Deliverables: ["Risk assessment", "Revised accounting audit", "Free diagnostic report"],

    step2Num: "02", step2Label: "Planning", step2Title: "Tailored Roadmap", 
    step2Desc: "Development of a customized strategy combining tax trade-offs, regulatory deadlines, and optimal legal frameworks.",
    step2Deliverables: ["Tax optimization roadmap", "Target legal structure", "Detailed quote & timetable"],

    step3Num: "03", step3Label: "Execution", step3Title: "Deployment & Active Support", 
    step3Desc: "Rigorously executing procedures: bookkeeping, tax filings, legal drafting, and representation before authorities.",
    step3Deliverables: ["Tax return submissions", "Financial statement production", "Monthly management report"],

    step4Num: "04", step4Label: "Sustainability", step4Title: "Optimization & Continuous Monitoring", 
    step4Desc: "Proactive annual review, strategic adjustments as tax laws evolve, and long-term financial planning.",
    step4Deliverables: ["Annual performance review", "Regulatory updates", "Payroll/dividend strategy"],

    // General
    contactTitle: "Let's Talk About Your Situation",
    contactText: "An initial consultation is always free and non-binding. Our team responds within 48 hours.",
    formTitle: "Book an Appointment",
    firstName: "First Name *", lastName: "Last Name *", email: "Email *", phone: "Phone",
    serviceSelect: "Desired service *", message: "Message *", submitBtn: "Send my request",
    successMsg: "Your message has been sent successfully. We will respond within 48h.",
    errorMsg: "Your message could not be sent. Please try again.",
    sendingMsg: "Sending…",
    footerDesc: "Firm specialized in accounting, tax, and legal services. Established in Montréal, Canada for over 15 years.",
    footerRights: "© 2026 Colour Dome Montréal · All rights reserved"
  }
};

export default function HomePage() {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');
  const [darkMode, setDarkMode] = useState(false);
  const [activeModal, setActiveModal] = useState<'services' | 'approche' | 'cabinet' | 'contact' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
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
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
        body: JSON.stringify(formData),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.success) {
        throw new Error(result.error || t.errorMsg);
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

  const servicesList = [
    {
      id: "compta",
      category: "compta",
      icon: Calculator,
      title: t.svc1Title,
      desc: t.svc1Desc,
      tag: t.catCompta,
      deliverables: t.svc1Deliverables
    },
    {
      id: "fisc",
      category: "fisc",
      icon: Landmark,
      title: t.svc2Title,
      desc: t.svc2Desc,
      tag: t.catFisc,
      deliverables: t.svc2Deliverables
    },
    {
      id: "juri",
      category: "juri",
      icon: Scale,
      title: t.svc3Title,
      desc: t.svc3Desc,
      tag: t.catJuri,
      deliverables: t.svc3Deliverables
    },
    {
      id: "immo",
      category: "fisc",
      icon: Building,
      title: t.svc4Title,
      desc: t.svc4Desc,
      tag: t.catFisc,
      deliverables: t.svc4Deliverables
    },
    {
      id: "inter",
      category: "strat",
      icon: Globe,
      title: t.svc5Title,
      desc: t.svc5Desc,
      tag: t.catStrat,
      deliverables: t.svc5Deliverables
    },
    {
      id: "strat",
      category: "strat",
      icon: Briefcase,
      title: t.svc6Title,
      desc: t.svc6Desc,
      tag: t.catStrat,
      deliverables: t.svc6Deliverables
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? servicesList 
    : servicesList.filter(s => s.category === selectedCategory);

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
            <a href="tel:5147310285" className="flex items-center gap-1 hover:text-red-600 transition-colors">
              <Phone size={13} /> 514-731-0285
            </a>
            <a href="mailto:info@colourdome.ca" className="flex items-center gap-1 hover:text-red-600 transition-colors">
              <Mail size={13} /> info@colourdome.ca
            </a>
            
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
          
          <a href="#" className="flex items-center gap-3 group">
            <div>
              <div className="font-bold text-lg leading-none tracking-tight flex items-center gap-1">
                <span>Colour</span>
                <span className="text-red-600">Dome</span>
              </div>
              <p className="text-xs italic font-serif text-slate-500 dark:text-slate-400 mt-1">Montréal</p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="hover:text-red-600 transition-colors">{t.heroCard1Title}</a>
            <a href="#approche" className="hover:text-red-600 transition-colors">{t.heroCard2Title}</a>
            <a href="#about" className="hover:text-red-600 transition-colors">{t.heroCard3Title}</a>
            <a href="#contact" className="hover:text-red-600 transition-colors">{t.heroCard4Title}</a>
            <a 
              href="#contact" 
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-5 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Calendar size={16} />
              {t.bookCta}
            </a>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className={`md:hidden border-b px-6 py-4 flex flex-col gap-4 font-medium ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 dark:border-slate-800">{t.heroCard1Title}</a>
            <a href="#approche" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 dark:border-slate-800">{t.heroCard2Title}</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 dark:border-slate-800">{t.heroCard3Title}</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 dark:border-slate-800">{t.heroCard4Title}</a>
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
      <section className={`relative overflow-hidden py-20 md:py-24 ${darkMode ? 'bg-slate-950' : 'bg-gradient-to-b from-slate-100 via-slate-50 to-white'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
          
          <div className={`max-w-4xl mx-auto rounded-2xl p-8 md:p-12 text-center border shadow-xl relative backdrop-blur-xl ${darkMode ? 'bg-slate-900/80 border-slate-800/80' : 'bg-white/90 border-slate-200/80'}`}>
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
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-serif mb-6 leading-tight">
              {t.heroTitle} <br className="hidden md:inline" />
              <span className="text-red-600 dark:text-red-500">{t.heroTitle2}</span>
            </h1>
            <p className="text-lg md:text-xl italic font-serif text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              {t.heroSub}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="#contact" className="bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-3.5 rounded-xl shadow-lg hover:shadow-red-600/20 transition-all flex items-center gap-2">
                {t.bookCta}
                <ArrowRight size={18} />
              </a>
              <a href="#services" className={`font-medium px-8 py-3.5 rounded-xl border transition-all ${darkMode ? 'border-slate-700 hover:bg-slate-800 text-slate-200' : 'border-slate-300 hover:bg-slate-100 text-slate-800'}`}>
                {t.heroCard1Title}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 items-stretch">
            <div 
              onClick={() => setActiveModal('services')}
              className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group flex flex-col justify-between ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'}`}
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                  <Calculator size={20} />
                </div>
                <h3 className="font-bold text-base font-serif mb-2 flex items-center justify-between">
                  {t.heroCard1Title}
                  <ArrowRight size={16} className="text-slate-400 group-hover:text-emerald-500 transition-colors" />
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {t.heroCard1Sub}
                </p>
              </div>
            </div>

            <div 
              onClick={() => setActiveModal('approche')}
              className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group flex flex-col justify-between ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'}`}
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center mb-4">
                  <TrendingUp size={20} />
                </div>
                <h3 className="font-bold text-base font-serif mb-2 flex items-center justify-between">
                  {t.heroCard2Title}
                  <ArrowRight size={16} className="text-slate-400 group-hover:text-red-500 transition-colors" />
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {t.heroCard2Sub}
                </p>
              </div>
            </div>

            <div 
              onClick={() => setActiveModal('cabinet')}
              className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group flex flex-col justify-between ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'}`}
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
                  <Building2 size={20} />
                </div>
                <h3 className="font-bold text-base font-serif mb-2 flex items-center justify-between">
                  {t.heroCard3Title}
                  <ArrowRight size={16} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {t.heroCard3Sub}
                </p>
              </div>
            </div>

            <div 
              onClick={() => setActiveModal('contact')}
              className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group flex flex-col justify-between ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'}`}
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-4">
                  <Calendar size={20} />
                </div>
                <h3 className="font-bold text-base font-serif mb-2 flex items-center justify-between">
                  {t.heroCard4Title}
                  <ArrowRight size={16} className="text-slate-400 group-hover:text-teal-500 transition-colors" />
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {t.heroCard4Sub}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BANDEAU NOUVELLE VERSION: ENGAGEMENTS ET RIGUEUR --- */}
      <section className={`border-y py-6 transition-colors ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 shrink-0">
              <Clock size={18} />
            </div>
            <div>
              <h4 className="font-bold text-xs text-slate-900 dark:text-white">{t.engagement1Title}</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">{t.engagement1Sub}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 shrink-0">
              <ShieldCheck size={18} />
            </div>
            <div>
              <h4 className="font-bold text-xs text-slate-900 dark:text-white">{t.engagement2Title}</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">{t.engagement2Sub}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 shrink-0">
              <Globe size={18} />
            </div>
            <div>
              <h4 className="font-bold text-xs text-slate-900 dark:text-white">{t.engagement3Title}</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">{t.engagement3Sub}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 shrink-0">
              <FileCheck size={18} />
            </div>
            <div>
              <h4 className="font-bold text-xs text-slate-900 dark:text-white">{t.engagement4Title}</h4>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">{t.engagement4Sub}</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION SERVICES REDESSINÉE --- */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-400 mb-2 block font-serif">
                {t.s1Badge}
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold font-serif">
                {t.s1Title1} <span className="text-red-600 dark:text-red-500">{t.s1Title2}</span>
              </h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl text-sm md:text-base">
              {t.s1Intro}
            </p>
          </div>

          {/* Onglets de filtrage */}
          <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              {t.catAll}
            </button>
            <button
              onClick={() => setSelectedCategory('compta')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === 'compta'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              {t.catCompta}
            </button>
            <button
              onClick={() => setSelectedCategory('fisc')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === 'fisc'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              {t.catFisc}
            </button>
            <button
              onClick={() => setSelectedCategory('juri')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === 'juri'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              {t.catJuri}
            </button>
            <button
              onClick={() => setSelectedCategory('strat')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === 'strat'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              {t.catStrat}
            </button>
          </div>

          {/* Grille des services structurée */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((svc) => {
              const IconComponent = svc.icon;
              return (
                <div
                  key={svc.id}
                  className={`rounded-2xl border p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                    darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                  }`}
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-red-600 dark:text-red-400">
                        <IconComponent size={22} />
                      </div>
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                        {svc.tag}
                      </span>
                    </div>

                    <h3 className="font-bold text-xl font-serif mb-3 text-slate-900 dark:text-white">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                      {svc.desc}
                    </p>

                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mb-6">
                      <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-3">Livrables inclus</p>
                      <ul className="space-y-2">
                        {svc.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                            <Check size={14} className="text-red-600 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <a
                    href="#contact"
                    className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-red-600 dark:text-red-400 hover:text-red-700 transition-colors group"
                  >
                    <span>Consulter un expert</span>
                    <ArrowUpRight size={16} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              );
            })}
          </div>

          <div className={`mt-16 p-8 rounded-2xl border flex flex-col md:flex-row justify-between items-center gap-6 ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-gradient-to-r from-slate-100 to-white border-slate-200'}`}>
            <p className="font-serif italic text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl text-center md:text-left">
              {t.quote}
            </p>
            <a href="#contact" className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-xl shadow whitespace-nowrap transition-all">
              {t.bookCta} →
            </a>
          </div>

        </div>
      </section>

      {/* --- SECTION NOTRE APPROCHE REVISITÉE --- */}
      <section id="approche" className={`py-20 ${darkMode ? 'bg-slate-900/40 border-y border-slate-800' : 'bg-slate-100/60 border-y border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block font-serif">{t.s3Eye}</span>
              <h2 className="text-3xl md:text-5xl font-extrabold font-serif">{t.s3Title}</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 max-w-md text-sm md:text-base">
              {t.s3Intro}
            </p>
          </div>

          {/* Fil conducteur interconnecté */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative">
            
            {/* Step 1 */}
            <div className={`p-6 rounded-2xl border relative flex flex-col justify-between shadow-sm ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-4xl font-extrabold font-serif text-slate-300 dark:text-slate-700">{t.step1Num}</span>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">{t.step1Label}</span>
                </div>
                <h3 className="font-bold text-lg font-serif mb-3 text-slate-900 dark:text-white">{t.step1Title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{t.step1Desc}</p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Livrables</p>
                <ul className="space-y-1">
                  {t.step1Deliverables.map((item, i) => (
                    <li key={i} className="text-[11px] text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-emerald-500"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Step 2 */}
            <div className={`p-6 rounded-2xl border relative flex flex-col justify-between shadow-sm ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-4xl font-extrabold font-serif text-slate-300 dark:text-slate-700">{t.step2Num}</span>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 uppercase tracking-wider">{t.step2Label}</span>
                </div>
                <h3 className="font-bold text-lg font-serif mb-3 text-slate-900 dark:text-white">{t.step2Title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{t.step2Desc}</p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Livrables</p>
                <ul className="space-y-1">
                  {t.step2Deliverables.map((item, i) => (
                    <li key={i} className="text-[11px] text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className={`p-6 rounded-2xl border relative flex flex-col justify-between shadow-sm ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-4xl font-extrabold font-serif text-slate-300 dark:text-slate-700">{t.step3Num}</span>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 uppercase tracking-wider">{t.step3Label}</span>
                </div>
                <h3 className="font-bold text-lg font-serif mb-3 text-slate-900 dark:text-white">{t.step3Title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{t.step3Desc}</p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Livrables</p>
                <ul className="space-y-1">
                  {t.step3Deliverables.map((item, i) => (
                    <li key={i} className="text-[11px] text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-amber-500"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Step 4 */}
            <div className={`p-6 rounded-2xl border relative flex flex-col justify-between shadow-sm ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-4xl font-extrabold font-serif text-slate-300 dark:text-slate-700">{t.step4Num}</span>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 uppercase tracking-wider">{t.step4Label}</span>
                </div>
                <h3 className="font-bold text-lg font-serif mb-3 text-slate-900 dark:text-white">{t.step4Title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{t.step4Desc}</p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Livrables</p>
                <ul className="space-y-1">
                  {t.step4Deliverables.map((item, i) => (
                    <li key={i} className="text-[11px] text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-red-600"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* --- SECTION ABOUT & CONTACT --- */}
      <section id="about" className="py-20 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block font-serif">Le Cabinet</span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-serif mb-6">Colour Dome Montréal</h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
              Cabinet pluridisciplinaire spécialisé dans l'accompagnement des PME, des particuliers et des membres de la diaspora. Nous réunissons l'expertise comptable, l'ingénierie fiscale et le droit des affaires sous un même toit pour garantir sérénité et performance.
            </p>
          </div>
        </div>
      </section>

      {/* --- FORMULAIRE DE CONTACT --- */}
      <section id="contact" className={`py-20 transition-colors ${darkMode ? 'bg-slate-950' : 'bg-slate-900 text-white'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-red-500 mb-2 block font-serif">Engagement Collectif</span>
              <h2 className="text-3xl md:text-5xl font-extrabold font-serif mb-6 leading-tight">
                {t.contactTitle}
              </h2>
              <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8">
                {t.contactText}
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-red-500 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase font-semibold block">Adresse</span>
                    <span className="text-sm font-medium">2015 Drummond, Suite 1005, Montréal H3G 1W9</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-red-500 shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase font-semibold block">Téléphone</span>
                    <span className="text-sm font-medium">514-731-0285</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-red-500 shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 uppercase font-semibold block">Courriel</span>
                    <span className="text-sm font-medium">info@colourdome.ca</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`p-8 rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-800/80 border-slate-700'}`}>
              <h3 className="font-bold text-2xl font-serif mb-6 text-white">{t.formTitle}</h3>
              
              {formSubmitted ? (
                <div className="p-6 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 text-center space-y-3">
                  <CheckCircle2 size={36} className="mx-auto" />
                  <p className="font-medium text-sm">{t.successMsg}</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 mb-1 block">{t.firstName}</label>
                      <input 
                        type="text" 
                        name="firstName" 
                        required 
                        value={formData.firstName} 
                        onChange={handleFormChange}
                        placeholder="Jean"
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-slate-700 text-white text-sm focus:outline-none focus:border-red-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-300 mb-1 block">{t.lastName}</label>
                      <input 
                        type="text" 
                        name="lastName" 
                        required 
                        value={formData.lastName} 
                        onChange={handleFormChange}
                        placeholder="Dupont"
                        className="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-slate-700 text-white text-sm focus:outline-none focus:border-red-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 mb-1 block">{t.email}</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      value={formData.email} 
                      onChange={handleFormChange}
                      placeholder="jean@exemple.com"
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-slate-700 text-white text-sm focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 mb-1 block">{t.phone}</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleFormChange}
                      placeholder="+1 514 000 0000"
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-slate-700 text-white text-sm focus:outline-none focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 mb-1 block">{t.serviceSelect}</label>
                    <select 
                      name="service" 
                      required 
                      value={formData.service} 
                      onChange={handleFormChange}
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-slate-700 text-white text-sm focus:outline-none focus:border-red-500"
                    >
                      <option value="">-- {t.serviceSelect} --</option>
                      <option value="Comptabilité">Comptabilité & Tenue de livres</option>
                      <option value="Fiscalité particuliers">Fiscalité des particuliers</option>
                      <option value="Fiscalité sociétés">Fiscalité des sociétés</option>
                      <option value="Droit affaires">Droit des affaires</option>
                      <option value="Immobilier">Fiscalité immobilière</option>
                      <option value="International">International & Diaspora</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-300 mb-1 block">{t.message}</label>
                    <textarea 
                      name="message" 
                      required 
                      rows={3}
                      value={formData.message} 
                      onChange={handleFormChange}
                      placeholder="Décrivez brièvement votre besoin..."
                      className="w-full px-4 py-2.5 rounded-lg bg-slate-900/80 border border-slate-700 text-white text-sm focus:outline-none focus:border-red-500"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSending}
                    className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-60 disabled:cursor-wait text-white font-semibold py-3.5 rounded-lg shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    {isSending ? t.sendingMsg : t.submitBtn} →
                  </button>

                  {formError && (
                    <p role="alert" className="text-sm text-red-300 text-center" aria-live="polite">
                      {formError}
                    </p>
                  )}
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className={`border-t pt-12 pb-8 text-xs transition-colors ${darkMode ? 'bg-slate-950 border-slate-900 text-slate-500' : 'bg-slate-950 text-slate-400 border-slate-900'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="mb-3 bg-white rounded-lg inline-block px-2 py-1.5">
              <Image src="/logo.png" alt="Colour Dome Montréal" width={160} height={50} className="object-contain" />
            </div>
            <p className="leading-relaxed text-slate-400">{t.footerDesc}</p>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-slate-200 mb-3">Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-red-500 transition-colors">Comptabilité</a></li>
              <li><a href="#services" className="hover:text-red-500 transition-colors">Fiscalité</a></li>
              <li><a href="#services" className="hover:text-red-500 transition-colors">Droit des affaires</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-slate-200 mb-3">Cabinet</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-red-500 transition-colors">À propos</a></li>
              <li><a href="#approche" className="hover:text-red-500 transition-colors">Notre méthode</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-slate-200 mb-3">Contact</h4>
            <ul className="space-y-2">
              <li>514-731-0285</li>
              <li>info@colourdome.ca</li>
              <li>2015 Drummond, Suite 1005</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-12 pt-6 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>{t.footerRights}</p>
        </div>
      </footer>

      {/* --- MODAL DIALOGS --- */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
          <div className={`max-w-lg w-full rounded-2xl p-8 relative shadow-2xl border ${darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
            <button 
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500"
            >
              <X size={20} />
            </button>

            {activeModal === 'services' && (
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-500 block mb-2 font-serif">Nos Services</span>
                <h3 className="text-2xl font-bold font-serif mb-4">6 Domaines d'Expertise</h3>
                <ul className="space-y-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300 mb-6">
                  <li><strong>Comptabilité & Tenue de Livres:</strong> Bilan, cycle comptable, reporting.</li>
                  <li><strong>Fiscalité:</strong> Déclarations IR/IS, crédits d'impôt, optimisation.</li>
                  <li><strong>Droit des Affaires:</strong> Incorporation, contrats, litiges.</li>
                </ul>
                <a 
                  href="#services" 
                  onClick={() => setActiveModal(null)}
                  className="inline-block bg-emerald-600 text-white font-medium px-5 py-2.5 rounded-lg text-xs"
                >
                  Voir en détails →
                </a>
              </div>
            )}

            {activeModal === 'approche' && (
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-red-500 block mb-2 font-serif">Notre Approche</span>
                <h3 className="text-2xl font-bold font-serif mb-4">Méthodologie en 4 Étapes</h3>
                <ul className="space-y-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300 mb-6">
                  <li><strong>1. Analyse:</strong> Audit complet et évaluation des risques.</li>
                  <li><strong>2. Planification:</strong> Plan d'action personnalisé et sur mesure.</li>
                  <li><strong>3. Exécution:</strong> Dépôt des déclarations et actes juridiques.</li>
                  <li><strong>4. Pérennisation:</strong> Veille proactive et révision annuelle.</li>
                </ul>
                <a 
                  href="#approche" 
                  onClick={() => setActiveModal(null)}
                  className="inline-block bg-red-600 text-white font-medium px-5 py-2.5 rounded-lg text-xs"
                >
                  Découvrir la méthode →
                </a>
              </div>
            )}

            {activeModal === 'cabinet' && (
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-500 block mb-2 font-serif">Le Cabinet</span>
                <h3 className="text-2xl font-bold font-serif mb-4">Colour Dome Montréal</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  Plus de 15 ans d'expérience au service des PME et des particuliers montréalais. Un accompagnement bilingue et sur-mesure.
                </p>
                <a 
                  href="#about" 
                  onClick={() => setActiveModal(null)}
                  className="inline-block bg-blue-600 text-white font-medium px-5 py-2.5 rounded-lg text-xs"
                >
                  En savoir plus →
                </a>
              </div>
            )}

            {activeModal === 'contact' && (
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-teal-500 block mb-2 font-serif">Contact</span>
                <h3 className="text-2xl font-bold font-serif mb-4">Un premier échange gratuit</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  Contactez-nous au <strong>514-731-0285</strong> ou réservez une plage horaire directement en ligne.
                </p>
                <a 
                  href="#contact" 
                  onClick={() => setActiveModal(null)}
                  className="inline-block bg-teal-600 text-white font-medium px-5 py-2.5 rounded-lg text-xs"
                >
                  Accéder au formulaire →
                </a>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}