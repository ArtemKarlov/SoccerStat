import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import AppRouter from './AppRouter';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/SoccerStat">
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
