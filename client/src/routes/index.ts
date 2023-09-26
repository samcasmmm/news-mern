import { lazy } from 'react';

const Home = lazy(() => import('../page/Home.tsx'));
const About = lazy(() => import('../page/About.tsx'));

const coreRoutes = [
  {
    path: '/',
    title: 'Home',
    component: Home,
  },
  {
    path: '/about',
    title: 'About',
    component: About,
  },
];

const routes = [...coreRoutes];
export default routes;
