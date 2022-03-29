/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';

import ScheduleList from './ScheduleList';

function Schedule({ items, itemsPerPage }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [shownItems, setShownItems] = useState(items);

  const initPageNumber = () => {
    const page = searchParams.get('page');
    if (!page) setSearchParams({ page: '1' });
  };

  const getShownItems = (allItems, pageNumber) => {
    const showToIndex = itemsPerPage * pageNumber;
    const showFromIndex = showToIndex - itemsPerPage;
    return allItems.slice(showFromIndex, showToIndex);
  };

  useEffect(() => {
    initPageNumber();
  });

  useEffect(() => {
    const page = parseInt(searchParams.get('page'), 10);
    setShownItems(getShownItems(items, page));
  }, [items, searchParams]);

  return shownItems.length ? <ScheduleList items={shownItems} /> : <span>Not found</span>;
}

Schedule.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Schedule;
