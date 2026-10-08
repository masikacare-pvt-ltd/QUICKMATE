"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Cpu, Radio, Activity, Navigation, Sparkles } from "lucide-react";
import { SensorOscilloscope, type SensorType } from "@/components/ui/SensorOscilloscope";
import { DecryptText } from "@/components/ui/DecryptText";

type HotspotKey = SensorType;

interface HotspotInfo {
  key: HotspotKey;
  label: string;
  sublabel: string;
  title: string;
  description: string;
  icon: typeof Navigation;
}

const hotspots: HotspotInfo[] = [
  {
    key: "gps",
    label: "GPS",
    sublabel: "POSITIONING",
    title: "High-Precision GNSS Positioning",
    description: "Continuous real-time geolocation with sub-second vector logging across multi-satellite constellations.",
    icon: Navigation,
  },
  {
    key: "motion",
    label: "MOTION",
    sublabel: "SENSING",
    title: "Tri-Axial Motion Sensing",
    description: "High-G accelerometer and gyro tracking harsh braking, abrupt lane changes, and vibration patterns.",
    icon: Activity,
  },
  {
    key: "cellular",
    label: "CELLULAR",
    sublabel: "CONNECTIVITY",
    title: "Industrial 4G/LTE Connectivity",
    description: "Ruggedized telemetry transceiver ensuring continuous uplink even across remote highway corridors.",
    icon: Radio,
  },
  {
    key: "intel",
    label: "ONBOARD",
    sublabel: "INTELLIGENCE",
    title: "Edge Machine Intelligence",
    description: "On-device processing detects route anomalies, extended idling, and stoppage events instantly.",
    icon: Cpu,
  },
];

export function DeviceSection() {
  const [activeHotspot, setActiveHotspot] = useState<HotspotKey>("gps");

  const currentHotspot = hotspots.find((h) => h.key === activeHotspot) ?? hotspots[0];
  const CurrentIcon = currentHotspot.icon;

  return (
    <section className="device-section" id="technology">
      <div className="device-copy">
        <div className="section-kicker">
          <span>04</span>
          <span>
            <DecryptText text="IN-VEHICLE HARDWARE" />
          </span>
        </div>
        <p className="eyebrow">MADE FOR THE ROAD. BUILT TO STAY.</p>
        <h2>
          SMALL DEVICE.
          <br />
          <span>BIG VISIBILITY.</span>
        </h2>
        <p>Technology designed to stay with the vehicle, wherever it goes.</p>
        <Link className="text-link" href="#data-demo">
          Explore the technology <ArrowRight aria-hidden="true" />
        </Link>

        {/* Desktop Live Telemetry Oscilloscope Console */}
        <div className="mt-8 hidden lg:block">
          <div className="mb-2 flex items-center justify-between text-[11px] font-mono text-white/50">
            <span>LIVE TELEMETRY LAB</span>
            <span className="text-[var(--lime)] flex items-center gap-1">
              <Sparkles size={11} /> SELECT A SENSOR TO PROBE
            </span>
          </div>
          <SensorOscilloscope sensor={activeHotspot} />
        </div>
      </div>

      <div className="device-stage">
        <div className="device-grid" aria-hidden="true" />
        <div className="device-orbit orbit-one" aria-hidden="true" />
        <div className="device-orbit orbit-two" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-30" aria-hidden="true">
          <div className="h-72 w-72 sm:h-96 sm:w-96 rounded-full border border-dashed border-[var(--lime)]/30 animate-[radarSpin_50s_linear_infinite]" />
        </div>

        <div className="device-image-wrapper">
          <Image
            className="device-image"
            src="/assets/quickmate-device.png"
            alt="Compact industrial QUICKMATE telematics device"
            width={1024}
            height={1024}
            loading="lazy"
          />
        </div>

        {/* Desktop floating labels */}
        <button
          type="button"
          className={`device-label device-gps ${activeHotspot === "gps" ? "active" : ""}`}
          onClick={() => setActiveHotspot("gps")}
          aria-label="GPS Positioning details"
        >
          <i aria-hidden="true" /> GPS <b>POSITIONING</b>
        </button>
        <button
          type="button"
          className={`device-label device-motion ${activeHotspot === "motion" ? "active" : ""}`}
          onClick={() => setActiveHotspot("motion")}
          aria-label="Motion Sensing details"
        >
          <i aria-hidden="true" /> MOTION <b>SENSING</b>
        </button>
        <button
          type="button"
          className={`device-label device-cellular ${activeHotspot === "cellular" ? "active" : ""}`}
          onClick={() => setActiveHotspot("cellular")}
          aria-label="Cellular Connectivity details"
        >
          <i aria-hidden="true" /> CELLULAR <b>CONNECTIVITY</b>
        </button>
        <button
          type="button"
          className={`device-label device-intel ${activeHotspot === "intel" ? "active" : ""}`}
          onClick={() => setActiveHotspot("intel")}
          aria-label="Onboard Intelligence details"
        >
          <i aria-hidden="true" /> ONBOARD <b>INTELLIGENCE</b>
        </button>

        {/* Mobile Integrated Hardware Capability Console */}
        <div className="device-mobile-console tech-corner-brackets" role="region" aria-label="Hardware Capabilities">
          <div className="device-mobile-selector" role="tablist" aria-label="Device Modules">
            {hotspots.map((h) => {
              const Icon = h.icon;
              const isSelected = activeHotspot === h.key;
              return (
                <button
                  key={h.key}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  className={`device-mobile-btn ${isSelected ? "selected" : ""}`}
                  onClick={() => setActiveHotspot(h.key)}
                >
                  <Icon size={14} aria-hidden="true" />
                  <span>{h.label}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile Dynamic Hardware Info Panel */}
          <div className="device-mobile-info" role="tabpanel" aria-live="polite">
            <div className="device-mobile-info-top">
              <span className="info-title">
                <CurrentIcon size={14} aria-hidden="true" />
                {currentHotspot.title}
              </span>
              <span className="info-badge">
                <i aria-hidden="true" /> ACTIVE SENSOR
              </span>
            </div>
            <p className="info-description">{currentHotspot.description}</p>
          </div>

          {/* Mobile Live Sensor Oscilloscope & Waveform */}
          <div className="mt-3">
            <SensorOscilloscope sensor={activeHotspot} />
          </div>
        </div>

        <div className="device-footnote">
          <span>QUICKMATE CONNECTED VEHICLE DEVICE</span>
          <span>QM / 01</span>
        </div>
      </div>
    </section>
  );
}
