import Image from "next/image";

export function FounderSection() {
  return (
    <section className="founder-section" id="team">
      <div className="founder-index">
        <div className="section-kicker">
          <span>09</span>
          <span>THE PEOPLE BEHIND THE PLATFORM</span>
        </div>
        <h2>
          BUILT BY
          <br />
          <span>PEOPLE WHO BUILD.</span>
        </h2>
        <p>
          Turning real operational problems into practical, scalable
          technology.
        </p>
      </div>

      <article className="founder-profile tech-corner-brackets">
        <div className="founder-image-wrapper">
          <Image
            src="/assets/vishwa-pasayat.png"
            alt="Vishma Pasayat - Founder & Entrepreneur"
            width={480}
            height={600}
            className="founder-photo"
            priority
          />
          <div className="founder-photo-gradient" />
          <div className="founder-photo-badge">
            <span className="live-dot" /> FOUNDER / 01 &bull; ODISHA, INDIA
          </div>
        </div>

        <div className="founder-caption">
          <span>FOUNDER / 01</span>
          <span>ODISHA, INDIA</span>
        </div>

        <h3>VISHMA PASAYAT</h3>
        <p className="founder-title">Founder &amp; Entrepreneur</p>
        <p className="founder-bio">
          Engineering student and technology entrepreneur building practical
          solutions at the intersection of AI, IoT and real-world problems.
        </p>
        <p className="founder-bio">
          Leading QUICKMATE with a focus on turning real operational problems
          into practical, scalable technology.
        </p>

        <div className="founder-footnote">
          <span>
            <i aria-hidden="true" /> ENGINEERING THE EVERYDAY
          </span>
          <span>QUICKMATE / 2026</span>
        </div>
      </article>
    </section>
  );
}
