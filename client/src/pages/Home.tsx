import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Check, Shield, Globe, Building2, Scale, Clock, Calendar, ChevronRight, MessageSquare, Coins, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import Globe3D from "@/components/Globe3D";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { faqs } from "@/data/faqs";
import { translations } from "@/data/translations";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Home() {
  const [income, setIncome] = useState(200000);
  const [lang, setLang] = useState<"EN" | "DE" | "ES">("DE");
  const t = translations[lang];
  const [taxSavingsBeckham, setTaxSavingsBeckham] = useState(0);
  const [taxSavingsDubai, setTaxSavingsDubai] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  // Calculate tax savings
  useEffect(() => {
    const germanTax = income * 0.45; // Approx 45%
    
    // Beckham Law: 24% flat rate up to 600k
    const beckhamTax = income * 0.24;
    
    // Dubai: 0% up to 375k AED (~95k EUR), 9% above
    const dubaiThreshold = 95000;
    let dubaiTax = 0;
    if (income > dubaiThreshold) {
      dubaiTax = (income - dubaiThreshold) * 0.09;
    }

    setTaxSavingsBeckham(germanTax - beckhamTax);
    setTaxSavingsDubai(germanTax - dubaiTax);
  }, [income]);

  return (
    <Layout>
      {/* LANGUAGE SWITCHER (Fixed Top Right) */}
      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-[100] flex gap-2 bg-black/80 backdrop-blur-xl p-1 rounded-full border border-white/20 shadow-2xl">
        {(["DE", "EN", "ES"] as const).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`px-3 py-2 md:py-1 rounded-full text-xs font-bold transition-all ${
              lang === l 
                ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.6)]" 
                : "text-white/50 hover:text-white"
            }`}
          >
            {l}
          </button>
        ))}
      </div>

      {/* SECTION 1: CINEMATIC HERO (Fullscreen) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-dubai-cinematic.jpg" 
            alt="Dubai Skyline Night" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black"></div>
        </div>

        <div className="container relative z-10 text-center space-y-8 pt-20">
          <div className="inline-block px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-4 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <span className="text-xs font-bold text-white tracking-[0.3em] uppercase">The Future of Wealth</span>
          </div>
          
          <h1 className="text-5xl md:text-9xl font-bold text-white tracking-tighter leading-none drop-shadow-2xl">
            {t.heroTitle}
          </h1>
          
          <p className="text-lg md:text-2xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-lg px-4">
            {t.heroSubtitle}
          </p>

          <div className="pt-8 md:pt-12">
            <Button size="lg" className="h-14 md:h-16 px-8 md:px-12 rounded-full bg-white text-black hover:bg-gray-200 text-base md:text-lg font-bold tracking-wide shadow-[0_0_50px_rgba(255,255,255,0.4)] transition-all hover:scale-105 border-none">
              {t.ctaStart}
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTERACTIVE TAX CALCULATOR (The "Hook") */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grid.png')] opacity-10"></div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-7xl font-bold text-white leading-tight">
                {t.taxTitle}
              </h2>
              <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
                {t.taxSubtitle}
              </p>
              
              <div className="flex flex-col gap-4 pt-4">
                <div className="flex items-center gap-4 text-white/80 bg-white/5 p-4 rounded-xl border border-white/10">
                  <Check className="w-6 h-6 text-green-400" /> 
                  <div>
                    <div className="font-bold text-white">Dubai Freezone</div>
                    <div className="text-sm text-white/50">0% Tax up to 375k AED (~95k EUR)</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white/80 bg-white/5 p-4 rounded-xl border border-white/10">
                  <Check className="w-6 h-6 text-green-400" /> 
                  <div>
                    <div className="font-bold text-white">Beckham Law (Spain)</div>
                    <div className="text-sm text-white/50">24% Flat Rate up to 600k EUR</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Calculator Card */}
            <div className="glass-panel rounded-3xl p-10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="space-y-8 relative z-10">
                <div className="flex justify-between items-end">
                  <label className="text-xs md:text-sm uppercase tracking-widest text-white/50">{t.incomeLabel}</label>
                  <span className="text-2xl md:text-3xl font-bold text-white">€ {income.toLocaleString()}</span>
                </div>
                
                <Slider 
                  defaultValue={[200000]} 
                  max={1000000} 
                  step={10000} 
                  onValueChange={(val) => setIncome(val[0])}
                  className="py-4"
                />
                
                <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/10">
                  <div className="space-y-2">
                    <div className="text-[10px] md:text-xs uppercase tracking-widest text-white/50">{t.savingsBeckham}</div>
                    <div className="text-xl md:text-3xl font-bold text-white">
                      € {taxSavingsBeckham.toLocaleString()}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-[10px] md:text-xs uppercase tracking-widest text-white/50">{t.savingsDubai}</div>
                    <div className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                      € {taxSavingsDubai.toLocaleString()}
                    </div>
                  </div>
                </div>

                <Button className="w-full h-14 bg-white text-black font-bold rounded-xl hover:bg-gray-200 shadow-lg border-none mt-4">
                  Get Optimized Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: GLOBAL PRESENCE (Real 3D Globe) */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 h-[500px] relative flex items-center justify-center">
              <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full"></div>
              <Globe3D />
            </div>
            
            <div className="w-full md:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-white/10 bg-white/5">
                <Globe className="w-4 h-4 text-white" />
                <span className="text-xs font-bold text-white uppercase tracking-widest">Global Access</span>
              </div>
              
              <h2 className="text-5xl font-bold text-white">
                Dubai. Palma. <br/> The World.
              </h2>
              
              <div className="space-y-6">
                <div className="glass-panel p-6 rounded-2xl flex gap-6 hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Dubai Freezone</h3>
                    <p className="text-white/60 mt-2 text-sm">
                      100% Foreign Ownership. 0% Corporate Tax (Qualifying Income). 
                      Full repatriation of capital and profits. No currency restrictions.
                    </p>
                  </div>
                </div>
                
                <div className="glass-panel p-6 rounded-2xl flex gap-6 hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
                    <Coins className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Spanish Golden Visa</h3>
                    <p className="text-white/60 mt-2 text-sm">
                      Residency through real estate investment (€500k). 
                      Freedom of movement within the Schengen Zone. Path to citizenship.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3.5: PACKAGES (Restored & Upgraded) */}
      <section className="py-20 md:py-32 bg-black relative">
        <div className="container">
          <h2 className="text-4xl md:text-6xl font-bold text-white text-center mb-16">{t.packagesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Package 1 */}
            <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-white/30 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                <Building2 className="w-24 h-24 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{t.package1Title}</h3>
              <p className="text-white/60 mb-8 h-20">{t.package1Desc}</p>
              <Button className="w-full bg-white text-black hover:bg-gray-200 font-bold rounded-xl">{t.bookBtn}</Button>
            </div>
            {/* Package 2 */}
            <div className="glass-panel p-8 rounded-3xl border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:scale-105 transition-transform relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">{t.package2Title}</h3>
                <p className="text-white/60 mb-8 h-20">{t.package2Desc}</p>
                <Button className="w-full bg-white text-black hover:bg-gray-200 font-bold rounded-xl shadow-lg">{t.bookBtn}</Button>
              </div>
            </div>
            {/* Package 3 */}
            <div className="glass-panel p-8 rounded-3xl border border-white/10 hover:border-white/30 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
                <Shield className="w-24 h-24 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{t.package3Title}</h3>
              <p className="text-white/60 mb-8 h-20">{t.package3Desc}</p>
              <Button className="w-full bg-white text-black hover:bg-gray-200 font-bold rounded-xl">{t.bookBtn}</Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: INSOLVENCY COMPARISON (Deep Research) */}
      <section className="py-20 md:py-32 bg-black relative">
        <div className="container">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold text-white">Second Chance.</h2>
            <p className="text-xl text-white/60">Why Spain's "Ley de Segunda Oportunidad" beats German Insolvency.</p>
          </div>

          <div className="glass-panel rounded-3xl overflow-hidden border border-white/10">
            <div className="grid grid-cols-3 bg-white/5 border-b border-white/10 p-6">
              <div className="text-white/50 font-bold uppercase tracking-widest text-sm">Feature</div>
              <div className="text-white font-bold text-center text-xl">Germany 🇩🇪</div>
              <div className="text-white font-bold text-center text-xl">Spain 🇪🇸</div>
            </div>
            
            <div className="divide-y divide-white/5">
              <div className="grid grid-cols-3 p-6 hover:bg-white/5 transition-colors">
                <div className="text-white/70 font-medium">Duration</div>
                <div className="text-white text-center">3 Years</div>
                <div className="text-green-400 font-bold text-center">12 - 18 Months</div>
              </div>
              <div className="grid grid-cols-3 p-6 hover:bg-white/5 transition-colors">
                <div className="text-white/70 font-medium">Debt Discharge</div>
                <div className="text-white text-center">Complex Process</div>
                <div className="text-green-400 font-bold text-center">Immediate (BEPI)</div>
              </div>
              <div className="grid grid-cols-3 p-6 hover:bg-white/5 transition-colors">
                <div className="text-white/70 font-medium">Public Record</div>
                <div className="text-white text-center">Schufa Entry (3 Years)</div>
                <div className="text-green-400 font-bold text-center">Private (CIRBE only)</div>
              </div>
              <div className="grid grid-cols-3 p-6 hover:bg-white/5 transition-colors">
                <div className="text-white/70 font-medium">Asset Protection</div>
                <div className="text-white text-center">Strict Seizure</div>
                <div className="text-green-400 font-bold text-center">Flexible Plans</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQ (High-Tech Accordion) */}
      <section className="py-32 bg-black relative border-t border-white/10">
        <div className="container max-w-4xl">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Expert Insights.</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-white/10 rounded-xl px-6 bg-white/5 data-[state=open]:bg-white/10 transition-all">
                <AccordionTrigger className="text-white hover:text-white/80 text-lg font-medium py-6">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-white/60 text-base pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* SECTION 6: AI CONCIERGE & CONTACT */}
      <section className="py-32 bg-black text-center relative">
        <div className="container max-w-3xl">
          <h2 className="text-5xl font-bold text-white mb-8">Ready to Upgrade?</h2>
          <p className="text-xl text-white/60 mb-12">
            Schedule your private consultation today. Or ask our AI Concierge for immediate assistance.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="h-16 px-10 bg-white text-black hover:bg-gray-200 rounded-full text-lg font-bold shadow-[0_0_30px_rgba(255,255,255,0.3)] border-none transition-transform hover:scale-105">
              {t.bookBtn}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-16 px-10 border-white/20 text-white hover:bg-white/10 rounded-full text-lg backdrop-blur-md"
              onClick={() => setIsChatOpen(!isChatOpen)}
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              {t.chatBtn}
            </Button>
          </div>
        </div>
      </section>

      {/* AI CHATBOT WIDGET (Fixed Bottom Right) */}
      {isChatOpen && (
        <div className="fixed bottom-8 right-8 w-[380px] h-[600px] bg-black/90 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          <div className="bg-white/10 p-4 flex justify-between items-center border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                <span className="font-bold text-black text-xs">AI</span>
              </div>
              <div>
                <div className="font-bold text-white text-sm">Master Law Concierge</div>
                <div className="text-[10px] text-white/50 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Online
                </div>
              </div>
            </div>
            <button onClick={() => setIsChatOpen(false)} className="text-white/50 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            <div className="bg-white/10 p-4 rounded-2xl rounded-tl-none text-sm text-white/90 max-w-[85%] border border-white/5">
              Hello. I am your digital legal assistant. I can help you with:
              <ul className="list-disc list-inside mt-2 space-y-1 text-white/70">
                <li>Dubai Company Formation (0% Tax)</li>
                <li>Spanish Golden Visa</li>
                <li>Insolvency & Debt Relief</li>
              </ul>
            </div>
            <div className="bg-white text-black p-4 rounded-2xl rounded-tr-none text-sm max-w-[85%] ml-auto shadow-lg font-medium">
              What are the requirements for 0% tax in Dubai?
            </div>
             <div className="bg-white/10 p-4 rounded-2xl rounded-tl-none text-sm text-white/90 max-w-[85%] border border-white/5">
              To qualify for 0% Corporate Tax in a Dubai Freezone, you must:
              <br/><br/>
              1. Maintain "adequate substance" in the UAE.<br/>
              2. Derive "Qualifying Income" (e.g., trade with other Freezone entities).<br/>
              3. Comply with Transfer Pricing rules.<br/>
              <br/>
              Income up to AED 375,000 (~€95,000) is generally taxed at 0% for small businesses.
            </div>
          </div>
          
          <div className="p-4 border-t border-white/10 bg-black/50">
            <div className="relative">
              <Input className="bg-white/5 border-white/10 rounded-full pr-12 h-12 text-white placeholder:text-white/30 focus:border-white/30 focus:ring-0" placeholder="Type your question..." />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Floating Chat Trigger (if closed) */}
      {!isChatOpen && (
        <button 
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-8 right-8 w-16 h-16 bg-white text-black rounded-full shadow-[0_0_40px_rgba(255,255,255,0.3)] flex items-center justify-center hover:scale-110 transition-transform z-50 group"
        >
          <MessageSquare className="w-7 h-7 group-hover:animate-pulse" />
        </button>
      )}
    </Layout>
  );
}
