import Container from '../Container/Container';
import './MainLayout.scss';

function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <Container>
        {children}
      </Container>

    </div>
  );
}

export default MainLayout;
