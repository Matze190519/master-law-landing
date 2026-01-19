import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Building2, Scale, Plane, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function About() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.png')] opacity-10"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
              Über Uns
            </h1>
            <p className="text-xl text-white/60 leading-relaxed">
              Wir sind spezialisiert auf internationale Steueroptimierung, Firmengründung und Insolvenzrecht. 
              Unser Fokus liegt auf rechtssicheren Lösungen für Unternehmer und Privatpersonen in Spanien und Dubai.
            </p>
          </div>
        </div>
      </section>

      {/* The 3 Pillars */}
      <section className="py-20 bg-black border-t border-white/10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1: Insolvency Migration */}
            <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:bg-white/5 transition-colors group">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Insolvenz & Neustart</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                Wir unterstützen Sie beim Umzug nach Spanien. Nach nur 4-6 Monaten Aufenthalt können Sie hier das spanische Insolvenzverfahren durchlaufen und eine schnelle Restschuldbefreiung (Ley de Segunda Oportunidad) erreichen.
              </p>
            </div>

            {/* Pillar 2: Dubai Setup */}
            <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:bg-white/5 transition-colors group">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Dubai Firmengründung</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                Gründung Ihrer steuerfreien Firma in Dubai (Freezone). Wir übernehmen den kompletten Prozess inklusive Visum, Bankkonto und Compliance für maximale Steueroptimierung.
              </p>
            </div>

            {/* Pillar 3: Spain Tax & Legal */}
            <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:bg-white/5 transition-colors group">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Rechts- & Steuerberatung Spanien</h3>
              <p className="text-white/60 leading-relaxed mb-6">
                Umfassende Betreuung für deutsche Auswanderer, S.L.-Gesellschaften und Autonomos auf Mallorca und dem Festland. Ihr deutscher Anwalt und Steuerberater vor Ort.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black border-t border-white/10">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Bereit für Ihren Neustart?
          </h2>
          <Button 
            size="lg" 
            onClick={() => setIsCalendarOpen(true)}
            className="h-14 px-8 bg-white text-black hover:bg-gray-200 rounded-full text-lg font-bold"
          >
            Jetzt Termin vereinbaren <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Calendar Modal */}
      <Dialog open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
        <DialogContent className="sm:max-w-[900px] h-[80vh] bg-black/95 border-white/10 backdrop-blur-xl p-0 overflow-hidden">
          <DialogHeader className="p-6 border-b border-white/10">
            <DialogTitle className="text-2xl font-bold text-white">Beratung buchen</DialogTitle>
          </DialogHeader>
          <div className="w-full h-full bg-white">
            <iframe 
              src="https://calendly.com/master-law?hide_gdpr_banner=1&background_color=000000&text_color=ffffff&primary_color=ffffff" 
              width="100%" 
              height="100%" 
              frameBorder="0"
              title="Calendly Scheduling"
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
}
