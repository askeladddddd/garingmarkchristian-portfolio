import { useEffect, useRef } from 'react';
import styles from './SkillsSection.module.css';

const skillGroups = [
  {
    id: 'languages',
    title: 'Languages',
    skills: [
      { name: 'JavaScript / TypeScript / Java', val: 90 },
      { name: 'Python / PHP', val: 85 },
      { name: 'HTML / CSS', val: 95 },
    ],
  },
  {
    id: 'frameworks',
    title: 'Frameworks',
    skills: [
      { name: 'React / Next / Vite', val: 90 },
      { name: 'Flask / Django', val: 80 },
      { name: 'Spring Boot', val: 75 },
    ],
  },
  {
    id: 'infrastructure',
    title: 'Databases & Tools',
    skills: [
      { name: 'MySQL / PostgreSQL', val: 85 },
      { name: 'Git / Vercel', val: 90 },
      { name: 'Linux / AI Integration', val: 80 },
    ],
  },
];

function SkillBar({ name, val }) {
  return (
    <div className={styles.skillRow}>
      <div className={styles.skillInfo}>
        <span className={styles.skillName}>{name}</span>
        <span className={styles.skillVal}>{val}%</span>
      </div>
      <div className={styles.progressTrack}>
        <div
          className={styles.progressFill}
          data-val={`${val}%`}
          style={{ '--target-width': `${val}%` }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const fills = el.querySelectorAll(`.${styles.progressFill}`);
            fills.forEach(fill => {
              fill.style.width = fill.getAttribute('data-val');
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>02 / INFRASTRUCTURE MATRIX</span>
          <h2 className={styles.sectionTitle}>Technical Capabilities</h2>
        </div>

        <div className={styles.skillsLayout}>
          {skillGroups.map(group => (
            <div key={group.id}>
              <h3 className={styles.skillGroupTitle}>{group.title}</h3>
              {group.skills.map(skill => (
                <SkillBar key={skill.name} name={skill.name} val={skill.val} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
