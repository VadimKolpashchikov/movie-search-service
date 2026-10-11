import Header from './components/Header/Header.jsx';
import SearchForm from './components/SearchForm/SearchForm.jsx';
import CardList from './components/card/CardList/CardList.jsx';
import MainLayout from './components/layout/MainLayout/MainLayout.jsx';
import { cardListMock } from './mocks/initialData.js';

function App() {
  const onSearch = (searchString) => {
    console.log(searchString);
  };

  return (
    <>
      <Header />

      <MainLayout>
        <SearchForm onSearch={onSearch} />

        <CardList cards={cardListMock} />
      </MainLayout>
    </>
  );
}

export default App;
