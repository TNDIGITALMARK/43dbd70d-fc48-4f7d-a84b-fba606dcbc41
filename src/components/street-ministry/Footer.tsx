import React from 'react';
import Link from 'next/link';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/our-work', label: 'Our Work' },
    { href: '/volunteer', label: 'Volunteer' },
    { href: '/donate', label: 'Donate' },
  ];

  const contactInfo = [
    { label: 'Contact', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
  ];

  return (
    <footer className="bg-[hsl(var(--accent))] border-t border-[hsl(var(--border))] mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[hsl(var(--foreground))]">
              Contact Info
            </h3>
            <p className="text-[hsl(var(--muted-foreground))] mb-2">
              Serving Communities, Feed 1 Homelessness
            </p>
            <p className="text-[hsl(var(--muted-foreground))]">
              Charlotte, NC
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[hsl(var(--foreground))]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[hsl(var(--foreground))]">
              Connect
            </h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="mailto:info@streetministryoutreach.org"
                className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <ul className="space-y-2">
              {contactInfo.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[hsl(var(--border))] mt-8 pt-8 text-center">
          <p className="text-[hsl(var(--muted-foreground))] text-sm">
            © {new Date().getFullYear()} Street Ministry Outreach. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
