import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function ClosingSection() {
  return (
    <section className="closing-section">
      <Image
        src="/assets/quickmate-highway.jpg"
        alt=""
        width={1600}
        height={900}
        loading="lazy"
      />
      <div className="closing-shade" />

      <div className="closing-content">
        <p className="eyebrow">
          <span className="live-dot" /> THE ROAD IS ALREADY MOVING
        </p>
        <h2>
          YOUR FLEET IS MOVING.
          <br />
          <span>ARE YOU SEEING EVERYTHING?</span>
        </h2>
        <p>Let&apos;s build a smarter way to manage it.</p>
        <div className="closing-actions">
          <Link href="#contact" className="btn-lime">
            Talk to QUICKMATE <ArrowRight aria-hidden="true" />
          </Link>
          <Link href="#contact" className="text-link">
            Partner with us <ArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="closing-coordinate">
        NH-16 &nbsp; / &nbsp; ODISHA{" "}
        <span>20&deg;27&apos; N, 85&deg;53&apos; E</span>
      </div>
    </section>
  );
}
