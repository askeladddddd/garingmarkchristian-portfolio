import { useRef, useState } from 'react';
import styles from './ContactSection.module.css';

function FloatingField({ id, label, type = 'text', isTextarea = false }) {
  const [filled, setFilled] = useState(false);

  const handleChange = (e) => setFilled(e.target.value.length > 0);

  const sharedProps = {
    id,
    className: styles.input,
    placeholder: ' ',
    onChange: handleChange,
  };

  return (
    <div className={styles.formField}>
      {isTextarea
        ? <textarea {...sharedProps} rows={4} />
        : <input type={type} {...sharedProps} />
      }
      <label className={`${styles.label} ${filled ? styles.labelFilled : ''}`} htmlFor={id}>
        {label}
      </label>
    </div>
  );
}

export default function ContactSection() {
  const formRef = useRef(null);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    formRef.current?.reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>03 / COMMUNICATION</span>
          <h2 className={styles.sectionTitle}>Contact Me</h2>
        </div>

        <div className={styles.contactWrapper}>
          <form ref={formRef} onSubmit={handleSubmit} noValidate>
            <FloatingField id="name"  label="Name" />
            <FloatingField id="email" label="Email" type="email" />
            <FloatingField id="msg"   label="Message" isTextarea />

            <button type="submit" className={styles.btn}>
              Send Message
            </button>
          </form>

          {sent && (
            <div className={styles.toast}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              Message sent successfully!
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
