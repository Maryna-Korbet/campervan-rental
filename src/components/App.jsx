import { Outlet } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import { AppHeader } from './AppHeader/AppHeader';


function App() {

  return (
  <>
    <GlobalStyle />
    <AppHeader />
      <main>
        <Outlet />
    </main>
  </>
  );
}

export default App;