// app/about/page.tsx
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import styles from "../page.module.scss";

function Terms() {
  return (
    <main className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>// terms of service</p>
        <h1>Terms of Service</h1>
        <p className={styles.coming}>Effective June 15, 2026</p>

        <p>By using InstaRoom you agree to these terms. Please read them carefully.</p>

        <h2>1. The Service</h2>
        <p>InstaRoom provides a telehealth platform for independent healthcare 
        providers to conduct video sessions with their clients. We provide 
        the infrastructure — video, scheduling, payments, and compliance tools. 
        We are not a healthcare provider and do not provide medical advice.</p>

        <h2>2. Provider Accounts</h2>
        <p>Providers must be licensed healthcare professionals in their 
        respective jurisdictions. You are responsible for ensuring your 
        use of InstaRoom complies with applicable laws, licensing requirements, 
        and professional standards in every state where you practice.</p>

        <h2>3. Subscription & Billing</h2>
        <p>InstaRoom is billed monthly ($79/mo) or annually ($599/yr). 
        Your subscription begins after the 30-day free trial. 
        You may cancel at any time — cancellation takes effect at the 
        end of your current billing period. No refunds for partial periods.</p>

        <h2>4. Payments</h2>
        <p>Client copay collection is processed via Stripe Connect. 
        BYOS (Bring Your Own Stripe) providers pay 0% platform fee. 
        Managed payout providers pay 2% per transaction. 
        InstaRoom is not responsible for payment disputes between 
        providers and their clients.</p>

        <h2>5. Acceptable Use</h2>
        <p>You may not use InstaRoom for any unlawful purpose, to conduct 
        sessions outside your licensed jurisdiction, to practice without 
        a valid license, or to collect payment for services not rendered. 
        We reserve the right to suspend accounts that violate these terms.</p>

        <h2>6. Client Data</h2>
        <p>As a provider you are responsible for obtaining appropriate consent 
        from your clients before conducting telehealth sessions. InstaRoom 
        provides digital consent capture as a convenience — you remain 
        responsible for the adequacy of consent under applicable law.</p>

        <h2>7. Availability</h2>
        <p>We aim for high availability but do not guarantee uninterrupted 
        service. InstaRoom is not liable for losses resulting from 
        service interruptions, network issues, or technical failures.</p>

        <h2>8. Termination</h2>
        <p>You may terminate your account at any time from Settings. 
        We may terminate accounts that violate these terms with 
        reasonable notice except in cases of serious violations.</p>

        <h2>9. Governing Law</h2>
        <p>These terms are governed by the laws of the State of California. 
        Any disputes shall be resolved in the courts of San Francisco County, California.</p>

        <h2>10. Contact</h2>
        <p className={styles.contact}>
          <a href="mailto:rupesh@instadr.link">rupesh@instadr.link</a><br/>
          InstaRoom · San Francisco, CA
        </p>
      </div>
    </main>
  );
}

export default function TermsPage() {
  return (
      <>
        <Navbar />
        <main>
          <Terms/>
       </main>
        <Footer />
    </>
  )
}

