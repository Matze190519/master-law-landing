import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Mock the database functions
vi.mock("./db", () => ({
  createContactInquiry: vi.fn().mockResolvedValue({ id: 1 }),
}));

// Mock the notification function
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("contact.submit", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("successfully submits a contact inquiry with all fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "Max Mustermann",
      email: "max@example.com",
      phone: "+49 123 456789",
      company: "Test GmbH",
      service: "dubai_gruendung",
      message: "Ich interessiere mich für eine Firmengründung in Dubai.",
      source: "google",
    });

    expect(result).toEqual({ success: true, id: 1 });
  });

  it("successfully submits a contact inquiry with required fields only", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "Jane Doe",
      email: "jane@example.com",
      service: "entschuldung",
      message: "Ich brauche Hilfe bei meiner Entschuldung.",
    });

    expect(result).toEqual({ success: true, id: 1 });
  });

  it("validates email format", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "Test User",
        email: "invalid-email",
        service: "steuerberatung",
        message: "Test message for validation.",
      })
    ).rejects.toThrow();
  });

  it("validates minimum name length", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "A",
        email: "test@example.com",
        service: "sonstiges",
        message: "Test message for validation.",
      })
    ).rejects.toThrow();
  });

  it("validates minimum message length", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "Test User",
        email: "test@example.com",
        service: "dubai_gruendung",
        message: "Short",
      })
    ).rejects.toThrow();
  });

  it("accepts all valid service types", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    const services = ["dubai_gruendung", "steuerberatung", "entschuldung", "sonstiges"] as const;

    for (const service of services) {
      const result = await caller.contact.submit({
        name: "Test User",
        email: "test@example.com",
        service,
        message: "Testing service type validation.",
      });

      expect(result.success).toBe(true);
    }
  });
});
