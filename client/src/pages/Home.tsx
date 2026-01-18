import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Check, Shield, Globe, Building2, Scale, Clock, Award, Star, MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-dubai-gold.jpg" 
            alt="Dubai Skyline at Night" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background"></div>
        </div>

        <div className="container relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-sm font-medium text-primary-foreground tracking-wide">PREMIUM RECHTSBERATUNG SEIT 1997</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight"
            >
              Machen Sie es lieber <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-yellow-200 to-primary drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]">
                gleich richtig.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
            >
              Internationale Firmenstrukturen, Insolvenzschutz und Dubai-Gründungen. 
              Wir schützen Ihr Vermögen und sichern Ihre Zukunft.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <a href="#pakete" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg bg-primary text-black font-bold hover:bg-yellow-400 hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition-all duration-300 rounded-full">
                  Lösungen entdecken
                </Button>
              </a>
              <a href="#kontakt" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg border-white/20 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-sm rounded-full">
                  Kostenloses Erstgespräch
                </Button>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-xs uppercase tracking-widest">Scrollen</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
        </motion.div>
      </section>

      {/* Trust Indicators */}
      <section className="py-10 border-b border-white/5 bg-black/40 backdrop-blur-sm">
        <div className="container">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logos would go here, using text placeholders for now */}
            <span className="text-lg font-bold text-white/80 flex items-center gap-2"><Globe className="w-5 h-5"/> Dubai Chamber</span>
            <span className="text-lg font-bold text-white/80 flex items-center gap-2"><Award className="w-5 h-5"/> JuraForum Premium</span>
            <span className="text-lg font-bold text-white/80 flex items-center gap-2"><Building2 className="w-5 h-5"/> IHK Partner</span>
            <span className="text-lg font-bold text-white/80 flex items-center gap-2"><Scale className="w-5 h-5"/> Spanische Handelskammer</span>
          </div>
        </div>
      </section>

      {/* Main Products Section */}
      <section id="pakete" className="py-24 relative">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white">Unsere Premium Lösungen</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Maßgeschneiderte Pakete für Ihren geschäftlichen Erfolg und rechtliche Sicherheit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1: Firmenbetreuung */}
            <div id="firmenbetreuung" className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-b from-primary/50 to-transparent rounded-2xl blur opacity-20 group-hover:opacity-75 transition duration-500"></div>
              <Card className="relative h-full bg-card border-white/10 overflow-hidden flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <img src="/images/icon-company.jpg" alt="Firmenbetreuung" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
                </div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-white">Firmenbetreuung</CardTitle>
                  <CardDescription className="text-base">Unternehmensberatung & Steuersparmodelle</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex-grow">
                  <p className="text-muted-foreground">
                    Optimierung von Firmenstrukturen und legale Steuersparmodelle. Gehen Sie dorthin, wo Sie am besten behandelt werden.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                      <span>Schutz des Vermögens vor Rechtsstreitigkeiten</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                      <span>Legale Steueroptimierung (Offshore)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                      <span>Reduzierung bürokratischer Pflichten</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-white/5 hover:bg-primary hover:text-black border border-white/10 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                    Jetzt anfragen <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Product 2: Dubai Gründung */}
            <div id="dubai" className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-b from-primary to-transparent rounded-2xl blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
              <Card className="relative h-full bg-card border-primary/30 overflow-hidden flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <div className="absolute top-4 right-4 z-20">
                  <span className="px-3 py-1 bg-primary text-black text-xs font-bold rounded-full uppercase tracking-wider">Bestseller</span>
                </div>
                <div className="h-48 overflow-hidden relative">
                  <img src="/images/icon-dubai.jpg" alt="Dubai Gründung" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
                </div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(212,175,55,0.5)]">
                    <Globe className="w-6 h-6 text-black" />
                  </div>
                  <CardTitle className="text-2xl text-white">Firmengründung Dubai</CardTitle>
                  <CardDescription className="text-base">Starten Sie im Wirtschaftszentrum der Zukunft</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex-grow">
                  <p className="text-muted-foreground">
                    Nutzen Sie die Vorteile der VAE: 0% Einkommensteuer, 100% Eigentum und strategische Lage. Wir sind Mitglied der Dubai Chamber.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                      <span>Komplette Gründungsabwicklung</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                      <span>Visa & Emirates ID Service</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                      <span>Bankkonto-Eröffnung inklusive</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-primary text-black hover:bg-yellow-400 font-bold shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300">
                    Paket buchen <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            </div>

            {/* Product 3: Insolvenz */}
            <div id="insolvenz" className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-b from-primary/50 to-transparent rounded-2xl blur opacity-20 group-hover:opacity-75 transition duration-500"></div>
              <Card className="relative h-full bg-card border-white/10 overflow-hidden flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <img src="/images/icon-insolvency.jpg" alt="Insolvenzverwaltung" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
                </div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 border border-primary/20">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-white">Insolvenz & Schutz</CardTitle>
                  <CardDescription className="text-base">Professionelle Insolvenzverwaltung</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex-grow">
                  <p className="text-muted-foreground">
                    Diskrete und effiziente Unterstützung bei Insolvenzverfahren und Schuldenmanagement für Firmen und Privatpersonen.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                      <span>Schuldnerberatung & Verhandlungen</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                      <span>Schutz vor Vollstreckungsmaßnahmen</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                      <span>Neustart-Strategien</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-white/5 hover:bg-primary hover:text-black border border-white/10 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]">
                    Beratung anfordern <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="ueber-uns" className="py-24 bg-secondary/30 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Erfahrung, die <br/>
                <span className="text-primary">Sicherheit schafft.</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Die Master Law Firm SL mit Sitz in Palma de Mallorca bietet seit 1997 umfassende Rechtsberatung an. 
                  Unser Ziel ist es, stets durch erstrangige Leistungen bestmögliche Ergebnisse für unsere Mandantschaft zu erwirken.
                </p>
                <p>
                  Wir setzen auf Diskretion, Effizienz und Verlässlichkeit. Unsere Erfahrung erstreckt sich über nationale und internationale Grenzen hinweg, 
                  um Ihnen Lösungen zu bieten, die funktionieren.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-4 rounded-xl bg-background border border-white/5">
                  <div className="text-3xl font-bold text-primary mb-1">1997</div>
                  <div className="text-sm text-muted-foreground">Gegründet</div>
                </div>
                <div className="p-4 rounded-xl bg-background border border-white/5">
                  <div className="text-3xl font-bold text-primary mb-1">24h</div>
                  <div className="text-sm text-muted-foreground">Service</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-xl"></div>
              <img 
                src="/images/hero-palma-office.jpg" 
                alt="Kanzlei Büro" 
                className="relative rounded-2xl shadow-2xl border border-white/10 w-full"
              />
              
              {/* Floating Card */}
              <div className="absolute -bottom-10 -left-10 bg-card p-6 rounded-xl border border-white/10 shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-white">WhatsApp Service</div>
                    <div className="text-xs text-muted-foreground">Immer erreichbar</div>
                  </div>
                </div>
                <p className="text-sm text-gray-400">"In dringlichen Fällen rufen wir Sie sofort zurück."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-24 relative">
        <div className="container max-w-5xl">
          <div className="bg-card border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Contact Info */}
              <div className="lg:col-span-2 bg-secondary p-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Kontaktieren Sie uns</h3>
                  <p className="text-muted-foreground mb-8">
                    Unser kompetentes Team ist gerne für Sie da. Wir melden uns innerhalb von 24 Stunden.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Phone className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <div className="font-medium text-white">Telefon</div>
                        <div className="text-muted-foreground">+34 871180619</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MessageCircle className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <div className="font-medium text-white">WhatsApp</div>
                        <div className="text-muted-foreground">+34 657 56 56 56</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Building2 className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <div className="font-medium text-white">Büro</div>
                        <div className="text-muted-foreground">
                          Avda. Alexandre Rosselló 15, 5º H<br/>
                          07002 Palma de Mallorca
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <div className="font-medium text-white">Öffnungszeiten</div>
                        <div className="text-muted-foreground">
                          Mo - Fr: 10:00 - 17:00<br/>
                          Sa: 10:00 - 14:00
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <div className="w-full h-32 rounded-xl bg-black/50 overflow-hidden relative">
                    {/* Map Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground text-sm">
                      Karte wird geladen...
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3 p-10 bg-background">
                <h3 className="text-2xl font-bold text-white mb-2">Termin vereinbaren</h3>
                <p className="text-muted-foreground mb-8">Füllen Sie das Formular aus für ein kostenloses Erstgespräch.</p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Vorname</label>
                      <Input placeholder="Max" className="bg-secondary/50 border-white/10 focus:border-primary/50" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Nachname</label>
                      <Input placeholder="Mustermann" className="bg-secondary/50 border-white/10 focus:border-primary/50" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">E-Mail Adresse</label>
                    <Input type="email" placeholder="max@beispiel.de" className="bg-secondary/50 border-white/10 focus:border-primary/50" />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Interesse an</label>
                    <select className="flex h-10 w-full rounded-md border border-white/10 bg-secondary/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-white">
                      <option>Firmenbetreuung</option>
                      <option>Firmengründung Dubai</option>
                      <option>Insolvenzberatung</option>
                      <option>Sonstiges</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Nachricht</label>
                    <Textarea placeholder="Beschreiben Sie kurz Ihr Anliegen..." className="min-h-[120px] bg-secondary/50 border-white/10 focus:border-primary/50" />
                  </div>
                  
                  <Button size="lg" className="w-full bg-primary text-black font-bold hover:bg-yellow-400 transition-all duration-300">
                    Anfrage absenden
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
