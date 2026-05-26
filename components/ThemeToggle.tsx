'use client';

import { useTheme } from './ThemeProvider';
import styles from './ThemeToggle.module.scss';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isLight = theme === 'light';

  return (
    <label
      className={`${styles.toggle} ${isLight ? styles.isLight : ''}`}
      aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
      title={`Switch to ${isLight ? 'dark' : 'light'} mode`}
    >
      <input
        type="checkbox"
        checked={isLight}
        onChange={toggle}
        aria-checked={isLight}
      />
      <span className={styles.track}>
        <span className={`${styles.icon} ${styles.sun}`}>☀︎</span>
        <span className={`${styles.icon} ${styles.moon}`}>☽</span>
      </span>
      <span className={styles.thumb} />
    </label>
  );
}
