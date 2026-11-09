import type { ComponentProps } from 'react';

export interface SearchFormProps extends ComponentProps<'form'> {
  onSearch: (query: string) => void;
}
