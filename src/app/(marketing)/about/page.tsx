import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/street-ministry/Navigation';
import { Footer } from '@/components/street-ministry/Footer';
import { Button } from '@/components/street-ministry/Button';
import { Card, CardTitle, CardContent } from '@/components/street-ministry/Card';
import { Heart, Users, Target } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[hsl(var(--foreground))]">
            About Street Ministry Outreach
          </h1>
          <p className="text-xl text-[hsl(var(--muted-foreground))] leading-relaxed">
            A faith-driven initiative serving Charlotte's homeless community with compassion, dignity, and hope.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[hsl(var(--foreground))]">
                Our Story
              </h2>
              <div className="space-y-4 text-[hsl(var(--muted-foreground))]">
                <p>
                  Founded in 2019, Street Ministry Outreach began with a simple mission: to serve those experiencing
                  homelessness in Charlotte with hot meals, warm clothing, and the love of Christ.
                </p>
                <p>
                  What started as a small group of volunteers serving meals once a week has grown into a thriving
                  community initiative that touches hundreds of lives each month. We've served over 2,847 meals
                  annually and helped more than 1,200 individuals find temporary assistance.
                </p>
                <p>
                  Our work is powered by compassionate volunteers, generous community partners, and faithful donors
                  who believe that every person deserves dignity and hope.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/generated/community-impact.jpg"
                alt="Our community volunteers"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[hsl(var(--foreground))]">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[hsl(var(--primary))]/10 flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-[hsl(var(--primary))]" />
                </div>
                <CardTitle>Compassion</CardTitle>
                <CardContent>
                  <p className="text-sm">
                    We serve with empathy and kindness, treating every person with the dignity they deserve.
                  </p>
                </CardContent>
              </div>
            </Card>

            <Card>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[hsl(var(--primary))]/10 flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-[hsl(var(--primary))]" />
                </div>
                <CardTitle>Community</CardTitle>
                <CardContent>
                  <p className="text-sm">
                    We believe in the power of community to create lasting change and hope.
                  </p>
                </CardContent>
              </div>
            </Card>

            <Card>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[hsl(var(--primary))]/10 flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-[hsl(var(--primary))]" />
                </div>
                <CardTitle>Faith</CardTitle>
                <CardContent>
                  <p className="text-sm">
                    Our faith guides us to serve others and share Christ's love through action.
                  </p>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[hsl(var(--foreground))]">
            Our Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[hsl(var(--primary))] mb-2">
                2,847
              </div>
              <div className="text-[hsl(var(--muted-foreground))] font-medium">
                Meals Served This Year
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[hsl(var(--primary))] mb-2">
                156
              </div>
              <div className="text-[hsl(var(--muted-foreground))] font-medium">
                Active Volunteers
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[hsl(var(--primary))] mb-2">
                23
              </div>
              <div className="text-[hsl(var(--muted-foreground))] font-medium">
                Community Partnerships
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[hsl(var(--primary))] mb-2">
                6
              </div>
              <div className="text-[hsl(var(--muted-foreground))] font-medium">
                Years of Service
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-[hsl(var(--primary))] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Us in Making a Difference
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Whether you volunteer your time or contribute financially, your support changes lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/volunteer">
              <Button size="lg" className="bg-white text-[hsl(var(--primary))] hover:bg-white/90">
                Become a Volunteer
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
