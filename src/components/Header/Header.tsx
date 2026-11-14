import Container from '../../layouts/Container/Container';
import BookmarkSvg from '@svg/bookmark.svg?react';
import UserSvg from '@svg/user.svg?react';
import LoginSvg from '@svg/login.svg?react';
import styles from './Header.module.scss';
import { useContext } from 'react';
import UserContext from '../../context/user/UserContext';
import { NavLink } from 'react-router';
import routes from '@/router/routes';
import cn from 'classnames';

const {
  movies, favorites, login,
} = routes;

const links = [
  { path: movies.path, text: 'Поиск фильмов' },
  { path: favorites.path, text: 'Мои фильмы' },
  {
    path: login.path, text: 'Войти', svg: <LoginSvg />,
  },
];

function Header() {
  const { user, logout } = useContext(UserContext);

  const filteredLinks = links.filter(({ path }) => {
    if (path == login.path) {
      return !user?.isLogged;
    }

    return true;
  });

  return (
    <header className={styles['header']}>
      <Container>
        <div className={styles['header__wrap']}>
          <div className={styles['header__logo']}>
            <BookmarkSvg width={40} height={40} />
          </div>

          <div className={styles['header__menu']}>
            {filteredLinks.map((link) => (
              <NavLink to={link.path} className={({ isActive }) => cn(
                styles['header__menu-item'],
                { [styles['active']]: isActive },
              )}
              >
                {link.text}
                {link.svg}
              </NavLink>
            ))}

            {user?.isLogged && (
              <>
                <p className={styles['header__menu-item']}>
                  {user.name}
                  <UserSvg />
                </p>

                <button className={styles['header__menu-item']} onClick={logout}>
                  Выйти
                </button>
              </>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
