import Container from '../layout/Container/Container';
import BookmarkSvg from '@svg/bookmark.svg?react';
import UserSvg from '@svg/user.svg?react';
import LoginSvg from '@svg/login.svg?react';
import styles from './Header.module.scss';

function Header() {
  const user = false;

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
            {user
              ? (
                  <>
                    <a href="#" className={styles['header__menu-item']}>
                      UserName
                      <UserSvg />
                    </a>
                    <a href="#" className={styles['header__menu-item']}>
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
