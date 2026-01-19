import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  const content = {
    DE: {
      text: "Wir verwenden Cookies, um Ihre Erfahrung zu verbessern und den Datenverkehr zu analysieren.",
      accept: "Akzeptieren",
      decline: "Ablehnen"
    },
    EN: {
      text: "We use cookies to enhance your experience and analyze our traffic.",
      accept: "Accept",
      decline: "Decline"
    },
    ES: {
      text: "Utilizamos cookies para mejorar su experiencia y analizar nuestro tráfico.",
      accept: "Aceptar",
      decline: "Rechazar"
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 bg-black/90 backdrop-blur-xl border-t border-white/10 animate-in slide-in-from-bottom duration-500">
      <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/80 text-sm md:text-base text-center md:text-left">
          {content[lang].text}
        </p>
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            onClick={declineCookies}
            className="border-white/20 text-white hover:bg-white/10"
          >
            {content[lang].decline}
          </Button>
          <Button 
            onClick={acceptCookies}
            className="bg-white text-black hover:bg-gray-200 font-bold"
          >
            {content[lang].accept}
          </Button>
        </div>
      </div>
    </div>
  );
}
