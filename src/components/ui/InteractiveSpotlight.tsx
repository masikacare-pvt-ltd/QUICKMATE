"use client";

import { useEffect, useState } from "react";

export function InteractiveSpotlight() {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [isPointerDevice, setIsPointerDevice] = useState(false);

  useEffect(() => {
    // Only enable mouse tracker on pointer devices
    const mediaQuery = window.matchMedia("(pointer: fine)");
    setIsPointerDevice(mediaQuery.matches);

    let rafId: number | null = null;
    let pendingX = -1000;
    let pendingY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      pendingX = e.clientX;
      pendingY = e.clientY;

      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          setPosition({ x: pendingX, y: pendingY });
          rafId = null;
        });
      }
    };

    if (mediaQuery.matches) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: isPointerDevice
          ? `radial-gradient(650px circle at ${position.x}px ${position.y}px, rgba(255, 106, 0, 0.055) 0%, transparent 80%)`
          : undefined,
      }}
    >
      {/* Background ambient technical grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:28px_28px] opacity-40" />
    </div>
  );
}
