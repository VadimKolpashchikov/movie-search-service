import type { ComponentProps, ReactNode } from 'react';

export interface InputProps extends ComponentProps<'input'> {
  prepend?: ReactNode;
  append?: ReactNode;
}
