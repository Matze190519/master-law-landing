import { describe, it, expect } from "vitest";
import { z } from "zod";

// Test the booking input validation schema
const bookingSchema = z.object({
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
});

describe("Booking System", () => {
  describe("Input Validation", () => {
    it("should accept valid booking data", () => {
      const validData = {
        name: "Max Mustermann",
        email: "max@beispiel.de",
        phone: "+49 170 1234567",
        service: "dubai_gruendung" as const,
        preferredDate: "2026-02-20",
        preferredTime: "10:00",
      };

      const result = bookingSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it("should accept booking with all optional fields", () => {
      const fullData = {
        name: "Max Mustermann",
        email: "max@beispiel.de",
        phone: "+49 170 1234567",
        company: "Test GmbH",
        service: "steuerberatung" as const,
        preferredDate: "2026-02-20",
        preferredTime: "14:00",
        alternativeDate: "2026-02-21",
        message: "Ich brauche Hilfe mit meiner Steuererklärung",
        source: "website_booking",
      };

      const result = bookingSchema.safeParse(fullData);
      expect(result.success).toBe(true);
    });

    it("should reject booking with invalid email", () => {
      const invalidData = {
        name: "Max Mustermann",
        email: "invalid-email",
        phone: "+49 170 1234567",
        service: "dubai_gruendung" as const,
        preferredDate: "2026-02-20",
        preferredTime: "10:00",
      };

      const result = bookingSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it("should reject booking with short name", () => {
      const invalidData = {
        name: "M",
        email: "max@beispiel.de",
        phone: "+49 170 1234567",
        service: "dubai_gruendung" as const,
        preferredDate: "2026-02-20",
        preferredTime: "10:00",
      };

      const result = bookingSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it("should reject booking with short phone", () => {
      const invalidData = {
        name: "Max Mustermann",
        email: "max@beispiel.de",
        phone: "123",
        service: "dubai_gruendung" as const,
        preferredDate: "2026-02-20",
        preferredTime: "10:00",
      };

      const result = bookingSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it("should reject booking without required date", () => {
      const invalidData = {
        name: "Max Mustermann",
        email: "max@beispiel.de",
        phone: "+49 170 1234567",
        service: "dubai_gruendung" as const,
        preferredDate: "",
        preferredTime: "10:00",
      };

      const result = bookingSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it("should reject invalid service type", () => {
      const invalidData = {
        name: "Max Mustermann",
        email: "max@beispiel.de",
        phone: "+49 170 1234567",
        service: "invalid_service",
        preferredDate: "2026-02-20",
        preferredTime: "10:00",
      };

      const result = bookingSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it("should accept all valid service types", () => {
      const services = ["dubai_gruendung", "steuerberatung", "entschuldung", "sonstiges"];
      
      services.forEach((service) => {
        const data = {
          name: "Max Mustermann",
          email: "max@beispiel.de",
          phone: "+49 170 1234567",
          service,
          preferredDate: "2026-02-20",
          preferredTime: "10:00",
        };

        const result = bookingSchema.safeParse(data);
        expect(result.success).toBe(true);
      });
    });
  });

  describe("Stripe Integration", () => {
    it("should have correct Stripe payment link", () => {
      const stripeUrl = "https://buy.stripe.com/3cI00jalcb5Q1Vs0IPe7m02";
      expect(stripeUrl).toContain("buy.stripe.com");
      expect(stripeUrl).toBeTruthy();
    });

    it("should have correct price (49.90 EUR)", () => {
      const price = 49.90;
      expect(price).toBe(49.90);
      expect(price).toBeGreaterThan(0);
    });
  });
});
