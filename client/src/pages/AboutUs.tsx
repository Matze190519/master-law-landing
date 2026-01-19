import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Globe2, Scale, Users2 } from "lucide-react";

export default function AboutUs() {
  const { lang } = useLanguage();

  const content = {
    de: {
      title: "Über Master Law Global",
      subtitle: "Ihre Brücke zwischen europäischer Rechtssicherheit und globalen Geschäftsmöglichkeiten",
      intro: "Master Law Global ist das Ergebnis einer strategischen Allianz zwischen führenden Rechtsexperten und erfahrenen Unternehmensberatern. Wir verbinden die Präzision deutscher Rechtsberatung mit der Dynamik internationaler Märkte.",
      mission: {
        title: "Unsere Mission",
        text: "Wir ermöglichen Unternehmern den rechtssicheren Zugang zu globalen Märkten. Unser Fokus liegt dabei auf der nahtlosen Integration von Unternehmensgründung, steuerlicher Optimierung und rechtlicher Absicherung."
      },
      partners: {
        title: "Strategische Partnerschaft",
        text: "Durch die enge Zusammenarbeit mit Global Business Setup Services (Global S) in Dubai bieten wir unseren Mandanten direkten Zugang zu den Entscheidungsträgern vor Ort. Diese Synergie ermöglicht es uns, Prozesse zu beschleunigen und Hürden effizient zu überwinden."
      },
      values: [
        {
          icon: Scale,
          title: "Rechtssicherheit",
          text: "Fundierte juristische Expertise nach europäischen Standards."
        },
        {
          icon: Globe2,
          title: "Globale Präsenz",
          text: "Starke Vernetzung in den wichtigsten Wirtschaftszentren."
        },
        {
          icon: Users2,
          title: "Persönliche Betreuung",
          text: "Individuelle Begleitung durch feste Ansprechpartner."
        },
        {
          icon: Building2,
          title: "Full-Service",
          text: "Von der Gründung bis zur laufenden Betreuung alles aus einer Hand."
        }
      ]
    },
    en: {
      title: "About Master Law Global",
      subtitle: "Your bridge between European legal certainty and global business opportunities",
      intro: "Master Law Global is the result of a strategic alliance between leading legal experts and experienced business consultants. We combine the precision of German legal advice with the dynamics of international markets.",
      mission: {
        title: "Our Mission",
        text: "We enable entrepreneurs to access global markets with legal certainty. Our focus is on the seamless integration of company formation, tax optimization, and legal protection."
      },
      partners: {
        title: "Strategic Partnership",
        text: "Through close cooperation with Global Business Setup Services (Global S) in Dubai, we offer our clients direct access to local decision-makers. This synergy allows us to accelerate processes and overcome hurdles efficiently."
      },
      values: [
        {
          icon: Scale,
          title: "Legal Certainty",
          text: "Sound legal expertise according to European standards."
        },
        {
          icon: Globe2,
          title: "Global Presence",
          text: "Strong networking in key economic centers."
        },
        {
          icon: Users2,
          title: "Personal Support",
          text: "Individual guidance through dedicated contact persons."
        },
        {
          icon: Building2,
          title: "Full Service",
          text: "Everything from a single source, from incorporation to ongoing support."
        }
      ]
    },
    es: {
      title: "Sobre Master Law Global",
      subtitle: "Su puente entre la seguridad jurídica europea y las oportunidades de negocio globales",
      intro: "Master Law Global es el resultado de una alianza estratégica entre destacados expertos legales y consultores empresariales experimentados. Combinamos la precisión del asesoramiento legal alemán con la dinámica de los mercados internacionales.",
      mission: {
        title: "Nuestra Misión",
        text: "Permitimos a los empresarios acceder a los mercados globales con seguridad jurídica. Nuestro enfoque se centra en la integración perfecta de la formación de empresas, la optimización fiscal y la protección legal."
      },
      partners: {
        title: "Alianza Estratégica",
        text: "A través de una estrecha cooperación con Global Business Setup Services (Global S) en Dubái, ofrecemos a nuestros clientes acceso directo a los tomadores de decisiones locales. Esta sinergia nos permite acelerar procesos y superar obstáculos de manera eficiente."
      },
      values: [
        {
          icon: Scale,
          title: "Seguridad Jurídica",
          text: "Sólida experiencia legal según los estándares europeos."
        },
        {
          icon: Globe2,
          title: "Presencia Global",
          text: "Fuerte red en los principales centros económicos."
        },
        {
          icon: Users2,
          title: "Atención Personal",
          text: "Orientación individual a través de personas de contacto dedicadas."
        },
        {
          icon: Building2,
          title: "Servicio Completo",
          text: "Todo de una sola fuente, desde la constitución hasta el soporte continuo."
        }
      ]
    }
  };

  const currentContent = content[lang.toLowerCase() as keyof typeof content] || content.de;

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            {currentContent.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {currentContent.subtitle}
          </p>
        </div>

        {/* Intro & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          <Card className="bg-card/50 backdrop-blur border-primary/10">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed mb-6">
                {currentContent.intro}
              </p>
              <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {currentContent.partners.title}
                </h3>
                <p className="text-muted-foreground">
                  {currentContent.partners.text}
                </p>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex flex-col justify-center space-y-6">
            <div className="bg-gradient-to-br from-primary/5 to-transparent p-8 rounded-2xl border border-primary/10">
              <h2 className="text-2xl font-bold mb-4">
                {currentContent.mission.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {currentContent.mission.text}
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {currentContent.values.map((value, index) => (
            <Card key={index} className="border-primary/10 hover:border-primary/30 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
