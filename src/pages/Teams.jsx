import React, { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import TeamList from '../containers/Teams';
import { Pagination, Search } from '../containers/common';

import { fetchTeams } from '../utils/fetchData';

function Teams() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [teams, setTeams] = useState([]);
  const [count, setCount] = useState(0);
  const [itemsPerPage] = useState(6);
  const [shownItems, setShownItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const getData = useCallback(async () => {
    const { teams: items, count: n } = await fetchTeams();
    setTeams(items);
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

  const handleSearch = (search) => {
    let data = [...teams];
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
    if (teams.length) {
      initPageNumber();
      handleSearch();
    }
  }, [teams]);

  useEffect(() => {
    const page = parseInt(searchParams.get('page'), 10);
    setShownItems(getShownItems(filteredItems, page));
  }, [teams, filteredItems, searchParams]);

  const paginationLength = Math.ceil(count / itemsPerPage);

  return (
    <>
      <Search onSearch={handleSearch} />
      {filteredItems.length ? <TeamList items={shownItems} /> : <span>Loading...</span>}
      {paginationLength > 0 && <Pagination length={paginationLength} />}
    </>
  );
}

export default Teams;
