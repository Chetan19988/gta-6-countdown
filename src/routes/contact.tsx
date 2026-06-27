import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Github, Linkedin, Mail } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — GTA VI Countdown" },
      {
        name: "description",
        content:
          "Get in touch with the team behind the GTA VI Countdown — feedback, tips and collaborations welcome.",
      },
      { property: "og:title", content: "Contact — GTA VI Countdown" },
      {
        property: "og:description",
        content: "Feedback, tips and collaborations welcome.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: "https://the-gta-6-countdown.lovable.app/contact",
          name: "Contact — GTA VI Countdown",
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // TODO: wire to a server function or email service.
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Message received. Thanks for reaching out!");
      (e.target as HTMLFormElement).reset();
    }, 600);
  }

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <header className="mb-10 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-accent">
          Drop a Line
        </p>
        <h1 className="mt-3 font-display text-5xl tracking-tight text-foreground sm:text-7xl">
          Contact <span className="text-primary">Us</span>
        </h1>
      </header>

      <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
        <form
          onSubmit={onSubmit}
          className="space-y-4 rounded-xl border border-border/60 bg-card/60 p-6 backdrop-blur-md"
        >
          <div>
            <label htmlFor="contact-name" className="mb-1 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Name
            </label>
            <input
              id="contact-name"
              required
              name="name"
              type="text"
              className="w-full rounded-md border border-border/60 bg-input px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="mb-1 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Email
            </label>
            <input
              id="contact-email"
              required
              name="email"
              type="email"
              className="w-full rounded-md border border-border/60 bg-input px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="mb-1 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Message
            </label>
            <textarea
              id="contact-message"
              required
              name="message"
              rows={6}
              className="w-full resize-none rounded-md border border-border/60 bg-input px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-md bg-primary px-6 py-3 font-display tracking-widest text-primary-foreground transition-transform hover:scale-[1.01] disabled:opacity-60"
          >
            {submitting ? "Sending…" : "Send Message"}
          </button>
        </form>

        <aside className="space-y-3 rounded-xl border border-border/60 bg-card/60 p-6 backdrop-blur-md">
          <h2 className="font-display text-2xl tracking-wide text-accent">
            Find Us
          </h2>
          <p className="text-sm text-muted-foreground">
            Prefer the direct route? Reach out on any of the channels below.
          </p>
          <div className="space-y-2 pt-2">
            <a
              href="mailto:hello@example.com"
              className="flex items-center gap-3 rounded-md border border-border/60 px-3 py-2 text-sm text-foreground hover:border-primary/60 hover:text-primary"
            >
              <Mail className="h-4 w-4" /> hello@example.com
            </a>
            <a
              href="https://github.com/Chetan19988"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-md border border-border/60 px-3 py-2 text-sm text-foreground hover:border-primary/60 hover:text-primary"
            >
              <Github className="h-4 w-4" /> github.com/Chetan19988
            </a>
            <a
              href="https://www.linkedin.com/in/askchetan/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-md border border-border/60 px-3 py-2 text-sm text-foreground hover:border-accent/60 hover:text-accent"
            >
              <Linkedin className="h-4 w-4" /> linkedin.com/in/askchetan
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}