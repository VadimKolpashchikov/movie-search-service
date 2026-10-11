import Card from '../Card/Card';
import './CardList.scss';

function CardList({ cards }) {
  const addToFavorite = (cardId) => {
    console.log(`add to favorite list ${cardId}`);
  };

  const removeFromFavorite = (cardId) => {
    console.log(`remove from favorite list ${cardId}`);
  };

  return (
    <div className="card-list">
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
