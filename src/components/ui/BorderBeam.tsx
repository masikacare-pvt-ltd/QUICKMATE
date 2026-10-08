"use client";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
}

export function BorderBeam({
  className = "",
  size = 240,
  duration = 7,
  borderWidth = 1.5,
  colorFrom = "#E2F952", // QUICKMATE lime
  colorTo = "#FF6A00",   // QUICKMATE orange
}: BorderBeamProps) {
  return (
    <div
      aria-hidden="true"
      style={
        {
          "--size": `${size}px`,
          "--duration": `${duration}s`,
          "--border-width": `${borderWidth}px`,
          "--color-from": colorFrom,
          "--color-to": colorTo,
        } as React.CSSProperties
      }
      className={`pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width))_solid_transparent] 
      ![mask-clip:padding-box,border-box] ![mask-composite:intersect] 
      [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)] 
      after:absolute after:aspect-square after:w-[calc(var(--size))] after:animate-[borderBeam_var(--duration)_linear_infinite] 
      after:[animation-composition:add] after:bg-[radial-gradient(ellipse_at_center,var(--color-from),var(--color-to),transparent_70%)] 
      after:[offset-anchor:calc(var(--size)/2)_calc(var(--size)/2)] 
      after:[offset-path:rect(0_auto_auto_0_round_inherit)] ${className}`}
    />
  );
}
