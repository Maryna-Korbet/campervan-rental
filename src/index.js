import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
import { lazy } from 'react';
import { ThemeProvider } from 'styled-components';
import App  from 'components/App';
import 'normalize.css';
import './index.css';
import { theme } from 'components/theme';
import StatefulAuth0Provider from 'auth/StatefulAuth0Provider';


const HomePage = lazy(() => import('pages/HomePage'));
const CatalogPage = lazy(() => import('pages/CatalogPage'));
const FavoritesPage = lazy(() => import('pages/FavoritesPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
const AuthCallback = lazy(() => import('auth/AuthCallback'));

function AppEntrypoint() {
  return (
    <StatefulAuth0Provider>
      <ThemeProvider theme={theme}>
     {/*  <Provider store={store}> */}
        <App />
      {/*   </Provider> */}
      </ThemeProvider>
    </StatefulAuth0Provider>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppEntrypoint />,
    children: [
      {
        path: '/',
        element: <React.Suspense fallback={null}>
                  <HomePage />
                </React.Suspense>,
      },
      {
        path: 'catalog',
        element: <React.Suspense fallback={null}>
                  <CatalogPage />
                </React.Suspense>,
      },
      {
        path: 'favorites',
        element: <React.Suspense fallback={null}>
                  <FavoritesPage />
                </React.Suspense>,
      },
      {
        path: '*',  
        element: <React.Suspense fallback={null}>
                  <NotFoundPage />
                </React.Suspense>, 
      },
      {
        path: 'callback',
        element: <AuthCallback />,
      }
    ],
  },
], { basename: '/campervan-rental' });


const root = ReactDOM.createRoot(
  document.getElementById('root')  
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

