import Container from '../Container/Container';
import './MainLayout.scss';

function MainLayout({ children }) {
  return (

    <Container>
      <div className="main-layout">
        {children}
      </div>
    </Container>

  );
}

export default MainLayout;
