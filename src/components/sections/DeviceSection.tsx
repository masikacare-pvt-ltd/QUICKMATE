import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function DeviceSection() {
  return (
    <section className="device-section">
      <div className="device-copy">
        <div className="section-kicker">
          <span>04</span>
          <span>IN-VEHICLE HARDWARE</span>
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
      </div>

      <div className="device-stage">
        <div className="device-grid" aria-hidden="true" />
        <div className="device-orbit orbit-one" aria-hidden="true" />
        <div className="device-orbit orbit-two" aria-hidden="true" />

        <Image
          className="device-image"
          src="/assets/quickmate-device.png"
          alt="Compact industrial QUICKMATE telematics device"
          width={1024}
          height={1024}
          loading="lazy"
        />

        <span className="device-label device-gps">
          <i aria-hidden="true" /> GPS <b>POSITIONING</b>
        </span>
        <span className="device-label device-motion">
          <i aria-hidden="true" /> MOTION <b>SENSING</b>
        </span>
        <span className="device-label device-cellular">
          <i aria-hidden="true" /> CELLULAR <b>CONNECTIVITY</b>
        </span>
        <span className="device-label device-intel">
          <i aria-hidden="true" /> ONBOARD <b>INTELLIGENCE</b>
        </span>

        <div className="device-footnote">
          <span>QUICKMATE CONNECTED VEHICLE DEVICE</span>
          <span>QM / 01</span>
        </div>
      </div>
    </section>
  );
}
