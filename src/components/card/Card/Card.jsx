import CardFavoriteButton from '../CardFavoriteButton/CardFavoriteButton';
import CardRating from '../CardRating/CardRating';
import styles from './Card.module.scss';

function Card({
  data, addToFavorite, removeFromFavorite,
}) {
  const clickHandler = () => {
    data.inFavorite
      ? removeFromFavorite(data.id)
      : addToFavorite(data.id);
  };

  return (
    <div className={styles.card}>
      <div className={styles['card__image-wrap']}>
        <div className={styles['card__stars']}>
          <CardRating>{data.stars}</CardRating>
        </div>

        <img src={data.image} alt={data.title} />
      </div>

      <div className={styles['card__text-wrap']}>
        <p className={styles['card__title']}>{data.title}</p>

        <CardFavoriteButton active={data.inFavorite} onClick={clickHandler} />
      </div>
    </div>
  );
}

export default Card;
