import { ReactNode } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll listener to change header background
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }

  const navLinks = [
    { name: "Firmenbetreuung", href: "#firmenbetreuung" },
    { name: "Dubai Gründung", href: "#dubai" },
    { name: "Insolvenz", href: "#insolvenz" },
    { name: "Über uns", href: "#ueber-uns" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Fixed Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer group">
              <div className="relative w-10 h-10 flex items-center justify-center bg-gradient-to-br from-primary to-yellow-600 rounded-lg shadow-[0_0_15px_rgba(212,175,55,0.3)] group-hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all duration-300">
                <span className="text-black font-bold text-xl">M</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-wide text-white group-hover:text-primary transition-colors">
                  MASTER LAW
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Firm Since 1997
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="https://wa.me/34657565656" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="text-green-500 hover:text-green-400 hover:bg-green-500/10">
                <MessageCircle className="w-5 h-5" />
              </Button>
            </a>
            <a href="#kontakt">
              <Button className="bg-gradient-to-r from-primary to-yellow-600 text-black font-bold hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 border-none">
                Termin buchen
              </Button>
            </a>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background/95 backdrop-blur-xl border-l border-border">
                <div className="flex flex-col gap-8 mt-10">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-2xl font-light text-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                  <div className="flex flex-col gap-4 mt-4">
                    <a href="https://wa.me/34657565656" target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button variant="outline" className="w-full border-green-500/50 text-green-500 hover:bg-green-500/10">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp
                      </Button>
                    </a>
                    <a href="#kontakt" className="w-full">
                      <Button className="w-full bg-gradient-to-r from-primary to-yellow-600 text-black font-bold">
                        Termin buchen
                      </Button>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 mt-20">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 flex items-center justify-center bg-primary rounded-md">
                <span className="text-black font-bold">M</span>
              </div>
              <span className="text-xl font-bold text-white">MASTER LAW FIRM</span>
            </div>
            <p className="text-muted-foreground max-w-md mb-6">
              Seit 1997 Ihr verlässlicher Partner für internationales Recht, Firmenstrukturen und Insolvenzverwaltung.
              "Machen Sie es lieber gleich richtig!"
            </p>
            <div className="flex gap-4">
              {/* Social Icons Placeholder */}
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-black transition-colors cursor-pointer">
                <span className="sr-only">Instagram</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </div>
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-black transition-colors cursor-pointer">
                <span className="sr-only">Facebook</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li><Link href="/impressum"><a className="text-muted-foreground hover:text-primary transition-colors">Impressum</a></Link></li>
              <li><Link href="/datenschutz"><a className="text-muted-foreground hover:text-primary transition-colors">Datenschutz</a></Link></li>
              <li><Link href="/agb"><a className="text-muted-foreground hover:text-primary transition-colors">AGB</a></Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Kontakt</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <div className="mt-1 text-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></div>
                <span>Avda. Alexandre Rosselló 15, 5º H<br/>07002 Palma de Mallorca</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="text-primary"><Phone className="w-4 h-4" /></div>
                <span>+34 871180619</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="text-green-500"><MessageCircle className="w-4 h-4" /></div>
                <span>+34 657 56 56 56 (24h WhatsApp)</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mt-12 pt-8 border-t border-border/30 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Master Law Firm SL. Alle Rechte vorbehalten.</p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/34657565656"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.5)] hover:scale-110 hover:shadow-[0_0_30px_rgba(34,197,94,0.7)] transition-all duration-300 animate-in fade-in slide-in-from-bottom-10"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}
