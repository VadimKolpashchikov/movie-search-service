import type { ICard } from '@/types/Card.type';
import type { ComponentProps } from 'react';

export interface CardListProps extends ComponentProps<'div'> {
  cards: ICard[];
}
