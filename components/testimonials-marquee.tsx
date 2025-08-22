"use client";
import { cn } from '@/lib/utils';
import Image from 'next/image';

export type Testimonial = {
  id: string;
  name: string;
  role?: string;
  quote: string;
  avatarUrl?: string;
};

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <figure className={cn(
      'min-w-[280px] max-w-[320px] shrink-0',
      'rounded-xl border border-white/10 bg-white/5 p-4',
      'shadow-sm'
    )}>
      <blockquote className="text-sm text-foreground leading-relaxed">“{item.quote}”</blockquote>
      <figcaption className="mt-4 flex items-center gap-3">
        <div className="relative h-9 w-9 overflow-hidden rounded-full border border-white/10 bg-white/10">
          {item.avatarUrl ? (
            <Image src={item.avatarUrl} alt={item.name} fill sizes="36px" className="object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-xs font-semibold text-foreground">
              {item.name.split(' ').map((s) => s[0]).join('').slice(0, 2)}
            </div>
          )}
        </div>
        <div className="text-xs">
          <div className="font-semibold text-foreground">{item.name}</div>
          {item.role && <div className="text-muted-foreground">{item.role}</div>}
        </div>
      </figcaption>
    </figure>
  );
}

export function TestimonialsMarquee({
  items,
  reverse = false,
  speed = 30,
  className,
}: {
  items: Testimonial[];
  reverse?: boolean;
  speed?: number; // seconds for one full loop
  className?: string;
}) {
  const animationName = reverse ? 'marquee-reverse' : 'marquee';
  return (
    <div className={cn('relative w-full overflow-hidden py-16 sm:py-16 will-change-transform', className)}>
      <div
        className={cn(
          'flex w-max gap-4',
          'animate-[var(--marquee-name)_linear_infinite]',
        )}
        style={{
          ['--marquee-name' as unknown as string]: animationName,
          animationDuration: `${speed}s`,
        }}
        aria-hidden
      >
        {[...items, ...items].map((item, idx) => (
          <TestimonialCard key={`${item.id}-${idx}`} item={item} />
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          div[aria-hidden] { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
