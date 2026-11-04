import Header from './components/Header/Header.jsx';
import SearchForm from './components/SearchForm/SearchForm.jsx';
import LoginForm from './components/LoginForm/LoginForm.jsx';
import CardList from './components/card/CardList/CardList.jsx';
import MainLayout from './components/layout/MainLayout/MainLayout.jsx';
import { cardListMock } from './mocks/initialData.js';
import { useUserLogin } from './hooks/useUserLogin.hook.js';

function App() {
  const {
    user, login, logout,
  } = useUserLogin();

  const onSearch = (searchString) => {
    console.log(searchString);
  };

  return (
    <>
      <Header user={user} onLogout={logout} />

      <MainLayout>
        <LoginForm onSubmit={login} />

        <SearchForm onSubmit={onSearch} />

        <CardList cards={cardListMock} />
      </MainLayout>
    </>
  );
}

export default App;
