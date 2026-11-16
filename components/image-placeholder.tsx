import { ImageIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ImagePlaceholder({ label, className }: { label: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={`Image placeholder: ${label}`}
      className={cn(
        'relative flex items-center justify-center overflow-hidden rounded-md border border-dashed border-foreground/25 bg-[#17150f]',
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'repeating-linear-gradient(135deg, rgb(207 174 112 / 0.1) 0 1px, transparent 1px 12px)',
        }}
      />
      <div className="relative flex flex-col items-center gap-2 px-4 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
        <ImageIcon className="size-5" aria-hidden="true" />
        <span>Image placeholder</span>
        <span className="normal-case tracking-normal">{label}</span>
      </div>
    </div>
  )
}
