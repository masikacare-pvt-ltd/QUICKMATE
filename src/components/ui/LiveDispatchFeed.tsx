"use client";

import { useEffect, useState } from "react";
import { Terminal, ShieldAlert, CheckCircle2, Radio, Bell } from "lucide-react";

interface DispatchEvent {
  id: string;
  time: string;
  vehicle: string;
  message: string;
  type: "info" | "warning" | "success";
}

const INITIAL_EVENTS: DispatchEvent[] = [
  {
    id: "evt-1",
    time: "15:34:20",
    vehicle: "VEH-104",
    message: "Cruise locked 64 km/h • GNSS vector optimal on NH-16",
    type: "info",
  },
  {
    id: "evt-2",
    time: "15:33:48",
    vehicle: "VEH-108",
    message: "0.38G Harsh Braking Event • Cuttack Junction flagged",
    type: "warning",
  },
  {
    id: "evt-3",
    time: "15:33:12",
    vehicle: "VEH-112",
    message: "Geofence Entry Confirmed • Bhubaneswar Logistics Terminal",
    type: "success",
  },
  {
    id: "evt-4",
    time: "15:32:35",
    vehicle: "VEH-101",
    message: "Diagnostic uplink: Battery 13.8V • Coolant 88°C nominal",
    type: "info",
  },
];

const POOL_OF_EVENTS: Omit<DispatchEvent, "id" | "time">[] = [
  { vehicle: "VEH-104", message: "Sub-meter vector update: NavIC lock steady", type: "info" },
  { vehicle: "VEH-112", message: "Dock arrival logged • Engine idle timer active", type: "info" },
  { vehicle: "VEH-106", message: "NH-16 Berhampur sector entered • Speed 61 km/h", type: "info" },
  { vehicle: "VEH-108", message: "Brake cooldown verified • Vibration baseline stable", type: "success" },
  { vehicle: "VEH-109", message: "Cornering lateral load: 0.22G • Normal threshold", type: "info" },
  { vehicle: "VEH-104", message: "ODISHA corridor telemetry frame verified by Cloud AI", type: "success" },
];

export function LiveDispatchFeed() {
  const [events, setEvents] = useState<DispatchEvent[]>(INITIAL_EVENTS);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      const timeStr = `${hours}:${minutes}:${seconds}`;

      const randomTemplate = POOL_OF_EVENTS[Math.floor(Math.random() * POOL_OF_EVENTS.length)];
      const newEvent: DispatchEvent = {
        id: `evt-${Date.now()}`,
        time: timeStr,
        vehicle: randomTemplate.vehicle,
        message: randomTemplate.message,
        type: randomTemplate.type,
      };

      setEvents((prev) => [newEvent, ...prev.slice(0, 4)]);
    }, 4200);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full border-t border-white/10 bg-black/60 px-4 py-2.5 font-mono backdrop-blur-sm">
      <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] uppercase tracking-wider text-white/50 mb-2">
        <div className="flex items-center gap-2">
          <Terminal size={12} className="text-[var(--lime)]" />
          <span className="text-[var(--lime)] font-bold">LIVE DISPATCH FEED</span>
          <span className="text-white/30">//</span>
          <span>AUTONOMOUS EVENT STREAM</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-emerald-400">TELEMETRY INGEST: 2.4 KB/S</span>
        </div>
      </div>

      <div className="space-y-1.5 overflow-hidden">
        {events.slice(0, 3).map((evt, idx) => (
          <div
            key={evt.id}
            className={`flex items-start gap-2 text-[11px] transition-all duration-300 ${
              idx === 0 ? "opacity-100 font-semibold" : idx === 1 ? "opacity-80" : "opacity-50"
            }`}
          >
            <span className="text-white/40 shrink-0">[{evt.time}]</span>
            <span
              className={`shrink-0 rounded px-1 py-0.2 text-[9px] font-bold ${
                evt.type === "warning"
                  ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                  : evt.type === "success"
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                  : "bg-white/10 text-cyan-300 border border-white/10"
              }`}
            >
              {evt.vehicle}
            </span>
            <span className="text-white/80 truncate">{evt.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
