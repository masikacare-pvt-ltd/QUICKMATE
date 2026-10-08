"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, Gauge, Route as RouteIcon, Radio } from "lucide-react";
import { DecryptText } from "@/components/ui/DecryptText";
import { BorderBeam } from "@/components/ui/BorderBeam";

export function Hero() {
  const [telemetry, setTelemetry] = useState({ speed: 62, distance: 184, ping: 16 });

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTelemetry((prev) => ({
        speed: prev.speed >= 64 ? 61 : prev.speed + 1,
        distance: prev.distance >= 186 ? 184 : prev.distance + 1,
        ping: 14 + Math.floor(Math.random() * 5),
      }));
    }, 2800);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      {/* Background for Desktop / Tablet */}
      <Image
        className="hero-image"
        src="/assets/quickmate-highway.jpg"
        alt="A heavy commercial truck travelling on an Odisha highway"
        width={1600}
        height={900}
        priority
      />
      <div className="hero-shade" />
      <div className="hero-grain" />

      {/* Main Content Area */}
      <div className="hero-content">
        <p className="eyebrow">
          <span className="live-dot" />{" "}
          <DecryptText text="AI + IoT FOR THE FUTURE OF FLEET MANAGEMENT" />
        </p>

        <h1 id="hero-title">
          SMARTER FLEETS.
          <br />
          <span>QUICKER DECISIONS.</span>
        </h1>

        <p className="hero-lead">
          QUICKMATE turns heavy vehicles into connected, intelligent assets.
        </p>
        <p className="hero-support">
          Real-time visibility. Intelligent insights. Better fleet decisions.
        </p>

        <div className="hero-actions">
          <Link href="#about" className="btn-lime relative overflow-hidden group">
            <span className="relative z-10 flex items-center gap-2">
              Explore QUICKMATE <ArrowRight aria-hidden="true" />
            </span>
          </Link>
          <Link className="text-link" href="#how-it-works">
            See How It Works <ArrowDownRight aria-hidden="true" />
          </Link>
        </div>
      </div>

      {/* Mobile-Only Dedicated Visual Stage (Clean hierarchy: visual + chips + route) */}
      <div className="hero-mobile-stage tech-corner-brackets relative overflow-hidden" aria-label="Live Vehicle Telemetry Preview">
        <BorderBeam size={180} duration={9} colorFrom="var(--lime)" colorTo="#FF6A00" />
        <div className="hero-mobile-visual relative overflow-hidden">
          <Image
            src="/assets/quickmate-highway.jpg"
            alt="Heavy vehicle operating on highway"
            width={600}
            height={340}
            className="hero-mobile-img"
            priority
          />
          <div className="hero-mobile-visual-overlay" />
          {/* Scanning beam effect */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
            <div className="h-20 w-full bg-gradient-to-b from-transparent via-[var(--lime)]/20 to-transparent animate-[scanlineBeam_5s_ease-in-out_infinite]" />
          </div>
          <span className="hero-mobile-tag">
            <span className="live-dot" /> LIVE VEHICLE 104
          </span>
        </div>

        {/* Compact Telemetry Chips (Breathes naturally below visual, no overlap) */}
        <div className="hero-mobile-chips">
          <div className="hero-mobile-chip">
            <div className="chip-icon"><Gauge size={14} /></div>
            <div>
              <strong>{telemetry.speed} km/h</strong>
              <small>MOVING</small>
            </div>
          </div>
          <div className="hero-mobile-chip">
            <div className="chip-icon"><RouteIcon size={14} /></div>
            <div>
              <strong>{telemetry.distance} km</strong>
              <small>NH-16</small>
            </div>
          </div>
          <div className="hero-mobile-chip">
            <div className="chip-icon chip-status"><Radio size={14} /></div>
            <div>
              <strong>{telemetry.ping} ms</strong>
              <small>4G UPLINK</small>
            </div>
          </div>
        </div>

        {/* Mobile Active Route Vector */}
        <div className="hero-mobile-route">
          <div className="hero-mobile-route-meta">
            <span>ACTIVE ROUTE</span>
            <span>NH-16 &bull; ODISHA</span>
          </div>
          <div className="route-line" aria-hidden="true">
            <span />
            <i />
            <i />
            <i />
          </div>
          <div className="route-destinations">
            <span>Bhubaneswar</span>
            <span>Berhampur</span>
          </div>
        </div>
      </div>

      <div className="hero-bottomline">
        <span>BUILT FOR THE ROAD AHEAD</span>
        <span className="scroll-cue">
          <span aria-hidden="true" /> SCROLL TO EXPLORE
        </span>
        <span>01 / 06</span>
      </div>

      <div className="telemetry-live" aria-live="polite">
        Vehicle 104 telemetry: {telemetry.speed} kilometres per hour, {telemetry.distance} kilometres travelled, {telemetry.ping} milliseconds uplink.
      </div>
    </section>
  );
}
