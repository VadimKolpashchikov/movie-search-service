import type { ComponentProps } from 'react';
import styles from './Container.module.scss';

function Container({ children }: ComponentProps<'div'>) {
  return (
    <div className={styles['container']}>
      {children}
    </div>
  );
}

export default Container;
