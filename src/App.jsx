import React from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './components/Footer';
import { AppHeader, AppMain } from './containers/Layout';
import AppWrapper from './components/AppWrapper';

function App() {
  return (
    <AppWrapper>
      <AppHeader />
      <AppMain>
        <Outlet />
      </AppMain>
      <Footer>Footer</Footer>
    </AppWrapper>
  );
}

export default App;
