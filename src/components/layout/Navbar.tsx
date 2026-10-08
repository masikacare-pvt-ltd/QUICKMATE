"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <Link
        href="#home"
        className="wordmark"
        onClick={closeMenu}
        aria-label="QUICKMATE home"
      >
        <span className="wordmark-symbol" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <span>QUICKMATE</span>
      </Link>

      <nav
        className={`desktop-nav ${menuOpen ? "nav-open" : ""}`}
        aria-label="Main navigation"
      >
        <Link href="#home" onClick={closeMenu}>
          Home
        </Link>
        {navigation.map(({ label, id }) => (
          <Link key={id} href={`#${id}`} onClick={closeMenu}>
            {label}
          </Link>
        ))}
        <Link href="#contact" onClick={closeMenu}>
          Contact
        </Link>
      </nav>

      <a href="#contact" className="header-cta">
        Talk to us <ArrowUpRight aria-hidden="true" />
      </a>

      <button
        type="button"
        className="menu-toggle"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
    </header>
  );
}
