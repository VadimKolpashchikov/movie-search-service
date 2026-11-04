import Header from './components/Header/Header.jsx';
import SearchForm from './components/SearchForm/SearchForm.jsx';
import LoginForm from './components/LoginForm/LoginForm.jsx';
import CardList from './components/card/CardList/CardList.jsx';
import MainLayout from './components/layout/MainLayout/MainLayout.jsx';
import { cardListMock } from './mocks/initialData.js';
import { useUserLogin } from './hooks/useUserLogin.hook.js';

function App() {
  const [user, setUser] = useUserLogin();

  const onSearch = (searchString) => {
    console.log(searchString);
  };

  const onLogin = (name) => {
    setUser({
      name,
      isLogged: true,
    });
  };

  const onLogout = () => {
    setUser((prev) => ({
      ...prev,
      isLogged: false,
    }));
  };

  return (
    <>
      <Header user={user} onLogout={onLogout} />

      <MainLayout>
        <LoginForm onSubmit={onLogin} />

        <SearchForm onSubmit={onSearch} />

        <CardList cards={cardListMock} />
      </MainLayout>
    </>
  );
}

export default App;
