import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Loader2, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface ContactFormProps {
  variant?: "full" | "compact";
  defaultService?: "dubai_gruendung" | "steuerberatung" | "entschuldung" | "sonstiges";
}

const serviceLabels = {
  DE: {
    dubai_gruendung: "Dubai Gründung",
    steuerberatung: "Steuerberatung",
    entschuldung: "Entschuldung",
    sonstiges: "Sonstiges",
  },
  EN: {
    dubai_gruendung: "Dubai Company Setup",
    steuerberatung: "Tax Advisory",
    entschuldung: "Debt Relief",
    sonstiges: "Other",
  },
  ES: {
    dubai_gruendung: "Constitución en Dubái",
    steuerberatung: "Asesoría Fiscal",
    entschuldung: "Alivio de Deudas",
    sonstiges: "Otros",
  },
};

const sourceLabels = {
  DE: {
    google: "Google Suche",
    social: "Social Media (Instagram, Facebook)",
    referral: "Empfehlung",
    ad: "Werbeanzeige",
    other: "Sonstiges",
  },
  EN: {
    google: "Google Search",
    social: "Social Media (Instagram, Facebook)",
    referral: "Referral",
    ad: "Advertisement",
    other: "Other",
  },
  ES: {
    google: "Búsqueda en Google",
    social: "Redes Sociales (Instagram, Facebook)",
    referral: "Recomendación",
    ad: "Anuncio",
    other: "Otros",
  },
};

const formLabels = {
  DE: {
    name: "Vollständiger Name",
    namePlaceholder: "Max Mustermann",
    email: "E-Mail",
    emailPlaceholder: "max@beispiel.de",
    phone: "Telefon (optional)",
    phonePlaceholder: "+49 123 456789",
    company: "Firma (optional)",
    companyPlaceholder: "Ihre Firma GmbH",
    service: "Wofür interessieren Sie sich?",
    servicePlaceholder: "Bitte auswählen...",
    source: "Wie sind Sie auf uns aufmerksam geworden?",
    sourcePlaceholder: "Bitte auswählen...",
    message: "Ihre Nachricht",
    messagePlaceholder: "Beschreiben Sie kurz Ihr Anliegen...",
    submit: "Anfrage absenden",
    submitting: "Wird gesendet...",
    success: "Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
    error: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
  },
  EN: {
    name: "Full Name",
    namePlaceholder: "John Doe",
    email: "Email",
    emailPlaceholder: "john@example.com",
    phone: "Phone (optional)",
    phonePlaceholder: "+1 234 567890",
    company: "Company (optional)",
    companyPlaceholder: "Your Company Inc.",
    service: "What are you interested in?",
    servicePlaceholder: "Please select...",
    source: "How did you hear about us?",
    sourcePlaceholder: "Please select...",
    message: "Your Message",
    messagePlaceholder: "Briefly describe your inquiry...",
    submit: "Send Inquiry",
    submitting: "Sending...",
    success: "Thank you! We will get back to you within 24 hours.",
    error: "Something went wrong. Please try again.",
  },
  ES: {
    name: "Nombre Completo",
    namePlaceholder: "Juan García",
    email: "Correo Electrónico",
    emailPlaceholder: "juan@ejemplo.com",
    phone: "Teléfono (opcional)",
    phonePlaceholder: "+34 123 456789",
    company: "Empresa (opcional)",
    companyPlaceholder: "Su Empresa S.L.",
    service: "¿En qué está interesado?",
    servicePlaceholder: "Por favor seleccione...",
    source: "¿Cómo nos conoció?",
    sourcePlaceholder: "Por favor seleccione...",
    message: "Su Mensaje",
    messagePlaceholder: "Describa brevemente su consulta...",
    submit: "Enviar Consulta",
    submitting: "Enviando...",
    success: "¡Gracias! Nos pondremos en contacto en 24 horas.",
    error: "Algo salió mal. Por favor intente de nuevo.",
  },
};

