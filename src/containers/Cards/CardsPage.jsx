import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';

import CardsList from './CardsList';
import { Pagination, Search } from '../Controls';

function CardsPage({ resource, items }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredItems, setFilteredItems] = useState(items);
  const [shownItems, setShownItems] = useState([]);
  const [paginationLength, setPaginationLength] = useState(0);
  const [itemsPerPage] = useState(9);

  const initPageNumber = () => {
    const page = searchParams.get('page');
    if (!page) setSearchParams({ page: '1' });
  };

  const getShownItems = (allItems, pageNumber) => {
    const showToIndex = itemsPerPage * pageNumber;
    const showFromIndex = showToIndex - itemsPerPage;
    return allItems.slice(showFromIndex, showToIndex);
  };

  const getPaginationLength = () => Math.ceil(filteredItems.length / itemsPerPage);

  const handleSearch = (search) => {
    let data = [...items];
    if (search) {
      data = data.filter((team) => {
        const name = team.name.toLowerCase();
        return name.startsWith(search.toLowerCase());
      });
    }
    setFilteredItems(data);
  };

  useEffect(() => {
    initPageNumber();
  });

  useEffect(() => {
    const page = parseInt(searchParams.get('page'), 10);
    setShownItems(getShownItems(filteredItems, page));
  }, [filteredItems, searchParams]);

  useEffect(() => {
    setPaginationLength(getPaginationLength());
    setSearchParams({ page: '1' });
  }, [filteredItems]);

  return (
    <>
      <Search onSearch={handleSearch} />
      {filteredItems.length ? (
        <>
          <CardsList resource={resource} items={shownItems} />
          <Pagination length={paginationLength} />
        </>
      ) : (
        <span>Not found</span>
      )}
    </>
  );
}

CardsPage.propTypes = {
  resource: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CardsPage;
