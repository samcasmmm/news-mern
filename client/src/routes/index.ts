import { lazy } from 'react';

const Home = lazy(() => import('../page/Home.tsx'));

const coreRoutes = [
  {
    path: '/',
    title: 'Home',
    component: Home,
  },
];

const routes = [...coreRoutes];
export default routes;
