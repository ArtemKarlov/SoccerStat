/* eslint-disable react/prop-types */
import React from 'react';

import ScheduleTable from '../../components/ScheduleTable';
import ScheduleItem from './ScheduleItem';

function ScheduleList({ items }) {
  return (
    <ScheduleTable>
      {items.map((item) => (
        <ScheduleItem key={item.id} item={item} />
      ))}
    </ScheduleTable>
  );
}

export default ScheduleList;
