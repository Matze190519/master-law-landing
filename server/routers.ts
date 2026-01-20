import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createContactInquiry } from "./db";
import { notifyOwner } from "./_core/notification";

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
});

export type AppRouter = typeof appRouter;
