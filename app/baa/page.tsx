import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './BAA.module.scss';

export default function BAAPage() {
  return (
    <>
      <Navbar />
      <div className={styles.page}>

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.docMeta}>
            <span className={styles.docType}>Legal Document</span>
            <span className={styles.docDate}>Effective June 15, 2026</span>
            <span className={styles.docStatus}>Draft — Pending Attorney Review</span>
          </div>
          <h1 className={styles.headline}>Business Associate Agreement</h1>
          <p className={styles.parties}>
            Between <strong>InstaRoom</strong> ("Business Associate") and the 
            healthcare provider ("Covered Entity") using the InstaRoom platform.
          </p>
        </div>

        {/* Request CTA */}
        <div className={styles.requestBox}>
          <div>
            <div className={styles.requestTitle}>Need a countersigned copy?</div>
            <p className={styles.requestDesc}>
              We provide a fully executed BAA within 2 business days.
            </p>
          </div>
          <a href="mailto:hello@instaroom.link?subject=BAA Request" className={styles.requestBtn}>
            Request signed BAA →
          </a>
        </div>

        {/* Sections */}
        <div className={styles.sections}>

          <div className={styles.section}>
            <div className={styles.sectionNum}>1</div>
            <div className={styles.sectionBody}>
              <h2 className={styles.sectionTitle}>Definitions</h2>
              <p>Terms used in this BAA have the meanings defined in the Health 
              Insurance Portability and Accountability Act of 1996 (HIPAA), 
              the HITECH Act, and their implementing regulations, 
              including 45 CFR Parts 160 and 164.</p>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionNum}>2</div>
            <div className={styles.sectionBody}>
              <h2 className={styles.sectionTitle}>Obligations of InstaRoom</h2>
              <p>InstaRoom agrees to:</p>
              <ul className={styles.list}>
                <li>Not use or disclose Protected Health Information (PHI) other than as permitted by this BAA or required by law</li>
                <li>Implement appropriate safeguards to protect PHI</li>
                <li>Report any known security incident or breach of unsecured PHI to the Covered Entity within 60 days of discovery</li>
                <li>Ensure any subcontractors that handle PHI agree to the same restrictions</li>
                <li>Make PHI available for access and amendment as required</li>
                <li>Return or destroy PHI upon termination of the agreement</li>
              </ul>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionNum}>3</div>
            <div className={styles.sectionBody}>
              <h2 className={styles.sectionTitle}>Permitted Uses</h2>
              <p>InstaRoom may use PHI only as necessary to provide the InstaRoom 
              platform services including video session facilitation, appointment 
              scheduling, and payment processing. InstaRoom will not use PHI 
              for marketing or sell PHI to any third party.</p>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionNum}>4</div>
            <div className={styles.sectionBody}>
              <h2 className={styles.sectionTitle}>Obligations of the Covered Entity</h2>
              <p>The Covered Entity agrees to:</p>
              <ul className={styles.list}>
                <li>Obtain any consent required from clients before using InstaRoom</li>
                <li>Notify InstaRoom of any restrictions on PHI use that may affect InstaRoom's services</li>
                <li>Not request InstaRoom to use PHI in a manner that would violate HIPAA</li>
              </ul>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionNum}>5</div>
            <div className={styles.sectionBody}>
              <h2 className={styles.sectionTitle}>Term & Termination</h2>
              <p>This BAA is effective upon your use of InstaRoom and remains 
              in effect until your account is terminated. Upon termination 
              InstaRoom will return or destroy all PHI within 30 days.</p>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionNum}>6</div>
            <div className={styles.sectionBody}>
              <h2 className={styles.sectionTitle}>Limitation of Liability</h2>
              <p>InstaRoom's liability under this BAA is limited to direct damages 
              and shall not exceed the fees paid by the Covered Entity in the 
              12 months preceding the claim.</p>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionNum}>7</div>
            <div className={styles.sectionBody}>
              <h2 className={styles.sectionTitle}>Governing Law</h2>
              <p>This BAA is governed by the laws of the State of California 
              and applicable federal law including HIPAA and the HITECH Act. 
              Any disputes shall be resolved in the courts of Alameda County, California.</p>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className={styles.docFooter}>
          <div className={styles.disclaimer}>
            This is a draft document pending review by a licensed healthcare attorney. 
            For a countersigned copy valid for your practice records, contact us directly.
          </div>
          <div className={styles.contact}>
            <a href="mailto:hello@instaroom.link">hello@instaroom.link</a>
            <span>InstaRoom · San Francisco, CA · 2026</span>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
}