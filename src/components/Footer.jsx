import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerInner}>
          <span>&copy; 2026 MARK CHRISTIAN GARING.</span>
          <div className={styles.footerLinks}>
            <a href="https://github.com/" target="_blank" rel="noreferrer">GITHUB</a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LINKEDIN</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
