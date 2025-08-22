"use client";

import { cn } from "@/lib/utils";

export default function GlitchText({
  text = "Digital",
  className,
}: {
  text?: string;
  className?: string;
}) {
  return (
    <span className={cn("relative inline-block select-none", className)} data-glitch>
      <span aria-hidden className="glitch-layer glitch-top">
        {text}
      </span>
      <span aria-hidden className="glitch-layer glitch-bottom">
        {text}
      </span>
      <span className="relative z-10">{text}</span>

      <style jsx>{`
        @keyframes glitchShift {
          0% { transform: translate(0, 0); }
          20% { transform: translate(1px, -1px); }
          40% { transform: translate(-1px, 1px); }
          60% { transform: translate(1px, 1px); }
          80% { transform: translate(-1px, -1px); }
          100% { transform: translate(0, 0); }
        }
        @keyframes glitchClip {
          0% { clip-path: inset(0 0 80% 0); }
          20% { clip-path: inset(0 0 60% 0); }
          40% { clip-path: inset(10% 0 40% 0); }
          60% { clip-path: inset(40% 0 20% 0); }
          80% { clip-path: inset(60% 0 0 0); }
          100% { clip-path: inset(0 0 0 0); }
        }

        [data-glitch] {
          text-shadow: 0 1px 0 rgba(0,0,0,.25);
        }
        .glitch-layer {
          position: absolute;
          inset: 0;
          display: inline-block;
          pointer-events: none;
          opacity: .9;
          filter: drop-shadow(0 0 6px rgba(0,255,255,.25));
          animation: glitchShift 1.8s infinite steps(2, end);
        }
        .glitch-top {
          color: #67e8f9; /* cyan-300 */
          mix-blend-mode: screen;
          transform: translate(0, 0);
          animation-delay: .05s;
          clip-path: inset(0 0 60% 0);
        }
        .glitch-bottom {
          color: #a78bfa; /* violet-400 */
          mix-blend-mode: screen;
          animation-delay: .12s;
          clip-path: inset(40% 0 0 0);
        }
        @media (prefers-reduced-motion: reduce) {
          .glitch-layer { animation: none; }
        }
      `}</style>
    </span>
  );
}
