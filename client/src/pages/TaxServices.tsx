import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, FileText, Calculator, Scale } from "lucide-react";

export default function TaxServices() {
  return (
    <Layout>
      <div className="pt-32 pb-20 container">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/10 bg-white/5">
              <Calculator className="w-4 h-4 text-white" />
              <span className="text-xs font-bold text-white uppercase tracking-widest">Steuer & Compliance</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white">Laufende Steuerberatung</h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Für Firmen und Autónomos in Spanien und Dubai. Wir halten Ihnen den Rücken frei.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Für Firmen (S.L. / LLC)</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex gap-3"><Check className="w-5 h-5 text-green-400" /> Laufende Buchhaltung</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-green-400" /> Umsatzsteuervoranmeldungen</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-green-400" /> Jahresabschluss & Bilanz</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-green-400" /> Lohnbuchhaltung</li>
              </ul>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Für Autónomos</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex gap-3"><Check className="w-5 h-5 text-green-400" /> Quartalsweise Steuererklärungen</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-green-400" /> Einkommensteuer (Renta)</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-green-400" /> Sozialversicherung (Seguridad Social)</li>
                <li className="flex gap-3"><Check className="w-5 h-5 text-green-400" /> Betriebsausgaben-Optimierung</li>
              </ul>
            </div>
          </div>

          <div className="text-center pt-8">
            <Button size="lg" className="h-14 px-8 rounded-full bg-white text-black hover:bg-gray-200 font-bold text-lg">
              Monthly Retainer anfragen <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
