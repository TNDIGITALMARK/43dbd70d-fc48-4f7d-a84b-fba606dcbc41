'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Navigation } from '@/components/street-ministry/Navigation';
import { Footer } from '@/components/street-ministry/Footer';
import { Button } from '@/components/street-ministry/Button';
import { Card, CardTitle, CardContent } from '@/components/street-ministry/Card';
import { DollarSign, Heart, Utensils, Shirt, CheckCircle } from 'lucide-react';

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'paypal' | 'cashapp' | null>(null);

  const donationAmounts = [25, 50, 100, 250, 500];

  const impact = [
    {
      icon: <Utensils className="w-8 h-8" />,
      amount: '$25',
      description: 'Provides 10 hot meals',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      amount: '$50',
      description: 'Supports a week of outreach',
    },
    {
      icon: <Shirt className="w-8 h-8" />,
      amount: '$100',
      description: 'Provides meals & clothing',
    },
  ];

  const handleDonate = () => {
    const amount = customAmount || selectedAmount;
    if (!amount || !paymentMethod) {
      alert('Please select an amount and payment method');
      return;
    }

    // Simulated payment processing
    alert(`Processing ${paymentMethod.toUpperCase()} donation of $${amount}. This is a demo - no actual payment will be processed.`);
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/generated/hero-community-service.jpg"
            alt="Support our mission"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Support Our Mission
            </h1>
            <p className="text-xl md:text-2xl">
              Your generosity directly funds meals, clothing, and hope for those in need.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-[hsl(var(--foreground))]">
            Your Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impact.map((item, index) => (
              <Card key={index}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[hsl(var(--primary))]/10 flex items-center justify-center mb-4 text-[hsl(var(--primary))]">
                    {item.icon}
                  </div>
                  <CardTitle className="text-2xl mb-2">{item.amount}</CardTitle>
                  <CardContent>
                    <p className="text-sm">{item.description}</p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-8 text-center text-[hsl(var(--foreground))]">
              Make a Donation
            </h2>

            {/* Amount Selection */}
            <div className="mb-8">
              <label className="block text-lg font-semibold mb-4 text-[hsl(var(--foreground))]">
                Select Amount
              </label>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mb-4">
                {donationAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount('');
                    }}
                    className={`py-3 px-4 rounded-md font-semibold transition-all ${
                      selectedAmount === amount
                        ? 'bg-[hsl(var(--primary))] text-white'
                        : 'bg-gray-100 text-[hsl(var(--foreground))] hover:bg-gray-200'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              <div className="mt-4">
                <label className="block text-sm font-semibold mb-2 text-[hsl(var(--foreground))]">
                  Custom Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[hsl(var(--muted-foreground))]">
                    $
                  </span>
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    placeholder="Enter amount"
                    className="w-full pl-8 pr-4 py-3 border border-[hsl(var(--border))] rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]"
                    min="1"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="mb-8">
              <label className="block text-lg font-semibold mb-4 text-[hsl(var(--foreground))]">
                Choose Payment Method
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => setPaymentMethod('paypal')}
                  className={`p-6 rounded-lg border-2 transition-all ${
                    paymentMethod === 'paypal'
                      ? 'border-[hsl(var(--primary))] bg-[hsl(var(--primary))]/5'
                      : 'border-[hsl(var(--border))] hover:border-[hsl(var(--primary))]/50'
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <DollarSign className="w-12 h-12 text-[hsl(var(--primary))] mb-2" />
                    <span className="font-semibold text-[hsl(var(--foreground))]">PayPal</span>
                    <span className="text-sm text-[hsl(var(--muted-foreground))]">
                      Secure & Fast
                    </span>
                  </div>
                </button>

                <button
                  onClick={() => setPaymentMethod('cashapp')}
                  className={`p-6 rounded-lg border-2 transition-all ${
                    paymentMethod === 'cashapp'
                      ? 'border-[hsl(var(--secondary))] bg-[hsl(var(--secondary))]/5'
                      : 'border-[hsl(var(--border))] hover:border-[hsl(var(--secondary))]/50'
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <DollarSign className="w-12 h-12 text-[hsl(var(--secondary))] mb-2" />
                    <span className="font-semibold text-[hsl(var(--foreground))]">Cash App</span>
                    <span className="text-sm text-[hsl(var(--muted-foreground))]">
                      Instant Transfer
                    </span>
                  </div>
                </button>
              </div>
            </div>

            {/* Donation Summary */}
            {(selectedAmount || customAmount) && paymentMethod && (
              <div className="mb-8 p-6 bg-[hsl(var(--accent))] rounded-lg">
                <h3 className="font-semibold mb-2 text-[hsl(var(--foreground))]">
                  Donation Summary
                </h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[hsl(var(--muted-foreground))]">Amount:</span>
                  <span className="text-2xl font-bold text-[hsl(var(--foreground))]">
                    ${customAmount || selectedAmount}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[hsl(var(--muted-foreground))]">Payment Method:</span>
                  <span className="font-semibold text-[hsl(var(--foreground))] capitalize">
                    {paymentMethod}
                  </span>
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="text-center">
              <Button
                size="lg"
                onClick={handleDonate}
                className="w-full md:w-auto px-12"
                variant={paymentMethod === 'cashapp' ? 'secondary' : 'primary'}
              >
                Complete Donation
              </Button>
              <p className="text-sm text-[hsl(var(--muted-foreground))] mt-4">
                Your donation is secure and tax-deductible. You'll receive a receipt via email.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Ways to Give Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-[hsl(var(--foreground))]">
            Other Ways to Give
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardTitle>Monthly Giving</CardTitle>
              <CardContent>
                <p className="text-sm mb-4">
                  Set up a recurring donation to provide sustained support for our programs.
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardTitle>Corporate Matching</CardTitle>
              <CardContent>
                <p className="text-sm mb-4">
                  Double your impact by checking if your employer matches charitable donations.
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  Check Eligibility
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardTitle>Donate Goods</CardTitle>
              <CardContent>
                <p className="text-sm mb-4">
                  We accept donations of non-perishable food, clothing, and hygiene items.
                </p>
                <Button size="sm" variant="outline" className="w-full">
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[hsl(var(--primary))]/10 mb-6">
            <CheckCircle className="w-12 h-12 text-[hsl(var(--primary))]" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-[hsl(var(--foreground))]">
            100% Transparency
          </h2>
          <p className="text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
            Every dollar you donate goes directly to serving our community. We maintain complete
            transparency in how your contributions are used, with detailed annual reports available
            to all donors. Your generosity transforms lives, and we take that responsibility seriously.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
