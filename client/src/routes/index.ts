import { lazy } from 'react';

const Home = lazy(() => import('../page/Home.tsx'));
const About = lazy(() => import('../page/About.tsx'));
const Contact = lazy(() => import('../page/Contact.tsx'));

const coreRoutes = [
  {
    path: '/',
    title: 'Home',
    component: Home,
    routeProtection: false,
  },
  {
    path: '/about',
    title: 'About',
    component: About,
    routeProtection: false,
  },
  {
    path: '/contact',
    title: 'Contact',
    component: Contact,
    routeProtection: true,
  },
];

const routes = [...coreRoutes];
export default routes;
