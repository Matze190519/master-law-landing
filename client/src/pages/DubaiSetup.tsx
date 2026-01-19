import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Building2, Globe, Shield } from "lucide-react";

export default function DubaiSetup() {
  return (
    <Layout>
      <div className="pt-32 pb-20 container">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/10 bg-white/5">
              <Globe className="w-4 h-4 text-white" />
              <span className="text-xs font-bold text-white uppercase tracking-widest">Dubai Freezone</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white">Firmengründung in Dubai</h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              0% Steuern, 100% Eigentum, volle Rechtssicherheit. Ihr Tor zum globalen Markt.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
              <Building2 className="w-10 h-10 text-white" />
              <h3 className="text-xl font-bold text-white">Firmengründung</h3>
              <p className="text-white/60">Komplettes Setup Ihrer Freezone Company inkl. Lizenz für 3 Aktivitäten.</p>
            </div>
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
              <Shield className="w-10 h-10 text-white" />
              <h3 className="text-xl font-bold text-white">Visa & ID</h3>
              <p className="text-white/60">Residence Visa (2 Jahre) und Emirates ID für Sie und Ihre Familie.</p>
            </div>
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-4">
              <Globe className="w-10 h-10 text-white" />
              <h3 className="text-xl font-bold text-white">Bankkonto</h3>
              <p className="text-white/60">Garantierte Kontoeröffnung (Privat & Geschäft) bei Top-Banken.</p>
            </div>
          </div>

          <div className="glass-panel p-10 rounded-3xl border border-white/10 bg-white/5">
            <h2 className="text-3xl font-bold text-white mb-8">Warum Dubai?</h2>
            <ul className="space-y-4">
              {[
                "0% Körperschaftsteuer (Qualifying Income)",
                "0% Einkommensteuer",
                "100% Ausländisches Eigentum erlaubt",
                "Keine Währungsrestriktionen",
                "Strategische Lage zwischen Europa, Asien und Afrika"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-white/80">
                  <Check className="w-5 h-5 text-green-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <Button size="lg" className="h-14 px-8 rounded-full bg-white text-black hover:bg-gray-200 font-bold text-lg">
              Jetzt Beratung vereinbaren <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
