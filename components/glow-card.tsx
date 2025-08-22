"use client";
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export type GlowCardProps = {
  title: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaAlign?: 'start' | 'center' | 'end';
  className?: string;
  children?: React.ReactNode;
};

export function GlowCard({ title, description, ctaLabel, ctaHref, ctaAlign = 'start', className, children }: GlowCardProps) {
  const justify = ctaAlign === 'center' ? 'justify-center' : ctaAlign === 'end' ? 'justify-end' : 'justify-start';
  return (
    <div className={cn('relative h-full', className)}>
      <div className="card">
        <div className="content">
          <div className="text-xs font-semibold uppercase tracking-wide text-white text-center">{title}</div>
          {description && (
            <p className="mt-2 text-sm leading-relaxed text-white/80">{description}</p>
          )}
          {children}
          {ctaHref && ctaLabel && (
            <div className={cn('mt-auto pt-3 flex', justify)}>
              <Button asChild size="sm">
                <Link href={ctaHref}>{ctaLabel}</Link>
              </Button>
            </div>
          )}
        </div>
        <div className="glow" />
      </div>

      <style jsx>{`
        @property --a {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }

        @keyframes a { to { --a: 1turn; } }

        .card {
          position: relative;
          overflow: hidden;
          border-radius: 0.75rem;
          background: rgba(255,255,255,0.06);
          backdrop-filter: blur(2px);
          padding: 1rem;
          min-height: 12rem;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .content { position: relative; z-index: 1; display: flex; flex-direction: column; flex: 1 1 auto; }

        .glow {
          content: '';
          position: absolute;
          z-index: 0;
          inset: -1em;
          border: solid 1em;
          border-image: conic-gradient(
              from var(--a),
              #669900,
              #99cc33,
              #ccee66,
              #006699,
              #3399cc,
              #990066,
              #cc3399,
              #ff6600,
              #ff9900,
              #ffcc00,
              #669900
            ) 1;
          filter: blur(0.65em);
          opacity: 0.5;
          animation: a 4s linear infinite;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
