import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WorkflowSection from '@/components/WorkflowSection';
import VideoSection from '@/components/VideoSection';
import BillingSection from '@/components/BillingSection';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WorkflowSection />
        <VideoSection />
        <BillingSection />
        <FeaturesSection />
        <PricingSection />
      </main>
      <Footer />
    </>
  );
}
