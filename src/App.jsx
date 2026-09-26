import Button from './components/Button/Button.jsx';
import Title from './components/Title/Title.jsx';
import Paragraph from './components/Paragraph/Paragraph.jsx';

function App() {
  return (
    <>
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
      <Button>Искать</Button>
    </>
  );
}

export default App;
