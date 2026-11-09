import Container from '../layout/Container/Container';
import BookmarkSvg from '@svg/bookmark.svg?react';
import UserSvg from '@svg/user.svg?react';
import LoginSvg from '@svg/login.svg?react';
import styles from './Header.module.scss';
import { useContext } from 'react';
import UserContext from '../../context/user/UserContext';

function Header() {
  const { user, logout } = useContext(UserContext);

  return (
    <header className={styles['header']}>
      <Container>
        <div className={styles['header__wrap']}>
          <a href="#" className={styles['header__logo']}>
            <BookmarkSvg width={40} height={40} />
          </a>

          <div className={styles['header__menu']}>
            <a href="#" className={styles['header__menu-item']}>
              Поиск фильмов
            </a>
            <a href="#" className={styles['header__menu-item']}>
              Мои фильмы
            </a>
            {user?.isLogged
              ? (
                  <>
                    <a href="#" className={styles['header__menu-item']}>
                      {user.name}
                      <UserSvg />
                    </a>
                    <a
                      href="#"
                      className={styles['header__menu-item']}
                      onClick={logout}
                    >
                      Выйти
                    </a>
                  </>
                )
              : (
                  <a href="#" className={styles['header__menu-item']}>
                    Войти
                    <LoginSvg />
                  </a>
                )}
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
