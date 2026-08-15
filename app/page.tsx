import Navbar from '@/components/Navbar';
// import Hero from '@/components/Hero';
import WorkflowSection from '@/components/WorkflowSection';
import VideoSection from '@/components/VideoSection';
import BillingSection from '@/components/BillingSection';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';
import FaqSection from '@/components/FaqSection';
import ComplianceSection from '@/components/compliance/ComplianceSection';
import Hero from '@/components/hero/HeroSection';
import PublicProfileSection from '@/components/PublicProfileSection';
import HowItWorksSection from '@/components/howitworks/HowItWorks';
import CTASection from '@/components/cta/CTASection';
import { FeaturesBento } from '@/components/features/FeaturesBento';
// import FeaturesStrip from '@/components/FeaturesStrip';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorksSection />
        <FeaturesBento />
        {/* <FeaturesStrip /> */}
        <WorkflowSection />
        <VideoSection />
        <PublicProfileSection />
        <BillingSection />
        <ComplianceSection />
        <FeaturesSection />
        <PricingSection />
        <FaqSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
