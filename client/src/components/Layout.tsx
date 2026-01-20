import { ReactNode, useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useLanguage } from "@/contexts/LanguageContext";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, setLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Startseite", href: "/" },
    { name: "Dubai Gründung", href: "/dubai-setup" },
    { name: "Steuerberatung", href: "/tax-services" },
    { name: "Insolvenzschutz", href: "/insolvency" },
    { name: "Über Uns", href: "/about" },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white/20 selection:text-white overflow-x-hidden">
      {/* Ambient Background Light - Simplified */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none z-0 opacity-30"></div>

      {/* Fixed Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10 py-4"
            : "bg-transparent py-8"
        }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="relative w-10 h-10 flex items-center justify-center bg-white/10 rounded-xl border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all duration-500">
                <span className="text-white font-bold text-xl tracking-tighter">M</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-wide text-white group-hover:text-glow transition-all duration-500">
                  MASTER LAW
                </span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-white/50">
                  Global Tax & Rechtliches
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="px-5 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center gap-2 text-xs font-medium text-white/50 bg-white/5 px-3 py-2 rounded-full border border-white/10">
              <Globe className="w-3 h-3" />
              <span className={lang === "DE" ? "text-white" : "hover:text-white cursor-pointer"} onClick={() => setLang("DE")}>DE</span>
              <span className="text-white/20">|</span>
              <span className={lang === "EN" ? "text-white" : "hover:text-white cursor-pointer"} onClick={() => setLang("EN")}>EN</span>
              <span className="text-white/20">|</span>
              <span className={lang === "ES" ? "text-white" : "hover:text-white cursor-pointer"} onClick={() => setLang("ES")}>ES</span>
            </div>

            <a href="https://calendly.com/master-law/30min" target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-black hover:bg-white/90 font-medium rounded-full px-6 shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300 border-none">
                Beratung buchen
              </Button>
            </a>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black border-l border-white/10 w-full sm:w-[400px]">
                <div className="flex flex-col gap-8 mt-20 px-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-3xl font-light text-white/80 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <div className="h-px w-full bg-white/10 my-4"></div>
                  <a href="https://calendly.com/master-law/30min" target="_blank" rel="noopener noreferrer" className="w-full">
                    <Button className="w-full bg-white text-black font-bold h-12 rounded-xl text-lg">
                      Beratung buchen
                    </Button>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-20 mt-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-lg border border-white/10">
                  <span className="text-white font-bold">M</span>
                </div>
                <span className="text-xl font-bold text-white tracking-wide">MASTER LAW</span>
              </div>
              <p className="text-white/50 max-w-md leading-relaxed">
                Internationale Rechtsstrukturen, Steueroptimierung und Insolvenzschutz für vermögende Privatpersonen und Unternehmen.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-medium mb-6">Rechtliches</h3>
              <ul className="space-y-4 text-white/50">
                <li><Link href="/imprint" className="hover:text-white transition-colors">Impressum</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Datenschutz</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-medium mb-6">Kontakt</h3>
              <ul className="space-y-4 text-white/50">
                <li>Avda. Alexandre Rosselló 15, 6º D<br/>07002 Palma de Mallorca</li>
                <li>+34 871 24 24 04</li>
                <li>info@lr-lifestyle.info</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30">
            <p>&copy; {new Date().getFullYear()} Master Law Firm SL. All rights reserved.</p>
            <p>Präzise gestaltet. <span className="text-green-500 font-bold ml-2">v2.0 (Live)</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
