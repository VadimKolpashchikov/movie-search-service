import { Link } from 'react-router';
import Card from '../Card/Card';
import styles from './CardList.module.scss';
import type { CardListProps } from './CardList.props';
import routes from '@/router/routes';

type CardId = CardListProps['cards'][number]['id'];

function CardList({ cards }: CardListProps) {
  const addToFavorite = (cardId: CardId) => {
    console.log(`add to favorite list ${cardId}`);
  };

  const removeFromFavorite = (cardId: CardId) => {
    console.log(`remove from favorite list ${cardId}`);
  };

  return (
    <div className={styles['card-list']}>
      {cards.map((card) => (
        <Link to={routes.movie.path.replace(':id', String(card.id))} key={card.id}>
          <Card
            data={card}
            addToFavorite={addToFavorite}
            removeFromFavorite={removeFromFavorite}
          />
        </Link>
      ))}
    </div>
  );
}

export default CardList;
