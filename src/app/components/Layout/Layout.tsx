import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet, ScrollRestoration } from 'react-router';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100 transition-colors duration-300">
      <ScrollRestoration />
      <Navbar />
      <main className="flex-grow pt-20 md:pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
