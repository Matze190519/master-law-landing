import { useEffect, useState, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const translations = {
  DE: {
    clients: "Mandanten betreut",
    savings: "Steuerersparnis erzielt",
    companies: "Firmen gegründet",
    countries: "Länder abgedeckt",
  },
  EN: {
    clients: "Clients Served",
    savings: "Tax Savings Achieved",
    companies: "Companies Founded",
    countries: "Countries Covered",
  },
  ES: {
    clients: "Clientes Atendidos",
    savings: "Ahorro Fiscal Logrado",
    companies: "Empresas Fundadas",
    countries: "Países Cubiertos",
  },
};

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * end));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return count;
}

export default function SocialProofCounter() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const clients = useCountUp(500, 2000, isVisible);
  const savings = useCountUp(12, 2000, isVisible);
  const companies = useCountUp(150, 2000, isVisible);
  const countries = useCountUp(15, 2000, isVisible);

  const stats = [
    { value: `${clients}+`, label: t.clients },
    { value: `€${savings}M+`, label: t.savings },
    { value: `${companies}+`, label: t.companies },
    { value: `${countries}+`, label: t.countries },
  ];

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      {stats.map((stat, i) => (
        <div key={i} className="text-center space-y-2">
          <div className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            {stat.value}
          </div>
          <div className="text-xs md:text-sm text-white/50 uppercase tracking-wider">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
