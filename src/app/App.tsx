import { RouterProvider } from 'react-router';
import { router } from './routes';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

const App = () => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
          <RouterProvider router={router} />
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
