import { useEffect, useRef } from 'react';
import styles from './AnimatedName.module.css';

/**
 * AnimatedName
 * Each character drops in with a staggered delay for a premium reveal effect.
 * A blinking cursor appears after the last character.
 */
export default function AnimatedName({ name = 'Mark Christian Garing.' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    // Trigger animation after a brief mount delay
    const timer = setTimeout(() => {
      el.classList.add(styles.visible);
    }, 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.nameWrapper} ref={containerRef}>
      <h1 className={styles.name} aria-label={name}>
        {name.split('').map((char, i) => (
          <span
            key={i}
            className={styles.char}
            style={{ '--i': i }}
            aria-hidden="true"
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
        <span className={styles.cursor} aria-hidden="true">_</span>
      </h1>
    </div>
  );
}
