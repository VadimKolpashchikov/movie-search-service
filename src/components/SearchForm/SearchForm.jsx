import Title from '../UI/Title/Title';
import Paragraph from '../UI/Paragraph/Paragraph';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import './SearchForm.scss';
import { useState } from 'react';

function SearchForm({ onSearch }) {
  const [searchString, setSearchString] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const query = searchString.trim();

    if (query) onSearch(query);

    setSearchString('');
  };

  return (
    <div className="search-form">
      <div className="search-form__head">
        <Title>Поиск</Title>
        <Paragraph>
          Введите название фильма, сериала или мультфильма для поиска и добавления
          в избранное.
        </Paragraph>
      </div>

      <form
        className="search-form__form"
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <Input
          placeholder="Введите название"
          name="search"
          prepend={<img src="svg/search.svg" alt="search-icon" />}
          value={searchString}
          onChange={({ target }) => setSearchString(target.value)}
        />
        <Button type="submit">Искать</Button>
      </form>
    </div>
  );
}

export default SearchForm;
