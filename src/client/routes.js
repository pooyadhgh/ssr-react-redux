import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';

const routes = [
  {
    ...HomePage,
    path: '/',
    exact: true,
  },
  {
    ...UsersListPage,
    path: '/users',
  },
];

export default routes;
