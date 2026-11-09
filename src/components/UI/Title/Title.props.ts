import type { ComponentProps } from 'react';

export interface TitleProps extends ComponentProps<'h1'> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}
