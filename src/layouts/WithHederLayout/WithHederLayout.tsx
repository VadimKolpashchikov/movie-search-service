import Header from '@/components/Header/Header';
import { Outlet } from 'react-router';
import Container from '../Container/Container';

function WithHederLayout() {
  return (
    <>
      <Header />

      <Container>
        <Outlet />
      </Container>
    </>
  );
}

export default WithHederLayout;
