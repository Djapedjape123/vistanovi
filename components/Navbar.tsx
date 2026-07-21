'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Početna' },
  { href: '/galerija', label: 'Galerija' },
  { href: '/smestaj', label: 'O vikendici' },
  { href: '/okolina', label: 'Okolina' },
  { href: '/kontakt', label: 'Kontakt' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Praćenje skrola za promenu pozadine navbara
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Zaključavanje skrola kada je otvoren mobilni meni
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-[#1F3325]/90 backdrop-blur-lg shadow-lg shadow-black/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="relative z-50 flex items-center gap-2 font-serif text-2xl font-semibold tracking-tight text-[#F5EFE6]"
        >
          <span className="text-[#C19A5B]">Vista</span>
          Nova
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group relative text-sm font-medium tracking-wide text-[#F5EFE6]/90 transition-colors hover:text-[#F5EFE6]"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-[#C19A5B] transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-6 md:flex">
          <a
            href="tel:+381600000000"
            className="flex items-center gap-2 text-sm font-medium text-[#F5EFE6]/80 transition-colors hover:text-[#C19A5B]"
          >
            <Phone size={16} />
            +381 60 000 0000
          </a>
          <Link
            href="/kontakt"
            className="rounded-full bg-[#C19A5B] px-6 py-2.5 text-sm font-bold text-[#1F3325] shadow-lg shadow-[#C19A5B]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d3ac6c] hover:shadow-[#C19A5B]/40"
          >
            Rezerviši
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="relative z-50 text-[#F5EFE6] transition-transform duration-300 active:scale-90 md:hidden"
          aria-label="Otvori meni"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 flex h-screen w-full flex-col items-center justify-center bg-[#1F3325]/95 backdrop-blur-xl transition-all duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-8 mt-10">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="group relative font-serif text-3xl text-[#F5EFE6] transition-colors hover:text-[#C19A5B]"
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
              }}
            >
              {link.label}
              <span className="absolute -bottom-2 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-[#C19A5B] transition-all duration-300 group-hover:w-1/2" />
            </Link>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-6">
          <Link
            href="/kontakt"
            onClick={() => setIsMobileMenuOpen(false)}
            className="rounded-full bg-[#C19A5B] px-10 py-3.5 text-lg font-bold text-[#1F3325] shadow-lg shadow-[#C19A5B]/20 transition-transform active:scale-95"
          >
            Rezerviši sada
          </Link>

          <a
            href="tel:+381600000000"
            className="flex items-center gap-2 text-[#F5EFE6]/70 transition-colors hover:text-[#C19A5B]"
          >
            <Phone size={18} />
            +381 60 000 0000
          </a>
        </div>
      </div>
    </header>
  );
}