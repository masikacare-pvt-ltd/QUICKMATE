import { Activity, Cpu, Radio, ShieldCheck, Zap } from "lucide-react";

export function IndustrialTicker() {
  const items = [
    { label: "CAN-BUS J1939 TELEMATICS", icon: Zap },
    { label: "12 VEHICLES ONLINE", icon: Activity },
    { label: "EDGE AI INFERENCE READY", icon: Cpu },
    { label: "LATENCY: 14ms (NH-16 CORRIDOR)", icon: Radio },
    { label: "4G LTE-M DUAL SIM FAILOVER", icon: Radio },
    { label: "ANOMALY DETECTION ACTIVE", icon: ShieldCheck },
    { label: "GPS + GLONASS L1/L5 DUAL-BAND", icon: Zap },
    { label: "0.1s SAMPLING FREQUENCY", icon: Activity },
  ];

  // Duplicate items for seamless infinite loop
  const marqueeItems = [...items, ...items, ...items];

  return (
    <div
      className="relative w-full overflow-hidden border-y border-white/10 bg-[#090b10] py-3 font-mono text-xs select-none"
      aria-label="Real-time telemetry and technology marquee"
    >
      {/* Edge gradient fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-28 bg-gradient-to-r from-[var(--background)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-28 bg-gradient-to-l from-[var(--background)] to-transparent" />

      <div className="flex w-max animate-[marquee_38s_linear_infinite] hover:[animation-play-state:paused] items-center gap-6">
        {marqueeItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-white/5 bg-white/[0.02] text-white/70 transition-colors hover:border-[var(--lime)]/40 hover:text-white"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--lime)] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--lime)]" />
              </span>
              <Icon className="h-3.5 w-3.5 text-[var(--lime)]/90" aria-hidden="true" />
              <span className="tracking-widest uppercase font-semibold text-[11px]">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
