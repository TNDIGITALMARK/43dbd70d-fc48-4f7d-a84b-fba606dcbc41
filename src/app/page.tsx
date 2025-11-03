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
          <div className="max-w-2xl hero-text-light">
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

      {/* Our Approach Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[hsl(var(--foreground))]">
            Our Approach to Service
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[hsl(var(--primary))]/10 flex items-center justify-center">
                <span className="text-3xl font-bold text-[hsl(var(--primary))]">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[hsl(var(--foreground))]">Meet Needs</h3>
              <p className="text-[hsl(var(--muted-foreground))]">
                Providing hot meals, clothing, and essential supplies to those experiencing homelessness
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[hsl(var(--primary))]/10 flex items-center justify-center">
                <span className="text-3xl font-bold text-[hsl(var(--primary))]">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[hsl(var(--foreground))]">Build Relationships</h3>
              <p className="text-[hsl(var(--muted-foreground))]">
                Taking time to listen, share stories, and treat every individual with dignity and respect
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[hsl(var(--primary))]/10 flex items-center justify-center">
                <span className="text-3xl font-bold text-[hsl(var(--primary))]">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[hsl(var(--foreground))]">Share Hope</h3>
              <p className="text-[hsl(var(--muted-foreground))]">
                Offering encouragement, prayer, and connections to resources that can help transform lives
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[hsl(var(--primary))]/10 flex items-center justify-center">
                <span className="text-3xl font-bold text-[hsl(var(--primary))]">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[hsl(var(--foreground))]">Create Community</h3>
              <p className="text-[hsl(var(--muted-foreground))]">
                Fostering a welcoming environment where everyone feels valued and part of something greater
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-[hsl(var(--foreground))]">
            Lives Changed Through Your Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-[hsl(var(--background))]">
              <CardContent>
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <svg className="w-8 h-8 text-[hsl(var(--primary))]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  <p className="text-lg italic mb-6 text-[hsl(var(--foreground))]">
                    "I was at my lowest point, living on the streets with nowhere to turn. The Street Ministry team didn't just give me a meal—they gave me hope. They listened to my story, prayed with me, and helped me connect with resources. Today, I have a job and my own place. This ministry saved my life."
                  </p>
                  <p className="font-semibold text-[hsl(var(--foreground))] mt-auto">
                    — Marcus T.
                  </p>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    Former participant, now housed
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-[hsl(var(--background))]">
              <CardContent>
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <svg className="w-8 h-8 text-[hsl(var(--primary))]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  <p className="text-lg italic mb-6 text-[hsl(var(--foreground))]">
                    "Volunteering with Street Ministry changed my perspective completely. I thought I was going to serve others, but I received so much more than I gave. The resilience and gratitude of the people we serve inspire me every week. This is more than charity—it's genuine community."
                  </p>
                  <p className="font-semibold text-[hsl(var(--foreground))] mt-auto">
                    — Jennifer L.
                  </p>
                  <p className="text-sm text-[hsl(var(--muted-foreground))]">
                    Weekly volunteer, 2 years
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-[hsl(var(--primary))] mb-2">5+</div>
              <p className="text-lg text-[hsl(var(--foreground))] font-semibold mb-1">Years Serving</p>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">Since 2019</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[hsl(var(--primary))] mb-2">2,847</div>
              <p className="text-lg text-[hsl(var(--foreground))] font-semibold mb-1">Meals Annually</p>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">Hot, nutritious food</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[hsl(var(--primary))] mb-2">1,200+</div>
              <p className="text-lg text-[hsl(var(--foreground))] font-semibold mb-1">Lives Touched</p>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">Individuals helped</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-[hsl(var(--primary))] mb-2">100%</div>
              <p className="text-lg text-[hsl(var(--foreground))] font-semibold mb-1">Volunteer-Led</p>
              <p className="text-sm text-[hsl(var(--muted-foreground))]">Community driven</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 bg-[hsl(var(--primary))] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Be Part of the Solution
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Whether you give your time or your resources, every contribution helps us serve Charlotte's most vulnerable neighbors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/volunteer">
              <Button size="lg" className="bg-white text-[hsl(var(--primary))] hover:bg-gray-100">
                Start Volunteering
              </Button>
            </Link>
            <Link href="/donate">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Make a Donation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
