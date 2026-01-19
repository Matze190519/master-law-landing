import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Building2, Globe, Shield, Plane, FileText, Coins } from "lucide-react";
import { Link } from "wouter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { serviceFaqs } from "@/data/serviceFaqs";

export default function DubaiSetup() {
  return (
    <Layout>
      <div className="pt-32 pb-20 container">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/10 bg-white/5">
              <Globe className="w-4 h-4 text-white" />
              <span className="text-xs font-bold text-white uppercase tracking-widest">Dubai Freezone</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight">
              Firmengründung <br/> <span className="text-white/50">in Dubai.</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Profitieren Sie von 0% Steuern, 100% Eigentum und voller Rechtssicherheit. 
              Wir begleiten Sie von der Gründung bis zum Bankkonto.
            </p>
          </div>

          {/* Key Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4 hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Freezone Setup</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Komplettes Setup Ihrer Freezone Company inkl. Lizenz für bis zu 3 Geschäftsaktivitäten. 
                Kein lokaler Sponsor notwendig.
              </p>
            </div>
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4 hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Visa & Emirates ID</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Residence Visa (2 Jahre Gültigkeit) und Emirates ID für Sie, Ihre Familie und Angestellte. 
                Inklusive Medical Check Begleitung.
              </p>
            </div>
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4 hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                <Coins className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Bankkonto</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Garantierte Kontoeröffnung (Privat & Geschäft) bei Top-Banken wie Wio, Mashreq oder Emirates NBD.
              </p>
            </div>
          </div>

          {/* Detailed Process & Pricing */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-white">Warum Dubai?</h2>
              <div className="space-y-6">
                {[
                  { title: "0% Körperschaftsteuer", desc: "Auf Qualifying Income bis 375.000 AED (~95.000€) Gewinn." },
                  { title: "0% Einkommensteuer", desc: "Keine persönliche Einkommensteuer auf Gehälter oder Dividenden." },
                  { title: "100% Ausländisches Eigentum", desc: "Sie behalten die volle Kontrolle über Ihr Unternehmen." },
                  { title: "Keine Währungsrestriktionen", desc: "Freier Kapitalverkehr in alle Währungen (USD, EUR, AED)." },
                  { title: "Strategische Lage", desc: "Perfekter Hub zwischen Europa, Asien und Afrika." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">
                      <Check className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold">{item.title}</h4>
                      <p className="text-white/50 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-white/10 bg-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <Plane className="w-32 h-32 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">All-in-One Gründungspaket</h3>
              <p className="text-white/60 mb-8">Alles was Sie für den Start benötigen.</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-white">Firmengründung (Lizenz)</span>
                  <Check className="w-4 h-4 text-white/50" />
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-white">Establishment Card</span>
                  <Check className="w-4 h-4 text-white/50" />
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-white">E-Channel Registrierung</span>
                  <Check className="w-4 h-4 text-white/50" />
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-white">Visa & Emirates ID (1 Person)</span>
                  <Check className="w-4 h-4 text-white/50" />
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-white">Bankkonto Eröffnung</span>
                  <Check className="w-4 h-4 text-white/50" />
                </div>
                <div className="flex justify-between items-center pb-4">
                  <span className="text-white">Medical Check Begleitung</span>
                  <Check className="w-4 h-4 text-white/50" />
                </div>
              </div>

              <div className="bg-black/40 rounded-xl p-6 text-center mb-6">
                <span className="text-white/50 text-sm uppercase tracking-widest">Komplettpreis ab</span>
                <div className="text-4xl font-bold text-white mt-2">€ 7.500</div>
                <span className="text-white/30 text-xs">+ Staatliche Gebühren</span>
              </div>

              <Button className="w-full h-12 bg-white text-black font-bold hover:bg-gray-200">
                Jetzt Anfragen
              </Button>
              <p className="text-center text-white/30 text-xs mt-4">
                Beratungsgebühr (49,90€) wird bei Auftragserteilung verrechnet.
              </p>
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
              <Button size="lg" className="h-14 px-8 rounded-full bg-white text-black hover:bg-gray-200 font-bold text-lg">
                Beratung Buchen (49,90€) <ArrowRight className="ml-2 w-5 h-5" />
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
