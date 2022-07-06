import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';

const routes = [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true,
      },
      {
        ...UsersListPage,
        path: '/users',
      },
    ],
  },
];

export default routes;
