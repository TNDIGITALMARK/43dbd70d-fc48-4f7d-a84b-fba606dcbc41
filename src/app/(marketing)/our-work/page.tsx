import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navigation } from '@/components/street-ministry/Navigation';
import { Footer } from '@/components/street-ministry/Footer';
import { Button } from '@/components/street-ministry/Button';
import { Card, CardTitle, CardContent } from '@/components/street-ministry/Card';

export default function OurWorkPage() {
  const testimonials = [
    {
      name: 'James R.',
      role: 'Community Member',
      quote: 'Street Ministry gave me hope when I had nowhere else to turn. The volunteers treated me with dignity and compassion.',
      image: '/generated/volunteer-profile.jpg',
    },
    {
      name: 'Sarah M.',
      role: 'Volunteer Coordinator',
      quote: 'Serving with Street Ministry has shown me the profound joy and resilience we carry. Together, we empower our streets!',
      image: '/generated/volunteer-profile.jpg',
    },
    {
      name: 'Michael T.',
      role: 'Long-time Volunteer',
      quote: 'Every meal we serve is more than food—it\'s a connection, a conversation, and a chance to share love.',
      image: '/generated/volunteer-profile.jpg',
    },
  ];

  const partnerships = [
    {
      name: 'First Baptist Church Charlotte',
      type: 'Faith Partner',
      description: 'Monthly food donations and volunteer support',
    },
    {
      name: 'Charlotte Food Bank',
      type: 'Resource Partner',
      description: 'Provides bulk food supplies for meal preparation',
    },
    {
      name: 'Local Business Alliance',
      type: 'Corporate Partner',
      description: 'Financial support and employee volunteer programs',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[hsl(var(--foreground))]">
            Our Work in the Community
          </h1>
          <p className="text-xl text-[hsl(var(--muted-foreground))] leading-relaxed">
            See how your support transforms lives and strengthens our Charlotte community.
          </p>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-[hsl(var(--foreground))]">
            Recent Outreach Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="relative h-64 rounded-lg overflow-hidden shadow-md group">
                <Image
                  src={i % 2 === 0 ? '/generated/hero-community-service.jpg' : '/generated/community-impact.jpg'}
                  alt={`Outreach event ${i}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Community Meal Service</p>
                    <p className="text-sm opacity-90">Charlotte, NC</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-[hsl(var(--foreground))]">
            Stories of Hope
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent>
                    <p className="text-sm italic mb-4 text-[hsl(var(--muted-foreground))]">
                      "{testimonial.quote}"
                    </p>
                    <p className="font-semibold text-[hsl(var(--foreground))]">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-[hsl(var(--muted-foreground))]">
                      {testimonial.role}
                    </p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Spotlights */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[hsl(var(--foreground))]">
            Meet Our Volunteers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0 shadow-lg">
                <Image
                  src="/generated/volunteer-profile.jpg"
                  alt="Volunteer"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-[hsl(var(--foreground))]">
                  Sarah Martinez
                </h3>
                <p className="text-sm text-[hsl(var(--primary))] font-semibold mb-3">
                  Volunteer Coordinator | 4 Years
                </p>
                <p className="text-[hsl(var(--muted-foreground))]">
                  Sarah coordinates our weekly meal services and helps onboard new volunteers. Her passion
                  for community service has inspired countless others to get involved.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0 shadow-lg">
                <Image
                  src="/generated/volunteer-profile.jpg"
                  alt="Volunteer"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-[hsl(var(--foreground))]">
                  David Thompson
                </h3>
                <p className="text-sm text-[hsl(var(--primary))] font-semibold mb-3">
                  Kitchen Lead | 3 Years
                </p>
                <p className="text-[hsl(var(--muted-foreground))]">
                  David oversees meal preparation and ensures we can serve hundreds of hot meals each week.
                  His culinary skills and big heart make every meal special.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-[hsl(var(--foreground))]">
            Our Community Partners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerships.map((partner, index) => (
              <Card key={index}>
                <CardTitle>{partner.name}</CardTitle>
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] text-xs font-semibold rounded-full">
                    {partner.type}
                  </span>
                </div>
                <CardContent>
                  <p className="text-sm">{partner.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-[hsl(var(--accent))]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[hsl(var(--foreground))]">
            Be Part of the Change
          </h2>
          <p className="text-xl mb-8 text-[hsl(var(--muted-foreground))]">
            Join our community of volunteers and partners making a real difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/volunteer">
              <Button size="lg">Start Volunteering</Button>
            </Link>
            <Link href="/donate">
              <Button size="lg" variant="outline">
                Support Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
