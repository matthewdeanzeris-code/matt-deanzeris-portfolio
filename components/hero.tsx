import Link from 'next/link'
import { ArrowDownRight } from 'lucide-react'
import { stats } from '@/lib/content'
import { Reveal } from '@/components/reveal'

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="mx-auto max-w-6xl px-5 pt-16 pb-20 md:px-8 md:pt-28 md:pb-28">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Matthew DeAnzeris
          <span aria-hidden="true" className="mx-3 text-accent">/</span>
          Portfolio
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h1
          id="hero-title"
          className="mt-6 max-w-4xl text-balance font-serif text-5xl font-medium leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          I build technical things people{' '}
          <em className="font-normal italic text-accent">actually</em> adopt.
        </h1>
      </Reveal>
      <Reveal delay={160}>
        <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
          {"Mechanical Engineer, Vanderbilt '27. I work where hardware, AI, and the customer meet: I sit with the people who will use something, then I build it."}
        </p>
      </Reveal>
      <Reveal delay={220} className="mt-10 flex flex-wrap items-center gap-4">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          See the work
          <ArrowDownRight className="size-4" aria-hidden="true" />
        </Link>
        <Link
          href="/#contact"
          className="inline-flex items-center gap-2 rounded-md border border-foreground/20 px-5 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-foreground"
        >
          Get in touch
        </Link>
      </Reveal>

      <dl className="mt-20 grid grid-cols-1 border-t border-foreground/15 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal
            key={stat.value}
            delay={i * 90}
            className="flex flex-col-reverse gap-3 border-b border-foreground/15 py-7 sm:px-5 sm:odd:pl-0 lg:border-b-0 lg:border-r lg:last:border-r-0 lg:px-6 lg:first:pl-0"
          >
            <dt className="max-w-[16rem] text-sm leading-relaxed text-muted-foreground">{stat.label}</dt>
            <dd className="font-serif text-4xl font-medium tracking-tight text-accent md:text-5xl">
              {stat.value}
            </dd>
          </Reveal>
        ))}
      </dl>
    </section>
  )
}
