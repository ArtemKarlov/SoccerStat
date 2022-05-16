import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './styledComponents/Footer';
import { AppHeader, AppMain } from './components/Layout';
import AppWrapper from './styledComponents/AppWrapper';

function App() {
  return (
    <AppWrapper>
      <AppHeader />
      <AppMain>
        <Outlet />
      </AppMain>
      <Footer>SoccerStat, 2022</Footer>
    </AppWrapper>
  );
}

export default App;
