import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Scale, Clock, ShieldAlert, XCircle, AlertTriangle, FileCheck } from "lucide-react";
import { Link } from "wouter";

export default function Insolvency() {
  return (
    <Layout>
      <div className="pt-32 pb-20 container">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/10 bg-white/5">
              <Scale className="w-4 h-4 text-white" />
              <span className="text-xs font-bold text-white uppercase tracking-widest">Insolvenzrecht</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight">
              Neustart <br/> <span className="text-white/50">in Spanien.</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Nutzen Sie das spanische "Ley de Segunda Oportunidad" für eine schnellere Restschuldbefreiung als in Deutschland. 
              Legal, sicher und diskret.
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
                      <p className="text-white/50 text-sm">Restschuldbefreiung oft schon nach 12-18 Monaten möglich.</p>
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

          {/* Process Steps */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white text-center">Der Ablauf</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { step: "01", title: "Analyse", desc: "Prüfung Ihrer Situation und Machbarkeit." },
                { step: "02", title: "Umzug", desc: "Wohnsitzverlegung nach Spanien (wir helfen)." },
                { step: "03", title: "Antrag", desc: "Einreichung des Insolvenzantrags beim spanischen Gericht." },
                { step: "04", title: "Freiheit", desc: "Erteilung der Restschuldbefreiung (BEPI)." }
              ].map((item, i) => (
                <div key={i} className="glass-panel p-6 rounded-2xl border border-white/10 hover:bg-white/5 transition-colors">
                  <div className="text-4xl font-bold text-white/10 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center pt-12 border-t border-white/10">
            <h2 className="text-3xl font-bold text-white mb-6">Starten Sie Ihr neues Leben schuldenfrei.</h2>
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
