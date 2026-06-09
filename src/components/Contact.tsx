"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          type: formData.get("type"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        throw new Error("Message failed");
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section-padding bg-black text-white">
      <div className="brand-container">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/45">
              Contact
            </p>
            <h2 className="text-4xl font-black uppercase tracking-[0.14em] sm:text-6xl">
              Enquiries
            </h2>
            <p className="mt-8 max-w-md text-base leading-8 text-white/55">
              For releases, writing sessions, production, shows and
              collaborations, send a note to the collective.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-3 text-xs uppercase tracking-[0.25em] text-white/45">
                Name
                <input
                  name="name"
                  required
                  className="border border-white/10 bg-white/[0.035] px-4 py-4 text-base normal-case tracking-normal text-white outline-none transition placeholder:text-white/25 focus:border-white/35"
                />
              </label>

              <label className="grid gap-3 text-xs uppercase tracking-[0.25em] text-white/45">
                Email
                <input
                  name="email"
                  type="email"
                  required
                  className="border border-white/10 bg-white/[0.035] px-4 py-4 text-base normal-case tracking-normal text-white outline-none transition placeholder:text-white/25 focus:border-white/35"
                />
              </label>
            </div>

            <label className="grid gap-3 text-xs uppercase tracking-[0.25em] text-white/45">
              Enquiry type
              <select
                name="type"
                className="border border-white/10 bg-white/[0.035] px-4 py-4 text-base normal-case tracking-normal text-white outline-none transition focus:border-white/35"
                defaultValue="General"
              >
                <option className="bg-black text-white">General</option>
                <option className="bg-black text-white">Music</option>
                <option className="bg-black text-white">Production</option>
                <option className="bg-black text-white">Shows</option>
                <option className="bg-black text-white">Collaboration</option>
              </select>
            </label>

            <label className="grid gap-3 text-xs uppercase tracking-[0.25em] text-white/45">
              Message
              <textarea
                name="message"
                required
                rows={6}
                className="resize-none border border-white/10 bg-white/[0.035] px-4 py-4 text-base normal-case leading-7 tracking-normal text-white outline-none transition placeholder:text-white/25 focus:border-white/35"
              />
            </label>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={status === "sending"}
                className="border border-white px-8 py-4 text-xs font-semibold uppercase tracking-[0.28em] transition hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:border-white/25 disabled:text-white/35"
              >
                {status === "sending" ? "Sending" : "Send enquiry"}
              </button>

              {status === "sent" && (
                <p className="text-sm text-white/55">Message sent.</p>
              )}
              {status === "error" && (
                <p className="text-sm text-white/55">
                  Message failed to send. Please try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
