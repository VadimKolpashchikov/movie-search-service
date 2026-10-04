import Header from './components/Header/Header.jsx';
import SearchForm from './components/SearchForm/SearchForm.jsx';
import MainLayout from './components/layout/MainLayout/MainLayout.jsx';

function App() {
  const onSearch = (searchString) => {
    console.log(searchString);
  };

  return (
    <>
      <Header />

      <MainLayout>
        <SearchForm onSearch={onSearch} />
      </MainLayout>
    </>
  );
}

export default App;
