import StarSvg from '@svg/star.svg?react';
import styles from './CardRating.module.scss';
import type { ComponentProps } from 'react';

function CardRating({ children }: ComponentProps<'div'>) {
  return (
    <div className={styles['card-rating']}>
      <StarSvg />
      {children}
    </div>
  );
}

export default CardRating;
