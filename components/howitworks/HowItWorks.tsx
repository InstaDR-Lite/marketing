import styles from './HowItWorks.module.scss';

const STEPS = [
  {
    number: '01',
    title: 'Claim your room',
    body: 'Sign up and get instaroom.link/dr-lewis. Insta-setup. Yours forever.',
  },
  {
    number: '02',
    title: 'Share your link',
    body: 'Add it to your website, Psychology Today, or anywhere patients find you.',
  },
  {
    number: '03',
    title: 'Just show up',
    body: 'Consent, payment, and compliance handled before you say hello.',
  },
];

export default function HowItWorksSection() {
  return (
    <section className={styles.section} id="how-it-works">
      <div className={styles.container}>
        <div className={styles.eyebrow}>HOW IT WORKS</div>
        <h2 className={styles.headline}>Three steps to your permanent room.</h2>

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