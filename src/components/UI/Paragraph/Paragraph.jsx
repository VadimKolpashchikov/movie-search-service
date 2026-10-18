import styles from './Paragraph.module.scss';

function Paragraph({ children }) {
  return <p className={styles['paragraph']}>{children}</p>;
}

export default Paragraph;
