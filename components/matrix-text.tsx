"use client";

/**
 * Matrix Text (inline)
 * Adapted for this project (framer-motion)
 */

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LetterState {
  char: string;
  isMatrix: boolean;
  isSpace: boolean;
}

export interface MatrixTextProps {
  text?: string;
  className?: string;
  initialDelay?: number;
  letterAnimationDuration?: number;
  letterInterval?: number;
}

export default function MatrixText({
  text = "Digital",
  className,
  initialDelay = 200,
  letterAnimationDuration = 500,
  letterInterval = 100,
}: MatrixTextProps) {
  const [letters, setLetters] = useState<LetterState[]>(() =>
    text.split("").map((char) => ({ char, isMatrix: false, isSpace: char === " " }))
  );
  const [isAnimating, setIsAnimating] = useState(false);

  const getRandomChar = useCallback(() => (Math.random() > 0.5 ? "1" : "0"), []);

  const animateLetter = useCallback(
    (index: number) => {
      if (index >= text.length) return;
      requestAnimationFrame(() => {
        setLetters((prev) => {
          const next = [...prev];
          if (!next[index].isSpace) {
            next[index] = { ...next[index], char: getRandomChar(), isMatrix: true };
          }
          return next;
        });
        setTimeout(() => {
          setLetters((prev) => {
            const next = [...prev];
            next[index] = { ...next[index], char: text[index]!, isMatrix: false };
            return next;
          });
        }, letterAnimationDuration);
      });
    },
    [getRandomChar, text, letterAnimationDuration]
  );

  const startAnimation = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    let currentIndex = 0;
    const step = () => {
      if (currentIndex >= text.length) {
        setIsAnimating(false);
        return;
      }
      animateLetter(currentIndex);
      currentIndex += 1;
      setTimeout(step, letterInterval);
    };
    step();
  }, [animateLetter, text, isAnimating, letterInterval]);

  useEffect(() => {
    const timer = setTimeout(startAnimation, initialDelay);
    return () => clearTimeout(timer);
  }, [startAnimation, initialDelay]);

  const motionVariants = useMemo(
    () => ({
      matrix: { color: "#00ff00", textShadow: "0 2px 4px rgba(0,255,0,0.5)" },
      normal: { color: "currentColor", textShadow: "none" },
    }),
    []
  );

  return (
    <span className={cn("inline-flex items-baseline", className)} aria-label="Matrix text animation">
      <span className="inline-flex flex-wrap items-baseline">
        {letters.map((letter, index) => (
          <motion.span
            key={`${index}-${letter.char}`}
            className="w-[1ch] text-center"
            initial="normal"
            animate={letter.isMatrix ? "matrix" : "normal"}
            variants={motionVariants}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            style={{ display: "inline-block", fontVariantNumeric: "tabular-nums" }}
          >
            {letter.isSpace ? "\u00A0" : letter.char}
          </motion.span>
        ))}
      </span>
    </span>
  );
}
