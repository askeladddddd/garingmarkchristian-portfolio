import styles from './Header.module.css';

export default function Header({ theme, onToggleTheme }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <div className={styles.navLinks}>
            <a href="#work">WORK</a>
            <a href="#skills">SKILLS</a>
            <a href="#contact">CONTACT</a>
          </div>

          <div className={styles.themeToggleWrapper}>
            <div
              className={styles.themeSliderBar}
              onClick={onToggleTheme}
              role="switch"
              aria-checked={theme === 'light'}
              aria-label="Toggle light/dark theme"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && onToggleTheme()}
            >
              <div className={`${styles.themeSliderKnob} ${theme === 'light' ? styles.knobLight : ''}`} />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
