import { motion } from "framer-motion";
import { Scale, Globe, Building2, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function About() {
  const [, setLocation] = useLocation();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-20"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            Kanzlei Master Law
          </h1>
          <p className="text-xl text-white/60 mb-8 leading-relaxed">
            Wir sind keine Agentur. Wir sind eine spezialisierte Kanzlei für internationales Steuerrecht und Insolvenzrecht.
            Rechtsanwalt & Steuerberater Oliver Wagner und sein Team bieten Ihnen rechtssichere Lösungen statt leerer Versprechungen.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <Scale className="w-4 h-4 text-primary" />
              <span className="text-sm">Rechtsanwälte & Steuerberater</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span className="text-sm">Haftung & Rechtssicherheit</span>
            </div>
          </div>
        </motion.div>

        {/* Core Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Pillar 1: Insolvency */}
          <motion.div 
            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
              <Scale className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Insolvenz & Neustart Spanien</h3>
            <p className="text-white/60 mb-6">
              Nutzen Sie das spanische "Ley de Segunda Oportunidad" für einen echten Neustart. 
              Anders als oft behauptet, ist dies kein "Tourismus", sondern ein geregeltes EU-Verfahren.
            </p>
            <ul className="space-y-3 text-sm text-white/80 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Wohnsitzverlagerung nach Spanien (4-6 Monate Vorlaufzeit empfohlen)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Verfahrensdauer oft nur 3-6 Monate bis zur Restschuldbefreiung</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Rechtssichere Begleitung durch zugelassene Anwälte vor Ort</span>
              </li>
            </ul>
          </motion.div>

          {/* Pillar 2: Dubai Setup */}
          <motion.div 
            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Firmengründung Dubai (VAE)</h3>
            <p className="text-white/60 mb-6">
              Maximale Steueroptimierung durch Nutzung aktueller Gesetze (Stand 2026). 
              Wir gründen Ihre Freezone-Company rechtssicher und beraten zur Substanz.
            </p>
            <ul className="space-y-3 text-sm text-white/80 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>0% Körperschaftsteuer</strong> möglich durch "Small Business Relief" (bis 3 Mio. AED Umsatz)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>0% Einkommensteuer</strong> auf Gehälter und Entnahmen</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Komplettabwicklung inkl. Visa, Emirates ID und Bankkonto</span>
              </li>
            </ul>
          </motion.div>

          {/* Pillar 3: Spain Tax/Legal */}
          <motion.div 
            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-6">
              <Globe className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Steuerberatung Spanien</h3>
            <p className="text-white/60 mb-6">
              Spezialisierte Betreuung für deutsche Auswanderer, S.L.-Gesellschaften und Autonomos auf Mallorca und dem Festland.
            </p>
            <ul className="space-y-3 text-sm text-white/80 mb-8">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>Beckham Law:</strong> Pauschal 24% Steuer für Zuzügler (unter bestimmten Voraussetzungen)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Laufende Buchhaltung & Steuererklärungen (Deutsch/Spanisch)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Rechtsberatung im Immobilien- und Gesellschaftsrecht</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center bg-white/5 rounded-3xl p-12 border border-white/10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">Sprechen Sie mit Experten, nicht mit Verkäufern.</h2>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto">
            Vereinbaren Sie ein kostenloses Erstgespräch, um Ihre Situation rechtlich fundiert zu analysieren.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-white/90 text-lg px-8 h-14 rounded-full"
            onClick={() => (document.getElementById('calendar-modal') as HTMLDialogElement)?.showModal()}
          >
            Kostenloses Erstgespräch vereinbaren <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
