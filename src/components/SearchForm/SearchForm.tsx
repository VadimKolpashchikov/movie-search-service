import Title from '../UI/Title/Title';
import Paragraph from '../UI/Paragraph/Paragraph';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import SearchSvg from '@svg/search.svg?react';
import styles from './SearchForm.module.scss';
import { useState, type FormEvent } from 'react';
import cn from 'classnames';
import type { SearchFormProps } from './SearchForm.props';

function SearchForm({
  onSearch, className, ...props
}: SearchFormProps) {
  const [searchString, setSearchString] = useState<string>('');

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = searchString.trim();

    if (query) onSearch(query);

    setSearchString('');
  };

  return (
    <div className={styles['search-form']}>
      <div className={styles['search-form__head']}>
        <Title>Поиск</Title>
        <Paragraph>
          Введите название фильма, сериала или мультфильма для поиска и добавления
          в избранное.
        </Paragraph>
      </div>

      <form
        {...props}
        className={cn(styles['search-form__form'], className)}
        autoComplete="off"
        onSubmit={submitHandler}
      >
        <Input
          placeholder="Введите название"
          name="search"
          prepend={<SearchSvg />}
          value={searchString}
          onChange={({ target }) => setSearchString(target.value)}
        />
        <Button type="submit">Искать</Button>
      </form>
    </div>
  );
}

export default SearchForm;
