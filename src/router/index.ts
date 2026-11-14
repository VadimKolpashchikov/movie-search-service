import { createBrowserRouter } from 'react-router';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import routes from './routes.ts';
import WithHederLayout from '@/layouts/WithHederLayout/WithHederLayout.tsx';
import MoviesPage from './pages/Movies/MoviesPage.tsx';
import LoginPage from './pages/Login/LoginPage.tsx';
import FavoritesPage from './pages/Favorites/FavoritesPage.tsx';
import MoviePage from './pages/Movie/MoviePage.tsx';

export default createBrowserRouter([
  {
    path: '',
    Component: WithHederLayout,
    children: [
      {
        path: routes.movies.path,
        Component: MoviesPage,
      },
      {
        path: routes.movie.path,
        Component: MoviePage,
      },
      {
        path: routes.login.path,
        Component: LoginPage,
      },
      {
        path: routes.favorites.path,
        Component: FavoritesPage,
      },
      {
        path: '*',
        Component: NotFoundPage,
      },
    ],
  },
]);
