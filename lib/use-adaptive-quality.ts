import { useEffect, useRef, useState } from "react";

export type QualityLevel = {
  scale: number; // 1.0 = full res; <1 = downscaled render area
  speed: number; // animation speed param
};

export type UseAdaptiveQualityOptions = {
  targetFps?: number; // default 30
  degradeThresholdFps?: number; // default 28
  improveThresholdFps?: number; // default 36
  degradeHoldMs?: number; // default 700
  improveHoldMs?: number; // default 1500
  levels?: QualityLevel[]; // high -> low
  startLevelIndex?: number;
  isActive?: boolean; // if false, pauses measurement
};

export function useAdaptiveQuality({
  targetFps = 30,
  degradeThresholdFps = 28,
  improveThresholdFps = 36,
  degradeHoldMs = 700,
  improveHoldMs = 1500,
  levels = [
    { scale: 1.0, speed: 0.12 },
    { scale: 0.75, speed: 0.09 },
    { scale: 0.5, speed: 0.07 },
    { scale: 0.35, speed: 0.05 },
  ],
  startLevelIndex,
  isActive = true,
}: UseAdaptiveQualityOptions = {}) {
  const pickStartLevel = () => {
    try {
      type NavPerf = { hardwareConcurrency?: number; deviceMemory?: number };
      const { hardwareConcurrency: cores = 8, deviceMemory: mem = 8 } = navigator as unknown as NavPerf;
      if (cores <= 4 || mem < 4) return Math.min(2, levels.length - 1); // start at 0.5 on modest devices
      return 0; // high
    } catch {
      return 1;
    }
  };

  const [levelIndex, setLevelIndex] = useState<number>(
    Math.max(0, Math.min(levels.length - 1, startLevelIndex ?? pickStartLevel()))
  );

  const frameTimesRef = useRef<number[]>([]);
  const lastBelowRef = useRef<number | null>(null);
  const lastAboveRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const hiddenRef = useRef<boolean>(false);

  const computeFps = () => {
    const now = performance.now();
    const windowMs = 700; // sliding window for fps calc
    const arr = frameTimesRef.current;
    arr.push(now);
    // drop frames older than window
    while (arr.length && now - arr[0]! > windowMs) arr.shift();
    const elapsed = arr.length >= 2 ? arr[arr.length - 1]! - arr[0]! : 0;
    const fps = elapsed > 0 ? (arr.length - 1) * (1000 / elapsed) : 60;
    return fps;
  };

  useEffect(() => {
    if (!isActive) {
      return;
    }

    const onVisibility = () => {
      hiddenRef.current = document.hidden;
    };
    document.addEventListener("visibilitychange", onVisibility, { passive: true });

    const tick = () => {
      if (!hiddenRef.current) {
        const fps = computeFps();
        const now = performance.now();
        if (fps < degradeThresholdFps && levelIndex < levels.length - 1) {
          lastBelowRef.current = lastBelowRef.current ?? now;
          lastAboveRef.current = null;
          if (now - lastBelowRef.current >= degradeHoldMs) {
            setLevelIndex((i) => Math.min(i + 1, levels.length - 1));
            lastBelowRef.current = null;
          }
        } else if (fps > improveThresholdFps && levelIndex > 0) {
          lastAboveRef.current = lastAboveRef.current ?? now;
          lastBelowRef.current = null;
          if (now - lastAboveRef.current >= improveHoldMs) {
            setLevelIndex((i) => Math.max(i - 1, 0));
            lastAboveRef.current = null;
          }
        } else {
          // reset timers if between thresholds or at edges
          lastBelowRef.current = null;
          lastAboveRef.current = null;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [isActive, levelIndex, levels.length, degradeThresholdFps, improveThresholdFps, degradeHoldMs, improveHoldMs]);

  const { scale, speed } = levels[levelIndex]!;

  // Always return at least a minimal speed to remain visibly animated
  const clampedSpeed = Math.max(speed, 0.04);

  return { renderScale: Math.min(Math.max(scale, 0.3), 1), speed: clampedSpeed, levelIndex };
}
