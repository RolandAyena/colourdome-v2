'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Building2, Scale, Calculator, Building, Globe, TrendingUp, 
  Phone, Mail, MapPin, Calendar, CheckCircle2, ArrowRight, 
  Sun, Moon, X, Menu, ShieldCheck, Clock, Users, Award, FileText,
  Briefcase, HeartHandshake, FileCheck, Landmark, Search
} from 'lucide-react';

// --- DICTIONNAIRE DE TRADUCTIONS COMPLET ---
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
    // Section Services Ribbon
    ribbon1Title: "Comptabilité & Livres", ribbon1Sub: "Bilan · États de résultat · Cycle complet",
    ribbon2Title: "Fiscalité Personnelle", ribbon2Sub: "Déclarations · Crédits · Optimisation",
    ribbon3Title: "Droit des Affaires", ribbon3Sub: "Incorporation · Contrats · Litiges",
    ribbon4Title: "Fiscalité Immobilière", ribbon4Sub: "Plus-values · Patrimoine · Succession",
    ribbon5Title: "International & Diaspora", ribbon5Sub: "Transfrontalier · Implantation Canada",
    ribbon6Title: "Conseil Stratégique", ribbon6Sub: "Diagnostic · Restructuration · Audit",
    // Value Added Section
    s1Badge: "Structure de nos Services",
    s1Title1: "Notre", s1Title2: "Valeur Ajoutée",
    s1Intro: "Un accompagnement complet et rigoureux, adapté à chaque étape de votre vie professionnelle, fiscale et patrimoniale.",
    stat1Val: "6", stat1Label: "Domaines d'expertise",
    stat2Val: "06+", stat2Label: "Ans d'expérience",
    stat3Val: "116+", stat3Label: "Clients servis",
    svc1Title: "Comptabilité & Tenue de Livres", svc1Desc: "Bilan, états de résultat, cycle comptable complet et reporting mensuel sur mesure.", svc1Tag: "Comptabilité",
    svc2Title: "Fiscalité des Particuliers & Sociétés", svc2Desc: "Déclarations, optimisation fiscale, crédits d'impôt et planification stratégique.", svc2Tag: "Fiscalité",
    svc3Title: "Droit des Affaires & Conseil Juridique", svc3Desc: "Incorporation, contrats, droit commercial et résolution de litiges.", svc3Tag: "Juridique",
    svc4Title: "Fiscalité Immobilière & Patrimoine", svc4Desc: "Plus-values, transmission successorale et optimisation patrimoniale.", svc4Tag: "Patrimoine",
    svc5Title: "International & Diaspora", svc5Desc: "Fiscalité transfrontalière, implantation et conventions bilatérales.", svc5Tag: "International",
    svc6Title: "Conseil & Accompagnement Stratégique", svc6Desc: "Diagnostic financier, restructuration et préparation aux audits.", svc6Tag: "Stratégie",
    quote: "« Penser et construire ensemble votre avenir financier et juridique, en toute sérénité. »",
    // Forces & Défis
    s2Eye: "Analyse Comparée",
    s2Title: "Pourquoi choisir Colour Dome ?",
    forcesTitle: "Nos Points Forts",
    defisTitle: "Défis que nous résolvons",
    f1Title: "Expertise pluridisciplinaire", f1Desc: "Comptabilité, fiscalité et droit réunis sous un même toit.",
    f2Title: "Spécialisation Diaspora", f2Desc: "Maîtrise des enjeux fiscaux transfrontaliers et d'implantation au Canada.",
    f3Title: "06+ ans d'expérience", f3Desc: "Une équipe aguerrie aux réalités des PME et particuliers montréalais.",
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
    // 9 Services Grid
    s5Eye: "Axes d'Intervention Prioritaires",
    s5Title: "Nos 9 Prestations Clés",
    p1Title: "Tenue de Livres", p1_1: "Comptabilité générale & analytique", p1_2: "Rapports mensuels personnalisés",
    p2Title: "Paie & Ressources Humaines", p2_1: "Gestion complète de la paie", p2_2: "Cotisations & déclarations",
    p3Title: "Fiscalité des Particuliers", p3_1: "Déclaration de revenus (IR)", p3_2: "Crédits d'impôt & déductions",
    p4Title: "Fiscalité des Sociétés", p4_1: "IS, TPS/TVQ, taxes sur salaires", p4_2: "Optimisation de la charge fiscale",
    p5Title: "Droit des Affaires", p5_1: "Incorporation & structuration", p5_2: "Contrats & litiges commerciaux",
    p6Title: "Fiscalité Immobilière", p6_1: "Plus-values & droits d'enregistrement", p6_2: "Imposition du patrimoine",
    p7Title: "International & Diaspora", p7_1: "Fiscalité transfrontalière", p7_2: "Rapatriement & conventions bilatérales",
    p8Title: "Contrôle Fiscal & Contentieux", p8_1: "Assistance lors des contrôles", p8_2: "Défense fiscale & recours",
    p9Title: "Conseil & Stratégie", p9_1: "Diagnostic financier d'entreprise", p9_2: "Préparation aux audits & levées de fonds",
    // About Section
    aboutEye: "Dispositif & Coordination",
    aboutTitle: "Qui Nous Sommes",
    aboutTagline: "« Un cabinet dédié à votre succès, ancré dans la rigueur et la proximité. »",
    aboutBody: "Colour Dome Montréal est un cabinet pluridisciplinaire spécialisé dans les services comptables, fiscaux et juridiques. Depuis plus de 15 ans, nous accompagnons entrepreneurs, particuliers et membres de la diaspora dans leurs défis financiers et juridiques au Canada.",
    actor1Title: "Entreprises & PME", actor1Desc: "Structuration, comptabilité & fiscalité des sociétés",
    actor2Title: "Particuliers & Familles", actor2Desc: "Déclarations, patrimoine & planification fiscale",
    actor3Title: "Diaspora & International", actor3Desc: "Fiscalité transfrontalière & implantation au Canada",
    actor4Title: "Investisseurs", actor4Desc: "Immobilier, plus-values & optimisation patrimoniale",
    // Roadmap
    roadmapEye: "Trajectoire client",
    roadmapTitle: "Notre roadmap de service",
    phase1Num: "Phase 1 · Semaine 1", phase1Title: "Consolidation du Dossier", phase1Desc: "Collecte des documents, audit initial et établissement du diagnostic complet.",
    phase2Num: "Phase 2 · Semaine 2-3", phase2Title: "Élaboration de la Stratégie", phase2Desc: "Présentation du plan d'action, validation des objectifs et signature du mandat.",
    phase3Num: "Phase 3 · Continu", phase3Title: "Exécution & Suivi Actif", phase3Desc: "Mise en œuvre du plan, déclarations, actes juridiques et reporting périodique.",
    phase4Num: "Phase 4 · Annuel", phase4Title: "Révision & Optimisation", phase4Desc: "Révision annuelle de la stratégie, veille réglementaire et ajustements proactifs.",
    // Contact Section
    contactEye: "Engagement Collectif",
    contactTitle: "Parlons de votre situation",
    contactText: "Un premier échange est toujours gratuit et sans engagement. Notre équipe vous répond sous 48h.",
    formTitle: "Prendre rendez-vous",
    firstName: "Prénom *", lastName: "Nom *", email: "Courriel *", phone: "Téléphone",
    serviceSelect: "Service souhaité *", message: "Message *", submitBtn: "Envoyer ma demande",
    successMsg: "Votre message a bien été envoyé. Nous vous répondrons sous 48h.",
    errorMsg: "Votre message n’a pas pu être envoyé. Veuillez réessayer.",
    sendingMsg: "Envoi en cours…",
    // Footer
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
    // Section Services Ribbon
    ribbon1Title: "Accounting & Books", ribbon1Sub: "Balance sheet · Income · Full cycle",
    ribbon2Title: "Personal Taxation", ribbon2Sub: "Returns · Credits · Optimization",
    ribbon3Title: "Business Law", ribbon3Sub: "Incorporation · Contracts · Disputes",
    ribbon4Title: "Real Estate Tax", ribbon4Sub: "Capital gains · Estate · Succession",
    ribbon5Title: "International & Diaspora", ribbon5Sub: "Cross-border · Canada Settlement",
    ribbon6Title: "Strategic Advisory", ribbon6Sub: "Diagnosis · Restructuring · Audit",
    // Value Added Section
    s1Badge: "Our Service Structure",
    s1Title1: "Our", s1Title2: "Added Value",
    s1Intro: "Comprehensive and rigorous support, tailored to every stage of your professional, tax, and estate journey.",
    stat1Val: "6", stat1Label: "Areas of expertise",
    stat2Val: "06+", stat2Label: "Years of experience",
    stat3Val: "116+", stat3Label: "Clients served",
    svc1Title: "Accounting & Bookkeeping", svc1Desc: "Balance sheet, income statement, full accounting cycle and customized monthly reporting.", svc1Tag: "Accounting",
    svc2Title: "Personal & Corporate Taxation", svc2Desc: "Tax returns, optimization, tax credits and strategic planning.", svc2Tag: "Taxation",
    svc3Title: "Business Law & Legal Advisory", svc3Desc: "Incorporation, contracts, commercial law and dispute resolution.", svc3Tag: "Legal",
    svc4Title: "Real Estate Taxation & Estate", svc4Desc: "Capital gains, estate planning and wealth optimization.", svc4Tag: "Estate",
    svc5Title: "International & Diaspora", svc5Desc: "Cross-border taxation, business setup and bilateral tax treaties.", svc5Tag: "International",
    svc6Title: "Strategic Advisory & Consulting", svc6Desc: "Financial diagnosis, restructuring and audit preparation.", svc6Tag: "Strategy",
    quote: "« Building together your financial and legal future, with complete peace of mind. »",
    // Forces & Défis
    s2Eye: "Comparative Analysis",
    s2Title: "Why Choose Colour Dome?",
    forcesTitle: "Our Strengths",
    defisTitle: "Challenges We Solve",
    f1Title: "Multidisciplinary expertise", f1Desc: "Accounting, taxation and law all under one roof.",
    f2Title: "Diaspora Specialization", f2Desc: "Deep expertise in cross-border tax issues and Canadian business setup.",
    f3Title: "6+ years of experience", f3Desc: "A seasoned team well-versed in the realities of Montréal SMEs and individuals.",
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
    expYears: "Years of experience", expSub: "Founded in Montréal",
    clientsServed: "Clients served", clientsSub: "Individuals & Businesses",
    satisfactionRate: "Satisfaction rate", satisfactionSub: "Measured annually",
    responseTime: "Response time", responseSub: "Guaranteed on every file",
    // 9 Services Grid
    s5Eye: "Priority Intervention Areas",
    s5Title: "Our 9 Key Services",
    p1Title: "Bookkeeping", p1_1: "General & analytical accounting", p1_2: "Customized monthly reports",
    p2Title: "Payroll & Human Resources", p2_1: "Full payroll management", p2_2: "Contributions & filings",
    p3Title: "Personal Taxation", p3_1: "Income tax returns", p3_2: "Tax credits & deductions",
    p4Title: "Corporate Taxation", p4_1: "Corporate tax, GST/QST, payroll taxes", p4_2: "Tax burden optimization",
    p5Title: "Business Law", p5_1: "Incorporation & structuring", p5_2: "Contracts & commercial disputes",
    p6Title: "Real Estate Taxation", p6_1: "Capital gains & registration fees", p6_2: "Wealth taxation",
    p7Title: "International & Diaspora", p7_1: "Cross-border taxation", p7_2: "Repatriation & bilateral treaties",
    p8Title: "Tax Audit & Litigation", p8_1: "Support during tax audits", p8_2: "Tax defense & appeals",
    p9Title: "Advisory & Strategy", p9_1: "Corporate financial diagnosis", p9_2: "Audit prep & fundraising",
    // About Section
    aboutEye: "Structure & Coordination",
    aboutTitle: "Who We Are",
    aboutTagline: "« A firm dedicated to your success, rooted in rigor and proximity. »",
    aboutBody: "Colour Dome Montréal is a multidisciplinary firm specializing in accounting, tax, and legal services. For over 15 years, we have supported entrepreneurs, individuals, and members of the diaspora with their financial and legal challenges in Canada.",
    actor1Title: "Businesses & SMEs", actor1Desc: "Structuring, accounting & corporate taxation",
    actor2Title: "Individuals & Families", actor2Desc: "Tax returns, estate planning & fiscal optimization",
    actor3Title: "Diaspora & International", actor3Desc: "Cross-border taxation & Canadian business setup",
    actor4Title: "Investors", actor4Desc: "Real estate, capital gains & wealth optimization",
    // Roadmap
    roadmapEye: "Client journey",
    roadmapTitle: "Our service roadmap",
    phase1Num: "Phase 1 · Week 1", phase1Title: "File Consolidation", phase1Desc: "Document collection, initial audit and complete diagnostic assessment.",
    phase2Num: "Phase 2 · Weeks 2-3", phase2Title: "Strategy Development", phase2Desc: "Presentation of the action plan, objective validation and mandate signing.",
    phase3Num: "Phase 3 · Ongoing", phase3Title: "Execution & Active Monitoring", phase3Desc: "Plan implementation, filings, legal acts and periodic reporting.",
    phase4Num: "Phase 4 · Annual", phase4Title: "Review & Optimization", phase4Desc: "Annual strategy review, regulatory monitoring and proactive adjustments.",
    // Contact Section
    contactEye: "Collective Commitment",
    contactTitle: "Let's Talk About Your Situation",
    contactText: "An initial consultation is always free and non-binding. Our team responds within 48 hours.",
    formTitle: "Book an Appointment",
    firstName: "First Name *", lastName: "Last Name *", email: "Email *", phone: "Phone",
    serviceSelect: "Desired service *", message: "Message *", submitBtn: "Send my request",
    successMsg: "Your message has been sent successfully. We will respond within 48h.",
    errorMsg: "Your message could not be sent. Please try again.",
    sendingMsg: "Sending…",
    // Footer
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

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

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

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      
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
            
            {/* Lang Switcher & Dark Mode Button */}
            <div className="flex items-center gap-2 ml-2 pl-2 border-l border-slate-200 dark:border-slate-800">
              <button 
                onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
                className="px-2 py-0.5 rounded font-bold text-xs bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 hover:bg-red-200 transition-all"
              >
                {lang.toUpperCase()}
              </button>
              <button 
                onClick={toggleTheme}
                className="p-1.5 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
                title="Basculer le mode sombre / clair"
              >
                {darkMode ? <Sun size={15} className="text-amber-400" /> : <Moon size={15} />}
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
{/*               <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-red-600 to-amber-500 flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
                CD
              </div> */}
              <div>
                <div className="font-bold text-lg leading-none tracking-tight flex items-center gap-1">
                  <span>Colour</span>
                  <span className="text-red-600">Dome</span>
                </div>
                <p className="text-xs italic font-serif text-slate-500 dark:text-slate-400 mt-1">Montréal</p>
              </div>
            </a>

          {/* Desktop Links */}
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
      <section className={`relative overflow-hidden py-20 md:py-28 ${darkMode ? 'bg-slate-950' : 'bg-gradient-to-b from-slate-100 via-slate-50 to-white'}`}>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[260px] font-bold opacity-[0.02] pointer-events-none select-none font-serif">
          CDM
        </div>
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-red-600/10 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
          
          {/* Main Hero Card */}
          <div data-reveal className={`reveal reveal-rise max-w-4xl mx-auto rounded-2xl p-8 md:p-14 text-center border shadow-2xl relative backdrop-blur-xl ${darkMode ? 'bg-slate-900/80 border-slate-800/80' : 'bg-white/80 border-white/90'}`}>

          <div className="flex justify-center mb-6">
            <Image
              src="/image.png"
              alt="Colour Dome Montréal"
              width={220}
              height={70}
              className="object-contain h-16 md:h-20 w-auto"
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

          {/* 4 Cards Grid - Key Entrance Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 items-stretch">
            
            {/* Card 1 */}
            <div 
              onClick={() => setActiveModal('services')}
              data-reveal
              className={`reveal reveal-rise reveal-delay-1 h-full p-6 rounded-xl border cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group relative overflow-hidden flex flex-col ${darkMode ? 'bg-slate-900/60 border-slate-800 hover:border-emerald-500/50' : 'bg-white border-slate-200 hover:border-emerald-500/50'}`}
            >
              <div className="w-12 h-12 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Calculator size={24} />
              </div>
              <h3 className="font-bold text-lg font-serif mb-2 flex items-center justify-between">
                {t.heroCard1Title}
                <ArrowRight size={16} className="text-slate-400 group-hover:text-emerald-500 transition-colors transform group-hover:translate-x-1" />
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {t.heroCard1Sub}
              </p>
              <div className="h-1 w-full bg-emerald-500 absolute bottom-0 left-0"></div>
            </div>

            {/* Card 2 */}
            <div 
              onClick={() => setActiveModal('approche')}
              data-reveal
              className={`reveal reveal-rise reveal-delay-2 h-full p-6 rounded-xl border cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group relative overflow-hidden flex flex-col ${darkMode ? 'bg-slate-900/60 border-slate-800 hover:border-red-500/50' : 'bg-white border-slate-200 hover:border-red-500/50'}`}
            >
              <div className="w-12 h-12 rounded-lg bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp size={24} />
              </div>
              <h3 className="font-bold text-lg font-serif mb-2 flex items-center justify-between">
                {t.heroCard2Title}
                <ArrowRight size={16} className="text-slate-400 group-hover:text-red-500 transition-colors transform group-hover:translate-x-1" />
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {t.heroCard2Sub}
              </p>
              <div className="h-1 w-full bg-red-600 absolute bottom-0 left-0"></div>
            </div>

            {/* Card 3 */}
            <div 
              onClick={() => setActiveModal('cabinet')}
              data-reveal
              className={`reveal reveal-rise reveal-delay-3 h-full p-6 rounded-xl border cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group relative overflow-hidden flex flex-col ${darkMode ? 'bg-slate-900/60 border-slate-800 hover:border-blue-500/50' : 'bg-white border-slate-200 hover:border-blue-500/50'}`}
            >
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Building2 size={24} />
              </div>
              <h3 className="font-bold text-lg font-serif mb-2 flex items-center justify-between">
                {t.heroCard3Title}
                <ArrowRight size={16} className="text-slate-400 group-hover:text-blue-500 transition-colors transform group-hover:translate-x-1" />
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {t.heroCard3Sub}
              </p>
              <div className="h-1 w-full bg-blue-600 absolute bottom-0 left-0"></div>
            </div>

            {/* Card 4 */}
            <div 
              onClick={() => setActiveModal('contact')}
              data-reveal
              className={`reveal reveal-rise reveal-delay-4 h-full p-6 rounded-xl border cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group relative overflow-hidden flex flex-col ${darkMode ? 'bg-slate-900/60 border-slate-800 hover:border-teal-500/50' : 'bg-white border-slate-200 hover:border-teal-500/50'}`}
            >
              <div className="w-12 h-12 rounded-lg bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Calendar size={24} />
              </div>
              <h3 className="font-bold text-lg font-serif mb-2 flex items-center justify-between">
                {t.heroCard4Title}
                <ArrowRight size={16} className="text-slate-400 group-hover:text-teal-500 transition-colors transform group-hover:translate-x-1" />
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {t.heroCard4Sub}
              </p>
              <div className="h-1 w-full bg-teal-600 absolute bottom-0 left-0"></div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SERVICES RIBBON STRIP --- */}
      <section className={`border-y py-8 transition-colors ${darkMode ? 'bg-slate-900/90 border-slate-800' : 'bg-slate-900 text-white border-slate-800'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-stretch">
          
          <div data-reveal className="reveal reveal-fade reveal-delay-1 flex flex-col items-center text-center p-2 group">
            <div className="p-3 rounded-lg bg-emerald-500/20 text-emerald-400 mb-2 group-hover:scale-110 transition-transform">
              <Calculator size={20} />
            </div>
            <h4 className="font-bold text-xs min-h-[2.25rem] flex items-center justify-center leading-tight px-1">{t.ribbon1Title}</h4>
            <p className="text-[10px] text-slate-400 mt-1">{t.ribbon1Sub}</p>
          </div>

          <div data-reveal className="reveal reveal-fade reveal-delay-2 flex flex-col items-center text-center p-2 group">
            <div className="p-3 rounded-lg bg-amber-500/20 text-amber-400 mb-2 group-hover:scale-110 transition-transform">
              <Landmark size={20} />
            </div>
            <h4 className="font-bold text-xs min-h-[2.25rem] flex items-center justify-center leading-tight px-1">{t.ribbon2Title}</h4>
            <p className="text-[10px] text-slate-400 mt-1">{t.ribbon2Sub}</p>
          </div>

          <div data-reveal className="reveal reveal-fade reveal-delay-3 flex flex-col items-center text-center p-2 group">
            <div className="p-3 rounded-lg bg-red-500/20 text-red-400 mb-2 group-hover:scale-110 transition-transform">
              <Scale size={20} />
            </div>
            <h4 className="font-bold text-xs min-h-[2.25rem] flex items-center justify-center leading-tight px-1">{t.ribbon3Title}</h4>
            <p className="text-[10px] text-slate-400 mt-1">{t.ribbon3Sub}</p>
          </div>

          <div data-reveal className="reveal reveal-fade reveal-delay-4 flex flex-col items-center text-center p-2 group">
            <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400 mb-2 group-hover:scale-110 transition-transform">
              <Building size={20} />
            </div>
            <h4 className="font-bold text-xs min-h-[2.25rem] flex items-center justify-center leading-tight px-1">{t.ribbon4Title}</h4>
            <p className="text-[10px] text-slate-400 mt-1">{t.ribbon4Sub}</p>
          </div>

          <div data-reveal className="reveal reveal-fade reveal-delay-5 flex flex-col items-center text-center p-2 group">
            <div className="p-3 rounded-lg bg-indigo-500/20 text-indigo-400 mb-2 group-hover:scale-110 transition-transform">
              <Globe size={20} />
            </div>
            <h4 className="font-bold text-xs min-h-[2.25rem] flex items-center justify-center leading-tight px-1">{t.ribbon5Title}</h4>
            <p className="text-[10px] text-slate-400 mt-1">{t.ribbon5Sub}</p>
          </div>

          <div data-reveal className="reveal reveal-fade reveal-delay-6 flex flex-col items-center text-center p-2 group">
            <div className="p-3 rounded-lg bg-teal-500/20 text-teal-400 mb-2 group-hover:scale-110 transition-transform">
              <Briefcase size={20} />
            </div>
            <h4 className="font-bold text-xs min-h-[2.25rem] flex items-center justify-center leading-tight px-1">{t.ribbon6Title}</h4>
            <p className="text-[10px] text-slate-400 mt-1">{t.ribbon6Sub}</p>
          </div>

        </div>
      </section>

      {/* --- SECTION 1: VALEUR AJOUTÉE --- */}
      <section id="services" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div data-reveal className="reveal reveal-slide-left">
              <span className="text-xs font-bold uppercase tracking-widest text-red-600 dark:text-red-400 mb-2 block">
                {t.s1Badge}
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold font-serif">
                {t.s1Title1} <span className="text-red-600 dark:text-red-500">{t.s1Title2}</span>
              </h2>
            </div>
            <p data-reveal className="reveal reveal-slide-right reveal-delay-1 text-slate-600 dark:text-slate-400 max-w-xl text-sm md:text-base">
              {t.s1Intro}
            </p>
          </div>

          {/* 6 Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* S1 */}
            <div data-reveal className={`reveal reveal-fade reveal-delay-1 h-full p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-3xl font-serif font-black text-slate-300 dark:text-slate-700">01</span>
                  <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <Calculator size={22} />
                  </div>
                </div>
                <h3 className="font-bold text-xl font-serif mb-3">{t.svc1Title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{t.svc1Desc}</p>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <span className="text-xs font-semibold px-3 py-1 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">{t.svc1Tag}</span>
                <ArrowRight size={16} className="text-slate-400" />
              </div>
            </div>

            {/* S2 */}
            <div data-reveal className={`reveal reveal-fade reveal-delay-2 h-full p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-3xl font-serif font-black text-slate-300 dark:text-slate-700">02</span>
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
                    <Landmark size={22} />
                  </div>
                </div>
                <h3 className="font-bold text-xl font-serif mb-3">{t.svc2Title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{t.svc2Desc}</p>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <span className="text-xs font-semibold px-3 py-1 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400">{t.svc2Tag}</span>
                <ArrowRight size={16} className="text-slate-400" />
              </div>
            </div>

            {/* S3 */}
            <div data-reveal className={`reveal reveal-fade reveal-delay-3 h-full p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-3xl font-serif font-black text-slate-300 dark:text-slate-700">03</span>
                  <div className="p-3 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400">
                    <Scale size={22} />
                  </div>
                </div>
                <h3 className="font-bold text-xl font-serif mb-3">{t.svc3Title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{t.svc3Desc}</p>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <span className="text-xs font-semibold px-3 py-1 rounded bg-red-500/10 text-red-600 dark:text-red-400">{t.svc3Tag}</span>
                <ArrowRight size={16} className="text-slate-400" />
              </div>
            </div>

            {/* S4 */}
            <div data-reveal className={`reveal reveal-fade reveal-delay-4 h-full p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-3xl font-serif font-black text-slate-300 dark:text-slate-700">04</span>
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Building size={22} />
                  </div>
                </div>
                <h3 className="font-bold text-xl font-serif mb-3">{t.svc4Title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{t.svc4Desc}</p>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <span className="text-xs font-semibold px-3 py-1 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400">{t.svc4Tag}</span>
                <ArrowRight size={16} className="text-slate-400" />
              </div>
            </div>

            {/* S5 */}
            <div data-reveal className={`reveal reveal-fade reveal-delay-5 h-full p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-3xl font-serif font-black text-slate-300 dark:text-slate-700">05</span>
                  <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                    <Globe size={22} />
                  </div>
                </div>
                <h3 className="font-bold text-xl font-serif mb-3">{t.svc5Title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{t.svc5Desc}</p>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <span className="text-xs font-semibold px-3 py-1 rounded bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">{t.svc5Tag}</span>
                <ArrowRight size={16} className="text-slate-400" />
              </div>
            </div>

            {/* S6 */}
            <div data-reveal className={`reveal reveal-fade reveal-delay-6 h-full p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-3xl font-serif font-black text-slate-300 dark:text-slate-700">06</span>
                  <div className="p-3 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400">
                    <Briefcase size={22} />
                  </div>
                </div>
                <h3 className="font-bold text-xl font-serif mb-3">{t.svc6Title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{t.svc6Desc}</p>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <span className="text-xs font-semibold px-3 py-1 rounded bg-teal-500/10 text-teal-600 dark:text-teal-400">{t.svc6Tag}</span>
                <ArrowRight size={16} className="text-slate-400" />
              </div>
            </div>

          </div>

          {/* Banner Quote */}
          <div data-reveal className={`reveal reveal-scale mt-16 p-8 md:p-10 rounded-2xl border flex flex-col md:flex-row justify-between items-center gap-6 ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-gradient-to-r from-slate-100 to-white border-slate-200'}`}>
            <p className="font-serif italic text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl text-center md:text-left">
              {t.quote}
            </p>
            <a href="#contact" className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-xl shadow whitespace-nowrap transition-all">
              {t.bookCta} →
            </a>
          </div>

        </div>
      </section>

      {/* --- SECTION 2: FORCES & DÉFIS --- */}
      <section className={`py-20 border-y ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-slate-100/70 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          
          <div data-reveal className="reveal reveal-blur text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block font-serif">{t.s2Eye}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-serif">{t.s2Title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Forces */}
            <div data-reveal className={`reveal reveal-slide-left p-8 rounded-2xl border shadow-sm ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="font-bold text-xl font-serif text-emerald-600 dark:text-emerald-400">{t.forcesTitle}</h3>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="font-bold text-sm text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 w-8 h-8 rounded-full flex items-center justify-center shrink-0">01</span>
                  <div>
                    <h4 className="font-bold mb-1 text-sm">{t.f1Title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{t.f1Desc}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="font-bold text-sm text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 w-8 h-8 rounded-full flex items-center justify-center shrink-0">02</span>
                  <div>
                    <h4 className="font-bold mb-1 text-sm">{t.f2Title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{t.f2Desc}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="font-bold text-sm text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 w-8 h-8 rounded-full flex items-center justify-center shrink-0">03</span>
                  <div>
                    <h4 className="font-bold mb-1 text-sm">{t.f3Title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{t.f3Desc}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="font-bold text-sm text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 w-8 h-8 rounded-full flex items-center justify-center shrink-0">04</span>
                  <div>
                    <h4 className="font-bold mb-1 text-sm">{t.f4Title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{t.f4Desc}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Défis */}
            <div data-reveal className={`reveal reveal-slide-right reveal-delay-1 p-8 rounded-2xl border shadow-sm ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="p-2 rounded-lg bg-red-500/10 text-red-600 dark:text-red-400">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="font-bold text-xl font-serif text-red-600 dark:text-red-400">{t.defisTitle}</h3>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <span className="font-bold text-sm text-red-600 dark:text-red-400 bg-red-500/10 w-8 h-8 rounded-full flex items-center justify-center shrink-0">01</span>
                  <div>
                    <h4 className="font-bold mb-1 text-sm">{t.d1Title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{t.d1Desc}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="font-bold text-sm text-red-600 dark:text-red-400 bg-red-500/10 w-8 h-8 rounded-full flex items-center justify-center shrink-0">02</span>
                  <div>
                    <h4 className="font-bold mb-1 text-sm">{t.d2Title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{t.d2Desc}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="font-bold text-sm text-red-600 dark:text-red-400 bg-red-500/10 w-8 h-8 rounded-full flex items-center justify-center shrink-0">03</span>
                  <div>
                    <h4 className="font-bold mb-1 text-sm">{t.d3Title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{t.d3Desc}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="font-bold text-sm text-red-600 dark:text-red-400 bg-red-500/10 w-8 h-8 rounded-full flex items-center justify-center shrink-0">04</span>
                  <div>
                    <h4 className="font-bold mb-1 text-sm">{t.d4Title}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{t.d4Desc}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div data-reveal className={`reveal reveal-rise mt-8 p-4 rounded-xl border flex items-center gap-3 text-sm italic ${darkMode ? 'bg-slate-900/60 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700'}`}>
            <HeartHandshake className="text-blue-500 shrink-0" size={20} />
            <span>{t.s2Note}</span>
          </div>

        </div>
      </section>

      {/* --- SECTION 3: APPROCHE EN 4 ÉTAPES --- */}
      <section id="approche" className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          
          <div data-reveal className="reveal reveal-clip flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block font-serif">{t.s3Eye}</span>
              <h2 className="text-3xl md:text-5xl font-extrabold font-serif">{t.s3Title}</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 max-w-md text-sm md:text-base">
              {t.s3Intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            
            {/* Step 1 */}
            <div data-reveal className={`reveal reveal-fade reveal-delay-1 h-full p-6 rounded-2xl border relative overflow-hidden flex flex-col justify-between ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div className="h-1 w-full bg-emerald-500 absolute top-0 left-0"></div>
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{t.step1Num}</span>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">{t.step1Label}</span>
                </div>
                <h3 className="font-bold text-xl font-serif mb-3">{t.step1Title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6">{t.step1Desc}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">Bilan</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">Risques</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">Objectifs</span>
              </div>
            </div>

            {/* Step 2 */}
            <div data-reveal className={`reveal reveal-fade reveal-delay-2 h-full p-6 rounded-2xl border relative overflow-hidden flex flex-col justify-between ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div className="h-1 w-full bg-blue-600 absolute top-0 left-0"></div>
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{t.step2Num}</span>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400">{t.step2Label}</span>
                </div>
                <h3 className="font-bold text-xl font-serif mb-3">{t.step2Title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6">{t.step2Desc}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">Roadmap</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">Optimisation</span>
              </div>
            </div>

            {/* Step 3 */}
            <div data-reveal className={`reveal reveal-fade reveal-delay-3 h-full p-6 rounded-2xl border relative overflow-hidden flex flex-col justify-between ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div className="h-1 w-full bg-amber-500 absolute top-0 left-0"></div>
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{t.step3Num}</span>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400">{t.step3Label}</span>
                </div>
                <h3 className="font-bold text-xl font-serif mb-3">{t.step3Title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6">{t.step3Desc}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">Reporting</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">Déclarations</span>
              </div>
            </div>

            {/* Step 4 */}
            <div data-reveal className={`reveal reveal-fade reveal-delay-4 h-full p-6 rounded-2xl border relative overflow-hidden flex flex-col justify-between ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <div className="h-1 w-full bg-red-600 absolute top-0 left-0"></div>
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{t.step4Num}</span>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-red-500/10 text-red-600 dark:text-red-400">{t.step4Label}</span>
                </div>
                <h3 className="font-bold text-xl font-serif mb-3">{t.step4Title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-6">{t.step4Desc}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">Veille</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">Révision</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* --- SECTION 4: CHIFFRES CLÉS --- */}
      <section className={`py-16 border-y ${darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-900 text-white border-slate-800'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          
          <div data-reveal className="reveal reveal-fade reveal-delay-1">
            <div className="text-4xl md:text-5xl font-extrabold font-serif text-red-500 mb-2">06+</div>
            <div className="text-sm font-semibold">{t.expYears}</div>
            <p className="text-xs text-slate-400 mt-1">{t.expSub}</p>
          </div>

          <div data-reveal className="reveal reveal-rise reveal-delay-2">
            <div className="text-4xl md:text-5xl font-extrabold font-serif text-red-500 mb-2">116+</div>
            <div className="text-sm font-semibold">{t.clientsServed}</div>
            <p className="text-xs text-slate-400 mt-1">{t.clientsSub}</p>
          </div>

          <div data-reveal className="reveal reveal-fade reveal-delay-3">
            <div className="text-4xl md:text-5xl font-extrabold font-serif text-red-500 mb-2">98%</div>
            <div className="text-sm font-semibold">{t.satisfactionRate}</div>
            <p className="text-xs text-slate-400 mt-1">{t.satisfactionSub}</p>
          </div>

          <div data-reveal className="reveal reveal-rise reveal-delay-4">
            <div className="text-4xl md:text-5xl font-extrabold font-serif text-red-500 mb-2">48h</div>
            <div className="text-sm font-semibold">{t.responseTime}</div>
            <p className="text-xs text-slate-400 mt-1">{t.responseSub}</p>
          </div>

        </div>
      </section>

      {/* --- SECTION 5: 9 PRESTATIONS CLÉS --- */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          
          <div data-reveal className="reveal reveal-slide-left text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block font-serif">{t.s5Eye}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold font-serif">{t.s5Title}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            
            {/* P1 */}
            <div data-reveal className={`reveal reveal-fade reveal-delay-1 p-6 rounded-xl border relative h-full flex flex-col ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block mb-3">OS 01</span>
              <h3 className="font-bold text-lg font-serif mb-4">{t.p1Title}</h3>
              <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 mb-6">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>{t.p1_1}</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>{t.p1_2}</li>
              </ul>
              <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 uppercase mt-auto w-fit">Comptabilité</span>
            </div>

            {/* P2 */}
            <div data-reveal className={`reveal reveal-fade reveal-delay-2 p-6 rounded-xl border relative h-full flex flex-col ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block mb-3">OS 02</span>
              <h3 className="font-bold text-lg font-serif mb-4">{t.p2Title}</h3>
              <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 mb-6">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>{t.p2_1}</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>{t.p2_2}</li>
              </ul>
              <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 uppercase mt-auto w-fit">Comptabilité</span>
            </div>

            {/* P3 */}
            <div data-reveal className={`reveal reveal-fade reveal-delay-3 p-6 rounded-xl border relative h-full flex flex-col ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block mb-3">OS 03</span>
              <h3 className="font-bold text-lg font-serif mb-4">{t.p3Title}</h3>
              <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 mb-6">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>{t.p3_1}</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>{t.p3_2}</li>
              </ul>
              <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 uppercase mt-auto w-fit">Fiscalité</span>
            </div>

            {/* P4 */}
            <div data-reveal className={`reveal reveal-fade reveal-delay-4 p-6 rounded-xl border relative h-full flex flex-col ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block mb-3">OS 04</span>
              <h3 className="font-bold text-lg font-serif mb-4">{t.p4Title}</h3>
              <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 mb-6">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>{t.p4_1}</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>{t.p4_2}</li>
              </ul>
              <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 uppercase mt-auto w-fit">Fiscalité</span>
            </div>

            {/* P5 */}
            <div data-reveal className={`reveal reveal-fade reveal-delay-1 p-6 rounded-xl border relative h-full flex flex-col ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block mb-3">OS 05</span>
              <h3 className="font-bold text-lg font-serif mb-4">{t.p5Title}</h3>
              <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 mb-6">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>{t.p5_1}</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>{t.p5_2}</li>
              </ul>
              <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-red-500/10 text-red-600 dark:text-red-400 uppercase mt-auto w-fit">Juridique</span>
            </div>

            {/* P6 */}
            <div data-reveal className={`reveal reveal-fade reveal-delay-2 p-6 rounded-xl border relative h-full flex flex-col ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block mb-3">OS 06</span>
              <h3 className="font-bold text-lg font-serif mb-4">{t.p6Title}</h3>
              <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 mb-6">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>{t.p6_1}</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>{t.p6_2}</li>
              </ul>
              <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-red-500/10 text-red-600 dark:text-red-400 uppercase mt-auto w-fit">Juridique</span>
            </div>

            {/* P7 */}
            <div data-reveal className={`reveal reveal-fade reveal-delay-3 p-6 rounded-xl border relative h-full flex flex-col ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block mb-3">OS 07</span>
              <h3 className="font-bold text-lg font-serif mb-4">{t.p7Title}</h3>
              <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 mb-6">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>{t.p7_1}</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>{t.p7_2}</li>
              </ul>
              <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 uppercase mt-auto w-fit">International</span>
            </div>

            {/* P8 */}
            <div data-reveal className={`reveal reveal-fade reveal-delay-4 p-6 rounded-xl border relative h-full flex flex-col ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block mb-3">OS 08</span>
              <h3 className="font-bold text-lg font-serif mb-4">{t.p8Title}</h3>
              <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 mb-6">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>{t.p8_1}</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>{t.p8_2}</li>
              </ul>
              <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 uppercase mt-auto w-fit">Contentieux</span>
            </div>

            {/* P9 */}
            <div data-reveal className={`reveal reveal-fade reveal-delay-1 p-6 rounded-xl border relative h-full flex flex-col ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
              <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase block mb-3">OS 09</span>
              <h3 className="font-bold text-lg font-serif mb-4">{t.p9Title}</h3>
              <ul className="text-xs space-y-2 text-slate-600 dark:text-slate-400 mb-6">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>{t.p9_1}</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>{t.p9_2}</li>
              </ul>
              <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-teal-500/10 text-teal-600 dark:text-teal-400 uppercase mt-auto w-fit">Stratégie</span>
            </div>

          </div>

        </div>
      </section>

      {/* --- SECTION 6: QUI NOUS SOMMES & ROADMAP --- */}
      <section id="about" className={`py-20 border-t ${darkMode ? 'bg-slate-900/30 border-slate-800' : 'bg-slate-100/60 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left: About Text & Actors */}
            <div data-reveal className="reveal reveal-slide-left">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block font-serif">{t.aboutEye}</span>
              <h2 className="text-3xl md:text-4xl font-extrabold font-serif mb-6">{t.aboutTitle}</h2>
              
              <p className="text-lg italic font-serif text-slate-700 dark:text-slate-300 border-l-4 border-red-600 pl-4 mb-6">
                {t.aboutTagline}
              </p>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                {t.aboutBody}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
                
                <div data-reveal className={`reveal reveal-fade reveal-delay-1 h-full p-4 rounded-xl border flex items-start gap-3 ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <Building2 className="text-emerald-500 shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="font-bold text-xs mb-1">{t.actor1Title}</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">{t.actor1Desc}</p>
                  </div>
                </div>

                <div data-reveal className={`reveal reveal-fade reveal-delay-2 h-full p-4 rounded-xl border flex items-start gap-3 ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <Users className="text-amber-500 shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="font-bold text-xs mb-1">{t.actor2Title}</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">{t.actor2Desc}</p>
                  </div>
                </div>

                <div data-reveal className={`reveal reveal-fade reveal-delay-3 h-full p-4 rounded-xl border flex items-start gap-3 ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <Globe className="text-red-500 shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="font-bold text-xs mb-1">{t.actor3Title}</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">{t.actor3Desc}</p>
                  </div>
                </div>

                <div data-reveal className={`reveal reveal-fade reveal-delay-4 h-full p-4 rounded-xl border flex items-start gap-3 ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <Briefcase className="text-blue-500 shrink-0 mt-0.5" size={20} />
                  <div>
                    <h4 className="font-bold text-xs mb-1">{t.actor4Title}</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">{t.actor4Desc}</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right: Roadmap Timeline */}
            <div data-reveal className="reveal reveal-slide-right">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 block font-serif">{t.roadmapEye}</span>
              <h3 className="text-2xl font-bold font-serif mb-8">{t.roadmapTitle}</h3>

              <div className="relative pl-6 space-y-8 border-l-2 border-slate-200 dark:border-slate-800">
                
                {/* Phase 1 */}
                <div data-reveal className="reveal reveal-rise reveal-delay-1 relative">
                  <span className="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-emerald-500 text-white font-bold text-xs flex items-center justify-center">1</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">{t.phase1Num}</span>
                  <h4 className="font-bold text-base font-serif mb-2">{t.phase1Title}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">{t.phase1Desc}</p>
                  <div className="flex gap-2">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">Documents</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">Audit</span>
                  </div>
                </div>

                {/* Phase 2 */}
                <div data-reveal className="reveal reveal-rise reveal-delay-2 relative">
                  <span className="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-amber-500 text-white font-bold text-xs flex items-center justify-center">2</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">{t.phase2Num}</span>
                  <h4 className="font-bold text-base font-serif mb-2">{t.phase2Title}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">{t.phase2Desc}</p>
                  <div className="flex gap-2">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">Plan d'action</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">Mandat</span>
                  </div>
                </div>

                {/* Phase 3 */}
                <div data-reveal className="reveal reveal-rise reveal-delay-3 relative">
                  <span className="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-red-600 text-white font-bold text-xs flex items-center justify-center">3</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">{t.phase3Num}</span>
                  <h4 className="font-bold text-base font-serif mb-2">{t.phase3Title}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">{t.phase3Desc}</p>
                  <div className="flex gap-2">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">Déclarations</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">Reporting</span>
                  </div>
                </div>

                {/* Phase 4 */}
                <div data-reveal className="reveal reveal-rise reveal-delay-4 relative">
                  <span className="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">4</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">{t.phase4Num}</span>
                  <h4 className="font-bold text-base font-serif mb-2">{t.phase4Title}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">{t.phase4Desc}</p>
                  <div className="flex gap-2">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">Veille</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400">Optimisation</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* --- SECTION 7: CONTACT & APPOINTMENT FORM --- */}
      <section id="contact" className={`py-20 md:py-28 transition-colors ${darkMode ? 'bg-slate-950' : 'bg-slate-900 text-white'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Info */}
            <div data-reveal className="reveal reveal-slide-left">
              <span className="text-xs font-bold uppercase tracking-widest text-red-500 mb-2 block font-serif">{t.contactEye}</span>
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

            {/* Form */}
            <div data-reveal className={`reveal reveal-slide-right reveal-delay-1 p-8 rounded-2xl border ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-slate-800/80 border-slate-700'}`}>
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
              <li><a href="#services" className="hover:text-red-500 transition-colors">Immobilier</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-slate-200 mb-3">Cabinet</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-red-500 transition-colors">À propos</a></li>
              <li><a href="#about" className="hover:text-red-500 transition-colors">Notre équipe</a></li>
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
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </footer>

      {/* --- MODAL DIALOGS FOR HERO CARDS --- */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in modal-backdrop">
          <div className={`modal-panel max-w-lg w-full rounded-2xl p-8 relative shadow-2xl border ${darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'}`}>
            
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
                  <li className="flex gap-2"><strong>• Comptabilité & Tenue de Livres:</strong> Bilan, cycle comptable, reporting.</li>
                  <li className="flex gap-2"><strong>• Fiscalité:</strong> Déclarations IR/IS, crédits d'impôt, optimisation.</li>
                  <li className="flex gap-2"><strong>• Droit des Affaires:</strong> Incorporation, contrats, litiges.</li>
                  <li className="flex gap-2"><strong>• Immobilier & Patrimoine:</strong> Plus-values, transmission.</li>
                  <li className="flex gap-2"><strong>• International & Diaspora:</strong> Fiscalité transfrontalière.</li>
                  <li className="flex gap-2"><strong>• Conseil Stratégique:</strong> Diagnostic financier, audits.</li>
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
                  <li className="flex gap-2"><strong>1. Écoute & Analyse:</strong> Audit complet et rencontre initiale gratuite.</li>
                  <li className="flex gap-2"><strong>2. Plan d'Action:</strong> Feuille de route personnalisée sur mesure.</li>
                  <li className="flex gap-2"><strong>3. Mise en Œuvre:</strong> Exécution rigoureuse et reporting périodique.</li>
                  <li className="flex gap-2"><strong>4. Amélioration Continue:</strong> Veille permanente et révisions annuelles.</li>
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
                <ul className="space-y-3 text-xs leading-relaxed text-slate-600 dark:text-slate-300 mb-6">
                  <li className="flex gap-2"><strong>• 15+ ans d'expérience:</strong> Cabinet basé à Montréal.</li>
                  <li className="flex gap-2"><strong>• 116+ clients accompagnés:</strong> PME, particuliers & diaspora.</li>
                  <li className="flex gap-2"><strong>• Réponse sous 48h:</strong> Transparence et réactivité garanties.</li>
                </ul>
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
                  Contactez-nous directement par téléphone au <strong>514-731-0285</strong> ou remplissez notre formulaire en ligne.
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
