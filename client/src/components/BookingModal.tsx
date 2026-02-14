import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock, CreditCard, CheckCircle, ArrowRight, Loader2 } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { useLanguage } from "@/contexts/LanguageContext";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultService?: string;
}

const translations = {
  DE: {
    title: "Beratungstermin buchen",
    subtitle: "49,90 € – wird bei Beauftragung mit dem Honorar verrechnet",
    step1: "Ihre Daten",
    step2: "Termin wählen",
    step3: "Bezahlung",
    name: "Vollständiger Name",
    email: "E-Mail-Adresse",
    phone: "Telefonnummer",
    company: "Firma (optional)",
    service: "Beratungsthema",
    services: {
      dubai_gruendung: "Dubai Firmengründung",
      steuerberatung: "Steuerberatung & Buchhaltung",
      entschuldung: "Entschuldung / Insolvenz",
      sonstiges: "Sonstiges",
    },
    preferredDate: "Wunschtermin (Datum)",
    preferredTime: "Uhrzeit",
    alternativeDate: "Alternativtermin (optional)",
    message: "Nachricht (optional)",
    messagePlaceholder: "Beschreiben Sie kurz Ihr Anliegen...",
    next: "Weiter",
    back: "Zurück",
    payNow: "Jetzt bezahlen (49,90 €)",
    payInfo: "Sie werden zu unserem sicheren Zahlungsanbieter (Stripe) weitergeleitet.",
    payMethods: "Karte, Apple Pay, Google Pay, Klarna, Revolut Pay, Amazon Pay",
    successTitle: "Termin erfolgreich gebucht!",
    successMsg: "Wir haben Ihre Buchung erhalten und werden uns innerhalb von 24 Stunden bei Ihnen melden, um den Termin zu bestätigen.",
    successPay: "Bitte schließen Sie die Zahlung ab, um Ihren Termin verbindlich zu reservieren.",
    close: "Schließen",
    required: "Pflichtfeld",
    timeSlots: ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"],
  },
  EN: {
    title: "Book Consultation",
    subtitle: "€49.90 – credited towards your fee upon engagement",
    step1: "Your Details",
    step2: "Choose Date",
    step3: "Payment",
    name: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    company: "Company (optional)",
    service: "Consultation Topic",
    services: {
      dubai_gruendung: "Dubai Company Formation",
      steuerberatung: "Tax Advisory & Accounting",
      entschuldung: "Debt Relief / Insolvency",
      sonstiges: "Other",
    },
    preferredDate: "Preferred Date",
    preferredTime: "Time",
    alternativeDate: "Alternative Date (optional)",
    message: "Message (optional)",
    messagePlaceholder: "Briefly describe your concern...",
    next: "Next",
    back: "Back",
    payNow: "Pay Now (€49.90)",
    payInfo: "You will be redirected to our secure payment provider (Stripe).",
    payMethods: "Card, Apple Pay, Google Pay, Klarna, Revolut Pay, Amazon Pay",
    successTitle: "Appointment Successfully Booked!",
    successMsg: "We have received your booking and will contact you within 24 hours to confirm the appointment.",
    successPay: "Please complete the payment to confirm your appointment.",
    close: "Close",
    required: "Required",
    timeSlots: ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"],
  },
  ES: {
    title: "Reservar Consulta",
    subtitle: "49,90 € – se descuenta del honorario al contratar",
    step1: "Sus Datos",
    step2: "Elegir Fecha",
    step3: "Pago",
    name: "Nombre Completo",
    email: "Correo Electrónico",
    phone: "Teléfono",
    company: "Empresa (opcional)",
    service: "Tema de Consulta",
    services: {
      dubai_gruendung: "Constitución de Empresa en Dubái",
      steuerberatung: "Asesoría Fiscal y Contabilidad",
      entschuldung: "Alivio de Deudas / Insolvencia",
      sonstiges: "Otros",
    },
    preferredDate: "Fecha Preferida",
    preferredTime: "Hora",
    alternativeDate: "Fecha Alternativa (opcional)",
    message: "Mensaje (opcional)",
    messagePlaceholder: "Describa brevemente su consulta...",
    next: "Siguiente",
    back: "Atrás",
    payNow: "Pagar Ahora (49,90 €)",
    payInfo: "Será redirigido a nuestro proveedor de pago seguro (Stripe).",
    payMethods: "Tarjeta, Apple Pay, Google Pay, Klarna, Revolut Pay, Amazon Pay",
    successTitle: "¡Cita Reservada con Éxito!",
    successMsg: "Hemos recibido su reserva y nos pondremos en contacto en 24 horas para confirmar la cita.",
    successPay: "Complete el pago para confirmar su cita.",
    close: "Cerrar",
    required: "Obligatorio",
    timeSlots: ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"],
  },
};

