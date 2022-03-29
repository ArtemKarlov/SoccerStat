import React, { useState, useEffect, useCallback } from 'react';

import CardsPage from '../containers/Cards';

import { fetchTeams } from '../utils/fetchData';

function TeamsPage() {
  const [teams, setTeams] = useState([]);
  const [count, setCount] = useState(0);

  const handleFetchData = useCallback(async () => {
    const data = await fetchTeams();
    setTeams(data.teams);
    setCount(data.count);
  });

  useEffect(() => {
    handleFetchData();
  }, []);

  return count !== 0 ? <CardsPage resource="teams" items={teams} /> : <span>Loading...</span>;
}

export default TeamsPage;
