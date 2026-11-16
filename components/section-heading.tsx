import { Reveal } from '@/components/reveal'

export function SectionHeading({
  index,
  label,
  title,
  id,
}: {
  index: string
  label: string
  title: string
  id: string
}) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
        <span className="text-foreground">{index}</span>
        <span aria-hidden="true" className="h-px w-10 bg-accent" />
        {label}
      </p>
      <h2 id={id} className="mt-4 text-balance font-serif text-4xl font-medium tracking-tight md:text-5xl">
        {title}
      </h2>
    </Reveal>
  )
}
