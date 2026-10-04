import Button from './components/UI/Button/Button.jsx';
import Title from './components/UI/Title/Title.jsx';
import Paragraph from './components/UI/Paragraph/Paragraph.jsx';
import Input from './components/UI/Input/Input.jsx';
import Container from './components/layout/Container/Container.jsx';
import Header from './components/Header/Header.jsx';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Title>Title 1</Title>
        <Title level={2}>Title 2</Title>
        <Title level={3}>Title 3</Title>
        <Title level={4}>Title 4</Title>
        <Title level={5}>Title 5</Title>
        <Title level={6}>Title 6</Title>

        <Paragraph>
          Введите название фильма, сериала или мультфильма для поиска и добавления
          в избранное.
        </Paragraph>

        <Input
          placeholder="Введите название"
          name="search"
          prepend={<img src="svg/search.svg" alt="search-icon" />}
        />

        <Button>Искать</Button>
      </Container>

    </>
  );
}

export default App;
