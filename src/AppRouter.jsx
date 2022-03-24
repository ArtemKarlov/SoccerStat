import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';

import Leagues from './pages/Leagues';
import NotFound from './pages/NotFound';
import Schedule from './pages/Schedule';
import Teams from './pages/Teams';
import Test from './pages/Test';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<h1>Welcome, on soccer stat</h1>} />
        <Route path="leagues" element={<Leagues />} />
        <Route path="leagues/:id" element={<Schedule />} />
        <Route path="teams" element={<Teams />} />
        <Route path="teams/:id" element={<Schedule />} />
        <Route path="test" element={<Test />} />
        <Route path="test/:id" element={<Schedule />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
