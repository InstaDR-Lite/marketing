import styles from './HowItWorks.module.scss';

const STEPS = [
  {
    number: '01',
    title: 'Claim your room',
    body: 'Pick your path — instaroom.link/[your-name], whatever fits — and we mint it in under a minute.',
  },
  {
    number: '02',
    title: 'Share your link',
    body: 'Share it on intake, in your email signature, on a printed door sign. Patients never download anything.',
  },
  {
    number: '03',
    title: 'Close the visit',
    body: 'When the call ends, consent and the audit log are bound to the call record. Export it as PDF, CSV, or FHIR the moment a records request lands.',
  },
];

export default function HowItWorksSection() {
  return (
    <section className={styles.section} id="how-it-works">
      <div className={styles.container}>
        <div className={styles.eyebrow}>01 - HOW IT WORKS</div>
        <h2 className={styles.headline}>Three steps to your own virtual room.</h2>

        <div className={styles.steps}>
          {STEPS.map((step, i) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.stepNumber}>{step.number}</div>
              {i < STEPS.length - 1 && <div className={styles.connector} />}
              <div className={styles.stepContent}>
                <div className={styles.stepTitle}>{step.title}</div>
                <p className={styles.stepBody}>{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}