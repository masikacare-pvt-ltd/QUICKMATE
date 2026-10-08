import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Clock3,
  Crosshair,
  Gauge,
  Layers3,
  MapPin,
  Menu,
  Radio,
  Route as RouteIcon,
  ShieldCheck,
  Signal,
  Sparkles,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import highwayImage from "@/assets/quickmate-highway.jpg";
import deviceImage from "@/assets/quickmate-device.png";

const navigation = [
  ["About", "about"],
  ["How it works", "how-it-works"],
  ["Technology", "technology"],
  ["Dashboard", "dashboard"],
  ["Team", "team"],
  ["FAQ", "faq"],
] as const;

const processSteps = [
  { number: "01", title: "CONNECT", description: "A compact QUICKMATE device is installed inside the vehicle.", icon: Radio },
  { number: "02", title: "CAPTURE", description: "Location, speed, motion, route, stoppages and journey data.", icon: Crosshair },
  { number: "03", title: "TRANSMIT", description: "Vehicle information reaches QUICKMATE through cellular connectivity.", icon: Signal },
  { number: "04", title: "UNDERSTAND", description: "Vehicle data becomes useful operational information.", icon: Activity },
  { number: "05", title: "ACT", description: "See delays and unusual activity earlier, and make faster decisions.", icon: ArrowUpRight },
] as const;

const dataExperiences = [
  { id: "location", label: "LIVE LOCATION", detail: "Know where your vehicle is.", icon: MapPin, value: "19.31° N", metric: "BERHAMPUR, ODISHA", fill: 72 },
  { id: "route", label: "ROUTE", detail: "Understand where it is going.", icon: RouteIcon, value: "NH-16", metric: "ROUTE ON TRACK", fill: 61 },
  { id: "speed", label: "SPEED", detail: "Know how it is moving.", icon: Gauge, value: "62", unit: "km/h", metric: "STEADY MOVEMENT", fill: 66 },
  { id: "stoppages", label: "STOPPAGES", detail: "See when and where it stops.", icon: Clock3, value: "18 min", metric: "BERHAMPUR · TODAY", fill: 34 },
  { id: "journey", label: "JOURNEY", detail: "Track distance and travel time.", icon: ArrowRight, value: "184 km", metric: "JOURNEY PROGRESS", fill: 76 },
  { id: "anomalies", label: "ANOMALIES", detail: "Spot unusual movement and deviations.", icon: ShieldCheck, value: "NORMAL", metric: "NO UNUSUAL MOVEMENT", fill: 15 },
] as const;

const vehicles = [
  { id: "104", status: "Moving", place: "NH-16 · Berhampur", speed: 62, distance: 184, tone: "good" },
  { id: "108", status: "Stopped", place: "Berhampur", speed: 0, distance: 96, tone: "watch" },
  { id: "112", status: "In transit", place: "Bhubaneswar · NH-16", speed: 54, distance: 238, tone: "good" },
] as const;

const faqs = [
  ["What is QUICKMATE?", "QUICKMATE is an AIoT-powered fleet platform designed for heavy vehicles."],
  ["Is QUICKMATE just a GPS tracker?", "No. QUICKMATE combines dedicated IoT hardware, vehicle data and intelligent analytics."],
  ["What can QUICKMATE track?", "Location, route, speed, stoppages, journey information and unusual movement."],
  ["How is QUICKMATE installed?", "A dedicated IoT device is installed inside the vehicle."],
  ["Who is QUICKMATE for?", "Fleet owners, logistics operators and businesses managing commercial vehicles."],
  ["What is the future of QUICKMATE?", "AI-powered fleet intelligence that can identify patterns, risks and operational insights earlier."],
] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "QUICKMATE | AIoT-Powered Intelligent Fleet Management" },
      { name: "description", content: "QUICKMATE is an AIoT-powered fleet management platform for heavy vehicles, providing real-time visibility, intelligent insights and smarter fleet operations." },
      { property: "og:title", content: "QUICKMATE | AIoT-Powered Intelligent Fleet Management" },
      { property: "og:description", content: "Don’t just track your fleet. Understand it. Smarter fleets. Quicker decisions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: QuickmateHome,
});

