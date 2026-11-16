import Link from 'next/link'

const links = [
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-serif text-lg font-semibold tracking-tight"
        >
          <span aria-hidden="true" className="inline-block size-2.5 rounded-full bg-accent" />
          M. DeAnzeris
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.14em] md:gap-7 md:text-xs">
            {links.map((link, i) => (
              <li key={link.href} className={i === 1 || i === 2 ? 'hidden sm:block' : undefined}>
                <Link
                  href={link.href}
                  className="text-muted-foreground transition-colors hover:text-foreground focus-visible:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
