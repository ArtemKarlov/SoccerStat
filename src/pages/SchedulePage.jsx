import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Pagination } from '../containers/Controls';

import Schedule from '../containers/Schedule/Schedule';

import { fetchMatches } from '../utils/fetchData';

function SchedulePage() {
  const { id } = useParams();
  const location = useLocation();
  const [matches, setMatches] = useState([]);

  const [itemsPerPage] = useState(12);
  const [paginationLength, setPaginationLength] = useState(0);

  const getData = async () => {
    const date = await fetchMatches(location.pathname, location.search);
    setMatches(date.matches);
  };

  const getPaginationLength = () => Math.ceil(matches.length / itemsPerPage);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setPaginationLength(getPaginationLength());
  }, [matches]);

  return (
    <>
      <h1>{id}</h1>
      {matches.length ? (
        <>
          <Schedule items={matches} itemsPerPage={itemsPerPage} />
          <Pagination length={paginationLength} />
        </>
      ) : (
        <span>loading...</span>
      )}
    </>
  );
}

export default SchedulePage;
