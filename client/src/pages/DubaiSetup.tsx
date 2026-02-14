import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Building2, Globe, Plane, FileText, Briefcase, Stamp } from "lucide-react";
import { Link } from "wouter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { serviceFaqs } from "@/data/serviceFaqs";
import { testimonials } from "@/data/testimonials";
import { Quote } from "lucide-react";
import EligibilityCheck from "@/components/EligibilityCheck";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";
import SEO from "@/components/SEO";
import BookingModal from "@/components/BookingModal";
import TrustBadges from "@/components/TrustBadges";
import { useState } from "react";

export default function DubaiSetup() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const steps = [
    {
      icon: <FileText className="w-6 h-6 text-white" />,
      title: "01. Beratung & Angebot",
      desc: "Wir analysieren Ihre Situation und erstellen ein maßgeschneidertes Angebot für Ihre Firmengründung."
    },
    {
      icon: <FileText className="w-6 h-6 text-white" />,
      title: "02. Beantragung",
      desc: "Zusammenstellung aller Dokumente und Einreichung bei den Behörden. Wir übernehmen den Papierkram."
    },
    {
      icon: <Building2 className="w-6 h-6 text-white" />,
      title: "03. Gründung",
      desc: "Offizielle Eintragung Ihrer Firma. Sie erhalten Ihre Trade License und sind geschäftsfähig."
    },
    {
      icon: <Stamp className="w-6 h-6 text-white" />,
      title: "04. Lizenz & Genehmigung",
      desc: "Erhalt aller notwendigen Genehmigungen und der Establishment Card für Ihr Unternehmen."
    },
    {
      icon: <Plane className="w-6 h-6 text-white" />,
      title: "05. Visa Prozess vor Ort",
      desc: "Einreise für Medical Test und Emirates ID. Dauer: ca. 5-7 Tage. Wir begleiten Sie persönlich."
    },
    {
      icon: <Briefcase className="w-6 h-6 text-white" />,
      title: "06. Laufende Betreuung",
      desc: "Wir kümmern uns um Buchhaltung, Compliance und die jährliche Erneuerung Ihrer Lizenz."
    }
  ];

  const packages = [
    {
      name: "Starter-Paket",
      price: "1.999 €",
      desc: "Ideal für den schnellen Einstieg – Firmengründung ohne Wohnsitzverlagerung.",
      features: [
        "Firmengründung (Trade License)",
        "100% ausländisches Eigentum",
        "Virtuelles Büro (Flexi Desk)",
        "Beratung zur Kontoeröffnung",
        "Unterstützung bei der Dokumentation"
      ]
    },
    {
      name: "All-Inclusive-Paket",
      price: "4.999 €",
      desc: "Das Rundum-Sorglos-Paket für Unternehmer – alles inklusive.",
      features: [
        "Alles aus dem Starter-Paket",
        "1 Residence Visa (2 Jahre)",
        "Emirates ID Beantragung",
        "Medical Test Begleitung",
        "Garantierte Bankkonto-Eröffnung",
        "Steuerregistrierung (Corporate Tax)",
        "Persönlicher Ansprechpartner"
      ],
      popular: true
    }
  ];

  return (
    <Layout>
      <SEO 
        title={t.dubaiHeroTitle}
        description={t.dubaiHeroSubtitle}
      />
      <div className="pt-32 pb-20 container">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/10 bg-white/5">
              <Globe className="w-4 h-4 text-white" />
              <span className="text-xs font-bold text-white uppercase tracking-widest">Dubai Freezone Setup</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight">
              Firmengründung <br/> <span className="text-white/50">in Dubai.</span>
            </h1>
              <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                Starten Sie Ihr steueroptimiertes Business in den VAE. 
                Rechtssicher, schnell und transparent. Ab 1.999 €.
              </p>
          </div>

          {/* Process Steps (6-Step Plan) */}
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ihr Weg zur Firma in Dubai</h2>
              <p className="text-white/60">In 6 einfachen Schritten zum Ziel. Wir übernehmen den kompletten Prozess.</p>
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
              <h2 className="text-3xl font-bold text-white mb-4">Transparente Preise</h2>
              <p className="text-white/60">Keine versteckten Kosten. Wählen Sie das Paket, das zu Ihnen passt.</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
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
                    </div>
                    <p className="text-white/30 text-xs mt-2">zzgl. staatliche Gebühren (transparent ausgewiesen)</p>
                  </div>
                  
                  <div className="space-y-4 mb-8 flex-grow">
                    {pkg.features.map((feat, j) => (
                      <div key={j} className="flex gap-3 items-start">
                        <Check className="w-5 h-5 text-white shrink-0" />
                        <span className="text-white/80 text-sm">{feat}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className={`w-full h-12 font-bold ${pkg.popular ? 'bg-white text-black hover:bg-gray-200' : 'bg-white/10 text-white hover:bg-white/20'}`}
                    onClick={() => (document.getElementById('calendar-modal') as HTMLDialogElement)?.showModal()}
                  >
                    Angebot anfordern
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Key Facts Grid */}
          <div className="grid md:grid-cols-4 gap-6 pt-12 border-t border-white/10">
             <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-white">0%</div>
                <div className="text-white/50 text-sm">0% - 9% Corporate Tax</div>
             </div>
             <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-white/50 text-sm">Ausländisches Eigentum</div>
             </div>
             <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-white">3-5</div>
                <div className="text-white/50 text-sm">Tage Gründungsdauer</div>
             </div>
             <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-white">Sofort</div>
                <div className="text-white/50 text-sm">Bankkonto Eröffnung</div>
             </div>
          </div>

          {/* Eligibility Check */}
          <div className="pt-12 border-t border-white/10">
            <EligibilityCheck 
              title="Bin ich für eine Dubai Freezone Firma qualifiziert?"
              questions={[
                { id: "q1", text: "Planen Sie, Geschäfte international (außerhalb der VAE) zu tätigen?", correctAnswer: true },
                { id: "q2", text: "Möchten Sie 100% Eigentümer Ihrer Firma bleiben?", correctAnswer: true },
                { id: "q3", text: "Suchen Sie nach einer Lösung ohne persönliche Einkommensteuer?", correctAnswer: true }
              ]}
              successMessage="Ihr Profil passt perfekt für eine Dubai Freezone Company! Sie können von niedrigen Steuern (0-9%) und 100% Eigentum profitieren."
              failMessage="Basierend auf Ihren Antworten könnte eine andere Unternehmensform besser passen. Lassen Sie uns Ihre Situation im Detail besprechen."
            />
          </div>

          {/* Testimonials Section */}
          <div className="pt-12 border-t border-white/10">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Was unsere Mandanten sagen</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.dubai.map((t, i) => (
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
              {serviceFaqs.dubai.map((faq, index) => (
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
            <h2 className="text-3xl font-bold text-white mb-6">Bereit für den Neustart?</h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button size="lg" className="h-14 px-8 rounded-full bg-white text-black hover:bg-gray-200 font-bold text-lg animate-pulse-glow" onClick={() => setIsBookingOpen(true)}>
                Beratung Buchen (Kostenlos) <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="h-14 px-8 rounded-full border-white/20 text-white hover:bg-white/10 font-bold text-lg">
                  Kontakt aufnehmen
                </Button>
              </Link>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="pt-8">
            <TrustBadges />
          </div>
        </div>
      </div>
      <BookingModal open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </Layout>
  );
}
