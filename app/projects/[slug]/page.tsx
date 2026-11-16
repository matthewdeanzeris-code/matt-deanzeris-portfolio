import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { getProject, projects } from '@/lib/content'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/contact-section'
import { ImagePlaceholder } from '@/components/image-placeholder'
import { Reveal } from '@/components/reveal'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}
  return { title: project.title, description: project.summary }
}

function DetailBlock({ index, title, children }: { index: string; title: string; children: React.ReactNode }) {
  return (
    <Reveal as="section" className="grid gap-4 border-t border-foreground/15 py-10 md:grid-cols-[14rem_1fr] md:gap-10">
      <h2 className="flex items-baseline gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
        <span className="text-accent">{index}</span>
        {title}
      </h2>
      <div className="text-pretty text-lg leading-relaxed">{children}</div>
    </Reveal>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-4">
          <span aria-hidden="true" className="mt-3.5 h-px w-4 shrink-0 bg-accent" />
          {item}
        </li>
      ))}
    </ul>
  )
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const idx = projects.findIndex((p) => p.slug === project.slug)
  const next = projects[(idx + 1) % projects.length]

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-5 pt-10 pb-20 md:px-8 md:pt-16">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          All projects
        </Link>

        <Reveal as="header" className="mt-10">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
            <span className="text-foreground">Project {project.number}</span>
            <span aria-hidden="true" className="h-px w-8 bg-accent" />
            {project.category}
            {project.status && (
              <span className="flex items-center gap-1.5 rounded-sm border border-accent/50 px-2 py-0.5 text-foreground">
                <span aria-hidden="true" className="size-1.5 animate-pulse rounded-full bg-accent" />
                {project.status}
              </span>
            )}
          </p>
          <h1 className="mt-5 text-balance font-serif text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl">
            {project.title}
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">{project.subtitle}</p>
          <p className="mt-2 font-mono text-sm">
            {project.org}
            {project.date ? ` · ${project.date}` : ''}
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-12">
          <ImagePlaceholder label={`${project.title} hero image`} className="aspect-[16/9] w-full" />
        </Reveal>

        <div className="mt-14">
          <DetailBlock index="A" title="Problem">
            <p>{project.problem}</p>
          </DetailBlock>
          <DetailBlock index="B" title="What I did">
            <BulletList items={project.whatIDid} />
          </DetailBlock>
          <DetailBlock index="C" title="Result">
            <BulletList items={project.result} />
          </DetailBlock>
          <DetailBlock index="D" title="Tools">
            <ul className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <li key={tool} className="rounded-sm border border-foreground/20 bg-card px-3 py-1.5 font-mono text-sm">
                  {tool}
                </li>
              ))}
            </ul>
          </DetailBlock>
        </div>

        <Link
          href={`/projects/${next.slug}`}
          className="group mt-10 flex items-center justify-between gap-6 rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_18px_40px_-20px_rgb(207_174_112/0.35)] md:p-8"
        >
          <span>
            <span className="block font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">Next project</span>
            <span className="mt-2 block font-serif text-2xl font-medium tracking-tight md:text-3xl">{next.title}</span>
          </span>
          <ArrowRight
            className="size-6 shrink-0 text-accent transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </main>
      <SiteFooter />
    </>
  )
}
