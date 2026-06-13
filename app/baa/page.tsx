// app/about/page.tsx
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import styles from "../page.module.scss";

function BAA() {
  return (
    <main className={styles.section}>
      <div className={styles.container}>
        <p className={styles.label}>// business associate agreement</p>
        <h1>Business Associate Agreement</h1>
        <p className={styles.coming}>Effective June 15, 2026</p>

        <p>This Business Associate Agreement ("BAA") is entered into between 
        InstaRoom ("Business Associate") and the healthcare provider 
        ("Covered Entity") using the InstaRoom platform.</p>

        <h2>1. Definitions</h2>
        <p>Terms used in this BAA have the meanings defined in the Health 
        Insurance Portability and Accountability Act of 1996 (HIPAA), 
        the HITECH Act, and their implementing regulations, including 
        45 CFR Parts 160 and 164.</p>

        <h2>2. Obligations of InstaRoom</h2>
        <p>InstaRoom agrees to:</p>
        <ul>
          <li>Not use or disclose Protected Health Information (PHI) 
          other than as permitted by this BAA or required by law</li>
          <li>Implement appropriate safeguards to protect PHI</li>
          <li>Report any known security incident or breach of unsecured 
          PHI to the Covered Entity within 60 days of discovery</li>
          <li>Ensure any subcontractors that handle PHI agree to the 
          same restrictions</li>
          <li>Make PHI available for access and amendment as required</li>
          <li>Return or destroy PHI upon termination of the agreement</li>
        </ul>

        <h2>3. Permitted Uses</h2>
        <p>InstaRoom may use PHI only as necessary to provide the 
        InstaRoom platform services including video session facilitation, 
        appointment scheduling, and payment processing. 
        InstaRoom will not use PHI for marketing or sell PHI to any third party.</p>

        <h2>4. Obligations of the Covered Entity</h2>
        <p>The Covered Entity agrees to:</p>
        <ul>
          <li>Obtain any consent required from clients before using InstaRoom</li>
          <li>Notify InstaRoom of any restrictions on PHI use that 
          may affect InstaRoom&apos;s services</li>
          <li>Not request InstaRoom to use PHI in a manner that would 
          violate HIPAA</li>
        </ul>

        <h2>5. Term & Termination</h2>
        <p>This BAA is effective upon your use of InstaRoom and remains 
        in effect until your account is terminated. Upon termination 
        InstaRoom will return or destroy all PHI within 30 days.</p>

        <h2>6. Limitation of Liability</h2>
        <p>InstaRoom&apos;s liability under this BAA is limited to direct damages 
        and shall not exceed the fees paid by the Covered Entity in the 
        12 months preceding the claim.</p>

        <h2>7. Governing Law</h2>
        <p>This BAA is governed by the laws of the State of California 
        and applicable federal law including HIPAA and the HITECH Act.</p>

        <h2>Request a Signed BAA</h2>
        <p>To request a countersigned BAA for your practice records, 
        please contact us. We will respond within 2 business days.</p>

        <h2>10. Contact</h2>
        <p className={styles.contact}>
          <a href="mailto:rupesh@instadr.link">rupesh@instadr.link</a><br/>
          InstaRoom · San Francisco, CA
        </p>
      </div>
    </main>
  );
}

export default function BAAPage() {
  return (
      <>
        <Navbar />
        <main>
          <BAA/>
       </main>
        <Footer />
    </>
  )
}

