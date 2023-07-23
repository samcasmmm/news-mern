import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Navbar from './navbar/Navbar';
import Ad from './ad/Ads';
import Footer from './footer/Footer';

const Layout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      {/* <Ad /> */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
