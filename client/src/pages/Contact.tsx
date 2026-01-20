import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/data/translations";
import SEO from "@/components/SEO";

export default function Contact() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <Layout>
      <SEO 
        title={t.contactTitle}
        description={t.contactSubtitle}
      />
      
      <div className="pt-32 pb-20 bg-black min-h-screen">
        <div className="container max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{t.contactTitle}</h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              {t.contactSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="glass-panel p-8 rounded-3xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-white/50 uppercase tracking-wider mb-1">Phone</div>
                      <a href="tel:+34871242404" className="text-lg text-white hover:text-white/80 transition-colors">
                        +34 871 24 24 04
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-white/50 uppercase tracking-wider mb-1">Email</div>
                      <a href="mailto:info@lr-lifestyle.info" className="text-lg text-white hover:text-white/80 transition-colors">
                        info@lr-lifestyle.info
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-white/50 uppercase tracking-wider mb-1">Office</div>
                      <div className="text-lg text-white">
                        Avda. Alexandre Rosselló 15, 6º D<br />
                        07002 Palma de Mallorca<br />
                        Spain
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-white/50 uppercase tracking-wider mb-1">Hours</div>
                      <div className="text-lg text-white">
                        Mon - Fri: 09:00 - 18:00<br />
                        Sat - Sun: Closed
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10">
              <form 
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const subject = `New Inquiry: ${formData.get('name')}`;
                  const body = `Name: ${formData.get('name')}%0D%0AEmail: ${formData.get('email')}%0D%0AMessage: ${formData.get('message')}`;
                  window.location.href = `mailto:info@lr-lifestyle.info?cc=janine@globaltaxsaving.com&subject=${subject}&body=${body}`;
                }}
              >
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Name</label>
                  <Input name="name" placeholder="Your Name" className="bg-white/5 border-white/10 text-white h-12" required />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Email</label>
                  <Input name="email" type="email" placeholder="your@email.com" className="bg-white/5 border-white/10 text-white h-12" required />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/70">Message</label>
                  <Textarea name="message" placeholder="How can we help you?" className="bg-white/5 border-white/10 text-white min-h-[150px]" required />
                </div>

                <Button type="submit" className="w-full h-14 bg-white text-black font-bold text-lg rounded-xl hover:bg-gray-200 transition-all">
                  Send Message
                </Button>
                
                <p className="text-xs text-white/30 text-center">
                  Opens your email client to send securely to our team.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
