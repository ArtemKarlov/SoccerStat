import React, { useCallback, useEffect, useState } from 'react';
import { useParams, useLocation, useSearchParams } from 'react-router-dom';

import { Pagination } from '../containers/Controls';
import DateFilter from '../containers/Controls/DateFilter';
import Schedule from '../containers/Schedule/Schedule';

import { fetchMatches } from '../utils/fetchData';

function SchedulePage() {
  const { id } = useParams();
  const location = useLocation();
  const [matches, setMatches] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [pageNumber, setPageNumber] = useState(1);
  const [itemsPerPage] = useState(12);
  const [paginationLength, setPaginationLength] = useState(0);

  const getDateParams = () => {
    const dateFrom = searchParams.has('dateFrom') ? searchParams.get('dateFrom') : '';
    const dateTo = searchParams.has('dateTo') ? searchParams.get('dateTo') : '';
    return { dateFrom, dateTo };
  };

  const getData = useCallback(async () => {
    const { dateFrom, dateTo } = getDateParams();
    const params = dateFrom && dateTo ? { dateFrom, dateTo } : {};
    const data = await fetchMatches(location.pathname, params);
    setMatches(data.matches);
  });

  const handleDataSet = (params) => {
    setSearchParams(params);
    setPageNumber(1);
  };

  const getPaginationLength = () => Math.ceil(matches.length / itemsPerPage);

  useEffect(() => {
    getData();
  }, [searchParams]);

  useEffect(() => {
    setPaginationLength(getPaginationLength());
  }, [matches]);

  return (
    <>
      <h1>{id}</h1>
      <DateFilter values={getDateParams()} onDateSet={handleDataSet} />
      {matches.length ? (
        <>
          <Schedule items={matches} itemsPerPage={itemsPerPage} pageNumber={pageNumber} />
          <Pagination
            length={paginationLength}
            pageNumber={pageNumber}
            onPaginate={setPageNumber}
          />
        </>
      ) : (
        <span>loading...</span>
      )}
    </>
  );
}

export default SchedulePage;
