import BookmarkSvg from '@svg/bookmark.svg?react';
import LikeSvg from '@svg/like.svg?react';
import styles from './CardFavoriteButton.module.scss';
import cn from 'classnames';

const activeTemplate = (
  <>
    <BookmarkSvg />
    В избранном
  </>
);

const inactiveTemplate = (
  <>
    <LikeSvg />
    В избранное
  </>
);

function CardFavoriteButton({
  active = false,
  onClick,
}) {
  const clickHandler = (e) => {
    e.stopPropagation();
    onClick(e);
  };

  return (
    <button
      className={cn(
        styles['card-favorite-button'],
        { [styles['card-favorite-button_active']]: active },
      )}
      type="button"
      onClick={clickHandler}
    >
      {active ? activeTemplate : inactiveTemplate}
    </button>
  );
}

export default CardFavoriteButton;
