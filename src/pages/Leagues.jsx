/* eslint-disable no-unused-vars */
import React, { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import LeagueList from '../containers/Leagues/LeagueList';
import { Pagination, Search } from '../containers/common';

import { fetchCompetitions } from '../utils/fetchData';

function Leagues() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [competitions, setCompetitions] = useState([]);
  const [count, setCount] = useState(0);
  const [itemsPerPage] = useState(6);
  const [shownItems, setShownItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [paginationLength, setPaginationLength] = useState(0);

  const getData = useCallback(async () => {
    const { competitions: items, count: n } = await fetchCompetitions();
    setCompetitions(items);
    setCount(n);
  });

  const initPageNumber = () => {
    const page = searchParams.get('page');
    if (!page) setSearchParams({ page: '1' });
  };

  const getShownItems = (allItems, pageNumber) => {
    const showToIndex = itemsPerPage * pageNumber;
    const showFromIndex = showToIndex - itemsPerPage;
    return allItems.slice(showFromIndex, showToIndex);
  };

  const getPaginationLength = () => {
    setPaginationLength(Math.ceil(filteredItems.length / itemsPerPage));
  };

  const handleSearch = (search) => {
    let data = [...competitions];
    if (search) {
      data = data.filter((team) => {
        const name = team.name.toLowerCase();
        return name.startsWith(search.toLowerCase());
      });
    }
    setFilteredItems(data);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (competitions.length) {
      initPageNumber();
      handleSearch();
    }
  }, [competitions]);

  useEffect(() => {
    const page = parseInt(searchParams.get('page'), 10);
    setShownItems(getShownItems(filteredItems, page));
  }, [competitions, filteredItems, searchParams]);

  useEffect(() => {
    getPaginationLength();
  }, [filteredItems]);

  // const paginationLength = Math.ceil(count / itemsPerPage);

  return (
    <>
      <Search onSearch={handleSearch} />
      {filteredItems.length ? <LeagueList items={shownItems} /> : <span>Loading...</span>}
      {paginationLength > 0 && <Pagination length={paginationLength} />}
    </>
  );
}

export default Leagues;
