// app/about/page.tsx
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import styles from "../page.module.scss";

function Security() {
  return (
    <main className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>// security</p>
        <h1>Security</h1>

        <p>InstaRoom is built security-first. Every architectural decision — 
        from video infrastructure to payment processing — is designed to protect 
        provider and client data.</p>

        <h2>Video & Signaling</h2>
        <p>All video sessions run on MediaDance, our native WebRTC infrastructure. 
        Peer-to-peer connections are established using RS256 JWT tokens with 
        short-lived credentials. No session data is stored on our servers.</p>

        <h2>Authentication</h2>
        <p>Provider accounts are protected with bcrypt password hashing and 
        RS256 signed JWT sessions delivered via httpOnly cookies. 
        OAuth2 via Google is supported with token rotation.</p>

        <h2>Data in Transit</h2>
        <p>All data in transit is encrypted via TLS 1.2+. API endpoints are 
        served exclusively over HTTPS. WebSocket signaling uses WSS.</p>

        <h2>Data at Rest</h2>
        <p>Provider and appointment data is stored in an encrypted Postgres 
        database hosted on Neon. Payment data is never stored — all payment 
        processing is handled by Stripe.</p>

        <h2>Payments</h2>
        <p>InstaRoom uses Stripe Connect for payment processing. We never 
        store card numbers or banking details. Providers connect their own 
        Stripe accounts for direct payouts.</p>

        <h2>Infrastructure</h2>
        <p>InstaRoom services are deployed on Railway and Vercel with 
        automatic SSL certificate management. Signaling infrastructure 
        uses DNS-only routing to ensure direct WebRTC connections.</p>

        <p className={styles.contact}>
          Security questions? <a href="mailto:rupesh@instaroom.link">rupesh@instaroom.link</a>
        </p>
      </div>
    </main>
  );
}

export default function AboutPage() {
  return (
      <>
        <Navbar />
        <main>
          <Security/>
       </main>
        <Footer />
    </>
  )
}