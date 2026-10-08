import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft } from "lucide-react";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link className="wordmark" href="#home" aria-label="QUICKMATE home">
            <Image
              src="/assets/quickmate-logo.jpeg"
              alt="QUICKMATE logo"
              width={32}
              height={32}
              className="rounded-full object-cover border border-[var(--lime)]"
            />
            <span>QUICKMATE</span>
          </Link>
          <p>
            Smarter Fleets.
            <br />
            Quicker Decisions.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <span>PRODUCT</span>
            <Link href="#how-it-works">How it works</Link>
            <Link href="#technology">Technology</Link>
            <Link href="#dashboard">Dashboard</Link>
          </div>
          <div>
            <span>COMPANY</span>
            <Link href="#about">About</Link>
            <Link href="#team">Mission &amp; Team</Link>
            <Link href="#faq">FAQ</Link>
          </div>
          <div>
            <span>CONNECT</span>
            <Link href="#contact">Contact</Link>
            <a href="mailto:hello@quickmate.in">
              Email us <ArrowUpRight aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/company/quickmate"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="QUICKMATE on LinkedIn"
            >
              LinkedIn <ArrowUpRight aria-hidden="true" />
            </a>
            <span className="footer-region">ODISHA, INDIA</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; 2026 QUICKMATE. ALL RIGHTS RESERVED.</span>
        <span>THE INTELLIGENCE LAYER BETWEEN VEHICLE AND OPERATOR.</span>
        <a href="#home">
          BACK TO TOP <ChevronLeft aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
