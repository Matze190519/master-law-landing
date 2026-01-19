import Layout from "@/components/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";
import { User, Mail, Linkedin } from "lucide-react";

export default function Team() {
  const { lang } = useLanguage();

  const teamMembers = [
    {
      name: "Max Mustermann",
      role: lang === "DE" ? "Gründer & Partner" : lang === "ES" ? "Fundador y Socio" : "Founder & Partner",
      bio: lang === "DE" 
        ? "Spezialisiert auf internationales Steuerrecht und Firmengründungen in Dubai." 
        : lang === "ES" 
        ? "Especializado en derecho fiscal internacional y creación de empresas en Dubai." 
        : "Specialized in international tax law and company formation in Dubai.",
      image: "/images/team-placeholder-1.jpg"
    },
    {
      name: "Erika Musterfrau",
      role: lang === "DE" ? "Leitende Anwältin (Spanien)" : lang === "ES" ? "Abogada Principal (España)" : "Lead Attorney (Spain)",
      bio: lang === "DE" 
        ? "Expertin für spanisches Insolvenzrecht und die Ley de Segunda Oportunidad." 
        : lang === "ES" 
        ? "Experta en derecho concursal español y la Ley de Segunda Oportunidad." 
        : "Expert in Spanish insolvency law and the Second Chance Law.",
      image: "/images/team-placeholder-2.jpg"
    }
  ];

  return (
    <Layout>
      <SEO 
        title={lang === "DE" ? "Unser Team" : lang === "ES" ? "Nuestro Equipo" : "Our Team"}
        description={lang === "DE" ? "Lernen Sie unsere Experten kennen." : lang === "ES" ? "Conozca a nuestros expertos." : "Meet our experts."}
      />
      <div className="pt-32 pb-20 container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {lang === "DE" ? "Unser Team" : lang === "ES" ? "Nuestro Equipo" : "Our Team"}
          </h1>
          <p className="text-xl text-white/60">
            {lang === "DE" 
              ? "Erfahrene Anwälte und Steuerberater an Ihrer Seite." 
              : lang === "ES" 
              ? "Abogados y asesores fiscales experimentados a su lado." 
              : "Experienced lawyers and tax advisors by your side."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="glass-panel p-8 rounded-3xl border border-white/10 hover:bg-white/5 transition-colors group">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center overflow-hidden border-2 border-white/20 group-hover:border-white/40 transition-colors">
                <User className="w-16 h-16 text-white/50" />
              </div>
              <h3 className="text-2xl font-bold text-white text-center mb-2">{member.name}</h3>
              <p className="text-green-400 text-center font-medium mb-4">{member.role}</p>
              <p className="text-white/60 text-center leading-relaxed mb-6">
                {member.bio}
              </p>
              <div className="flex justify-center gap-4">
                <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </button>
                <button className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
