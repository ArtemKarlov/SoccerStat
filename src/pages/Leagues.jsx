/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';
import FlexWrapper from '../components/FlexWrapper';

import LeagueList from '../containers/Leagues/LeagueList';
import Pagination from '../containers/Pagination';

import Button from '../components/Button';
import Input from '../components/Input';
import { fetchCompetitions } from '../utils/fetchData';

function Leagues() {
  const [competitions, setCompetitions] = useState([]);
  const [count, setCount] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);

  const getCompetitions = useCallback(async () => {
    const { competitions: leagues, count: n } = await fetchCompetitions();
    setCompetitions(leagues);
    setCount(n);
  });

  useEffect(() => {
    getCompetitions();
  }, []);

  const handlePaginate = (page) => {
    setPageNumber(page);
  };

  const showToIndex = itemsPerPage * pageNumber;
  const showFromIndex = showToIndex - itemsPerPage;
  const shownCompetitions = competitions.slice(showFromIndex, showToIndex);
  const paginationLength = Math.ceil(count / itemsPerPage);

  return (
    <>
      <Input />
      <Button
        onClick={() => {
          console.log('click');
        }}
      >
        button
      </Button>
      <Button
        secondary
        onClick={() => {
          console.log('click');
        }}
      >
        button
      </Button>
      <FlexWrapper column justify="between">
        {competitions.length ? <LeagueList leagues={shownCompetitions} /> : <span>Loading...</span>}
        {paginationLength > 0 && (
          <Pagination pageNumber={pageNumber} length={paginationLength} paginate={handlePaginate} />
        )}
      </FlexWrapper>
    </>
  );
}

export default Leagues;
