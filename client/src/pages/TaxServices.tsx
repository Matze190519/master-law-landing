import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, FileText, Calculator, Scale, Briefcase, TrendingUp, Search, FileCheck, ShieldCheck, UserCheck, Coins } from "lucide-react";
import { Link } from "wouter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { serviceFaqs } from "@/data/serviceFaqs";
import { testimonials } from "@/data/testimonials";
import { Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";
import SEO from "@/components/SEO";
import BookingModal from "@/components/BookingModal";
import { useState } from "react";

export default function TaxServices() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const steps = [
    {
      icon: <Search className="w-6 h-6 text-white" />,
      title: "01. Analyse & Audit",
      desc: "Kostenlose Erstprüfung Ihrer steuerlichen Situation und Identifikation von Optimierungspotenzialen."
    },
    {
      icon: <FileText className="w-6 h-6 text-white" />,
      title: "02. Strategie",
      desc: "Entwicklung eines maßgeschneiderten Steuerkonzepts für Ihr Unternehmen oder Ihre Selbstständigkeit."
    },
    {
      icon: <UserCheck className="w-6 h-6 text-white" />,
      title: "03. Onboarding",
      desc: "Einrichtung Ihrer digitalen Buchhaltung und Übernahme aller steuerlichen Vollmachten."
    },
    {
      icon: <Calculator className="w-6 h-6 text-white" />,
      title: "04. Laufende Buchhaltung",
      desc: "Monatliche Erfassung aller Belege, Umsatzsteuervoranmeldungen und Lohnabrechnungen."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: "05. Compliance & Fristen",
      desc: "Pünktliche Einreichung aller Steuererklärungen und Einhaltung aller gesetzlichen Vorgaben."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      title: "06. Jahresabschluss",
      desc: "Erstellung der Bilanz oder Einnahmen-Überschuss-Rechnung sowie der jährlichen Steuererklärungen."
    }
  ];

  const packages = [
    {
      name: "Autónomo",
      price: "115 €",
      period: "/ Monat",
      desc: "Für Selbstständige & Freiberufler in Spanien.",
      features: [
        "Monatliche Steuererklärungen (IVA & IRPF)",
        "Jährliche Einkommensteuererklärung (Renta)",
        "Sozialversicherung Management",
        "E-Mail & Telefon Support",
        "Digitale Belegverwaltung"
      ]
    },
    {
      name: "S.L. / Kapitalgesellschaft",
      price: "350 €",
      period: "/ Monat",
      desc: "Komplettservice für Kapitalgesellschaften.",
      features: [
        "Laufende Finanzbuchhaltung",
        "Monatliche Steuererklärungen",
        "Jahresabschluss & Bilanzierung",
        "Körperschaftsteuererklärung",
        "Lohnbuchhaltung (bis 5 MA)"
      ],
      popular: true
    },
    {
      name: "Beckham Law",
      price: "250 €",
      period: "einmalig",
      desc: "Antrag auf Sonderbesteuerung für Neuzuzügler nach Spanien.",
      features: [
        "Prüfung der Voraussetzungen",
        "Komplette Antragsstellung",
        "Kommunikation mit Finanzamt",
        "24% Flat Tax auf spanisches Einkommen",
        "Beratung zur optimalen Nutzung"
      ]
    }
  ];

  return (
    <Layout>
      <SEO 
        title={t.taxPageTitle}
        description={t.taxPageSubtitle}
      />
      <div className="pt-32 pb-20 container">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/10 bg-white/5">
              <Calculator className="w-4 h-4 text-white" />
              <span className="text-xs font-bold text-white uppercase tracking-widest">Steuer & Compliance</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight">
              Laufende <br/> <span className="text-white/50">Steuerberatung.</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Fokussieren Sie sich auf Ihr Geschäft. Wir kümmern uns um die Bürokratie. 
              Für Firmen und Selbstständige in Spanien und Dubai.
            </p>
          </div>

          {/* Process Steps (6-Step Plan) */}
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">So arbeiten wir</h2>
              <p className="text-white/60">Strukturierte Prozesse für Ihre steuerliche Sicherheit.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {steps.map((step, i) => (
                <div key={i} className="glass-panel p-8 rounded-3xl border border-white/10 hover:bg-white/5 transition-colors relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-5 font-bold text-6xl text-white group-hover:opacity-10 transition-opacity">
                    {i + 1}
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Packages */}
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Transparente Honorare</h2>
              <p className="text-white/60">Faire Pauschalpreise statt stundenweiser Abrechnung.</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {packages.map((pkg, i) => (
                <div key={i} className={`glass-panel p-8 rounded-3xl border ${pkg.popular ? 'border-white/40 bg-white/10' : 'border-white/10 bg-white/5'} relative overflow-hidden flex flex-col h-full`}>
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 bg-white text-black text-xs font-bold px-3 py-1 rounded-bl-xl">
                      POPULAR
                    </div>
                  )}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                    <p className="text-white/50 text-sm mb-6">{pkg.desc}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm text-white/50">ab</span>
                      <span className="text-4xl font-bold text-white">{pkg.price}</span>
                      <span className="text-lg font-normal text-white/50">{pkg.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8 flex-grow">
                    {pkg.features.map((feat, j) => (
                      <div key={j} className="flex gap-3 items-start">
                        <Check className="w-5 h-5 text-white shrink-0" />
                        <span className="text-white/80 text-sm">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <Button className={`w-full h-12 font-bold ${pkg.popular ? 'bg-white text-black hover:bg-gray-200' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                    Angebot anfordern
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Services */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10 bg-white/5">
            <h3 className="text-2xl font-bold text-white mb-6">Zusatzleistungen</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 rounded-xl bg-black/20 border border-white/5">
                <h4 className="font-bold text-white mb-2">Steuerliche Registrierung</h4>
                <p className="text-sm text-white/50">Anmeldung beim Finanzamt (Modell 036/037) und Sozialversicherung.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/20 border border-white/5">
                <h4 className="font-bold text-white mb-2">Digitale Signatur</h4>
                <p className="text-sm text-white/50">Beantragung und Einrichtung des FNMT Zertifikats für Online-Behördengänge.</p>
              </div>
              <div className="p-4 rounded-xl bg-black/20 border border-white/5">
                <h4 className="font-bold text-white mb-2">Laufende Buchführung</h4>
                <p className="text-sm text-white/50">Steuererklärungen für Autonomos und S.L. Gesellschaften.</p>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="pt-12 border-t border-white/10">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Was unsere Mandanten sagen</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.tax.map((t, i) => (
                <div key={i} className="glass-panel p-8 rounded-3xl border border-white/10 relative">
                  <Quote className="w-10 h-10 text-white/20 absolute top-6 right-6" />
                  <p className="text-white/80 text-lg italic mb-6">"{t.text}"</p>
                  <div>
                    <div className="font-bold text-white">{t.name}</div>
                    <div className="text-white/50 text-sm">{t.role}</div>
                    <div className="text-white/30 text-xs mt-1">{t.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto pt-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Häufige Fragen</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {serviceFaqs.tax.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-white/10 rounded-xl px-6 bg-white/5 data-[state=open]:bg-white/10 transition-all">
                  <AccordionTrigger className="text-white hover:text-white/80 text-lg font-medium py-6 text-left">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-white/60 text-base pb-6 leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* CTA Section */}
          <div className="text-center pt-12 border-t border-white/10">
            <h2 className="text-3xl font-bold text-white mb-6">Lassen Sie uns Ihre Steuern optimieren.</h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button size="lg" className="h-14 px-8 rounded-full bg-white text-black hover:bg-gray-200 font-bold text-lg" onClick={() => setIsBookingOpen(true)}>
                Beratung Buchen (49,90 €) <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="h-14 px-8 rounded-full border-white/20 text-white hover:bg-white/10 font-bold text-lg">
                  Kontakt aufnehmen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <BookingModal open={isBookingOpen} onOpenChange={setIsBookingOpen} defaultService="steuerberatung" />
    </Layout>
  );
}
