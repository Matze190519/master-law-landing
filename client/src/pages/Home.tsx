import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Check, Shield, Globe, Building2, Scale, Clock, Calendar, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function Home() {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: "Corporate Structure",
      subtitle: "Master Law Firm",
      desc: "Strategic company formation and management. Protect your assets with legally robust structures.",
      icon: "/images/icon-glass-company.png",
      features: ["Asset Protection", "Holding Structures", "Legal Compliance"]
    },
    {
      id: 2,
      title: "Global Tax Saving",
      subtitle: "Beckham Law & Optimization",
      desc: "Intelligent tax planning for high-net-worth individuals. Utilize the Lex Beckham (24% flat tax).",
      icon: "/images/icon-glass-tax.png",
      features: ["Lex Beckham Application", "Tax Residency Planning", "Fiscal Efficiency"]
    },
    {
      id: 3,
      title: "Dubai & Golden Visa",
      subtitle: "International Expansion",
      desc: "Seamless relocation to Dubai or Spain via Golden Visa. 0% tax strategies and residency.",
      icon: "/images/icon-glass-globe.png",
      features: ["UAE Company Formation", "Golden Visa Spain", "Emirates ID Service"]
    },
    {
      id: 4,
      title: "Insolvency Protection",
      subtitle: "Discreet Resolution",
      desc: "Fast and discreet personal insolvency proceedings in Spain. A fresh start for your financial future.",
      icon: "/images/icon-glass-shield.png",
      features: ["Debt Restructuring", "Legal Representation", "Fast-Track Process"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-titanium-glass.jpg" 
            alt="Titanium Glass Abstract" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-background"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)]"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_10px_white]"></span>
              <span className="text-xs font-medium text-white tracking-[0.2em] uppercase">Private Client Services</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="text-6xl md:text-8xl font-bold text-white leading-[1.1] tracking-tight"
            >
              Financial Freedom. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/40 filter drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                Legal Security.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed font-light"
            >
              We engineer bespoke legal and tax structures for the global elite. 
              From Dubai to Palma, we protect what you have built.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="h-16 px-10 text-lg bg-white text-black hover:bg-white/90 rounded-full font-medium shadow-[0_0_40px_rgba(255,255,255,0.15)] transition-all duration-500 hover:scale-105 border-none">
                    Book Consultation
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-black/90 backdrop-blur-2xl border border-white/10 text-white sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-light text-center mb-4">Schedule Your Strategy Session</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center gap-4 cursor-pointer hover:bg-white/10 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium">Online Consultation</div>
                        <div className="text-sm text-white/50">Via Zoom or Google Meet</div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-white/30 ml-auto" />
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center gap-4 cursor-pointer hover:bg-white/10 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                        <Building2 className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium">In-Person Meeting</div>
                        <div className="text-sm text-white/50">Palma de Mallorca Office</div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-white/30 ml-auto" />
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              
              <a href="#expertise" className="text-white/50 hover:text-white transition-colors flex items-center gap-2 text-sm uppercase tracking-widest font-medium group">
                Explore Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Grid Services Section */}
      <section id="expertise" className="py-32 relative">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setIsHovered(service.id)}
                onMouseLeave={() => setIsHovered(null)}
                className="group relative overflow-hidden rounded-[2rem] bg-white/[0.03] border border-white/5 backdrop-blur-sm hover:bg-white/[0.06] hover:border-white/10 transition-all duration-500 min-h-[400px] flex flex-col p-10"
              >
                {/* Spotlight Effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.06), transparent 40%)`
                  }}
                ></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center backdrop-blur-md shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <img src={service.icon} alt={service.title} className="w-10 h-10 object-contain opacity-90" />
                    </div>
                    <div className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest text-white/50">
                      {service.subtitle}
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-glow transition-all duration-300">{service.title}</h3>
                  <p className="text-lg text-white/60 mb-8 leading-relaxed font-light">{service.desc}</p>

                  <div className="mt-auto space-y-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-white/40 group-hover:text-white/70 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white transition-colors"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                    <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative border-t border-white/5">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Start the Conversation.</h2>
            <p className="text-xl text-white/50 font-light">
              Discretion and efficiency are our core values. Contact us to discuss your case.
            </p>
          </div>

          <div className="bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 md:p-12 backdrop-blur-sm">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 ml-1">First Name</label>
                  <Input className="bg-white/5 border-white/10 h-14 rounded-xl text-white focus:border-white/30 focus:bg-white/10 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 ml-1">Last Name</label>
                  <Input className="bg-white/5 border-white/10 h-14 rounded-xl text-white focus:border-white/30 focus:bg-white/10 transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 ml-1">Email Address</label>
                <Input type="email" className="bg-white/5 border-white/10 h-14 rounded-xl text-white focus:border-white/30 focus:bg-white/10 transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 ml-1">Topic</label>
                <select className="w-full bg-white/5 border border-white/10 h-14 rounded-xl text-white px-4 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all appearance-none">
                  <option className="bg-black">Corporate Structure</option>
                  <option className="bg-black">Global Tax Saving (Beckham Law)</option>
                  <option className="bg-black">Dubai / Golden Visa</option>
                  <option className="bg-black">Insolvency</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 ml-1">Message</label>
                <Textarea className="bg-white/5 border-white/10 min-h-[150px] rounded-xl text-white focus:border-white/30 focus:bg-white/10 transition-all resize-none p-4" />
              </div>

              <Button size="lg" className="w-full h-16 bg-white text-black hover:bg-white/90 rounded-xl font-bold text-lg shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300 border-none">
                Send Request
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
