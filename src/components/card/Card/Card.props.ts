import type { IMovie } from '@/types/Movie.type';
import type { ComponentProps } from 'react';

export interface CardProps extends ComponentProps<'div'> {
  data: IMovie;
  addToFavorite: (id: IMovie['id']) => void;
  removeFromFavorite: (id: IMovie['id']) => void;
}
