import React from 'react';

import Container from './components/Container';
import Main from './components/Main';
import Footer from './components/Footer';
import { AppHeader } from './containers/Layout';
import AppWrapper from './components/AppWrapper';
import Leagues from './pages/Leagues';

function App() {
  return (
    <AppWrapper>
      <AppHeader />
      <Main>
        <Container>
          <Leagues />
        </Container>
      </Main>
      <Footer>Footer</Footer>
    </AppWrapper>
  );
}

export default App;
