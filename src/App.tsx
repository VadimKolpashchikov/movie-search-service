import Header from './components/Header/Header.js';
import SearchForm from './components/SearchForm/SearchForm.js';
import LoginForm from './components/LoginForm/LoginForm.js';
import CardList from './components/card/CardList/CardList.js';
import MainLayout from './layouts/ColumnLayout/ColumnLayout.js';
import { cardListMock } from './mocks/initialData';
import { useContext } from 'react';
import UserContext from './context/user/UserContext';

function App() {
  const { user } = useContext(UserContext);

  const onSearch = (searchString: string) => {
    console.log(searchString);
  };

  const currentTemplate = user
    ? (
        <>
          <SearchForm onSearch={onSearch} />
          <CardList cards={cardListMock} />
        </>
      )
    : (<LoginForm />);

  return (
    <>
      <Header />
      <MainLayout>
        {currentTemplate}
      </MainLayout>
    </>
  );
}

export default App;
