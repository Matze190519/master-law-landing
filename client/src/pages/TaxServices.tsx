import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, FileText, Calculator, Scale, Briefcase, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { serviceFaqs } from "@/data/serviceFaqs";

export default function TaxServices() {
  return (
    <Layout>
      <div className="pt-32 pb-20 container">
        <div className="max-w-5xl mx-auto space-y-16">
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

          {/* Service Comparison */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Corporate Package */}
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6 hover:bg-white/5 transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Briefcase className="w-32 h-32 text-white" />
              </div>
              
              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center border border-white/20 relative z-10">
                <FileText className="w-7 h-7 text-white" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white">Für Firmen (S.L. / LLC)</h3>
                <p className="text-white/50 mt-2">Rundum-Sorglos-Paket für Kapitalgesellschaften.</p>
              </div>

              <div className="space-y-4 relative z-10 border-t border-white/10 pt-6">
                <div className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                  <span className="text-white/80">Laufende Finanzbuchhaltung</span>
                </div>
                <div className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                  <span className="text-white/80">Umsatzsteuervoranmeldungen (Monatlich/Quartalsweise)</span>
                </div>
                <div className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                  <span className="text-white/80">Jahresabschluss & Bilanzierung</span>
                </div>
                <div className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                  <span className="text-white/80">Körperschaftsteuererklärung</span>
                </div>
                <div className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                  <span className="text-white/80">Lohnbuchhaltung (bis 5 Mitarbeiter inkl.)</span>
                </div>
              </div>

              <div className="pt-6 relative z-10">
                <div className="text-white/50 text-xs uppercase tracking-widest mb-2">Ab</div>
                <div className="text-3xl font-bold text-white">€ 250 <span className="text-lg font-normal text-white/50">/ Monat</span></div>
              </div>
            </div>

            {/* Freelancer Package */}
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6 hover:bg-white/5 transition-colors relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <TrendingUp className="w-32 h-32 text-white" />
              </div>

              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center border border-white/20 relative z-10">
                <Scale className="w-7 h-7 text-white" />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white">Für Autónomos</h3>
                <p className="text-white/50 mt-2">Effiziente Verwaltung für Selbstständige & Freiberufler.</p>
              </div>

              <div className="space-y-4 relative z-10 border-t border-white/10 pt-6">
                <div className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                  <span className="text-white/80">Quartalsweise Steuererklärungen (IVA & IRPF)</span>
                </div>
                <div className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                  <span className="text-white/80">Jährliche Einkommensteuererklärung (Renta)</span>
                </div>
                <div className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                  <span className="text-white/80">Sozialversicherung (Seguridad Social) Management</span>
                </div>
                <div className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                  <span className="text-white/80">Betriebsausgaben-Optimierung</span>
                </div>
                <div className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-green-400 shrink-0 mt-1" />
                  <span className="text-white/80">Unbegrenzte E-Mail Beratung</span>
                </div>
              </div>

              <div className="pt-6 relative z-10">
                <div className="text-white/50 text-xs uppercase tracking-widest mb-2">Ab</div>
                <div className="text-3xl font-bold text-white">€ 80 <span className="text-lg font-normal text-white/50">/ Monat</span></div>
              </div>
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
                <h4 className="font-bold text-white mb-2">Nicht-Residenten Steuer</h4>
                <p className="text-sm text-white/50">Jährliche Erklärung für Immobilienbesitzer ohne Wohnsitz in Spanien (Modelo 210).</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto pt-8">
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
