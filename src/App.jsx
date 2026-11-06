import Header from './components/Header/Header.jsx';
import SearchForm from './components/SearchForm/SearchForm.jsx';
import LoginForm from './components/LoginForm/LoginForm.jsx';
import CardList from './components/card/CardList/CardList.jsx';
import MainLayout from './components/layout/MainLayout/MainLayout.jsx';
import { cardListMock } from './mocks/initialData.js';
import { useContext } from 'react';
import { UserContext } from './context/user.context.js';

function App() {
  const { user } = useContext(UserContext);

  const onSearch = (searchString) => {
    console.log(searchString);
  };

  const currentTemplate = user
    ? (
        <>
          <SearchForm onSubmit={onSearch} />
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
