'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './Button';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/our-work', label: 'Our Work' },
    { href: '/volunteer', label: 'Volunteer' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/generated/logo.png"
              alt="Street Ministry Outreach"
              width={50}
              height={50}
              className="w-12 h-12"
            />
            <span className="text-xl font-semibold text-[hsl(var(--foreground))] hidden md:block">
              Street Ministry<br />Outreach
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/donate">
              <Button size="sm">Donate</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/donate" onClick={() => setMobileMenuOpen(false)}>
              <Button size="sm" className="w-full">
                Donate
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
