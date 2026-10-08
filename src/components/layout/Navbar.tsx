"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X, PhoneCall } from "lucide-react";
import { navigation } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isPastHero =
        window.scrollY > 24 ||
        (window.location.hash !== "" && window.location.hash !== "#home");
      setScrolled(isPastHero);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("hashchange", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleScroll);
    };
  }, []);

  // Body scroll locking and Escape key handling for mobile drawer
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMenuOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`site-header ${scrolled ? "is-scrolled" : ""}`}
        role="banner"
      >
        <Link
          href="#home"
          className="wordmark"
          onClick={closeMenu}
          aria-label="QUICKMATE home"
        >
          <Image
            src="/assets/quickmate-logo.jpeg"
            alt="QUICKMATE logo"
            width={32}
            height={32}
            className="rounded-full object-cover border border-[var(--lime)]"
          />
          <span>QUICKMATE</span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="desktop-nav"
          aria-label="Desktop navigation"
        >
          <Link href="#home">Home</Link>
          {navigation.map(({ label, id }) => (
            <Link key={id} href={`#${id}`}>
              {label}
            </Link>
          ))}
          <Link href="#contact">Contact</Link>
        </nav>

        <a href="#contact" className="header-cta">
          Talk to us <ArrowUpRight aria-hidden="true" />
        </a>

        {/* Mobile Menu Trigger Button (min 44x44px target) */}
        <button
          type="button"
          className="mobile-menu-btn"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation-drawer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* Full-Height Mobile Navigation Drawer */}
      <div
        id="mobile-navigation-drawer"
        className={`mobile-drawer ${menuOpen ? "drawer-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <div className="mobile-drawer-header">
          <Link
            href="#home"
            className="wordmark"
            onClick={closeMenu}
            aria-label="QUICKMATE home"
          >
            <Image
              src="/assets/quickmate-logo.jpeg"
              alt="QUICKMATE logo"
              width={32}
              height={32}
              className="rounded-full object-cover border border-[var(--lime)]"
            />
            <div className="flex flex-col">
              <span className="font-extrabold tracking-wider text-sm leading-tight text-white">QUICKMATE</span>
              <span className="text-[8px] font-mono text-[var(--lime)] tracking-widest uppercase">
                AIoT PLATFORM
              </span>
            </div>
          </Link>
          <button
            type="button"
            className="mobile-drawer-close"
            aria-label="Close navigation menu"
            onClick={closeMenu}
          >
            <X size={20} />
          </button>
        </div>

        <div className="mobile-drawer-kicker">
          <span>// DIRECT SYSTEM NAVIGATION</span>
          <span>ODISHA &bull; 20.29&deg; N</span>
        </div>

        <nav className="mobile-drawer-nav" aria-label="Mobile navigation links">
          <Link href="#home" onClick={closeMenu} className="mobile-nav-link">
            <span className="mobile-nav-num">00</span>
            <div className="mobile-nav-info">
              <span className="mobile-nav-text">Home</span>
              <span className="mobile-nav-desc">Live Overview &amp; Telemetry</span>
            </div>
            <ArrowUpRight size={18} className="mobile-nav-arrow" aria-hidden="true" />
          </Link>
          <Link href="#about" onClick={closeMenu} className="mobile-nav-link">
            <span className="mobile-nav-num">01</span>
            <div className="mobile-nav-info">
              <span className="mobile-nav-text">About</span>
              <span className="mobile-nav-desc">The Operational Blind Spot</span>
            </div>
            <ArrowUpRight size={18} className="mobile-nav-arrow" aria-hidden="true" />
          </Link>
          <Link href="#how-it-works" onClick={closeMenu} className="mobile-nav-link">
            <span className="mobile-nav-num">02</span>
            <div className="mobile-nav-info">
              <span className="mobile-nav-text">How It Works</span>
              <span className="mobile-nav-desc">5-Stage Intelligence Flow</span>
            </div>
            <ArrowUpRight size={18} className="mobile-nav-arrow" aria-hidden="true" />
          </Link>
          <Link href="#technology" onClick={closeMenu} className="mobile-nav-link">
            <span className="mobile-nav-num">03</span>
            <div className="mobile-nav-info">
              <span className="mobile-nav-text">Technology</span>
              <span className="mobile-nav-desc">In-Vehicle AIoT Hardware</span>
            </div>
            <ArrowUpRight size={18} className="mobile-nav-arrow" aria-hidden="true" />
          </Link>
          <Link href="#dashboard" onClick={closeMenu} className="mobile-nav-link">
            <span className="mobile-nav-num">04</span>
            <div className="mobile-nav-info">
              <span className="mobile-nav-text">Dashboard</span>
              <span className="mobile-nav-desc">Live Fleet Console</span>
            </div>
            <ArrowUpRight size={18} className="mobile-nav-arrow" aria-hidden="true" />
          </Link>
          <Link href="#team" onClick={closeMenu} className="mobile-nav-link">
            <span className="mobile-nav-num">05</span>
            <div className="mobile-nav-info">
              <span className="mobile-nav-text">Team</span>
              <span className="mobile-nav-desc">Vishma Pasayat &amp; Vision</span>
            </div>
            <ArrowUpRight size={18} className="mobile-nav-arrow" aria-hidden="true" />
          </Link>
          <Link href="#faq" onClick={closeMenu} className="mobile-nav-link">
            <span className="mobile-nav-num">06</span>
            <div className="mobile-nav-info">
              <span className="mobile-nav-text">FAQ</span>
              <span className="mobile-nav-desc">Platform &amp; Hardware Details</span>
            </div>
            <ArrowUpRight size={18} className="mobile-nav-arrow" aria-hidden="true" />
          </Link>
          <Link href="#contact" onClick={closeMenu} className="mobile-nav-link">
            <span className="mobile-nav-num">07</span>
            <div className="mobile-nav-info">
              <span className="mobile-nav-text">Contact</span>
              <span className="mobile-nav-desc">Direct Fleet Consultation</span>
            </div>
            <ArrowUpRight size={18} className="mobile-nav-arrow" aria-hidden="true" />
          </Link>
        </nav>

        <div className="mobile-drawer-footer">
          <div className="mobile-drawer-action-card tech-corner-brackets">
            <div className="action-card-top">
              <span className="live-dot" />
              <span>DIRECT INQUIRY &bull; PRIORITY DISPATCH</span>
            </div>
            <a
              href="mailto:query.quickmate@gmail.com"
              className="action-card-email"
            >
              query.quickmate@gmail.com &bull; hello@quickmate.in
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="btn-lime mobile-drawer-cta"
            >
              <PhoneCall size={16} aria-hidden="true" />
              <span>Start a conversation</span>
            </a>
          </div>
          <div className="mobile-drawer-meta">
            <span>ODISHA, INDIA</span>
            <span>AIoT FLEET INTELLIGENCE &bull; 2026</span>
          </div>
        </div>
      </div>

      {/* Backdrop overlay */}
      {menuOpen && (
        <div
          className="mobile-drawer-backdrop"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
}
