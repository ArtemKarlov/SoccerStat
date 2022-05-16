import React from 'react';
import PropTypes from 'prop-types';

import ScheduleTable from '../../styledComponents/ScheduleTable';
import ScheduleItem from './ScheduleItem';
import ScheduleHeader from './ScheduleHeader';

function ScheduleList({ items }) {
  return (
    <>
      <ScheduleHeader />
      <ScheduleTable>
        {items.map((item) => (
          <ScheduleItem key={item.id} item={item} />
        ))}
      </ScheduleTable>
    </>
  );
}

ScheduleList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ScheduleList;