export default function ContactForm({ variant = "full", defaultService }: ContactFormProps) {
  const { lang } = useLanguage();
  const labels = formLabels[lang] || formLabels.DE;
  const services = serviceLabels[lang] || serviceLabels.DE;
  const sources = sourceLabels[lang] || sourceLabels.DE;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: defaultService || "",
    source: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      setIsSubmitted(true);
      toast.success(labels.success);
    },
    onError: (error) => {
      toast.error(labels.error);
      console.error("Contact form error:", error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.service) {
      toast.error("Bitte wählen Sie einen Service aus.");
      return;
    }

    submitMutation.mutate({
      name: formData.name,
      email: formData.email,
      phone: formData.phone || undefined,
      company: formData.company || undefined,
      service: formData.service as "dubai_gruendung" | "steuerberatung" | "entschuldung" | "sonstiges",
      source: formData.source || undefined,
      message: formData.message,
    });
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12 space-y-4">
        <CheckCircle className="w-16 h-16 text-green-400 mx-auto" />
        <h3 className="text-2xl font-bold text-white">{labels.success}</h3>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-white/70">{labels.name} *</label>
          <Input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder={labels.namePlaceholder}
            className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-white/70">{labels.email} *</label>
          <Input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder={labels.emailPlaceholder}
            className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12"
            required
          />
        </div>
      </div>

      {variant === "full" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/70">{labels.phone}</label>
            <Input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder={labels.phonePlaceholder}
              className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/70">{labels.company}</label>
            <Input
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              placeholder={labels.companyPlaceholder}
              className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12"
            />
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-white/70">{labels.service} *</label>
          <Select
            value={formData.service}
            onValueChange={(value) => setFormData({ ...formData, service: value })}
          >
            <SelectTrigger className="bg-white/5 border-white/10 text-white h-12">
              <SelectValue placeholder={labels.servicePlaceholder} />
            </SelectTrigger>
            <SelectContent className="bg-zinc-900 border-white/10">
              <SelectItem value="dubai_gruendung" className="text-white hover:bg-white/10">
                {services.dubai_gruendung}
              </SelectItem>
              <SelectItem value="steuerberatung" className="text-white hover:bg-white/10">
                {services.steuerberatung}
              </SelectItem>
              <SelectItem value="entschuldung" className="text-white hover:bg-white/10">
                {services.entschuldung}
              </SelectItem>
              <SelectItem value="sonstiges" className="text-white hover:bg-white/10">
                {services.sonstiges}
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {variant === "full" && (
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/70">{labels.source}</label>
            <Select
              value={formData.source}
              onValueChange={(value) => setFormData({ ...formData, source: value })}
            >
              <SelectTrigger className="bg-white/5 border-white/10 text-white h-12">
                <SelectValue placeholder={labels.sourcePlaceholder} />
              </SelectTrigger>
              <SelectContent className="bg-zinc-900 border-white/10">
                <SelectItem value="google" className="text-white hover:bg-white/10">
                  {sources.google}
                </SelectItem>
                <SelectItem value="social" className="text-white hover:bg-white/10">
                  {sources.social}
                </SelectItem>
                <SelectItem value="referral" className="text-white hover:bg-white/10">
                  {sources.referral}
                </SelectItem>
                <SelectItem value="ad" className="text-white hover:bg-white/10">
                  {sources.ad}
                </SelectItem>
                <SelectItem value="other" className="text-white hover:bg-white/10">
                  {sources.other}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium text-white/70">{labels.message} *</label>
        <Textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder={labels.messagePlaceholder}
          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 min-h-[120px]"
          required
        />
      </div>

      <Button
        type="submit"
        disabled={submitMutation.isPending}
        className="w-full h-14 bg-white text-black font-bold text-lg rounded-xl hover:bg-gray-200 transition-all disabled:opacity-50"
      >
        {submitMutation.isPending ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            {labels.submitting}
          </>
        ) : (
          labels.submit
        )}
      </Button>
    </form>
  );
}
