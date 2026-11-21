import type { IMovie } from '@/types/Movie.type';
import type { ComponentProps } from 'react';

export interface CardListProps extends ComponentProps<'div'> {
  cards: IMovie[];
}
