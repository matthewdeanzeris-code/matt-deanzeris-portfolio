import { ArrowUpRight, Mail } from 'lucide-react'
import { contact } from '@/lib/content'
import { Reveal } from '@/components/reveal'

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="scroll-mt-16 border-t border-foreground/15 bg-primary py-20 text-primary-foreground md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-primary-foreground/70">
            <span className="text-primary-foreground">05</span>
            <span aria-hidden="true" className="h-px w-10 bg-accent" />
            Contact
          </p>
          <h2 id="contact-title" className="mt-4 max-w-3xl text-balance font-serif text-4xl font-medium tracking-tight md:text-6xl">
            {"Building something people need to adopt? Let's talk."}
          </h2>
        </Reveal>
        <Reveal delay={100} className="mt-12 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <a
            href={`mailto:${contact.email}`}
            className="group inline-flex items-center gap-3 rounded-md bg-primary-foreground px-5 py-4 text-sm font-medium text-primary transition-transform hover:-translate-y-0.5"
          >
            <Mail className="size-4 shrink-0 text-accent" aria-hidden="true" />
            <span className="break-all">{contact.email}</span>
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-md border border-primary-foreground/30 px-5 py-4 text-sm font-medium transition-colors hover:border-primary-foreground"
          >
            {contact.linkedinLabel}
            <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-primary-foreground/15 px-5 py-6 font-mono text-[11px] uppercase tracking-[0.14em] sm:flex-row sm:justify-between md:px-8">
        <p>Matthew DeAnzeris</p>
        <p>{"Mechanical Engineering · Vanderbilt '27"}</p>
      </div>
    </footer>
  )
}
