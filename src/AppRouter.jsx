import React from 'react';
import { Routes, Route } from 'react-router-dom';

import App from './App';
import LeaguesPage from './pages/LeaguesPage';
import LeaguePage from './pages/LeaguePage';
import TeamsPage from './pages/TeamsPage';
import TeamPage from './pages/TeamPage';
import NotFound from './pages/NotFound';
import SchedulePage from './pages/SchedulePage';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<h1>Welcome to soccer stat</h1>} />
        <Route path="competitions" element={<LeaguesPage />} />
        <Route path="competitions/:id" element={<LeaguePage />} />
        <Route path="competitions/:id/matches" element={<SchedulePage />} />
        <Route path="teams" element={<TeamsPage />} />
        <Route path="teams/:id" element={<TeamPage />} />
        <Route path="teams/:id/matches" element={<SchedulePage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
