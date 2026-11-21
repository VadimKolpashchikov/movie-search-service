import { OMDB_PREFIX } from '@/api/const';
import CardList from '@/components/card/CardList/CardList';
import InfoMessage from '@/components/InfoMessage/InfoMessage';
import SearchForm from '@/components/SearchForm/SearchForm';
import Loader from '@/components/UI/Loader/Loader';
import ColumnLayout from '@/layouts/ColumnLayout/ColumnLayout';
import type { IMovie } from '@/types/Movie.type';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

export default function MoviesPage() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [query, setQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);

  const getMovies = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      await new Promise((resolve) => {
        setTimeout(resolve, 500);
      });
      // НЕ РАБОТАЕТ!
      const { data } = await axios.get<IMovie[]>(`${OMDB_PREFIX}/search?q=${query}`);

      if (Array.isArray(data)) {
        setMovies(data);
      }
    }
    catch (e) {
      console.error(e);
      setError(e);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getMovies();
  }, [getMovies]);

  return (
    <ColumnLayout>
      <SearchForm onSearch={setQuery} />

      {isLoading && <Loader /> }

      {!!error && <InfoMessage title="Ошибка" text={error instanceof Error ? error.message : ''} />}

      {query && !movies.length && (
        <InfoMessage title="Упс... Ничего не найдено" text="Попробуйте изменить запрос или ввести более точное название фильма" />
      ) }

      {!!movies.length && <CardList cards={movies} />}
    </ColumnLayout>
  );
}
