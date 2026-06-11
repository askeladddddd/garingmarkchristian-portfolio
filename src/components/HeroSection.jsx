import { useState } from 'react';
import AnimatedName from './AnimatedName';
import styles from './HeroSection.module.css';

const ArrowIcon = () => (
  <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M2 10L10 2M10 2H4M10 2V8" />
  </svg>
);

export default function HeroSection() {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.profileWrapper}>
          <div className={styles.flipContainerWrapper}>
            <div
              className={`${styles.flipContainer} ${isFlipped ? styles.flipped : ''}`}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              <div className={styles.flipper}>
                <div className={styles.front}>
                  <img src="https://github.com/askeladddddd.png" alt="Mark Christian Garing" className={styles.profileHero} />
                </div>
                <div className={styles.back}>
                  <p className={styles.quoteText}>"The moment you give up is the moment you let someone else win."</p>
                  <span className={styles.quoteAuthor}>— Kobe Bryant</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.statusBadge}>
            <span className={styles.statusDot}></span>
            AVAILABLE FOR WORK
          </div>
        </div>
        <div className={styles.eyebrow}>// DEVELOPMENT PROTOCOL &amp; BSIT PROFILE</div>

        <AnimatedName name="Mark Christian Garing" />

        <div className={styles.subtext}>Building optimized web frameworks.</div>

        <p className={styles.bio}>
          BSIT student at Cebu Institute of Technology – University. Experienced in full-stack web development, RESTful API integration, and building AI-powered applications. Actively seeking an internship opportunity to apply my technical expertise and contribute to innovative software engineering projects.
        </p>

        <div className={styles.btnContainer}>
          <a href="https://drive.google.com/file/d/1JZxfdbAgq2ae9TKyESZATrwarSE44OH5/view?usp=drive_link" className={styles.btn} target="_blank" rel="noreferrer">
            Resume
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
