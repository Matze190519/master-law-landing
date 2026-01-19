import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Scale, Clock, ShieldAlert } from "lucide-react";

export default function Insolvency() {
  return (
    <Layout>
      <div className="pt-32 pb-20 container">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/10 bg-white/5">
              <Scale className="w-4 h-4 text-white" />
              <span className="text-xs font-bold text-white uppercase tracking-widest">Insolvenzrecht</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white">Neustart in Spanien</h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Nutzen Sie das spanische Insolvenzrecht für eine schnellere Restschuldbefreiung als in Deutschland.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-3xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Vergleich: Deutschland vs. Spanien</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4 p-6 bg-white/5 rounded-2xl border border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <img src="https://flagcdn.com/de.svg" alt="DE" className="w-8 h-6 rounded shadow-sm" />
                  <span className="font-bold text-white">Deutschland</span>
                </div>
                <ul className="space-y-3 text-white/70">
                  <li className="flex gap-3"><Clock className="w-5 h-5 text-red-400" /> Dauer: 3 Jahre (Regelfall)</li>
                  <li className="flex gap-3"><ShieldAlert className="w-5 h-5 text-red-400" /> Strenge Wohlverhaltensphase</li>
                  <li className="flex gap-3"><ShieldAlert className="w-5 h-5 text-red-400" /> Schufa-Eintrag bleibt lange</li>
                </ul>
              </div>

              <div className="space-y-4 p-6 bg-green-500/10 rounded-2xl border border-green-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <img src="https://flagcdn.com/es.svg" alt="ES" className="w-8 h-6 rounded shadow-sm" />
                  <span className="font-bold text-white">Spanien</span>
                </div>
                <ul className="space-y-3 text-white/70">
                  <li className="flex gap-3"><Check className="w-5 h-5 text-green-400" /> Dauer: 12-18 Monate möglich</li>
                  <li className="flex gap-3"><Check className="w-5 h-5 text-green-400" /> Sofortige Restschuldbefreiung (BEPI)</li>
                  <li className="flex gap-3"><Check className="w-5 h-5 text-green-400" /> Keine deutsche Schufa-Meldung</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center pt-8">
            <Button size="lg" className="h-14 px-8 rounded-full bg-white text-black hover:bg-gray-200 font-bold text-lg">
              Kostenlose Ersteinschätzung <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
