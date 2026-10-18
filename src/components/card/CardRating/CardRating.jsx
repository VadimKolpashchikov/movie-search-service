import StarSvg from '@svg/star.svg?react';
import styles from './CardRating.module.scss';

function CardRating({ children }) {
  return (
    <div className={styles['card-rating']}>
      <StarSvg />
      {children}
    </div>
  );
}

export default CardRating;
