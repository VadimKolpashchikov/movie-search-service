import Container from '../Container/Container';
import styles from './MainLayout.module.scss';

function MainLayout({ children }: { children?: React.ReactNode }) {
  return (
    <Container>
      <div className={styles['main-layout']}>
        {children}
      </div>
    </Container>

  );
}

export default MainLayout;
