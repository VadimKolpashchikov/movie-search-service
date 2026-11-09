import Card from '../Card/Card';
import styles from './CardList.module.scss';
import type { CardListProps } from './CardList.props';

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
        <Card
          key={card.id}
          data={card}
          addToFavorite={addToFavorite}
          removeFromFavorite={removeFromFavorite}
        />
      ))}
    </div>
  );
}

export default CardList;
