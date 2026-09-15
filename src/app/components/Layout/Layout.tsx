import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet, ScrollRestoration, useNavigation } from 'react-router';

const Layout = () => {
  const isNavigating = useNavigation().state === 'loading';

  return (
    <div className="flex flex-col min-h-screen bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100 transition-colors duration-300">
      <ScrollRestoration />
      {isNavigating && (
        <div
          role="progressbar"
          aria-label="Loading page"
          className="fixed inset-x-0 top-0 z-[100] h-1 overflow-hidden bg-[rgb(var(--wolaita-gold))]/20"
        >
          <div className="h-full w-1/3 animate-[pageLoading_1s_ease-in-out_infinite] bg-gradient-to-r from-[rgb(var(--wolaita-clay))] to-[rgb(var(--wolaita-gold))]" />
        </div>
      )}
      <Navbar />
      <main className="flex-grow pt-20 md:pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
