import { useEffect, useState } from 'react';
import styles from './IntroScreen.module.css';

export default function IntroScreen() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    // Reveal screen after 1.5s
    const timer1 = setTimeout(() => setLoading(false), 1500);
    // Unmount after animation completes (1.5s + 0.6s transiton = ~2.2s)
    const timer2 = setTimeout(() => setMounted(false), 2200); 
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className={`${styles.intro} ${loading ? '' : styles.slideUp}`}>
      <div className={styles.loader}>
        <span className={styles.text}>INITIALIZING SYSTEM...</span>
        <div className={styles.progressBar}>
          <div className={styles.progressFill}></div>
        </div>
      </div>
    </div>
  );
}
