import styles from './WorkSection.module.css';

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M2 10L10 2M10 2H4M10 2V8" />
  </svg>
);

const projects = [
  {
    id: 'metadoc',
    featured: true,
    type: '[ CAPSTONE PROJECT ]',
    year: '2025-2026',
    title: 'MetaDoc — Software Project Proposal Evaluator',
    desc: 'An AI-powered web platform designed to streamline the evaluation of capstone project proposals. It leverages Gemini LLM for automated feedback, role-based access control for students and advisers, and real-time document processing to ensure structural and content compliance.',
    tags: ['Next.js', 'React', 'Tailwind', 'Gemini AI', 'Google Drive Api', 'Supabase'],
    href: 'https://metadoc-eight.vercel.app/',
  },
  {
    id: 'indexhub',
    featured: false,
    type: '[ SYSTEM UTILITY ]',
    year: '2026',
    title: 'IndexHub — QR & Data Management',
    desc: 'A comprehensive business utility platform optimized for batch processing and managing QR-based indexes. It provides an intuitive dashboard for organizing data, generating assets, and ensuring secure cloud synchronization for enterprise workflows.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma', 'Google Drive Api'],
    href: 'https://index-hub.vercel.app/',
  },
  {
    id: 'it334',
    featured: false,
    type: '[ FULL-STACK SYSTEM ]',
    year: '2025',
    title: 'Collaborative Notes Sharing App',
    desc: 'A full-stack collaborative note-sharing and task management application featuring permission-based note sharing, task tracking, real-time search, and customizable productivity tools for collaborative workflows.',
    tags: ['React', 'Vite', 'Tailwind', 'Spring Boot', 'MySQL'],
    href: 'https://github.com/askeladddddd/IT334-MidtermProject',
  },
];

export default function WorkSection() {
  return (
    <section id="work" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNum}>01 / PRODUCTION DECK</span>
          <h2 className={styles.sectionTitle}>Selected Projects</h2>
        </div>

        <div className={styles.workGrid}>
          {projects.map(project => (
            <a
              key={project.id}
              href={project.href}
              className={`${styles.workCard} ${project.featured ? styles.featured : ''}`}
            >
              <div className={styles.cardMeta}>
                <span>{project.type}</span>
                <span>{project.year}</span>
              </div>
              <h3 className={styles.cardTitle}>
                {project.title}
                <ArrowIcon />
              </h3>
              <p className={styles.cardDesc}>{project.desc}</p>
              <div className={styles.cardTags}>
                {project.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <div className={styles.viewAllContainer}>
          <a href="https://github.com/askeladddddd" target="_blank" rel="noreferrer" className={styles.viewAllBtn}>
            View All Projects
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
