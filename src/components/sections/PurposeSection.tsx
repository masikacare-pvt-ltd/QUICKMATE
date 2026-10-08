export function PurposeSection() {
  return (
    <section className="purpose-section">
      <div className="purpose-copy">
        <div className="section-kicker">
          <span>08</span>
          <span>OUR PURPOSE</span>
        </div>
        <h2>
          A MORE
          <br />
          <span>INTELLIGENT ROAD.</span>
        </h2>
        <div className="mission-vision">
          <article>
            <span>MISSION</span>
            <p>Make every fleet more visible, accountable and efficient.</p>
          </article>
          <article>
            <span>VISION</span>
            <p>
              A future where every commercial vehicle is connected, understood
              and intelligently managed.
            </p>
          </article>
        </div>
      </div>

      <div className="purpose-progression" aria-label="Development roadmap">
        <div className="progress-road" aria-hidden="true" />
        <div className="progress-label">
          <span>01</span>
          <b>TODAY</b>
          <small>Road operations</small>
        </div>
        <div className="progress-label">
          <span>02</span>
          <b>CONNECTED</b>
          <small>Vehicle signals</small>
        </div>
        <div className="progress-label">
          <span>03</span>
          <b>INTELLIGENT</b>
          <small>Useful insight</small>
        </div>
        <div className="progress-label">
          <span>04</span>
          <b>PREDICTIVE</b>
          <small>Earlier understanding</small>
        </div>
      </div>
    </section>
  );
}
