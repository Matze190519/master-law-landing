import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Check, Shield, Globe, Building2, Scale, Clock, Calendar, ChevronRight, MessageSquare, Coins } from "lucide-react";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";

export default function Home() {
  const [income, setIncome] = useState(200000);
  const [taxSavings, setTaxSavings] = useState(0);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Calculate tax savings (German Tax ~45% vs Beckham Law 24%)
  useEffect(() => {
    const germanTax = income * 0.45;
    const beckhamTax = income * 0.24;
    setTaxSavings(germanTax - beckhamTax);
  }, [income]);

  return (
    <Layout>
      {/* SECTION 1: CINEMATIC HERO (Fullscreen) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-dubai-cinematic.jpg" 
            alt="Dubai Skyline Night" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60"></div>
        </div>

        <div className="container relative z-10 text-center space-y-8 pt-20">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md mb-4">
            <span className="text-xs font-medium text-white tracking-[0.3em] uppercase">The Future of Wealth</span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-bold text-white tracking-tighter leading-none drop-shadow-2xl">
            BEYOND <br/> BORDERS.
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-lg">
            Master Law architects your global freedom. <br/>
            <span className="text-white font-medium">Dubai Company Formation. Spanish Golden Visa. Tax Optimization.</span>
          </p>

          <div className="pt-8">
            <Button size="lg" className="h-16 px-12 rounded-full bg-white text-black hover:bg-white/90 text-lg font-bold tracking-wide shadow-[0_0_50px_rgba(255,255,255,0.3)] transition-all hover:scale-105 border-none">
              Start Your Journey
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* SECTION 2: INTERACTIVE TAX CALCULATOR (The "Hook") */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Stop Paying <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Too Much.</span>
              </h2>
              <p className="text-xl text-white/60 font-light leading-relaxed">
                With the <strong>Lex Beckham</strong> in Spain or a <strong>Dubai Freezone Company</strong>, you legally reduce your tax burden to a minimum. See the difference yourself.
              </p>
              
              <div className="flex items-center gap-4 text-white/80">
                <Check className="w-6 h-6 text-white" /> <span>100% Legal Compliance</span>
                <Check className="w-6 h-6 text-white" /> <span>EU Recognized</span>
              </div>
            </div>

            {/* Calculator Card */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-xl shadow-2xl">
              <div className="space-y-8">
                <div className="flex justify-between items-end">
                  <label className="text-sm uppercase tracking-widest text-white/50">Annual Income</label>
                  <span className="text-3xl font-bold text-white">€ {income.toLocaleString()}</span>
                </div>
                
                <Slider 
                  defaultValue={[200000]} 
                  max={1000000} 
                  step={10000} 
                  onValueChange={(val) => setIncome(val[0])}
                  className="py-4"
                />
                
                <div className="pt-8 border-t border-white/10 space-y-2">
                  <div className="text-sm uppercase tracking-widest text-white/50">Potential Annual Savings</div>
                  <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
                    € {taxSavings.toLocaleString()}
                  </div>
                  <p className="text-xs text-white/30 pt-2">*Estimated comparison vs. standard German tax rate.</p>
                </div>

                <Button className="w-full h-14 bg-white text-black font-bold rounded-xl hover:bg-white/90 shadow-lg border-none">
                  Optimize My Taxes Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: GLOBAL PRESENCE (3D Globe Concept) */}
      <section className="py-32 bg-black relative">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2 aspect-square relative flex items-center justify-center">
              {/* Placeholder for 3D Globe - using the generated image */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-[0_0_100px_rgba(255,255,255,0.1)] border border-white/10">
                <img 
                  src="/images/globe-dark.jpg" 
                  alt="Global Connections" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
                />
                {/* Overlay Points */}
                <div className="absolute top-[30%] left-[45%] w-3 h-3 bg-white rounded-full shadow-[0_0_20px_white] animate-pulse"></div>
                <div className="absolute top-[45%] left-[55%] w-3 h-3 bg-white rounded-full shadow-[0_0_20px_white] animate-pulse delay-700"></div>
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-50">
                  <path d="M 250 200 Q 350 150 400 280" stroke="white" strokeWidth="1" fill="none" strokeDasharray="5,5" />
                </svg>
              </div>
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
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Dubai Freezone</h3>
                    <p className="text-white/60 mt-2">0% Corporate Tax. 100% Ownership. Full privacy for your business operations.</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Coins className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Spanish Golden Visa</h3>
                    <p className="text-white/60 mt-2">Residency through investment. Freedom of movement within the Schengen Zone.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE OFFICE (Trust & Authority) */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/office-cinematic.jpg" 
            alt="Luxury Office" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-2xl bg-black/80 backdrop-blur-xl p-12 border border-white/10 rounded-none md:rounded-3xl">
            <h2 className="text-4xl font-bold text-white mb-6">Master Law Firm.</h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              We are not just lawyers. We are strategic partners for your wealth. 
              Located in the heart of Palma de Mallorca, we serve clients who demand excellence, discretion, and results.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-sm text-white/50 uppercase tracking-widest">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">€50M+</div>
                <div className="text-sm text-white/50 uppercase tracking-widest">Tax Saved</div>
              </div>
            </div>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black h-12 px-8 rounded-full transition-colors">
              Meet the Team
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 5: AI CONCIERGE & CONTACT */}
      <section className="py-32 bg-black text-center relative">
        <div className="container max-w-3xl">
          <h2 className="text-5xl font-bold text-white mb-8">Ready to Upgrade?</h2>
          <p className="text-xl text-white/60 mb-12">
            Schedule your private consultation today. Or ask our AI Concierge for immediate assistance.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="h-16 px-10 bg-white text-black hover:bg-white/90 rounded-full text-lg font-bold shadow-[0_0_30px_rgba(255,255,255,0.2)] border-none">
              Book Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="h-16 px-10 border-white/20 text-white hover:bg-white/10 rounded-full text-lg"
              onClick={() => setIsChatOpen(!isChatOpen)}
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Ask AI Assistant
            </Button>
          </div>
        </div>
      </section>

      {/* AI CHATBOT WIDGET (Fixed Bottom Right) */}
      {isChatOpen && (
        <div className="fixed bottom-8 right-8 w-[350px] h-[500px] bg-black border border-white/20 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          <div className="bg-white/10 p-4 flex justify-between items-center border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <span className="font-bold text-black text-xs">AI</span>
              </div>
              <div>
                <div className="font-bold text-white text-sm">Master Law Concierge</div>
                <div className="text-[10px] text-white/50 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Online
                </div>
              </div>
            </div>
            <button onClick={() => setIsChatOpen(false)} className="text-white/50 hover:text-white">
              <ChevronRight className="w-5 h-5 rotate-90" />
            </button>
          </div>
          <div className="flex-1 p-4 space-y-4 overflow-y-auto bg-black/90">
            <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none text-sm text-white/90 max-w-[80%]">
              Hello. I am your digital legal assistant. How can I help you optimize your taxes or structure your company today?
            </div>
            <div className="bg-white text-black p-3 rounded-2xl rounded-tr-none text-sm max-w-[80%] ml-auto">
              Tell me more about the Dubai Freezone setup.
            </div>
             <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none text-sm text-white/90 max-w-[80%]">
              A Dubai Freezone company offers 100% foreign ownership, 0% corporate tax for qualifying income, and full repatriation of profits. It also grants you a UAE residency visa. Would you like to see the setup costs?
            </div>
          </div>
          <div className="p-4 border-t border-white/10 bg-black">
            <div className="relative">
              <Input className="bg-white/5 border-white/10 rounded-full pr-10 text-white placeholder:text-white/30" placeholder="Type your question..." />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white">
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
          className="fixed bottom-8 right-8 w-14 h-14 bg-white text-black rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center hover:scale-110 transition-transform z-50"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      )}
    </Layout>
  );
}
