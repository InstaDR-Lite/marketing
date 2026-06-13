// app/about/page.tsx
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import styles from "../page.module.scss";

function HIPAA() {
  return (
    <main className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>// hipaa compliance</p>
        <h1>HIPAA Compliance</h1>

        <p>InstaRoom is designed with HIPAA compliance in mind. 
        We provide the technical infrastructure for covered entities 
        and business associates to conduct telehealth sessions in a 
        HIPAA-ready environment.</p>

        <h2>What We Do</h2>
        <p>InstaRoom implements the following safeguards aligned with 
        HIPAA Technical Safeguard requirements:</p>

        <ul>
          <li>Encrypted video transmission via WebRTC with RS256 JWT authentication</li>
          <li>TLS 1.2+ encryption for all data in transit</li>
          <li>Encrypted data storage via Neon Postgres</li>
          <li>Access controls via httpOnly cookie sessions</li>
          <li>Geo-verification for jurisdictional compliance</li>
          <li>Digital consent capture before every session</li>
          <li>Stripe-handled payment processing — no PHI in payment flow</li>
        </ul>

        <h2>Business Associate Agreement</h2>
        <p>InstaRoom offers a Business Associate Agreement (BAA) to covered 
        entities. If you require a BAA for your practice, please contact us 
        at <a href="mailto:hello@instaroom.link">hello@instaroom.link</a>.</p>

        <h2>Your Responsibilities</h2>
        <p>As a covered entity, you remain responsible for your own HIPAA 
        compliance obligations including staff training, policies and procedures, 
        and physical safeguards. InstaRoom provides the technical infrastructure — 
        your practice provides the administrative and physical safeguards.</p>

        <h2>Disclaimer</h2>
        <p>This page describes InstaRoom's technical safeguards and is not 
        legal advice. Consult your compliance officer or legal counsel for 
        guidance specific to your practice.</p>

        <p className={styles.contact}>
          Compliance questions? <a href="mailto:rupesh@instadr.link">rupesh@instadr.link</a>
        </p>
      </div>
    </main>
  );
}

export default function HIPAAPage() {
  return (
      <>
        <Navbar />
        <main>
          <HIPAA/>
       </main>
        <Footer />
    </>
  )
}