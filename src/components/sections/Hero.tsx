"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight } from "lucide-react";

export function Hero() {
  const [telemetry, setTelemetry] = useState({ speed: 62, distance: 184 });

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTelemetry((prev) => ({
        speed: prev.speed >= 64 ? 61 : prev.speed + 1,
        distance: prev.distance >= 186 ? 184 : prev.distance + 1,
      }));
    }, 3200);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
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

      <div className="hero-content">
        <p className="eyebrow">
          <span className="live-dot" /> AI + IoT FOR THE FUTURE OF FLEET MANAGEMENT
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
          <Link href="#about" className="btn-lime">
            Explore QUICKMATE <ArrowRight aria-hidden="true" />
          </Link>
          <Link className="text-link" href="#how-it-works">
            See how it works <ArrowDownRight aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="hero-coordinate" aria-label="Geographic coordinates">
        20&deg;27&apos; N &nbsp; 85&deg;53&apos; E{" "}
        <span>ODISHA, INDIA</span>
      </div>

      <div className="hero-status">
        <span className="pulse-ring" aria-hidden="true">
          <span />
        </span>
        <div>
          <small>VEHICLE 104</small>
          <strong>LIVE JOURNEY</strong>
        </div>
        <span className="status-divider" aria-hidden="true" />
        <div>
          <small>ROUTE</small>
          <strong>NH-16</strong>
        </div>
      </div>

      <div className="hero-route" aria-label="Active route preview">
        <span className="route-label">ACTIVE ROUTE</span>
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

      <div className="hero-bottomline">
        <span>BUILT FOR THE ROAD AHEAD</span>
        <span className="scroll-cue">
          <span aria-hidden="true" /> SCROLL TO EXPLORE
        </span>
        <span>01 / 06</span>
      </div>

      <div className="telemetry-live" aria-live="polite">
        Vehicle 104 telemetry: {telemetry.speed} kilometres per hour, {telemetry.distance} kilometres travelled.
      </div>
    </section>
  );
}
