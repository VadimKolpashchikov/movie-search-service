import Container from '../layout/Container/Container';
import './Header.scss';

function Header() {
  const user = false;

  return (
    <header className="header">
      <Container>
        <div className="header__wrap">
          <a href="#" className="header__logo">
            <img src="/svg/bookmark.svg" alt="logo" />
          </a>

          <div className="header__menu">
            <a href="#" className="header__menu-item">
              Поиск фильмов
            </a>
            <a href="#" className="header__menu-item">
              Мои фильмы
            </a>
            {user
              ? (
                  <>
                    <a href="#" className="header__menu-item">
                      UserName
                      <img src="/svg/user.svg" alt="user" />
                    </a>
                    <a href="#" className="header__menu-item">
                      Выйти
                    </a>
                  </>
                )
              : (
                  <a href="#" className="header__menu-item">
                    Войти
                    <img src="/svg/login.svg" alt="login" />
                  </a>
                )}
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