export default function BookingModal({ open, onOpenChange, defaultService }: BookingModalProps) {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: defaultService || "dubai_gruendung",
    preferredDate: "",
    preferredTime: "",
    alternativeDate: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const bookingMutation = trpc.booking.create.useMutation();

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name || formData.name.length < 2) newErrors.name = t.required;
    if (!formData.email || !formData.email.includes("@")) newErrors.email = t.required;
    if (!formData.phone || formData.phone.length < 5) newErrors.phone = t.required;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.preferredDate) newErrors.preferredDate = t.required;
    if (!formData.preferredTime) newErrors.preferredTime = t.required;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) setStep(2);
    else if (step === 2 && validateStep2()) setStep(3);
  };

  const handleSubmitAndPay = async () => {
    try {
      const result = await bookingMutation.mutateAsync({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || undefined,
        service: formData.service as "dubai_gruendung" | "steuerberatung" | "entschuldung" | "sonstiges",
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        alternativeDate: formData.alternativeDate || undefined,
        message: formData.message || undefined,
        source: "website_booking",
      });

      if (result.success && result.stripeUrl) {
        setStep(4); // Show success
        // Open Stripe in new tab
        window.open(result.stripeUrl, "_blank");
      }
    } catch (error) {
      console.error("Booking error:", error);
    }
  };

  const handleClose = () => {
    setStep(1);
    setFormData({
      name: "", email: "", phone: "", company: "",
      service: defaultService || "dubai_gruendung",
      preferredDate: "", preferredTime: "", alternativeDate: "", message: "",
    });
    setErrors({});
    onOpenChange(false);
  };

  // Get minimum date (tomorrow)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="bg-zinc-950 border border-white/10 text-white max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">{t.title}</DialogTitle>
          <p className="text-sm text-white/50 mt-1">{t.subtitle}</p>
        </DialogHeader>

        {/* Progress Steps */}
        {step < 4 && (
          <div className="flex items-center gap-2 my-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2 flex-1">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  s <= step ? "bg-white text-black" : "bg-white/10 text-white/40"
                }`}>
                  {s === 1 && "1"}
                  {s === 2 && "2"}
                  {s === 3 && "3"}
                </div>
                <span className={`text-xs hidden sm:block ${s <= step ? "text-white" : "text-white/40"}`}>
                  {s === 1 && t.step1}
                  {s === 2 && t.step2}
                  {s === 3 && t.step3}
                </span>
                {s < 3 && <div className={`flex-1 h-px ${s < step ? "bg-white" : "bg-white/10"}`} />}
              </div>
            ))}
          </div>
        )}

        {/* Step 1: Personal Data */}
        {step === 1 && (
          <div className="space-y-4">
            <div>
              <label className="text-xs text-white/50 uppercase tracking-wider mb-1 block">{t.name} *</label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                placeholder="Max Mustermann"
              />
              {errors.name && <span className="text-red-400 text-xs">{errors.name}</span>}
            </div>
            <div>
              <label className="text-xs text-white/50 uppercase tracking-wider mb-1 block">{t.email} *</label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                placeholder="max@beispiel.de"
              />
              {errors.email && <span className="text-red-400 text-xs">{errors.email}</span>}
            </div>
            <div>
              <label className="text-xs text-white/50 uppercase tracking-wider mb-1 block">{t.phone} *</label>
              <Input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                placeholder="+49 170 1234567"
              />
              {errors.phone && <span className="text-red-400 text-xs">{errors.phone}</span>}
            </div>
            <div>
              <label className="text-xs text-white/50 uppercase tracking-wider mb-1 block">{t.company}</label>
              <Input
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
                placeholder="Firma GmbH"
              />
            </div>
            <div>
              <label className="text-xs text-white/50 uppercase tracking-wider mb-1 block">{t.service} *</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full h-10 px-3 rounded-md bg-white/5 border border-white/10 text-white text-sm"
              >
                {Object.entries(t.services).map(([key, label]) => (
                  <option key={key} value={key} className="bg-zinc-900">{label}</option>
                ))}
              </select>
            </div>
            <Button onClick={handleNext} className="w-full bg-white text-black hover:bg-white/90 font-bold h-12 border-none">
              {t.next} <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        )}

        {/* Step 2: Date Selection */}
        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label className="text-xs text-white/50 uppercase tracking-wider mb-1 block">
                <Calendar className="w-3 h-3 inline mr-1" />{t.preferredDate} *
              </label>
              <Input
                type="date"
                min={minDate}
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                className="bg-white/5 border-white/10 text-white"
              />
              {errors.preferredDate && <span className="text-red-400 text-xs">{errors.preferredDate}</span>}
            </div>
            <div>
              <label className="text-xs text-white/50 uppercase tracking-wider mb-1 block">
                <Clock className="w-3 h-3 inline mr-1" />{t.preferredTime} *
              </label>
              <div className="grid grid-cols-3 gap-2">
                {t.timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setFormData({ ...formData, preferredTime: time })}
                    className={`py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                      formData.preferredTime === time
                        ? "bg-white text-black"
                        : "bg-white/5 text-white/70 hover:bg-white/10 border border-white/10"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
              {errors.preferredTime && <span className="text-red-400 text-xs">{errors.preferredTime}</span>}
            </div>
            <div>
              <label className="text-xs text-white/50 uppercase tracking-wider mb-1 block">{t.alternativeDate}</label>
              <Input
                type="date"
                min={minDate}
                value={formData.alternativeDate}
                onChange={(e) => setFormData({ ...formData, alternativeDate: e.target.value })}
                className="bg-white/5 border-white/10 text-white"
              />
            </div>
            <div>
              <label className="text-xs text-white/50 uppercase tracking-wider mb-1 block">{t.message}</label>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-white/5 border-white/10 text-white placeholder:text-white/30 min-h-[80px]"
                placeholder={t.messagePlaceholder}
              />
            </div>
            <div className="flex gap-3">
              <Button onClick={() => setStep(1)} variant="outline" className="flex-1 h-12 border-white/10 text-white hover:bg-white/10">
                {t.back}
              </Button>
              <Button onClick={handleNext} className="flex-1 bg-white text-black hover:bg-white/90 font-bold h-12 border-none">
                {t.next} <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Payment */}
        {step === 3 && (
          <div className="space-y-6">
            {/* Summary */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-3">
              <h3 className="font-bold text-white text-sm uppercase tracking-wider">Zusammenfassung</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-white/50">{t.name}:</span><span className="text-white">{formData.name}</span></div>
                <div className="flex justify-between"><span className="text-white/50">{t.email}:</span><span className="text-white">{formData.email}</span></div>
                <div className="flex justify-between"><span className="text-white/50">{t.phone}:</span><span className="text-white">{formData.phone}</span></div>
                <div className="flex justify-between"><span className="text-white/50">{t.service}:</span><span className="text-white">{t.services[formData.service as keyof typeof t.services]}</span></div>
                <div className="flex justify-between"><span className="text-white/50">{t.preferredDate}:</span><span className="text-white">{formData.preferredDate} {formData.preferredTime}</span></div>
              </div>
              <div className="pt-3 border-t border-white/10 flex justify-between items-center">
                <span className="text-white/70 font-medium">Total:</span>
                <span className="text-2xl font-bold text-white">49,90 €</span>
              </div>
            </div>

            {/* Payment Info */}
            <div className="bg-white/5 rounded-xl p-4 border border-white/10 space-y-2">
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-white/50" />
                <span className="text-sm text-white/70">{t.payInfo}</span>
              </div>
              <p className="text-xs text-white/40">{t.payMethods}</p>
            </div>

            <div className="flex gap-3">
              <Button onClick={() => setStep(2)} variant="outline" className="flex-1 h-12 border-white/10 text-white hover:bg-white/10">
                {t.back}
              </Button>
              <Button
                onClick={handleSubmitAndPay}
                disabled={bookingMutation.isPending}
                className="flex-1 bg-white text-black hover:bg-white/90 font-bold h-12 border-none"
              >
                {bookingMutation.isPending ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>{t.payNow} <ArrowRight className="w-4 h-4 ml-2" /></>
                )}
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Success */}
        {step === 4 && (
          <div className="text-center space-y-6 py-6">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">{t.successTitle}</h3>
            <p className="text-white/60">{t.successMsg}</p>
            <p className="text-sm text-white/40">{t.successPay}</p>
            <Button onClick={handleClose} className="bg-white text-black hover:bg-white/90 font-bold h-12 px-8 border-none">
              {t.close}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
