// app/about/page.tsx
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import styles from "../page.module.scss";

function About() {
  return (
    <main className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>// about</p>
        <h1>About InstaRoom</h1>
        
        <p>InstaRoom is a permanent telehealth room platform built for independent 
        practitioners — therapists, nurse practitioners, specialists, and family 
        medicine providers.</p>

        <p>We believe the clinical relationship is sacred. Every tool we build 
        gets out of the way so providers can focus on what matters — their clients.</p>

        <p>One permanent link. Every client. Any device. No app downloads. 
        No middlemen. No compromise.</p>

        <h2>Built on MediaDance</h2>
        <p>InstaRoom runs on MediaDance — our native WebRTC real-time infrastructure. 
        Every session is encrypted, direct, and built for clinical performance.</p>

        <h2>Independent. Always.</h2>
        <p>InstaRoom is built and operated independently. We are not affiliated with 
        any insurance network, health system, or referral platform. 
          Your practice stays yours.</p>
        
      </div>
    </main>
  );
}

export default function AboutPage() {
  return (
      <>
        <Navbar />
        <main>
          <About/>
       </main>
        <Footer />
    </>
  )
}