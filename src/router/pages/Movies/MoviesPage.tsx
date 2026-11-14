import CardList from '@/components/card/CardList/CardList';
import SearchForm from '@/components/SearchForm/SearchForm';
import ColumnLayout from '@/layouts/ColumnLayout/ColumnLayout';
import { cardListMock } from '@/mocks/initialData';

export default function MoviesPage() {
  const onSearch = (searchString: string) => {
    console.log(searchString);
  };

  return (
    <ColumnLayout>
      <SearchForm onSearch={onSearch} />
      <CardList cards={cardListMock} />
    </ColumnLayout>
  );
}