function QuickmateHome() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeVehicle, setActiveVehicle] = useState(vehicles[0]);
  const [activeData, setActiveData] = useState<(typeof dataExperiences)[number]>(dataExperiences[0]);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSent, setFormSent] = useState(false);
  const [telemetry, setTelemetry] = useState({ speed: 62, distance: 184 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTelemetry((current) => ({ speed: current.speed >= 64 ? 61 : current.speed + 1, distance: current.distance >= 186 ? 184 : current.distance + 1 }));
    }, 3200);
    return () => window.clearInterval(timer);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="QUICKMATE home">
          <span className="wordmark-symbol"><span /><span /><span /></span>
          <span>QUICKMATE</span>
        </a>
        <nav className={`desktop-nav ${menuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
          <a href="#home" onClick={closeMenu}>Home</a>
          {navigation.map(([label, id]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>)}
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <Button asChild className="header-cta"><a href="#contact">Talk to us <ArrowUpRight aria-hidden="true" /></a></Button>
        <Button type="button" variant="ghost" size="icon" className="menu-toggle" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <img className="hero-image" src={highwayImage} alt="A heavy commercial truck travelling on an Odisha highway" width={1600} height={900} fetchPriority="high" />
        <div className="hero-shade" />
        <div className="hero-grain" />
        <div className="hero-content">
          <p className="eyebrow"><span className="live-dot" /> AI + IoT FOR THE FUTURE OF FLEET MANAGEMENT</p>
          <h1 id="hero-title">SMARTER FLEETS.<br /><span>QUICKER DECISIONS.</span></h1>
          <p className="hero-lead">QUICKMATE turns heavy vehicles into connected, intelligent assets.</p>
          <p className="hero-support">Real-time visibility. Intelligent insights. Better fleet decisions.</p>
          <div className="hero-actions">
            <Button asChild className="btn-lime"><a href="#about">Explore QUICKMATE <ArrowRight aria-hidden="true" /></a></Button>
            <a className="text-link" href="#how-it-works">See how it works <ArrowDownRight aria-hidden="true" /></a>
          </div>
        </div>
        <div className="hero-coordinate">20°27&apos; N &nbsp; 85°53&apos; E <span>ODISHA, INDIA</span></div>
        <div className="hero-status"><span className="pulse-ring"><span /></span><div><small>VEHICLE 104</small><strong>LIVE JOURNEY</strong></div><span className="status-divider" /><div><small>ROUTE</small><strong>NH-16</strong></div></div>
        <div className="hero-route"><span className="route-label">ACTIVE ROUTE</span><div className="route-line"><span /><i /><i /><i /></div><span className="route-destinations"><span>Bhubaneswar</span><span>Berhampur</span></span></div>
        <div className="hero-bottomline"><span>BUILT FOR THE ROAD AHEAD</span><span className="scroll-cue"><span /> SCROLL TO EXPLORE</span><span>01 / 06</span></div>
      </section>

      <section className="intro-band" id="about">
        <div className="section-kicker"><span>01</span><span>THE OPERATIONAL BLIND SPOT</span></div>
        <div className="intro-layout">
          <h2>KNOWING WHERE<br />YOUR VEHICLE IS<br /><span>ISN’T ENOUGH.</span></h2>
          <div className="intro-copy"><p>Fleet owners often depend on phone calls, driver updates and basic GPS systems to understand what happens during a journey.</p><a className="text-link" href="#technology">There’s a better way <ArrowRight aria-hidden="true" /></a></div>
        </div>
        <div className="signal-story">
          <div className="signal-road"><div className="signal-road-line" /><div className="signal-truck"><span>104</span><span className="truck-wheel" /></div><i className="signal-miss miss-one" /><i className="signal-miss miss-two" /><i className="signal-miss miss-three" /><div className="signal-delay"><Clock3 /> LAST UPDATE <b>18 MIN AGO</b></div></div>
          <div className="signal-issues">{[
            ["01", "MISSED UPDATES", "Too much dependence on manual information."],
            ["02", "UNEXPECTED STOPPAGES", "Delays can remain invisible until they become costly."],
            ["03", "ROUTE DEVIATIONS", "Problems may be discovered too late."],
            ["04", "SLOW DECISIONS", "Limited visibility leads to delayed action."],
          ].map(([number, title, description]) => <div className="issue-row" key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div><ArrowUpRight aria-hidden="true" /></div>)}</div>
        </div>
        <div className="change-line"><span>QUICKMATE CHANGES THAT.</span><span>FROM SIGNALS TO UNDERSTANDING <ArrowRight aria-hidden="true" /></span></div>
      </section>

      <section className="brand-moment" id="technology">
        <div className="brand-route-mark"><span /><span /><span /><span /><span /></div>
        <p className="eyebrow">A NEW KIND OF FLEET VISIBILITY</p>
        <h2>DON’T JUST TRACK<br />YOUR FLEET.<br /><span>UNDERSTAND IT.</span></h2>
        <p className="brand-moment-caption">THE INTELLIGENCE LAYER BETWEEN THE VEHICLE AND THE FLEET OPERATOR.</p>
      </section>

      <section className="pipeline-section">
        <div className="pipeline-copy"><div className="section-kicker"><span>02</span><span>ABOUT QUICKMATE</span></div><h2>FROM TRACKING<br /><span>TO UNDERSTANDING.</span></h2><p>QUICKMATE is an AIoT-powered fleet platform built for heavy vehicles. We combine dedicated in-vehicle IoT hardware with real-time data and intelligent software to help fleet owners understand what is happening on the road—not just where their vehicle is.</p><p className="pipeline-goal">Make fleet operations safer, smarter and more efficient.</p></div>
        <div className="pipeline-visual" aria-label="QUICKMATE fleet data pipeline">
          <div className="pipeline-track"><span className="data-packet packet-a" /><span className="data-packet packet-b" /></div>
          {[
            ["01", "VEHICLE", "On the road", "vehicle"],
            ["02", "QUICKMATE DEVICE", "Capture signals", "hardware"],
            ["03", "CONNECTIVITY", "Cellular network", "network"],
            ["04", "DATA", "Journey signals", "data"],
            ["05", "INTELLIGENCE", "Useful insights", "intelligence"],
            ["06", "FLEET VIEW", "Faster decisions", "view"],
          ].map(([number, title, caption, id], index) => <div className={`pipeline-node ${index === 5 ? "last" : ""}`} key={id}><span className="pipeline-number">{number}</span><span className="pipeline-symbol">{index === 0 ? <RouteIcon /> : index === 1 ? <Layers3 /> : index === 2 ? <Signal /> : index === 3 ? <Activity /> : index === 4 ? <Sparkles /> : <Gauge />}</span><div><strong>{title}</strong><small>{caption}</small></div></div>)}
        </div>
      </section>

      <section className="journey-section" id="how-it-works">
        <div className="section-kicker"><span>03</span><span>HOW QUICKMATE WORKS</span></div>
        <div className="journey-heading"><h2>ONE VEHICLE.<br />ONE DEVICE.<br /><span>COMPLETE VISIBILITY.</span></h2><p>One continuous journey from road signals to clearer decisions.</p></div>
        <div className="journey-rail"><div className="journey-progress" />{processSteps.map(({ number, title, description, icon: Icon }) => <article className="journey-step" key={number}><span className="journey-index">{number}</span><span className="journey-icon"><Icon aria-hidden="true" /></span><h3>{title}</h3><p>{description}</p></article>)}</div>
        <div className="journey-end"><span>VEHICLE</span><i /><span>DEVICE</span><i /><span>NETWORK</span><i /><span>DATA</span><i /><span>INTELLIGENCE</span><i /><span>DASHBOARD</span></div>
      </section>

      <section className="device-section">
        <div className="device-copy"><div className="section-kicker"><span>04</span><span>IN-VEHICLE HARDWARE</span></div><p className="eyebrow">MADE FOR THE ROAD. BUILT TO STAY.</p><h2>SMALL DEVICE.<br /><span>BIG VISIBILITY.</span></h2><p>Technology designed to stay with the vehicle, wherever it goes.</p><a className="text-link" href="#data-demo">Explore the technology <ArrowRight aria-hidden="true" /></a></div>
        <div className="device-stage"><div className="device-grid" /><div className="device-orbit orbit-one" /><div className="device-orbit orbit-two" /><img className="device-image" src={deviceImage} alt="Compact industrial QUICKMATE telematics device" width={1024} height={1024} loading="lazy" /><span className="device-label device-gps"><i /> GPS <b>POSITIONING</b></span><span className="device-label device-motion"><i /> MOTION <b>SENSING</b></span><span className="device-label device-cellular"><i /> CELLULAR <b>CONNECTIVITY</b></span><span className="device-label device-intel"><i /> ONBOARD <b>INTELLIGENCE</b></span><span className="device-footnote">QUICKMATE CONNECTED VEHICLE DEVICE <span>QM / 01</span></span></div>
      </section>

      <section className="data-section" id="data-demo">
        <div className="section-kicker"><span>05</span><span>WHAT QUICKMATE SEES</span></div><div className="data-heading"><h2>SEE WHAT YOUR FLEET<br /><span>CAN’T TELL YOU.</span></h2><p>Every signal tells part of the story.<br />Together, they make it clearer.</p></div>
        <div className="data-explorer"><div className="data-selector" role="tablist" aria-label="Fleet data views">{dataExperiences.map(({ id, label, icon: Icon }) => <button className={`data-tab ${activeData.id === id ? "active" : ""}`} id={`tab-${id}`} role="tab" aria-selected={activeData.id === id} aria-controls="data-panel" key={id} onClick={() => setActiveData(dataExperiences.find((item) => item.id === id) ?? dataExperiences[0])}><span>0{dataExperiences.findIndex((item) => item.id === id) + 1}</span><Icon aria-hidden="true" /><strong>{label}</strong><ChevronRight aria-hidden="true" /></button>)}</div>
          <div className="data-panel" id="data-panel" role="tabpanel" aria-labelledby={`tab-${activeData.id}`}><div className="data-panel-top"><span><activeData.icon aria-hidden="true" /> {activeData.label}</span><span className="data-live"><i /> LIVE DATA</span></div><div className={`demo-map demo-${activeData.id}`}><div className="map-grid" /><div className="map-road road-h" /><div className="map-road road-v" /><div className="map-road road-diag" /><div className="map-route" /><span className="map-place place-a">BERHAMPUR</span><span className="map-place place-b">NH-16</span><span className="map-place place-c">ODISHA</span><div className="map-pin"><MapPin aria-hidden="true" /><span>104</span></div><div className="map-node node-a" /><div className="map-node node-b" /><div className="map-readout"><small>{activeData.metric}</small><strong>{activeData.value}{"unit" in activeData && activeData.unit ? <small> {activeData.unit}</small> : null}</strong></div></div><div className="data-panel-bottom"><span>{activeData.detail}</span><span>VEHICLE 104 <ArrowUpRight aria-hidden="true" /></span></div></div></div>
      </section>

      <section className="dashboard-section" id="dashboard">
        <div className="dashboard-intro"><div className="section-kicker"><span>06</span><span>LIVE FLEET VIEW</span></div><h2>YOUR FLEET.<br /><span>ONE VIEW.</span></h2><p>Everything important, in one place.</p></div>
        <div className="fleet-console"><div className="console-topbar"><div className="console-brand"><span className="console-brandmark">Q</span><span>QUICKMATE <small>FLEET OPERATIONS</small></span></div><div className="console-live"><i /> SYSTEM LIVE <span>·</span> ODISHA, IN</div><div className="console-avatar">QM</div></div><div className="console-summary"><div><span>TOTAL VEHICLES</span><strong>12 <small>ONLINE</small></strong></div><div><span>MOVING</span><strong>08</strong></div><div><span>STOPPED</span><strong>02</strong></div><div><span>IN TRANSIT</span><strong>02</strong></div><div className="console-summary-date">FLEET STATUS<br />UPDATED JUST NOW</div></div>
          <div className="console-body"><div className="console-map"><div className="console-map-grid" /><div className="console-map-road console-road-a" /><div className="console-map-road console-road-b" /><div className="console-map-road console-road-c" /><div className="console-map-road console-road-d" /><svg className="console-route-svg" viewBox="0 0 600 360" preserveAspectRatio="none" aria-hidden="true"><path d="M35 295 C108 242 108 203 188 208 S267 113 352 148 S433 218 493 147 S551 97 588 58" /><path className="route-dash" d="M35 295 C108 242 108 203 188 208 S267 113 352 148 S433 218 493 147 S551 97 588 58" /></svg><span className="console-map-label map-label-a">BHUBANESWAR</span><span className="console-map-label map-label-b">BERHAMPUR</span><span className="console-map-label map-label-c">NH-16</span><button className="vehicle-marker marker-a" onClick={() => setActiveVehicle(vehicles[0])} aria-label="Select vehicle 104"><span>104</span><i /></button><button className="vehicle-marker marker-b" onClick={() => setActiveVehicle(vehicles[1])} aria-label="Select vehicle 108"><span>108</span><i /></button><button className="vehicle-marker marker-c" onClick={() => setActiveVehicle(vehicles[2])} aria-label="Select vehicle 112"><span>112</span><i /></button><div className="map-legend"><i /> MOVING <i /> STOPPED</div></div>
            <aside className="console-vehicles"><div className="vehicle-list-heading"><div><span>ACTIVE VEHICLES</span><small>Showing 3 of 12</small></div><button aria-label="More vehicles"><ChevronRight /></button></div>{vehicles.map((vehicle) => <button className={`vehicle-row ${activeVehicle.id === vehicle.id ? "selected" : ""}`} key={vehicle.id} onClick={() => setActiveVehicle(vehicle)}><span className={`vehicle-status-dot ${vehicle.tone}`} /><span className="vehicle-id"><strong>VEHICLE {vehicle.id}</strong><small>{vehicle.place}</small></span><span className="vehicle-speed"><strong>{vehicle.status === "Stopped" ? "18 min" : `${vehicle.speed} km/h`}</strong><small>{vehicle.status.toUpperCase()}</small></span></button>)}<div className="vehicle-focus"><div className="vehicle-focus-heading"><span>SELECTED VEHICLE</span><b>#{activeVehicle.id}</b></div><div className="focus-telemetry"><span><Gauge /><strong>{activeVehicle.status === "Stopped" ? "—" : `${activeVehicle.speed}`}<small> km/h</small></strong><small>SPEED</small></span><span><RouteIcon /><strong>{activeVehicle.distance}<small> km</small></strong><small>DISTANCE</small></span></div><div className="vehicle-health"><i /> {activeVehicle.tone === "watch" ? "REVIEW STOPPAGE" : "STATUS: NORMAL"}</div></div></aside></div>
          <div className="console-footer"><span><i /> ROUTE: NH-16</span><span>LAST SYNC &nbsp; 00:04 AGO</span><span>QUICKMATE FLEET OVERVIEW <ArrowUpRight aria-hidden="true" /></span></div>
        </div><p className="dashboard-disclaimer">Illustrative product preview · Fleet figures shown are sample interface content.</p>
      </section>

      <section className="difference-section"><div className="section-kicker"><span>07</span><span>WHY QUICKMATE</span></div><div className="difference-heading"><h2>BUILT<br /><span>DIFFERENTLY.</span></h2><p>Intelligence designed for the realities of heavy-vehicle operations.</p></div><div className="difference-list">{[
        ["01", "HEAVY-VEHICLE FIRST", "Built around the realities of commercial and heavy-vehicle operations."],
        ["02", "BEYOND GPS", "Vehicle data becomes operational intelligence, not just location tracking."],
        ["03", "AI-READY", "Today’s vehicle data becomes tomorrow’s predictive fleet intelligence."],
      ].map(([number, title, copy]) => <article className="difference-row" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p><ArrowUpRight aria-hidden="true" /></article>)}</div><div className="question-shift"><span className="question-side"><small>TRADITIONAL GPS</small><strong>WHERE<br />IS IT?</strong></span><ArrowRight aria-hidden="true" /><span className="question-side question-new"><small>QUICKMATE</small><strong>WHAT IS<br />HAPPENING?</strong></span></div></section>

      <section className="purpose-section"><div className="purpose-copy"><div className="section-kicker"><span>08</span><span>OUR PURPOSE</span></div><h2>A MORE<br /><span>INTELLIGENT ROAD.</span></h2><div className="mission-vision"><article><span>MISSION</span><p>Make every fleet more visible, accountable and efficient.</p></article><article><span>VISION</span><p>A future where every commercial vehicle is connected, understood and intelligently managed.</p></article></div></div><div className="purpose-progression"><div className="progress-road" /><div className="progress-label"><span>01</span><b>TODAY</b><small>Road operations</small></div><div className="progress-label"><span>02</span><b>CONNECTED</b><small>Vehicle signals</small></div><div className="progress-label"><span>03</span><b>INTELLIGENT</b><small>Useful insight</small></div><div className="progress-label"><span>04</span><b>PREDICTIVE</b><small>Earlier understanding</small></div></div></section>

      <section className="founder-section" id="team"><div className="founder-index"><div className="section-kicker"><span>09</span><span>THE PEOPLE BEHIND THE PLATFORM</span></div><h2>BUILT BY<br /><span>PEOPLE WHO BUILD.</span></h2><p>Turning real operational problems into practical, scalable technology.</p></div><article className="founder-profile"><div className="founder-monogram" aria-label="Abstract founder profile initials VP"><span>V</span><span>P</span><i /></div><div className="founder-caption"><span>FOUNDER / 01</span><span>ODISHA, INDIA</span></div><h3>VISHMA PASAYAT</h3><p className="founder-title">Founder &amp; Entrepreneur</p><p className="founder-bio">Engineering student and technology entrepreneur building practical solutions at the intersection of AI, IoT and real-world problems.</p><p className="founder-bio">Leading QUICKMATE with a focus on turning real operational problems into practical, scalable technology.</p><div className="founder-footnote"><span><i /> ENGINEERING THE EVERYDAY</span><span>QUICKMATE / 2026</span></div></article></section>

      <section className="faq-section" id="faq"><div className="faq-heading"><div className="section-kicker"><span>10</span><span>GOOD TO KNOW</span></div><h2>QUESTIONS,<br /><span>ANSWERED.</span></h2><p>Clear answers about the platform and what it can do.</p></div><div className="faq-list">{faqs.map(([question, answer], index) => <article className={`faq-item ${openFaq === index ? "faq-open" : ""}`} key={question}><button className="faq-question" aria-expanded={openFaq === index} onClick={() => setOpenFaq(openFaq === index ? null : index)}><span className="faq-number">0{index + 1}</span><span>{question}</span><ChevronDown aria-hidden="true" /></button><div className="faq-answer"><p>{answer}</p></div></article>)}</div></section>

      <section className="closing-section"><img src={highwayImage} alt="" width={1600} height={900} loading="lazy" /><div className="closing-shade" /><div className="closing-content"><p className="eyebrow"><span className="live-dot" /> THE ROAD IS ALREADY MOVING</p><h2>YOUR FLEET IS MOVING.<br /><span>ARE YOU SEEING EVERYTHING?</span></h2><p>Let’s build a smarter way to manage it.</p><div className="closing-actions"><Button asChild className="btn-lime"><a href="#contact">Talk to QUICKMATE <ArrowRight aria-hidden="true" /></a></Button><a href="#contact" className="text-link">Partner with us <ArrowUpRight aria-hidden="true" /></a></div></div><div className="closing-coordinate">NH-16 &nbsp; / &nbsp; ODisha <span>20°27&apos; N, 85°53&apos; E</span></div></section>

      <section className="contact-section" id="contact"><div className="contact-copy"><div className="section-kicker"><span>11</span><span>START A CONVERSATION</span></div><h2>LET’S TALK<br /><span>FLEET.</span></h2><p>Tell us a little about your fleet, your operation, or the partnership you have in mind.</p><a className="contact-email" href="mailto:hello@quickmate.in">hello@quickmate.in <ArrowUpRight aria-hidden="true" /></a><div className="contact-location"><MapPin aria-hidden="true" /><span>ODISHA, INDIA</span></div></div><form className="contact-form" onSubmit={(event) => { event.preventDefault(); setFormSent(true); }} onChange={() => setFormSent(false)}><div className="form-topline"><span>QUICKMATE / CONTACT</span><span>01 — 06</span></div><div className="form-row"><label>NAME<input name="name" autoComplete="name" placeholder="Your name" required /></label><label>COMPANY<input name="company" autoComplete="organization" placeholder="Company name" /></label></div><div className="form-row"><label>EMAIL<input name="email" type="email" autoComplete="email" placeholder="you@company.com" required /></label><label>PHONE<input name="phone" type="tel" autoComplete="tel" placeholder="+91" /></label></div><label>NUMBER OF VEHICLES<select name="fleet-size" defaultValue=""><option value="" disabled>Select fleet size</option><option>1–10 vehicles</option><option>11–50 vehicles</option><option>51–200 vehicles</option><option>200+ vehicles</option></select></label><label>MESSAGE<textarea name="message" placeholder="What would you like to explore?" rows={3} /></label><div className="form-submit"><Button className="btn-lime" type="submit">{formSent ? "Message noted" : "Start a conversation"}{formSent ? <Check aria-hidden="true" /> : <ArrowRight aria-hidden="true" />}</Button><span>{formSent ? "Thank you. Please email us to continue the conversation." : "Fleet solutions · Partnerships · Technology"}</span></div></form></section>

      <footer className="site-footer"><div className="footer-main"><div className="footer-brand"><a className="wordmark" href="#home"><span className="wordmark-symbol"><span /><span /><span /></span><span>QUICKMATE</span></a><p>Smarter Fleets.<br />Quicker Decisions.</p></div><div className="footer-links"><div><span>PRODUCT</span><a href="#how-it-works">How it works</a><a href="#technology">Technology</a><a href="#dashboard">Dashboard</a></div><div><span>COMPANY</span><a href="#about">About</a><a href="#team">Mission &amp; Team</a><a href="#faq">FAQ</a></div><div><span>CONNECT</span><a href="#contact">Contact</a><a href="mailto:hello@quickmate.in">Email us <ArrowUpRight aria-hidden="true" /></a><span className="footer-region">ODISHA, INDIA</span></div></div></div><div className="footer-bottom"><span>© 2026 QUICKMATE. ALL RIGHTS RESERVED.</span><span>THE INTELLIGENCE LAYER BETWEEN VEHICLE AND OPERATOR.</span><a href="#home">BACK TO TOP <ChevronLeft aria-hidden="true" /></a></div></footer>
      <a className="mobile-contact" href="#contact">Talk to QUICKMATE <ArrowUpRight aria-hidden="true" /></a>
      <div className="telemetry-live" aria-live="polite">Vehicle 104 telemetry: {telemetry.speed} kilometres per hour, {telemetry.distance} kilometres travelled.</div>
    </main>
  );
}