import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import { fetchMatches } from '../utils/fetchData';

function Schedule() {
  const { id } = useParams();
  const location = useLocation();
  const [matches, setMatches] = useState([]);

  const getData = async () => {
    const date = await fetchMatches(location.pathname);
    setMatches(date.matches);
  };

  useEffect(() => {
    getData();
  }, []);

  return <h1>{matches.length ? `${id}: ${matches[0].utcDate}` : 'loading...'}</h1>;
}

export default Schedule;
