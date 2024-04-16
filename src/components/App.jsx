import { Outlet } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { GlobalStyle } from './GlobalStyles';
import { AppHeader } from './AppHeader/AppHeader';


function App() {

  return (
    <>
    <CssBaseline />
    <GlobalStyle />
    <AppHeader />
      <main>
        <Outlet />
      </main>
  </>
  );
}

export default App;