"use client";

import { useEffect, useState } from "react";
import { Navigation, Radio, Cpu, Zap } from "lucide-react";

export type SensorType = "gps" | "motion" | "cellular" | "intel";

interface SensorOscilloscopeProps {
  sensor: SensorType;
  className?: string;
}

export function SensorOscilloscope({ sensor, className = "" }: SensorOscilloscopeProps) {
  const [tick, setTick] = useState(0);
  const [bumpActive, setBumpActive] = useState(false);
  const [coords, setCoords] = useState({ lat: 20.2961, lng: 85.8245 });
  const [motionData, setMotionData] = useState({ x: 0.04, y: -0.02, z: 0.99, gForce: 1.00 });
  const [latency, setLatency] = useState(16);

  // Live telemetry ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setTick((t) => (t + 1) % 1000);

      // Micro drift coordinates
      setCoords((prev) => ({
        lat: Number((prev.lat + (Math.random() - 0.5) * 0.00008).toFixed(5)),
        lng: Number((prev.lng + (Math.random() - 0.5) * 0.00008).toFixed(5)),
      }));

      // Latency jitter
      setLatency(14 + Math.floor(Math.random() * 5));

      // Motion jitter
      if (!bumpActive) {
        setMotionData({
          x: Number(((Math.random() - 0.5) * 0.08).toFixed(2)),
          y: Number(((Math.random() - 0.5) * 0.06).toFixed(2)),
          z: Number((0.98 + (Math.random() - 0.5) * 0.04).toFixed(2)),
          gForce: Number((0.99 + (Math.random() - 0.5) * 0.03).toFixed(2)),
        });
      }
    }, 600);

    return () => clearInterval(timer);
  }, [bumpActive]);

  const triggerRoadBump = () => {
    setBumpActive(true);
    setMotionData({
      x: 0.48,
      y: -0.32,
      z: 1.64,
      gForce: 1.74,
    });
    setTimeout(() => {
      setMotionData({
        x: -0.22,
        y: 0.15,
        z: 0.82,
        gForce: 0.86,
      });
      setTimeout(() => {
        setBumpActive(false);
      }, 700);
    }, 400);
  };

  return (
    <div
      className={`relative overflow-hidden rounded-lg border border-[var(--lime)]/30 bg-[rgba(10,14,23,0.92)] p-4 font-mono backdrop-blur-md transition-all duration-300 ${className}`}
    >
      {/* Top Console Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3 text-[11px] uppercase tracking-wider text-white/60">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--lime)] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--lime)]" />
          </span>
          <span className="text-[var(--lime)] font-bold">
            {sensor === "gps" && "GNSS SATELLITE ENGINE"}
            {sensor === "motion" && "TRI-AXIAL ACCELEROMETER (200 HZ)"}
            {sensor === "cellular" && "4G/LTE CAT-M1 UPLINK"}
            {sensor === "intel" && "ON-DEVICE NEURAL INFERENCE"}
          </span>
        </div>
        <div className="flex items-center gap-3 text-[10px]">
          <span>STATUS: NOMINAL</span>
          <span className="text-white/40">•</span>
          <span>ODISHA FLEET #104</span>
        </div>
      </div>

      {/* Sensor Specific Dynamic Visualization */}
      <div className="py-3">
        {/* 1. MOTION SENSING: Animated Oscilloscope */}
        {sensor === "motion" && (
          <div className="space-y-3">
            <div className="relative h-24 w-full overflow-hidden rounded border border-white/10 bg-black/40">
              {/* Oscilloscope Grid */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:14px_14px]" />
              
              {/* Dynamic Waveform SVG */}
              <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 300 80">
                {/* Center Baseline */}
                <line x1="0" y1="40" x2="300" y2="40" stroke="rgba(255,255,255,0.15)" strokeDasharray="3 3" />
                
                {/* Z-Axis Primary Wave */}
                <path
                  d={
                    bumpActive
                      ? `M 0 40 Q 40 10, 80 40 T 140 ${10 + (tick % 5)} T 180 65 T 220 20 T 260 45 T 300 40`
                      : `M 0 40 Q 30 ${38 + Math.sin(tick) * 6}, 60 40 T 120 ${42 - Math.sin(tick * 1.5) * 8} T 180 ${38 + Math.cos(tick) * 6} T 240 ${41 - Math.sin(tick) * 5} T 300 40`
                  }
                  fill="none"
                  stroke="var(--lime)"
                  strokeWidth="2"
                  className="transition-all duration-300"
                />

                {/* X-Axis Secondary Wave */}
                <path
                  d={
                    bumpActive
                      ? `M 0 40 Q 50 60, 100 25 T 200 55 T 300 40`
                      : `M 0 40 Q 40 ${41 + Math.cos(tick * 2) * 4}, 80 40 T 160 ${39 - Math.cos(tick) * 5} T 240 40 T 300 40`
                  }
                  fill="none"
                  stroke="#FF6A00"
                  strokeWidth="1.5"
                  opacity="0.8"
                  className="transition-all duration-300"
                />
              </svg>

              {/* Live Scan Beam */}
              <div className="pointer-events-none absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-[var(--lime)]/15 to-transparent animate-[scanlineBeam_2.5s_linear_infinite]" />
              
              {/* Corner Watermark */}
              <div className="absolute right-2 top-2 rounded bg-black/60 px-1.5 py-0.5 text-[9px] text-[var(--lime)]">
                {bumpActive ? "EVENT DETECTED: IMPACT" : "LIVE HARSH MOTION STREAM"}
              </div>
            </div>

            {/* Live Metrics Grid + Interactive Road Bump Simulator */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-[11px]">
              <div className="flex items-center gap-3">
                <span className="text-white/70">
                  X: <b className="text-[var(--lime)]">{motionData.x > 0 ? `+${motionData.x}` : motionData.x}G</b>
                </span>
                <span className="text-white/70">
                  Y: <b className="text-[#FF6A00]">{motionData.y > 0 ? `+${motionData.y}` : motionData.y}G</b>
                </span>
                <span className="text-white/70">
                  Z: <b className="text-cyan-400">+{motionData.z}G</b>
                </span>
                <span className="rounded bg-white/10 px-1.5 py-0.5 text-[10px] text-white">
                  PEAK: <b>{motionData.gForce}G</b>
                </span>
              </div>

              <button
                type="button"
                onClick={triggerRoadBump}
                className="flex items-center gap-1.5 rounded border border-[var(--lime)]/50 bg-[var(--lime)]/10 px-2.5 py-1 text-[10px] font-bold text-[var(--lime)] transition-colors hover:bg-[var(--lime)] hover:text-black cursor-pointer active:scale-95"
              >
                <Zap size={12} />
                <span>SIMULATE BUMP</span>
              </button>
            </div>
          </div>
        )}

        {/* 2. GPS POSITIONING: Satellite & Vector Scope */}
        {sensor === "gps" && (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              <div className="rounded border border-white/10 bg-black/30 p-2">
                <small className="text-[9px] text-white/50 block">LATITUDE</small>
                <strong className="text-xs text-[var(--lime)]">{coords.lat}° N</strong>
              </div>
              <div className="rounded border border-white/10 bg-black/30 p-2">
                <small className="text-[9px] text-white/50 block">LONGITUDE</small>
                <strong className="text-xs text-[var(--lime)]">{coords.lng}° E</strong>
              </div>
              <div className="rounded border border-white/10 bg-black/30 p-2">
                <small className="text-[9px] text-white/50 block">CONSTELLATION</small>
                <strong className="text-xs text-white">12 SATS (NavIC+GPS)</strong>
              </div>
              <div className="rounded border border-white/10 bg-black/30 p-2">
                <small className="text-[9px] text-white/50 block">ACCURACY</small>
                <strong className="text-xs text-[#FF6A00]">0.8m HDOP</strong>
              </div>
            </div>

            {/* Simulated Satellite Vector Bar */}
            <div className="flex items-center justify-between rounded border border-white/10 bg-black/20 px-3 py-2 text-[11px] text-white/70">
              <div className="flex items-center gap-2">
                <Navigation size={13} className="text-[var(--lime)] animate-pulse" />
                <span>CORRIDOR: <b>NH-16 ODISHA HIGHWAY</b></span>
              </div>
              <span className="text-[10px] text-[var(--lime)]">SUB-SECOND SYNC</span>
            </div>
          </div>
        )}

        {/* 3. CELLULAR CONNECTIVITY: 4G/LTE Telemetry Uplink */}
        {sensor === "cellular" && (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              <div className="rounded border border-white/10 bg-black/30 p-2">
                <small className="text-[9px] text-white/50 block">SIGNAL STRENGTH</small>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className="flex items-end gap-0.5 h-3">
                    <span className="w-1 h-1.5 bg-[var(--lime)] rounded-xs" />
                    <span className="w-1 h-2 bg-[var(--lime)] rounded-xs" />
                    <span className="w-1 h-2.5 bg-[var(--lime)] rounded-xs" />
                    <span className="w-1 h-3 bg-[var(--lime)] rounded-xs" />
                  </div>
                  <strong className="text-xs text-[var(--lime)]">-68 dBm</strong>
                </div>
              </div>
              <div className="rounded border border-white/10 bg-black/30 p-2">
                <small className="text-[9px] text-white/50 block">LATENCY (ROUNDTRIP)</small>
                <strong className="text-xs text-[var(--lime)]">{latency} ms</strong>
              </div>
              <div className="rounded border border-white/10 bg-black/30 p-2 col-span-2 sm:col-span-1">
                <small className="text-[9px] text-white/50 block">PACKET DELIVERY</small>
                <strong className="text-xs text-white">99.94% UPLINK</strong>
              </div>
            </div>

            <div className="flex items-center justify-between rounded border border-white/10 bg-black/20 px-3 py-2 text-[11px] text-white/70">
              <div className="flex items-center gap-2">
                <Radio size={13} className="text-[#FF6A00]" />
                <span>BAND: <b>LTE CAT-M1 / BAND 3 (1800 MHZ)</b></span>
              </div>
              <span className="text-[10px] text-emerald-400">ENCRYPTED TLS 1.3</span>
            </div>
          </div>
        )}

        {/* 4. ONBOARD INTELLIGENCE: Edge AI Neural Diagnostics */}
        {sensor === "intel" && (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              <div className="rounded border border-white/10 bg-black/30 p-2">
                <small className="text-[9px] text-white/50 block">INFERENCE LATENCY</small>
                <strong className="text-xs text-[var(--lime)]">24 ms (EDGE)</strong>
              </div>
              <div className="rounded border border-white/10 bg-black/30 p-2">
                <small className="text-[9px] text-white/50 block">ANOMALY INDEX</small>
                <strong className="text-xs text-emerald-400">0.02 / LOW RISK</strong>
              </div>
              <div className="rounded border border-white/10 bg-black/30 p-2 col-span-2 sm:col-span-1">
                <small className="text-[9px] text-white/50 block">MODEL VERSION</small>
                <strong className="text-xs text-white">QM-EdgeNet v2.4</strong>
              </div>
            </div>

            <div className="flex items-center justify-between rounded border border-white/10 bg-black/20 px-3 py-2 text-[11px] text-white/70">
              <div className="flex items-center gap-2">
                <Cpu size={13} className="text-[var(--lime)]" />
                <span>CURRENT INFERENCE: <b>HIGHWAY_CRUISE_STABLE</b></span>
              </div>
              <span className="text-[10px] text-[var(--lime)]">99.7% CONFIDENCE</span>
            </div>
          </div>
        )}
      </div>

      {/* Footer System Ticker */}
      <div className="flex items-center justify-between border-t border-white/10 pt-2 text-[10px] text-white/40">
        <span>SAMPLING BUFFER: ACTIVE</span>
        <span>FRAME #{10400 + tick}</span>
      </div>
    </div>
  );
}
