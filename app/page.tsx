
// app/page.tsx
import React from 'react';

interface CTAButtonProps {
  label: string;
  variant: 'primary' | 'secondary';
}

// --- Types & Interfaces ---
interface FeatureCardProps {
  stepNumber: string;
  title: string;
  description: string;
}

interface TechPillarProps {
  title: string;
  description: string;
}

interface PricePlanProps {
  title: string;
  price: string;
  period?: string;
  features: string[];
  isHighlighted?: boolean;
}

// --- Sub-Components ---
const FeatureCard: React.FC<FeatureCardProps> = ({ stepNumber, title, description }) => (
  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-3">
    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
      {stepNumber}
    </div>
    <h3 className="text-xl font-bold text-slate-900">{title}</h3>
    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const TechPillar: React.FC<TechPillarProps> = ({ title, description }) => (
  <div className="space-y-2">
    <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
      <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
      {title}
    </h4>
    <p className="text-slate-600 text-sm pl-3">{description}</p>
  </div>
);

const PricePlan: React.FC<PricePlanProps> = ({ title, price, period, features, isHighlighted }) => (
  <div className={`p-8 rounded-2xl border flex flex-col justify-between ${
    isHighlighted ? 'bg-slate-900 text-white border-slate-900 shadow-lg' : 'bg-white text-slate-950 border-slate-200'
  }`}>
    <div className="space-y-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="flex items-baseline gap-1">
        <span className="text-4xl font-extrabold">{price}</span>
        {period && <span className={`text-sm ${isHighlighted ? 'text-slate-400' : 'text-slate-500'}`}>{period}</span>}
      </div>
      <ul className="space-y-2.5 pt-4 text-sm">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className={isHighlighted ? 'text-blue-400' : 'text-blue-600'}>✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
    <button className={`w-full mt-8 py-3 rounded-lg font-medium transition-colors ${
      isHighlighted ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-900'
    }`}>
      Get Started
    </button>
  </div>
);


const CTAButton: React.FC<CTAButtonProps> = ({ label, variant }) => {
  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-200 text-center";
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-sm",
    secondary: "bg-gray-100 hover:bg-gray-200 text-gray-800"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]}`}>
      {label}
    </button>
  );
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navigation */}
      <header className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tight text-blue-600">
          InstaDR<span className="text-slate-400 text-sm font-normal"> lite</span>
        </div>
        <span className="text-xs font-mono bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full border border-blue-200">
          Powered by MediaDance
        </span>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 pt-16 pb-24 text-center lg:text-left lg:flex lg:items-center lg:gap-12">
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            On-Demand Medical Consultations. <span className="text-blue-600">Instantly.</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0">
            Connect with a licensed provider in under 2 minutes. No app downloads required. Fully native web telehealth optimized for performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
            <CTAButton label="Book Instant Consult ($120)" variant="primary" />
            <CTAButton label="For Clinicians" variant="secondary" />
          </div>
        </div>

        {/* Mockup Placeholder */}
        <div className="mt-12 lg:mt-0 lg:w-1/2">
          <div className="aspect-video w-full rounded-2xl bg-slate-900 shadow-xl border border-slate-800 flex items-center justify-center p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent" />
            <div className="text-center z-10 space-y-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping mx-auto" />
              <p className="text-sm font-mono text-slate-400">MediaDance Engine Status: Operational</p>
              {/* <p className="text-xs text-slate-500">Latency: < 45 (P2P Optimized)</p> */}
            </div>
          </div>
        </div>
      </main>

            {/* 3. Problem & Solution Context */}
      <section className="bg-slate-100 border-y border-slate-200/80 py-16">
        <div className="max-w-4xl mx-auto px-4 grid sm:grid-cols-2 gap-8">
          <div className="space-y-2 opacity-60">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">The Old Way</h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              Heavy 150MB app installations, password resets, manual insurance uploads, and a 30-minute virtual waiting room just for a quick prescription renewal.
            </p>
          </div>
          <div className="space-y-2 border-l-2 border-blue-500 sm:pl-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600">The Frictionless Way</h3>
            <p className="text-slate-900 font-medium text-sm leading-relaxed">
              Tap a single link. Your web browser spins up an encrypted video pipeline directly to an online physician. Resolve your healthcare needs immediately.
            </p>
          </div>
        </div>
      </section>

      {/* 4. How It Works (The 3-Step Flow) */}
      <section className="max-w-6xl mx-auto px-4 py-20 space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-black text-slate-950">Frictionless Clinical Delivery</h2>
          <p className="text-slate-500 text-sm">Three fast browser-native steps to comprehensive care.</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          <FeatureCard 
            stepNumber="1" 
            title="Request & Validate" 
            description="Select your symptom category and instantly secure your booking with zero upfront security holds." 
          />
          <FeatureCard 
            stepNumber="2" 
            title="Instant P2P Link" 
            description="Connect natively inside Safari or Chrome. The MediaDance video core ensures instant pairing with your clinician." 
          />
          <FeatureCard 
            stepNumber="3" 
            title="Auto-Wrap & Exit" 
            description="Your doctor handles billing and routes your prescription to your preferred local pharmacy with a single click." 
          />
        </div>
      </section>

      
      {/* 5. Technology Pillars (MediaDance Showcase) */}
      <section className="max-w-4xl mx-auto px-4 py-16 bg-white border border-slate-200 rounded-2xl shadow-sm grid sm:grid-cols-3 gap-8">
        <TechPillar 
          title="Sub-45ms Latency" 
          description="Powered by the MediaDance real-time communication pipeline to prevent drops and audio distortion." 
        />
        <TechPillar 
          title="Zero-Install Footprint" 
          description="Built natively for Next.js to provide high performance access on slow cellular links and legacy phones." 
        />
        <TechPillar 
          title="Decoupled Security" 
          description="Patient communication channels and payment credentials run completely isolated for strict compliance." 
        />
      </section>

            {/* 6. Pricing & Packages */}
      <section className="max-w-4xl mx-auto px-4 py-20 space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-black text-slate-950">Simple, Transparent Pricing</h2>
          <p className="text-slate-500 text-sm">No hidden subscription structures or administrative overhead.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <PricePlan 
            title="For Patients" 
            price="$120" 
            period="/ session" 
            features={["Direct P2P consultation link", "Instant pharmacy routing", "Zero recurring subscription costs"]} 
          />
          <PricePlan 
            title="For Independent Doctors" 
            price="$49" 
            period="/ month" 
            features={["Single-provider scheduling engine", "Native MediaDance pipeline hosting", "Zero-friction clinic invoicing tools"]}
            isHighlighted={true}
          />
        </div>
      </section>

      {/* 7. Footer */}
      <footer className="max-w-6xl mx-auto px-4 py-8 border-t border-slate-200 text-center sm:flex sm:justify-between text-xs text-slate-400 font-medium">
        <p>© 2026 InstaDR-lite. Powered by MediaDance.</p>
        <div className="flex justify-center gap-4 mt-2 sm:mt-0">
          <a href="#" className="hover:text-slate-600">Privacy Policy</a>
          <a href="#" className="hover:text-slate-600">Terms of Service</a>
          <a href="#" className="hover:text-slate-600">MediaDance SDK Docs</a>
        </div>
      </footer>

    </div>
  );
}