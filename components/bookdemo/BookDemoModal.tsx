'use client';

import { useState } from 'react';
import { X, Calendar } from 'lucide-react';
import styles from './BookDemo.module.scss';

interface Props {
  onClose: () => void;
}

export default function DemoModal({ onClose }: Props) {
  const [form, setForm]       = useState({ name: '', email: '', clinic: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent]       = useState(false);
  const [error, setError]     = useState('');

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.clinic) return;
    setSending(true);
    setError('');
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/utils/demo-request`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      setSent(true);
    } catch  {
      setError('Something went wrong. Please email us directly at rupesh@getinstaroom.com');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>

        {/* Close */}
        <button className={styles.close} onClick={onClose}>
          <X size={16} />
        </button>

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerIcon}>
            <Calendar size={20} style={{ color: 'var(--color-teal)' }} />
          </div>
          <div>
            <div className={styles.title}>Book a 15-minute demo</div>
            <div className={styles.subtitle}>No pressure. Just a quick look at what's possible.</div>
          </div>
        </div>

        {sent ? (
          <div className={styles.success}>
            <div className={styles.successTitle}>Request sent! ✓</div>
            <p className={styles.successSub}>
              We&apos;ll follow up within one business day to schedule your demo.
            </p>
            <button className={styles.btn} onClick={onClose}>Done</button>
          </div>
        ) : (
          <>
            {/* Fields */}
            <div className={styles.fields}>
              {[
                { key: 'name',   label: 'Your name',   placeholder: 'Dr. Sarah Chen' },
                { key: 'email',  label: 'Work email',  placeholder: 'sarah@riversideclinic.com' },
                { key: 'clinic', label: 'Clinic name', placeholder: 'Riverside Family Medicine' },
              ].map(f => (
                <div key={f.key} className={styles.field}>
                  <label className={styles.label}>{f.label}</label>
                  <input
                    type={f.key === 'email' ? 'email' : 'text'}
                    value={form[f.key as keyof typeof form]}
                    onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                    placeholder={f.placeholder}
                    className={styles.input}
                    onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                  />
                </div>
              ))}
            </div>

            {error && <p className={styles.error}>{error}</p>}

            <button
              className={styles.btn}
              onClick={handleSubmit}
              disabled={sending || !form.name || !form.email || !form.clinic}
            >
              {sending ? '// sending...' : 'Send request →'}
            </button>

            <p className={styles.fine}>
              We&apos;ll follow up within one business day. No spam, ever.
            </p>
          </>
        )}
      </div>
    </div>
  );
}