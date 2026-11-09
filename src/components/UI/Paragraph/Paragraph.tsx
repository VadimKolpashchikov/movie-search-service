import type { ComponentProps } from 'react';
import styles from './Paragraph.module.scss';

function Paragraph({ children }: ComponentProps<'p'>) {
  return <p className={styles['paragraph']}>{children}</p>;
}

export default Paragraph;
