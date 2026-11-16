import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/content'
import { ImagePlaceholder } from '@/components/image-placeholder'
import { cn } from '@/lib/utils'

export function ProjectCard({ project }: { project: Project }) {
  const featured = project.featured

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        'group flex h-full flex-col rounded-lg border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_18px_40px_-20px_rgb(207_174_112/0.35)] focus-visible:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:p-6',
        featured && 'md:grid md:grid-cols-2 md:gap-8',
      )}
    >
      {featured && (
        <ImagePlaceholder label={`${project.title} screenshot`} className="mb-6 aspect-[4/3] md:mb-0 md:aspect-auto md:h-full md:min-h-72" />
      )}
      <div className="flex flex-1 flex-col">
        <div className="flex items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          <span>
            <span className="text-foreground">{project.number}</span>
            <span aria-hidden="true" className="mx-2">·</span>
            {project.category}
          </span>
          {featured && (
            <span className="flex items-center gap-1.5 rounded-sm border border-accent/50 px-2 py-0.5 text-[10px] font-medium text-foreground">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
              Featured
            </span>
          )}
          {project.status && (
            <span className="flex items-center gap-1.5 rounded-sm border border-accent/50 px-2 py-0.5 text-[10px] text-foreground">
              <span aria-hidden="true" className="size-1.5 animate-pulse rounded-full bg-accent" />
              {project.status}
            </span>
          )}
        </div>

        <h3
          className={cn(
            'mt-5 text-balance font-serif font-medium tracking-tight',
            featured ? 'text-3xl md:text-4xl' : 'text-2xl',
          )}
        >
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {project.org}
          {project.date ? `, ${project.date}` : ''}
        </p>
        <p className={cn('mt-4 text-pretty leading-relaxed', featured ? 'text-base md:text-lg' : 'text-sm')}>
          {project.summary}
        </p>

        <span className="mt-auto flex items-center gap-1.5 pt-6 font-mono text-xs uppercase tracking-[0.14em]">
          Read case study
          <ArrowUpRight
            className="size-4 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  )
}
