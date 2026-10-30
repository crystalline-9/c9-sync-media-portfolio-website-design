"use client";

import { useState } from "react";
import { Send, Check } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Unable to send your message.");
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="glass animate-fade-up flex flex-col items-center gap-4 rounded-2xl border border-cyan-mana/30 p-10 text-center shadow-[0_0_40px_-14px_rgba(57,213,255,0.5)]">
        <span className="flex size-12 items-center justify-center rounded-full border border-cyan-mana/40 bg-cyan-mana/10">
          <Check className="size-6 text-cyan-mana" />
        </span>
        <h2 className="font-serif text-2xl text-foreground">
          Message sent into the forest
        </h2>
        <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
          Thanks for reaching out. I read everything and reply to what I can —
          expect a note back soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-sm font-medium text-cyan-mana hover:underline"
        >
          Send another →
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass flex flex-col gap-5 rounded-2xl border border-lavender-glow/15 p-6 sm:p-8"
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="rounded-xl border border-lavender-glow/15 bg-forest-black/40 px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-cyan-mana/50 focus:shadow-[0_0_18px_-6px_rgba(57,213,255,0.6)]"
          placeholder="What should I call you?"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-xl border border-lavender-glow/15 bg-forest-black/40 px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-cyan-mana/50 focus:shadow-[0_0_18px_-6px_rgba(57,213,255,0.6)]"
          placeholder="you@somewhere.com"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="text-xs font-medium uppercase tracking-wider text-muted-foreground"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="resize-none rounded-xl border border-lavender-glow/15 bg-forest-black/40 px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-cyan-mana/50 focus:shadow-[0_0_18px_-6px_rgba(57,213,255,0.6)]"
          placeholder="Tell me about the world you want to build..."
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-red-400">
          Your message couldn't be sent. Please try again in a moment.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="group inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-mana/40 bg-cyan-mana/10 px-6 py-3.5 text-sm font-medium tracking-wide text-foreground transition-all duration-300 hover:bg-cyan-mana/20 hover:shadow-[0_0_30px_-6px_rgba(57,213,255,0.6)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
        <Send className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      </button>
    </form>
  );
}
