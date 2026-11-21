import type { ComponentProps } from 'react';

export interface ParagraphProps extends ComponentProps<'p'> {
  size?: 'm' | 'l' | 'xl';
}
