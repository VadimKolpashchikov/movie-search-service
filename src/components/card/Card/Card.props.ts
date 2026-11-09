import type { ICard } from '@/types/Card.type';
import type { ComponentProps } from 'react';

export interface CardProps extends ComponentProps<'div'> {
  data: ICard;
  addToFavorite: (id: ICard['id']) => void;
  removeFromFavorite: (id: ICard['id']) => void;
}
