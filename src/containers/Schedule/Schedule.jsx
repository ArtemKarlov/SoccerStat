import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ScheduleList from './ScheduleList';

function Schedule({ items, itemsPerPage, pageNumber }) {
  const [shownItems, setShownItems] = useState(items);

  const getShownItems = (allItems, pageNum) => {
    const showToIndex = itemsPerPage * pageNum;
    const showFromIndex = showToIndex - itemsPerPage;
    return allItems.slice(showFromIndex, showToIndex);
  };

  useEffect(() => {
    setShownItems(getShownItems(items, pageNumber));
  }, [items, pageNumber]);

  return shownItems.length ? <ScheduleList items={shownItems} /> : <span>Not found</span>;
}

Schedule.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageNumber: PropTypes.number.isRequired,
};

export default Schedule;
