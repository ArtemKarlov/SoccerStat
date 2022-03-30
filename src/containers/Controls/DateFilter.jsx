/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Input from '../../components/Input';

function DateFilter({ onDateSet, values }) {
  const [dateFrom, setDateFrom] = useState(values.dateFrom);
  const [dateTo, setDateTo] = useState(values.dateTo);
  const [emptyField, setEmptyField] = useState('');

  const onDateSelect = (event) => {
    const { name, value } = event.target;
    if (name === 'dateFrom') {
      setDateFrom(value);
    } else {
      setDateTo(value);
    }
  };

  const handleDateFilter = () => {
    if (dateFrom && !dateTo) setEmptyField('dateTo');
    else if (!dateFrom && dateTo) setEmptyField('dateFrom');
    else setEmptyField('');

    if (dateFrom && dateTo) {
      onDateSet({ dateFrom, dateTo });
    } else if (!dateFrom && !dateTo) {
      onDateSet({});
    }
  };

  useEffect(() => {
    handleDateFilter();
  }, [dateFrom, dateTo]);

  return (
    <>
      <Input
        type="date"
        name="dateFrom"
        max={dateTo}
        onChange={onDateSelect}
        value={dateFrom}
        isError={emptyField === 'dateFrom'}
      />
      <Input
        type="date"
        name="dateTo"
        min={dateFrom}
        onChange={onDateSelect}
        value={dateTo}
        isError={emptyField === 'dateTo'}
      />
    </>
  );
}

DateFilter.propTypes = {
  onDateSet: PropTypes.func.isRequired,
};

export default DateFilter;
