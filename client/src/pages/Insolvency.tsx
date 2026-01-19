import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Scale, Clock, ShieldAlert, XCircle, AlertTriangle, FileCheck, UserCheck, Home, Gavel, FileSignature, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { serviceFaqs } from "@/data/serviceFaqs";
import { testimonials } from "@/data/testimonials";
import { Quote } from "lucide-react";
import EligibilityCheck from "@/components/EligibilityCheck";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";
import SEO from "@/components/SEO";

export default function Insolvency() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const steps = [
    {
      icon: <UserCheck className="w-6 h-6 text-white" />,
      title: "01. Analyse & Strategie",
      desc: "Prüfung Ihrer Verschuldungssituation und Machbarkeitsanalyse für das spanische Verfahren."
    },
    {
      icon: <Home className="w-6 h-6 text-white" />,
      title: "02. Wohnsitzverlagerung",
      desc: "Rechtssichere Anmeldung in Spanien. Wir unterstützen bei NIE-Nummer und Wohnungssuche."
    },
    {
      icon: <FileSignature className="w-6 h-6 text-white" />,
      title: "03. Außergerichtliche Einigung",
      desc: "Versuch einer Einigung mit den Gläubigern (notwendige Vorstufe, meist formell)."
    },
    {
      icon: <Gavel className="w-6 h-6 text-white" />,
      title: "04. Insolvenzantrag",
      desc: "Einreichung des Antrags beim zuständigen spanischen Handelsgericht (Juzgado de lo Mercantil)."
    },
    {
      icon: <Clock className="w-6 h-6 text-white" />,
      title: "05. Verfahren",
      desc: "Verwertung des pfändbaren Vermögens (falls vorhanden). Dauer: ca. 6-12 Monate."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      title: "06. Restschuldbefreiung",
      desc: "Gerichtlicher Beschluss (BEPI) zur Löschung aller Schulden. Gültig in der gesamten EU."
    }
  ];

  const packages = [
    {
      name: "Analyse & Beratung",
      price: "490 €",
      desc: "Detaillierte Prüfung Ihrer Erfolgsaussichten.",
      features: [
        "Prüfung der Gläubigerliste",
        "Analyse der Vermögenssituation",
        "Strategiegespräch mit Anwalt",
        "Schriftliche Handlungsempfehlung",
        "Anrechnung bei Mandatserteilung"
      ]
    },
    {
      name: "Insolvenzverfahren",
      price: "Auf Anfrage",
      desc: "Komplette anwaltliche Vertretung bis zur Schuldenfreiheit.",
      features: [
        "Beantragung NIE & Wohnsitz",
        "Korrespondenz mit Gläubigern",
        "Gerichtliche Vertretung",
        "Insolvenzverwalter-Kommunikation",
        "Beantragung Restschuldbefreiung (BEPI)"
      ],
      popular: true
    },
    {
      name: "Nachsorge",
      price: "Inklusive",
      desc: "Wir lassen Sie auch danach nicht allein.",
      features: [
        "Löschung aus Schuldnerverzeichnissen",
        "Bestätigung der Schuldenfreiheit",
        "Hilfe beim finanziellen Neustart",
        "Bankkonto-Eröffnung",
        "Steuerliche Erstberatung"
      ]
    }
  ];

  return (
    <Layout>
      <SEO 
        title={t.insolvencyPageTitle}
        description={t.insolvencyPageSubtitle}
      />
      <div className="pt-32 pb-20 container">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/10 bg-white/5">
              <Scale className="w-4 h-4 text-white" />
              <span className="text-xs font-bold text-white uppercase tracking-widest">EU-Insolvenzrecht</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight">
              Neustart <br/> <span className="text-white/50">in Spanien.</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Nutzen Sie das spanische "Ley de Segunda Oportunidad" für eine schnellere Restschuldbefreiung als in Deutschland. 
              Schuldenfrei in ca. 12 Monaten. Legal, sicher und diskret.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Warum Spanien die bessere Wahl ist</h3>
            
            <div className="grid md:grid-cols-2 gap-8 relative">
              {/* Divider for desktop */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

              {/* Germany Side */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    <span className="text-lg">🇩🇪</span>
                  </div>
                  <span className="font-bold text-white text-xl">Deutschland</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex gap-4 items-start p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                    <Clock className="w-5 h-5 text-red-400 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-bold text-sm">Lange Verfahrensdauer</h4>
                      <p className="text-white/50 text-sm">Regelmäßig 3 Jahre Wohlverhaltensphase bis zur Restschuldbefreiung.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                    <ShieldAlert className="w-5 h-5 text-red-400 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-bold text-sm">Strenge Auflagen</h4>
                      <p className="text-white/50 text-sm">Strenge Erwerbsobliegenheiten und Pfändungstabellen.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                    <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-bold text-sm">Öffentliche Stigmatisierung</h4>
                      <p className="text-white/50 text-sm">Eintrag in öffentliche Schuldnerverzeichnisse und Schufa (bleibt 3 Jahre).</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Spain Side */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                    <span className="text-lg">🇪🇸</span>
                  </div>
                  <span className="font-bold text-white text-xl">Spanien</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex gap-4 items-start p-4 rounded-xl bg-green-500/5 border border-green-500/10">
                    <Clock className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-bold text-sm">Schnelles Verfahren</h4>
                      <p className="text-white/50 text-sm">Restschuldbefreiung oft schon nach ca. 12 Monaten möglich.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start p-4 rounded-xl bg-green-500/5 border border-green-500/10">
                    <FileCheck className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-bold text-sm">Sofortige Befreiung (BEPI)</h4>
                      <p className="text-white/50 text-sm">Gerichtlicher Beschluss zur sofortigen Löschung aller Schulden.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start p-4 rounded-xl bg-green-500/5 border border-green-500/10">
                    <ShieldAlert className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-bold text-sm">Diskretion</h4>
                      <p className="text-white/50 text-sm">Keine automatische Meldung an die deutsche Schufa.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Process Steps (6-Step Plan) */}
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Der Weg zur Schuldenfreiheit</h2>
              <p className="text-white/60">Ein klar strukturierter juristischer Prozess.</p>
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
              <h2 className="text-3xl font-bold text-white mb-4">Unser Honorar</h2>
              <p className="text-white/60">Transparenz von Anfang an.</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {packages.map((pkg, i) => (
                <div key={i} className={`glass-panel p-8 rounded-3xl border ${pkg.popular ? 'border-white/40 bg-white/10' : 'border-white/10 bg-white/5'} relative overflow-hidden flex flex-col h-full`}>
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 bg-white text-black text-xs font-bold px-3 py-1 rounded-bl-xl">
                      EMPFOHLEN
                    </div>
                  )}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                    <p className="text-white/50 text-sm mb-6">{pkg.desc}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-sm text-white/50">ab</span>
                      <span className="text-4xl font-bold text-white">{pkg.price}</span>
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
                    Termin vereinbaren
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility Check */}
          <div className="pt-12 border-t border-white/10">
            <EligibilityCheck 
              title="Ist das spanische Insolvenzverfahren für mich geeignet?"
              questions={[
                { id: "q1", text: "Sind Sie bereit, Ihren Wohnsitz tatsächlich nach Spanien zu verlegen?", correctAnswer: true },
                { id: "q2", text: "Haben Sie Schulden, die Sie voraussichtlich nicht mehr bedienen können?", correctAnswer: true },
                { id: "q3", text: "Sind Sie bereit, alle Vermögenswerte offenzulegen?", correctAnswer: true }
              ]}
              successMessage="Sie erfüllen die Grundvoraussetzungen für das spanische Insolvenzverfahren (Ley de Segunda Oportunidad). Eine Restschuldbefreiung in ca. 12 Monaten ist realistisch."
              failMessage="Das Verfahren erfordert einen echten Wohnsitzwechsel und Transparenz. Gerne prüfen wir in einem persönlichen Gespräch, ob es dennoch Wege für Sie gibt."
            />
          </div>

          {/* Testimonials Section */}
          <div className="pt-12 border-t border-white/10">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Was unsere Mandanten sagen</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.insolvency.map((t, i) => (
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
              {serviceFaqs.insolvency.map((faq, index) => (
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
            <h2 className="text-3xl font-bold text-white mb-6">Starten Sie Ihr neues Leben schuldenfrei.</h2>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button size="lg" className="h-14 px-8 rounded-full bg-white text-black hover:bg-gray-200 font-bold text-lg" onClick={() => window.open('https://calendly.com/ihr-link', '_blank')}>
                Beratung Buchen (Kostenlos) <ArrowRight className="ml-2 w-5 h-5" />
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
    </Layout>
  );
}
