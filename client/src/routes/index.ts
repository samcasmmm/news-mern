import { lazy } from 'react';

const Home = lazy(() => import('../page/Home.tsx'));
const About = lazy(() => import('../page/About.tsx'));
const Contact = lazy(() => import('../page/Contact.tsx'));

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
  {
    path: '/contact',
    title: 'Contact',
    component: Contact,
  },
];

const routes = [...coreRoutes];
export default routes;
