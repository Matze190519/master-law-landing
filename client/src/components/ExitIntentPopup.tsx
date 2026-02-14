import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Gift, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
  DE: {
    title: "Warten Sie!",
    subtitle: "Bevor Sie gehen...",
    offer: "Kostenlose Erstberatung",
    description: "Sichern Sie sich jetzt Ihre kostenlose 15-Minuten Erstberatung zu Ihrem Anliegen. Unverbindlich und ohne Risiko.",
    cta: "Kostenlose Beratung sichern",
    dismiss: "Nein danke, ich möchte keine kostenlose Beratung",
  },
  EN: {
    title: "Wait!",
    subtitle: "Before you leave...",
    offer: "Free Initial Consultation",
    description: "Secure your free 15-minute initial consultation on your matter. No obligation, no risk.",
    cta: "Get Free Consultation",
    dismiss: "No thanks, I don't want a free consultation",
  },
  ES: {
    title: "¡Espere!",
    subtitle: "Antes de irse...",
    offer: "Consulta Inicial Gratuita",
    description: "Asegure su consulta inicial gratuita de 15 minutos sobre su asunto. Sin compromiso, sin riesgo.",
    cta: "Obtener Consulta Gratuita",
    dismiss: "No gracias, no quiero una consulta gratuita",
  },
};

interface ExitIntentPopupProps {
  onBooking: () => void;
}

export default function ExitIntentPopup({ onBooking }: ExitIntentPopupProps) {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if already shown in this session
    if (sessionStorage.getItem("exitIntentShown")) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem("exitIntentShown", "true");
      }
    };

    // Only add on desktop
    if (window.innerWidth > 768) {
      document.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown]);

  const handleCTA = () => {
    setIsOpen(false);
    onBooking();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="bg-zinc-950 border border-white/10 text-white max-w-md p-0 overflow-hidden">
        {/* Top accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-green-500 via-emerald-400 to-green-500" />
        
        <div className="p-8 text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto">
            <Gift className="w-8 h-8 text-green-400" />
          </div>

          <div>
            <p className="text-sm text-green-400 font-medium uppercase tracking-wider mb-2">{t.subtitle}</p>
            <h2 className="text-3xl font-bold text-white">{t.title}</h2>
          </div>

          <div className="bg-white/5 rounded-xl p-4 border border-white/10">
            <p className="text-lg font-bold text-white mb-2">{t.offer}</p>
            <p className="text-white/60 text-sm">{t.description}</p>
          </div>

          <Button
            onClick={handleCTA}
            className="w-full h-14 bg-white text-black font-bold text-lg rounded-xl hover:bg-gray-200 border-none animate-pulse-glow"
          >
            {t.cta} <ArrowRight className="w-5 h-5 ml-2" />
          </Button>

          <button
            onClick={() => setIsOpen(false)}
            className="text-xs text-white/30 hover:text-white/50 transition-colors underline"
          >
            {t.dismiss}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
