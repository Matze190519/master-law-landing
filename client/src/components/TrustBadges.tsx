import { Shield, Lock, CreditCard, Award } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
  DE: {
    ssl: "SSL Verschlüsselt",
    stripe: "Sichere Zahlung",
    dsgvo: "DSGVO Konform",
    clients: "500+ Mandanten",
  },
  EN: {
    ssl: "SSL Encrypted",
    stripe: "Secure Payment",
    dsgvo: "GDPR Compliant",
    clients: "500+ Clients",
  },
  ES: {
    ssl: "Cifrado SSL",
    stripe: "Pago Seguro",
    dsgvo: "Conforme RGPD",
    clients: "500+ Clientes",
  },
};

export default function TrustBadges() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const badges = [
    { icon: <Lock className="w-4 h-4" />, label: t.ssl },
    { icon: <CreditCard className="w-4 h-4" />, label: t.stripe },
    { icon: <Shield className="w-4 h-4" />, label: t.dsgvo },
    { icon: <Award className="w-4 h-4" />, label: t.clients },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      {badges.map((badge, i) => (
        <div
          key={i}
          className="trust-badge flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-medium"
        >
          {badge.icon}
          <span>{badge.label}</span>
        </div>
      ))}
    </div>
  );
}
