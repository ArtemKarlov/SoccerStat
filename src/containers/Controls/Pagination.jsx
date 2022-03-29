import React from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';

import List from '../../components/List';
import ListItem from '../../components/ListItem';
import PaginationLink from '../../components/PaginationLink';
import FlexWrapper from '../../components/FlexWrapper';

const getArrayN = (n) => {
  const arr = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < n; i++) {
    arr.push(i + 1);
  }
  return arr;
};

function Pagination({ length }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const paginationArray = getArrayN(length);
  const pageNumber = parseInt(searchParams.get('page') || '0', 10);

  const handlePaginate = (item) => {
    setSearchParams({ page: item });
  };

  return (
    <FlexWrapper justify="center">
      <List>
        {paginationArray.map((item) => (
          <ListItem key={item}>
            <PaginationLink
              as="button"
              active={item === pageNumber}
              onClick={() => handlePaginate(item)}
            >
              {item}
            </PaginationLink>
          </ListItem>
        ))}
      </List>
    </FlexWrapper>
  );
}

Pagination.propTypes = {
  length: PropTypes.number.isRequired,
};

export default Pagination;
