// app/about/page.tsx
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import styles from "../page.module.scss";

function Privacy() {
  return (
    <main className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>// privacy policy</p>
        <h1>Privacy Policy</h1>
        <p className={styles.coming}>Effective June 15, 2026</p>

        <p>InstaRoom ("we", "us", "our") operates getinstaroom.com and 
        instaroom.link. This policy describes how we collect, use, and 
        protect your information.</p>

        <h2>Information We Collect</h2>
        <p>For providers: name, email, credentials, NPI number, licensed states, 
        and payment account information via Stripe Connect. For clients: name, 
        email, and appointment details provided at booking or check-in. 
        We do not store payment card data — all payment processing is 
        handled by Stripe.</p>

        <h2>How We Use Your Information</h2>
        <p>Provider information is used to operate your InstaRoom account, 
        sync appointments to Google Calendar, and process subscription payments. 
        Client information is used solely to facilitate your telehealth session 
        with your provider.</p>

        <h2>Data Sharing</h2>
        <p>We do not sell your data. We do not share your data with third parties 
        except as required to operate the platform — Stripe for payments, 
        SendGrid for transactional email, Google for calendar sync, 
        and Neon for database hosting.</p>

        <h2>Video Sessions</h2>
        <p>Video sessions are transmitted peer-to-peer via WebRTC. 
        We do not record, store, or have access to the content of 
        your video sessions.</p>

        <h2>Cookies</h2>
        <p>InstaRoom uses httpOnly session cookies for provider authentication. 
        We do not use third-party tracking cookies or advertising cookies.</p>

        <h2>Data Retention</h2>
        <p>Provider account data is retained for the duration of your subscription 
        and deleted upon request. Appointment records are retained for 7 years 
        in compliance with medical record retention requirements.</p>

        <h2>Your Rights</h2>
        <p>You may request access to, correction of, or deletion of your personal 
        data at any time by contacting us at rupesh@instadr.link. 
        Providers may delete their account from the Settings panel.</p>

        <h2>Contact</h2>
        <p>For privacy questions or data requests:</p>

        <p className={styles.contact}>
          <a href="mailto:rupesh@instadr.link">rupesh@instadr.link</a><br/>
          InstaRoom · San Francisco, CA
        </p>
      </div>
    </main>
  );
}

export default function PrivacyPage() {
  return (
      <>
        <Navbar />
        <main>
          <Privacy/>
       </main>
        <Footer />
    </>
  )
}

