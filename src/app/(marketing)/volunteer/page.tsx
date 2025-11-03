'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Navigation } from '@/components/street-ministry/Navigation';
import { Footer } from '@/components/street-ministry/Footer';
import { Button } from '@/components/street-ministry/Button';
import { Card, CardTitle, CardContent } from '@/components/street-ministry/Card';
import { Clock, Calendar, Users, CheckCircle } from 'lucide-react';

export default function VolunteerPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    availability: '',
    interests: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulated form submission
    setFormSubmitted(true);
  };

  const opportunities = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Meal Service',
      description: 'Help serve hot meals to those in need at our weekly outreach events.',
      commitment: 'Weekly, 3-4 hours',
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Event Coordination',
      description: 'Assist in planning and organizing community outreach events.',
      commitment: 'Monthly, Flexible',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Kitchen Prep',
      description: 'Help prepare meals and organize food donations in our community kitchen.',
      commitment: 'Weekly, 2-3 hours',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/generated/community-impact.jpg"
            alt="Volunteers serving the community"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
          <div className="max-w-2xl hero-text-light">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Volunteer With Us
            </h1>
            <p className="text-xl md:text-2xl">
              Join a community of compassionate individuals making a real difference.
            </p>
          </div>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-[hsl(var(--foreground))]">
            Why Volunteer?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[hsl(var(--primary))]/10 flex items-center justify-center mb-4 text-[hsl(var(--primary))]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <CardTitle>Make an Impact</CardTitle>
                <CardContent>
                  <p className="text-sm">
                    Directly help individuals experiencing homelessness with meals, clothing, and compassion.
                  </p>
                </CardContent>
              </div>
            </Card>

            <Card>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[hsl(var(--primary))]/10 flex items-center justify-center mb-4 text-[hsl(var(--primary))]">
                  <Users className="w-8 h-8" />
                </div>
                <CardTitle>Build Community</CardTitle>
                <CardContent>
                  <p className="text-sm">
                    Connect with like-minded individuals who share your passion for serving others.
                  </p>
                </CardContent>
              </div>
            </Card>

            <Card>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[hsl(var(--primary))]/10 flex items-center justify-center mb-4 text-[hsl(var(--primary))]">
                  <Calendar className="w-8 h-8" />
                </div>
                <CardTitle>Flexible Schedule</CardTitle>
                <CardContent>
                  <p className="text-sm">
                    Choose volunteer opportunities that fit your schedule and availability.
                  </p>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-[hsl(var(--foreground))]">
            Volunteer Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {opportunities.map((opp, index) => (
              <Card key={index}>
                <div className="flex flex-col">
                  <div className="text-[hsl(var(--primary))] mb-4">{opp.icon}</div>
                  <CardTitle>{opp.title}</CardTitle>
                  <CardContent>
                    <p className="text-sm mb-4">{opp.description}</p>
                    <div className="flex items-center text-sm text-[hsl(var(--primary))] font-semibold">
                      <Clock className="w-4 h-4 mr-2" />
                      {opp.commitment}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-[hsl(var(--foreground))]">
            Join Our Volunteer Team
          </h2>

          {formSubmitted ? (
            <Card className="text-center py-12">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-[hsl(var(--secondary))]/10 flex items-center justify-center mb-6">
                  <CheckCircle className="w-12 h-12 text-[hsl(var(--secondary))]" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[hsl(var(--foreground))]">
                  Thank You for Registering!
                </h3>
                <p className="text-[hsl(var(--muted-foreground))] mb-6 max-w-md">
                  We're excited to have you join our volunteer team. Someone from our team will reach out
                  to you within 2 business days to discuss next steps.
                </p>
                <Button onClick={() => setFormSubmitted(false)}>
                  Submit Another Application
                </Button>
              </div>
            </Card>
          ) : (
            <Card>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-[hsl(var(--foreground))]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2 border border-[hsl(var(--border))] rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-[hsl(var(--foreground))]">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 border border-[hsl(var(--border))] rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-[hsl(var(--foreground))]">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-[hsl(var(--border))] rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-[hsl(var(--foreground))]">
                    Availability *
                  </label>
                  <select
                    required
                    value={formData.availability}
                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                    className="w-full px-4 py-2 border border-[hsl(var(--border))] rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
                  >
                    <option value="">Select your availability</option>
                    <option value="weekdays">Weekdays</option>
                    <option value="weekends">Weekends</option>
                    <option value="both">Both Weekdays & Weekends</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-[hsl(var(--foreground))]">
                    Areas of Interest *
                  </label>
                  <select
                    required
                    value={formData.interests}
                    onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                    className="w-full px-4 py-2 border border-[hsl(var(--border))] rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
                  >
                    <option value="">Select your interest</option>
                    <option value="meal-service">Meal Service</option>
                    <option value="kitchen-prep">Kitchen Prep</option>
                    <option value="event-coordination">Event Coordination</option>
                    <option value="all">Open to All Opportunities</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-[hsl(var(--foreground))]">
                    Additional Message (Optional)
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-2 border border-[hsl(var(--border))] rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
                    placeholder="Tell us about yourself and why you want to volunteer..."
                  />
                </div>

                <div className="text-center">
                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    Submit Application
                  </Button>
                </div>
              </form>
            </Card>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
