import Layout from "@/components/Layout";
import { CheckCircle, Calendar, Mail, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";

const translations = {
  DE: {
    title: "Zahlung erfolgreich!",
    subtitle: "Vielen Dank für Ihre Buchung bei Master Law.",
    step1Title: "Zahlung bestätigt",
    step1Desc: "Ihre Zahlung von 49,90 € wurde erfolgreich verarbeitet.",
    step2Title: "Terminbestätigung",
    step2Desc: "Wir melden uns innerhalb von 24 Stunden bei Ihnen, um Ihren Wunschtermin zu bestätigen.",
    step3Title: "Beratungsgespräch",
    step3Desc: "Die 49,90 € werden bei Beauftragung vollständig mit dem Honorar verrechnet.",
    contactTitle: "Fragen?",
    contactDesc: "Kontaktieren Sie uns jederzeit:",
    backHome: "Zurück zur Startseite",
    emailLabel: "E-Mail",
    phoneLabel: "Telefon",
  },
  EN: {
    title: "Payment Successful!",
    subtitle: "Thank you for your booking with Master Law.",
    step1Title: "Payment Confirmed",
    step1Desc: "Your payment of €49.90 has been successfully processed.",
    step2Title: "Appointment Confirmation",
    step2Desc: "We will contact you within 24 hours to confirm your preferred appointment.",
    step3Title: "Consultation",
    step3Desc: "The €49.90 will be fully credited towards your fee upon engagement.",
    contactTitle: "Questions?",
    contactDesc: "Contact us anytime:",
    backHome: "Back to Homepage",
    emailLabel: "Email",
    phoneLabel: "Phone",
  },
  ES: {
    title: "¡Pago Exitoso!",
    subtitle: "Gracias por su reserva con Master Law.",
    step1Title: "Pago Confirmado",
    step1Desc: "Su pago de 49,90 € ha sido procesado exitosamente.",
    step2Title: "Confirmación de Cita",
    step2Desc: "Nos pondremos en contacto en 24 horas para confirmar su cita preferida.",
    step3Title: "Consulta",
    step3Desc: "Los 49,90 € se descontarán completamente de los honorarios al contratar.",
    contactTitle: "¿Preguntas?",
    contactDesc: "Contáctenos en cualquier momento:",
    backHome: "Volver al Inicio",
    emailLabel: "Correo",
    phoneLabel: "Teléfono",
  },
};

export default function BookingSuccess() {
  const { lang } = useLanguage();
  const t = translations[lang];

  // Track Facebook Pixel conversion
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "Purchase", {
        value: 49.90,
        currency: "EUR",
        content_name: "Beratungstermin",
      });
      (window as any).fbq("track", "Schedule");
    }
  }, []);

  return (
    <Layout>
      <section className="min-h-screen flex items-center justify-center py-32 relative">
        <div className="container max-w-2xl">
          {/* Success Animation */}
          <div className="text-center mb-12">
            <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-8 animate-pulse">
              <CheckCircle className="w-12 h-12 text-green-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.title}</h1>
            <p className="text-xl text-white/60">{t.subtitle}</p>
          </div>

          {/* Steps */}
          <div className="space-y-6 mb-12">
            <div className="glass-panel p-6 rounded-2xl border border-green-500/20 bg-green-500/5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{t.step1Title}</h3>
                  <p className="text-white/60 mt-1">{t.step1Desc}</p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{t.step2Title}</h3>
                  <p className="text-white/60 mt-1">{t.step2Desc}</p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{t.step3Title}</h3>
                  <p className="text-white/60 mt-1">{t.step3Desc}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="glass-panel p-6 rounded-2xl border border-white/10 mb-8">
            <h3 className="text-lg font-bold text-white mb-2">{t.contactTitle}</h3>
            <p className="text-white/60 mb-4">{t.contactDesc}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:info@lr-lifestyle.info" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span>{t.emailLabel}: info@lr-lifestyle.info</span>
              </a>
              <a href="tel:+34871242404" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <span>{t.phoneLabel}: +34 871 24 24 04</span>
              </a>
            </div>
          </div>

          {/* Back Button */}
          <div className="text-center">
            <Link href="/">
              <Button className="bg-white text-black hover:bg-white/90 font-bold h-14 px-10 rounded-full text-lg border-none">
                {t.backHome}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
