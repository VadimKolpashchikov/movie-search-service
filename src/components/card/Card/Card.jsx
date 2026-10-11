import CardFavoriteButton from '../CardFavoriteButton/CardFavoriteButton';
import CardRating from '../CardRating/CardRating';
import './Card.scss';

function Card({
  data, addToFavorite, removeFromFavorite,
}) {
  const clickHandler = () => {
    data.inFavorite
      ? removeFromFavorite(data.id)
      : addToFavorite(data.id);
  };

  return (
    <div className="card">
      <div className="card__image-wrap">
        <div className="card__stars">
          <CardRating>{data.stars}</CardRating>
        </div>

        <img src={data.image} alt={data.title} />
      </div>

      <div className="card__text-wrap">
        <p className="card__title">{data.title}</p>

        <CardFavoriteButton active={data.inFavorite} onClick={clickHandler} />
      </div>
    </div>
  );
}

export default Card;
