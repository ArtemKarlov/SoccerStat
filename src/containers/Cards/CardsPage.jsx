import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import { useSearchParams } from 'react-router-dom';

import CardsList from '../../components/Cards';
import { Pagination, Search } from '../Controls';

function CardsPage({ resource, items }) {
  // const [searchParams, setSearchParams] = useSearchParams();
  const [filteredItems, setFilteredItems] = useState(items);
  const [shownItems, setShownItems] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [paginationLength, setPaginationLength] = useState(0);
  const [itemsPerPage] = useState(9);

  const getShownItems = (allItems, pageNum) => {
    const showToIndex = itemsPerPage * pageNum;
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
    setShownItems(getShownItems(filteredItems, pageNumber));
  }, [filteredItems, pageNumber]);

  useEffect(() => {
    setPaginationLength(getPaginationLength());
    setPageNumber(1);
  }, [filteredItems]);

  return (
    <>
      <Search onSearch={handleSearch} />
      {filteredItems.length ? (
        <>
          <CardsList resource={resource} items={shownItems} />
          <Pagination
            length={paginationLength}
            pageNumber={pageNumber}
            onPaginate={setPageNumber}
          />
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
