import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createContactInquiry, createBooking, getBookings } from "./db";
import { notifyOwner } from "./_core/notification";
import { invokeLLM } from "./_core/llm";

const KNOWLEDGE_BASE = `
Du bist der virtuelle Assistent von Master Law Firm SL – einer internationalen Rechts- und Steuerberatungskanzlei mit Sitz in Palma de Mallorca, Spanien.

WICHTIG: Du darfst KEINE internen Kalkulationen oder vertrauliche Informationen preisgeben. Antworte nur mit öffentlich verfügbaren Informationen.

## Unternehmensprofil
- Firmenname: Master Law Firm SL
- Adresse: Avda. Alexandre Rosselló 15, 6º D, 07002 Palma de Mallorca
- Telefon: +34 871 24 24 04
- E-Mail: info@lr-lifestyle.info
- Website: https://master-law-global.com

## Dienstleistungen

### 1. Dubai Firmengründung
- 0% Einkommensteuer auf persönliches Einkommen
- 0-9% Körperschaftsteuer (abhängig vom Gewinn)
- 100% ausländisches Eigentum möglich
- Volle Gewinnrückführung
- Gründungsdauer: 2-4 Wochen
- Keine Mindestkapitalanforderung
- **Starter-Paket: 1.999 €** (Firmengründung, Trade License, 100% Eigentum, Virtuelles Büro, Beratung zur Kontoeröffnung)
- **All-Inclusive-Paket: 4.999 €** (Alles aus Starter + Residence Visa, Emirates ID, Medical Test, Bankkonto-Eröffnung, Steuerregistrierung, Persönlicher Ansprechpartner)

### 2. Steuerberatung & Buchhaltung Spanien
- Autónomo: 115 €/Monat (Selbstständige & Freiberufler)
  - Monatliche Steuererklärungen (IVA & IRPF)
  - Jährliche Einkommensteuererklärung (Renta)
  - Sozialversicherung Management
  - E-Mail & Telefon Support
  - Digitale Belegverwaltung
- S.L. / Kapitalgesellschaft: 350 €/Monat
  - Laufende Finanzbuchhaltung
  - Monatliche Steuererklärungen
  - Jahresabschluss & Bilanzierung
  - Körperschaftsteuererklärung
  - Lohnbuchhaltung (bis 5 Mitarbeiter)
- Beckham Law Antrag: 250 € einmalig
  - 24% Flat Tax (statt progressiv bis 47%)
  - Gültig für Einkommen bis 600.000 €
  - Dauer: 6 Jahre
  - Voraussetzung: Kein Wohnsitz in Spanien in den letzten 5 Jahren

### 3. Entschuldung / Insolvenz in Spanien
- Ley de Segunda Oportunidad (Gesetz der Zweiten Chance)
- Restschuldbefreiung in ca. 12 Monaten (statt 3 Jahre in Deutschland)
- Sofortige Befreiung durch BEPI-Beschluss
- EU-weit anerkannt
- Keine automatische Meldung an die deutsche Schufa
- Kostenlose Erstberatung
- Kosten werden individuell nach Erstgespräch festgelegt
- Privatinsolvenz und Firmeninsolvenz möglich

## Terminbuchung
- Beratungstermin: 49,90 € (über Stripe)
- Zahlungslink: https://buy.stripe.com/3cI00jalcb5Q1Vs0IPe7m02
- Zahlungsmethoden: Karte, Apple Pay, Google Pay, Klarna, Revolut Pay, Amazon Pay
- Die 49,90 € werden bei Beauftragung mit dem Honorar verrechnet

## Verhaltensregeln
- Sei freundlich, professionell und hilfsbereit
- Antworte in der Sprache des Nutzers (Deutsch, Englisch oder Spanisch)
- Verweise bei komplexen rechtlichen Fragen immer auf ein persönliches Beratungsgespräch
- Gib KEINE konkreten Rechtsberatung – verweise auf die Experten der Kanzlei
- Halte Antworten kurz und prägnant (max. 3-4 Sätze, außer der Nutzer fragt nach Details)
- Wenn jemand einen Termin buchen möchte, teile den Stripe-Link mit
- NIEMALS interne Kalkulationen oder vertrauliche Geschäftsinformationen preisgeben
`;

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Contact form submission
  contact: router({
    submit: publicProcedure
      .input(z.object({
        name: z.string().min(2, "Name muss mindestens 2 Zeichen haben"),
        email: z.string().email("Ungültige E-Mail-Adresse"),
        phone: z.string().optional(),
        company: z.string().optional(),
        service: z.enum(["dubai_gruendung", "steuerberatung", "entschuldung", "sonstiges"]),
        message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen haben"),
        source: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        // Save to database
        const inquiry = await createContactInquiry(input);
        
        // Notify owner via Manus notification system
        const serviceLabels: Record<string, string> = {
          dubai_gruendung: "Dubai Gründung",
          steuerberatung: "Steuerberatung",
          entschuldung: "Entschuldung",
          sonstiges: "Sonstiges",
        };
        
        await notifyOwner({
          title: `Neue Anfrage: ${serviceLabels[input.service]} - ${input.name}`,
          content: `
📧 **Neue Kontaktanfrage**

**Name:** ${input.name}
**E-Mail:** ${input.email}
**Telefon:** ${input.phone || "Nicht angegeben"}
**Firma:** ${input.company || "Nicht angegeben"}
**Service:** ${serviceLabels[input.service]}
**Quelle:** ${input.source || "Direkt"}

**Nachricht:**
${input.message}

---
Diese Anfrage wurde in der Datenbank gespeichert.
          `.trim(),
        });
        
        return { success: true, id: inquiry?.id };
      }),
  }),

  // Booking system
  booking: router({
    create: publicProcedure
      .input(z.object({
        name: z.string().min(2, "Name muss mindestens 2 Zeichen haben"),
        email: z.string().email("Ungültige E-Mail-Adresse"),
        phone: z.string().min(5, "Telefonnummer erforderlich"),
        company: z.string().optional(),
        service: z.enum(["dubai_gruendung", "steuerberatung", "entschuldung", "sonstiges"]),
        preferredDate: z.string().min(1, "Wunschtermin erforderlich"),
        preferredTime: z.string().min(1, "Wunschzeit erforderlich"),
        alternativeDate: z.string().optional(),
        message: z.string().optional(),
        source: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        const booking = await createBooking(input);

        const serviceLabels: Record<string, string> = {
          dubai_gruendung: "Dubai Gründung",
          steuerberatung: "Steuerberatung",
          entschuldung: "Entschuldung",
          sonstiges: "Sonstiges",
        };

        await notifyOwner({
          title: `Neuer Beratungstermin: ${serviceLabels[input.service]} - ${input.name}`,
          content: `
📅 **Neuer Beratungstermin gebucht**

**Name:** ${input.name}
**E-Mail:** ${input.email}
**Telefon:** ${input.phone}
**Firma:** ${input.company || "Nicht angegeben"}
**Service:** ${serviceLabels[input.service]}
**Wunschtermin:** ${input.preferredDate} um ${input.preferredTime}
**Alternativtermin:** ${input.alternativeDate || "Keiner"}
**Quelle:** ${input.source || "Direkt"}

**Nachricht:** ${input.message || "Keine"}

💳 **Zahlung:** Kunde wird zu Stripe weitergeleitet (49,90 €)
---
Buchung wurde in der Datenbank gespeichert (ID: ${booking?.id}).
          `.trim(),
        });

        return { 
          success: true, 
          id: booking?.id,
          stripeUrl: `https://buy.stripe.com/3cI00jalcb5Q1Vs0IPe7m02?prefilled_email=${encodeURIComponent(input.email)}&client_reference_id=${booking?.id || ''}`
        };
      }),
  }),

  // Chatbot
  chat: router({
    send: publicProcedure
      .input(z.object({
        messages: z.array(z.object({
          role: z.enum(["user", "assistant"]),
          content: z.string(),
        })),
        language: z.enum(["DE", "EN", "ES"]).default("DE"),
      }))
      .mutation(async ({ input }) => {
        const langInstruction = {
          DE: "Antworte auf Deutsch.",
          EN: "Answer in English.",
          ES: "Responde en español.",
        };

        const systemMessage = `${KNOWLEDGE_BASE}\n\n${langInstruction[input.language]}`;

        const messages = [
          { role: "system" as const, content: systemMessage },
          ...input.messages.map(m => ({
            role: m.role as "user" | "assistant",
            content: m.content,
          })),
        ];

        // Keep only last 10 messages to save tokens
        const trimmedMessages = [
          messages[0], // system message
          ...messages.slice(Math.max(1, messages.length - 10)),
        ];

        const result = await invokeLLM({ messages: trimmedMessages });
        
        const content = result.choices?.[0]?.message?.content;
        if (!content || typeof content !== "string") {
          throw new Error("No response from AI");
        }

        return { content };
      }),
  }),
});

export type AppRouter = typeof appRouter;
