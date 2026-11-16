import { skills } from '@/lib/content'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const facts = [
  { label: 'Degree', value: 'B.S. Mechanical Engineering' },
  { label: 'School', value: 'Vanderbilt, May 2027' },
  { label: 'Minors', value: 'Business; Innovation & Design Strategy' },
  { label: 'GPA', value: '3.7' },
]

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-16 border-t border-foreground/15 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading index="04" label="Background" title="About" id="about-title" />
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <Reveal>
            <p className="text-pretty font-serif text-2xl leading-snug tracking-tight md:text-3xl">
              I started in finance at Boston College before switching to engineering. Now I&apos;m finishing a{' '}
              <span className="underline decoration-accent decoration-2 underline-offset-4">
                B.S. in Mechanical Engineering at Vanderbilt
              </span>
              , and joining IBM in New York after graduation.
            </p>
            <dl className="mt-10 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
              {facts.map((fact) => (
                <div key={fact.label} className="border-t border-foreground/15 py-4">
                  <dt className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">{fact.label}</dt>
                  <dd className="mt-1">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={100}>
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Skills & tools</h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-sm border border-foreground/20 bg-card px-3 py-1.5 font-mono text-xs text-foreground"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
