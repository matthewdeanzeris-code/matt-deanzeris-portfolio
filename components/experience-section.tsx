import { experience, leadership } from '@/lib/content'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

export function ExperienceSection() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="scroll-mt-16 border-t border-foreground/15 py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-16 px-5 md:px-8 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
        <div>
          <SectionHeading index="02" label="Where I've worked" title="Experience" id="experience-title" />
          <ol className="relative ml-1.5 border-l border-foreground/20">
            {experience.map((item, i) => (
              <Reveal as="li" key={item.org} delay={i * 80} className="relative pb-10 pl-8 last:pb-0">
                <span
                  aria-hidden="true"
                  className="absolute top-1.5 -left-[6.5px] size-3 rounded-full border-2 border-accent bg-background"
                />
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {item.dates}
                  {item.location ? ` · ${item.location}` : ''}
                </p>
                <h3 className="mt-2 text-pretty font-serif text-2xl font-medium tracking-tight">{item.org}</h3>
                <p className="mt-1 text-muted-foreground">{item.role}</p>
              </Reveal>
            ))}
          </ol>
        </div>

        <div>
          <SectionHeading index="03" label="Off the clock" title="Leadership" id="leadership-title" />
          <ul className="flex flex-col gap-5">
            {leadership.map((item, i) => (
              <Reveal as="li" key={item.org} delay={i * 80} className="rounded-lg border border-border bg-card p-6">
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">{item.role}</p>
                <h3 className="mt-2 font-serif text-2xl font-medium tracking-tight">{item.org}</h3>
                <ul className="mt-4 flex flex-col gap-2 text-sm leading-relaxed">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2 h-px w-3 shrink-0 bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
