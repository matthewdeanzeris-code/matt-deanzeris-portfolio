'use client'

import { useState } from 'react'
import { projectCategories, projects } from '@/lib/content'
import { ProjectCard } from '@/components/project-card'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

type Filter = (typeof projectCategories)[number]

export function ProjectsSection() {
  const [filter, setFilter] = useState<Filter>('All')
  const visible = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="scroll-mt-16 border-t border-foreground/15 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading index="01" label="Selected work" title="Projects" id="projects-title" />

        <div role="group" aria-label="Filter projects by category" className="mb-8 flex flex-wrap gap-2">
          {projectCategories.map((cat) => {
            const active = cat === filter
            const count = cat === 'All' ? projects.length : projects.filter((p) => p.category === cat).length
            return (
              <button
                key={cat}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(cat)}
                className={cn(
                  'rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent',
                  active
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-foreground/20 bg-card/60 text-foreground hover:border-foreground/50',
                )}
              >
                {cat}
                <span className={cn('ml-2', active ? 'text-accent' : 'text-muted-foreground')}>{count}</span>
              </button>
            )
          })}
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {visible.length} {visible.length === 1 ? 'project' : 'projects'}
        </p>

        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <li
              key={project.slug}
              className={cn(
                'animate-in fade-in slide-in-from-bottom-2 duration-500',
                project.featured && 'md:col-span-2',
              )}
            >
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
