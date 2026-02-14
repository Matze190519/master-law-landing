import { describe, it, expect, vi } from "vitest";

// Mock the LLM module before importing the router
vi.mock("./_core/llm", () => ({
  invokeLLM: vi.fn().mockResolvedValue({
    id: "test-id",
    created: Date.now(),
    model: "test-model",
    choices: [
      {
        index: 0,
        message: {
          role: "assistant",
          content: "Willkommen bei Master Law! Wie kann ich Ihnen helfen?",
        },
        finish_reason: "stop",
      },
    ],
  }),
}));

// Mock notification
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

// Mock db
vi.mock("./db", () => ({
  createContactInquiry: vi.fn().mockResolvedValue({ id: 1 }),
}));

import { appRouter } from "./routers";
import { invokeLLM } from "./_core/llm";

describe("Chat Router", () => {
  const caller = appRouter.createCaller({
    user: null,
    req: {} as any,
    res: {} as any,
  });

  it("should accept a chat message and return a response", async () => {
    const result = await caller.chat.send({
      messages: [{ role: "user", content: "Was kostet die Steuerberatung?" }],
      language: "DE",
    });

    expect(result).toBeDefined();
    expect(result.content).toBeDefined();
    expect(typeof result.content).toBe("string");
    expect(result.content.length).toBeGreaterThan(0);
  });

  it("should pass the correct language to the system prompt", async () => {
    await caller.chat.send({
      messages: [{ role: "user", content: "What are your services?" }],
      language: "EN",
    });

    expect(invokeLLM).toHaveBeenCalled();
    const lastCall = vi.mocked(invokeLLM).mock.calls.at(-1)?.[0];
    expect(lastCall?.messages[0].content).toContain("Answer in English");
  });

  it("should pass Spanish language instruction", async () => {
    await caller.chat.send({
      messages: [{ role: "user", content: "¿Cuáles son sus servicios?" }],
      language: "ES",
    });

    expect(invokeLLM).toHaveBeenCalled();
    const lastCall = vi.mocked(invokeLLM).mock.calls.at(-1)?.[0];
    expect(lastCall?.messages[0].content).toContain("Responde en español");
  });

  it("should include knowledge base in system prompt", async () => {
    await caller.chat.send({
      messages: [{ role: "user", content: "Hallo" }],
      language: "DE",
    });

    const lastCall = vi.mocked(invokeLLM).mock.calls.at(-1)?.[0];
    const systemContent = lastCall?.messages[0].content as string;
    
    // Check key knowledge base entries
    expect(systemContent).toContain("Master Law Firm SL");
    expect(systemContent).toContain("115 €/Monat");
    expect(systemContent).toContain("350 €/Monat");
    expect(systemContent).toContain("250 €");
    expect(systemContent).toContain("49,90 €");
    expect(systemContent).toContain("https://buy.stripe.com");
    expect(systemContent).toContain("Dubai");
  });

  it("should trim messages to last 10 for token efficiency", async () => {
    const manyMessages: { role: "user" | "assistant"; content: string }[] = [];
    for (let i = 0; i < 20; i++) {
      manyMessages.push({ role: "user", content: `Message ${i}` });
      manyMessages.push({ role: "assistant", content: `Reply ${i}` });
    }

    await caller.chat.send({
      messages: manyMessages,
      language: "DE",
    });

    const lastCall = vi.mocked(invokeLLM).mock.calls.at(-1)?.[0];
    // 1 system + 10 trimmed = 11
    expect(lastCall?.messages.length).toBeLessThanOrEqual(11);
  });

  it("should throw error when LLM returns no content", async () => {
    vi.mocked(invokeLLM).mockResolvedValueOnce({
      id: "test",
      created: Date.now(),
      model: "test",
      choices: [
        {
          index: 0,
          message: { role: "assistant", content: "" },
          finish_reason: "stop",
        },
      ],
    });

    await expect(
      caller.chat.send({
        messages: [{ role: "user", content: "test" }],
        language: "DE",
      })
    ).rejects.toThrow();
  });
});
