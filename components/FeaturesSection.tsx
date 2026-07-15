import styles from './FeaturesSection.module.scss';
import { Link, Zap, ShieldCheck } from 'lucide-react';

const features = [
  {
    Icon: Link,
    title: 'Dedicated Clinical Virtual Rooms',
    desc: 'Generate a single, white-labeled link that stays yours permanently. Patients wait in a secure, lightweight browser queue until you admit them.',
    badge: 'Permanent Link',
  },
  {
    Icon: Zap,
    title: 'Sub-45ms Real-Time Engine',
    desc: 'Powered by the MediaDance real-time communication core. Our P2P architecture prevents frame drops, frozen screens, and audio distortion—even on weak 4G.',
    badge: 'MediaDance Core',
  },
  {
    Icon: ShieldCheck,
    title: 'Absolute Privacy Architecture',
    desc: 'Patient communication channels run completely isolated. No clinical data or session metadata is ever stored on our servers, ensuring seamless compliance and data sovereignty.',
    badge: 'Zero Data Stored',
  },
];

export default function FeaturesSection() {
  return (
    <section className={styles.section} id="features">
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.sectionLabel}>07 — Infrastructure</p>
          <h2 className={styles.headline}>
            Practice Management &<br />Core Infrastructure
          </h2>
          <p className={styles.desc}>
            Every component engineered for clinical performance, compliance,
            and complete practitioner independence.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map(({ Icon, title, desc, badge }) => (
            <div className={styles.featureCard} key={title}>
              <div className={styles.iconWrap}> <Icon size={16} /></div>
              <h3 className={styles.featureTitle}>{title}</h3>
              <p className={styles.featureDesc}>{desc}</p>
              <span className={styles.techBadge}>{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
