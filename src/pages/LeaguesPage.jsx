import React, { useState, useEffect, useCallback } from 'react';

import CardsPage from '../containers/Cards';

import { fetchCompetitions } from '../utils/fetchData';

function LeaguesPage() {
  const [competitions, setTeams] = useState([]);
  // const [count, setCount] = useState(0);

  const handleFetchData = useCallback(async () => {
    const data = await fetchCompetitions();
    setTeams(data.competitions);
    // setCount(data.count);
  });

  useEffect(() => {
    handleFetchData();
  }, []);

  return competitions.length !== 0 ? (
    <CardsPage resource="competitions" items={competitions} />
  ) : (
    <span>Loading...</span>
  );
}

export default LeaguesPage;
