import styles from './Section.module.css';
import Container from '../Container/Container';

const Section = ({ children, title, className }) => {
  return (
    <section className={styles.section}>
      <Container>
        {title && <h2 className={styles.section__title}>{title}</h2>}
        {children}
      </Container>
    </section>
  );
};

export default Section;