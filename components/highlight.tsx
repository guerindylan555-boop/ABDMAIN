import { cn } from '@/lib/utils';
import React from 'react';

export type HighlightColor = 'blue' | 'cyan' | 'violet' | 'emerald' | 'amber';

const colorToGradient: Record<HighlightColor, string> = {
  blue: 'from-sky-400/90 via-blue-500/85 to-indigo-500/90',
  cyan: 'from-teal-300/90 via-cyan-500/85 to-sky-400/90',
  violet: 'from-fuchsia-400/90 via-violet-500/85 to-purple-500/90',
  emerald: 'from-emerald-400/90 via-emerald-500/85 to-emerald-400/90',
  amber: 'from-amber-300/90 via-amber-500/85 to-orange-500/90',
};

export function Highlight({
  children,
  color = 'cyan',
  className,
  emphasis = 'bold',
}: {
  children: React.ReactNode;
  color?: HighlightColor;
  className?: string;
  emphasis?: 'subtle' | 'balanced' | 'bold';
}) {
  const opacity = emphasis === 'bold' ? 'opacity-95' : emphasis === 'subtle' ? 'opacity-55' : 'opacity-80';
  const blur = emphasis === 'bold' ? 'blur-[1px]' : emphasis === 'subtle' ? 'blur-[3px]' : 'blur-[2px]';

  return (
    <span className={cn('relative inline-block leading-tight', className)}>
      <span
        aria-hidden
        className={cn(
          'pointer-events-none absolute -inset-x-0.5 bottom-[0.06em] h-[0.62em] -skew-y-1 rounded-md',
          'bg-gradient-to-r',
          colorToGradient[color],
          blur,
          opacity,
          'shadow-[0_0_22px_theme(colors.white/0.08)]'
        )}
      />
      <span
        aria-hidden
        className={cn(
          'pointer-events-none absolute -inset-x-1 bottom-[0.04em] h-[0.7em] rounded-md',
          'bg-gradient-to-r',
          colorToGradient[color],
          'blur-[6px] opacity-40'
        )}
      />
      <span className="relative z-10 font-semibold tracking-tight text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]">{children}</span>
    </span>
  );
}
