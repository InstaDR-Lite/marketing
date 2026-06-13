import styles from './FeaturesStrip.module.scss';
import Image from 'next/image';

const features = [
  { 
    icon: '/icons/HDVideo.svg', 
    title: 'Unlimited HD Video', 
    desc: 'Native WebRTC. No third-party plugins. Crystal clear on any device.' 
  },
  { icon: '/icons/GeoVerify.svg', title: 'Geo-Verification', desc: 'Patient jurisdiction verified silently before every session.' },
  { icon: '/icons/Signature.svg', title: 'Digital Consent', desc: 'E-signed consent captured and stored before the call connects.' },
  { icon: '/icons/Payments.svg', title: 'Direct Payments', desc: 'Copay collected at the door. Direct to your Stripe account. 0% fee.' },
  { icon: '/icons/Calendar.svg', title: 'Google Calendar Sync', desc: 'Every appointment pushed to your calendar automatically.' },
  { icon: '/icons/HIPAA.svg', title: 'HIPAA-Ready', desc: 'Built on compliant infrastructure from day one. Not bolted on.' },
];

export default function FeaturesStrip() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
       <div className={styles.header}>
          <p className={styles.sectionLabel}>01 — Features</p>
          <h2 className={styles.headline}>
            Everything your virtual room needs.<br />Nothing it doesn&apos;t.
          </h2>

        </div>
        <div className={styles.grid}>
          {features.map((f) => (
            <div key={f.title} className={styles.card}>
              <Image src={f.icon}
                alt={f.title}
                className={styles.icon}
                width={28}
                height={28} />
              <h3 className={styles.title}>{f.title}</h3>
              <p className={styles.desc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}