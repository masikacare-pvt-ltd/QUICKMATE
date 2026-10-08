"use client";

import { useEffect, useState, useRef, useCallback } from "react";

interface DecryptTextProps {
  text: string;
  className?: string;
  characters?: string;
  speed?: number;
  triggerOnHover?: boolean;
  revealDuration?: number;
}

const DEFAULT_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ#_@%*<>";

export function DecryptText({
  text,
  className = "",
  characters = DEFAULT_CHARS,
  speed = 28,
  triggerOnHover = true,
}: DecryptTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const startScramble = useCallback(() => {
    if (isScrambling) return;
    setIsScrambling(true);

    let iteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = window.setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " " || char === "\n") return char;
            if (index < iteration) {
              return text[index];
            }
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setIsScrambling(false);
        setDisplayText(text);
      }

      iteration += 1 / 2;
    }, speed);
  }, [text, characters, speed, isScrambling]);

  useEffect(() => {
    // Run once on mount for dynamic feel
    startScramble();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <span
      className={`font-mono transition-colors duration-200 ${className}`}
      onMouseEnter={triggerOnHover ? startScramble : undefined}
      style={{ display: "inline-block" }}
    >
      {displayText}
    </span>
  );
}
