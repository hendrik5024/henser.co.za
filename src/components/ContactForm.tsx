"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="grid gap-4 max-w-xl"
      onSubmit={(e) => {
        setStatus("sending");
        // Netlify will handle submission when hosted there; otherwise fallback mailto:
        setTimeout(() => setStatus("sent"), 600);
        e.preventDefault();
        window.location.href = "mailto:henser.innovations@outlook.com?subject=Website%20Contact";
      }}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>
          Don’t fill this out if you&apos;re human: <input name="bot-field" />
        </label>
      </p>
      <label className="grid gap-1">
        <span>Name</span>
        <input name="name" required className="rounded border p-2" />
      </label>
      <label className="grid gap-1">
        <span>Email</span>
        <input type="email" name="email" required className="rounded border p-2" />
      </label>
      <label className="grid gap-1">
        <span>Message</span>
        <textarea name="message" rows={5} required className="rounded border p-2" />
      </label>
      <button
        type="submit"
        disabled={status !== "idle"}
        className="rounded bg-brand px-5 py-3 text-white hover:bg-brand-dark disabled:opacity-50"
        aria-busy={status === "sending"}
      >
        {status === "idle" ? "Send message" : status === "sending" ? "Sending..." : "Sent!"}
      </button>
      <p className="text-xs text-slate-500">
        This form uses a mailto: fallback to henser.innovations@outlook.com. Configure Netlify
        forms for static hosting or add a backend later.
      </p>
    </form>
  );
}
