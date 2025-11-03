import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/street-ministry/Navigation';
import { Footer } from '@/components/street-ministry/Footer';
import { Button } from '@/components/street-ministry/Button';
import { Card, CardTitle, CardContent } from '@/components/street-ministry/Card';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/generated/hero-community-service.jpg"
            alt="Community serving meals together"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              HOPE FORWARD: JOIN OUR MISSION TO SERVE CHARLOTTE'S HOMELESS
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-medium">
              Compassion in Action, Changing Lives Daily
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/donate">
                <Button size="lg">Donate Now</Button>
              </Link>
              <Link href="/volunteer">
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-[hsl(var(--foreground))]">
                  Volunteer Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Three Column Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Community Impact */}
            <Card>
              <div className="mb-4">
                <h5 className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--muted-foreground))] mb-4">
                  COMMUNITY IMPACT
                </h5>
                <div className="aspect-video relative rounded-lg overflow-hidden mb-4">
                  <Image
                    src="/generated/community-impact.jpg"
                    alt="Community volunteers"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-[hsl(var(--primary))] mr-2">•</span>
                    <span>2,847 Meals Served Annually</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[hsl(var(--primary))] mr-2">•</span>
                    <span>1,200+ Individuals Helped Temporarily</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[hsl(var(--primary))] mr-2">•</span>
                    <span>Monthly Outreach Events</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Voice of Our Volunteers */}
            <Card>
              <div className="mb-4">
                <h5 className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--muted-foreground))] mb-4">
                  VOICE OF OUR VOLUNTEERS
                </h5>
                <div className="flex justify-center mb-4">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden">
                    <Image
                      src="/generated/volunteer-profile.jpg"
                      alt="Sarah M - Volunteer Coordinator"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <CardContent>
                <p className="text-sm italic mb-4">
                  "Serving with Street Ministry has shown me the profound joy and resilience we carry. Together, we empower our streets!"
                </p>
                <p className="text-sm font-medium text-[hsl(var(--foreground))]">
                  Sarah M, Volunteer Coordinator
                </p>
              </CardContent>
            </Card>

            {/* Support Our Cause */}
            <Card>
              <div className="mb-4">
                <h5 className="text-sm font-semibold uppercase tracking-wider text-[hsl(var(--muted-foreground))] mb-4">
                  SUPPORT OUR CAUSE
                </h5>
              </div>
              <CardContent>
                <div className="space-y-4">
                  <Link href="/donate?method=paypal" className="block">
                    <Button variant="primary" className="w-full">
                      DONATE WITH PAYPAL
                    </Button>
                  </Link>
                  <Link href="/donate?method=cashapp" className="block">
                    <Button variant="secondary" className="w-full">
                      DONATE WITH CASH APP
                    </Button>
                  </Link>
                  <p className="text-sm text-center text-[hsl(var(--muted-foreground))] mt-4">
                    Every contribution directly funds meals and resources
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[hsl(var(--foreground))]">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] leading-relaxed">
            Serving Charlotte's homeless community with hot meals, warm clothing, and Christ's love since 2019.
            We believe every person deserves dignity, compassion, and hope. Through faith-driven outreach,
            we're building a stronger, more compassionate community one meal at a time.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
