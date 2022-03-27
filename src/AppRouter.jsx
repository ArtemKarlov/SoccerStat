import React from 'react';
import { Routes, Route } from 'react-router-dom';

import App from './App';
import Leagues from './pages/Leagues';
import League from './pages/League';
import Teams from './pages/Teams';
import Team from './pages/Team';
import NotFound from './pages/NotFound';
import Schedule from './pages/Schedule';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<h1>Welcome to soccer stat</h1>} />
        <Route path="competitions" element={<Leagues />} />
        <Route path="competitions/:id" element={<League />} />
        <Route path="competitions/:id/matches" element={<Schedule />} />
        <Route path="teams" element={<Teams />} />
        <Route path="teams/:id" element={<Team />} />
        <Route path="teams/:id/matches" element={<Schedule />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
