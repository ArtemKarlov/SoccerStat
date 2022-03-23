import React from 'react';
import PropTypes from 'prop-types';

import List from '../components/List';
import ListItem from '../components/ListItem';
import PaginationLink from '../components/PaginationLink';
import FlexWrapper from '../components/FlexWrapper';

const getArrayN = (n) => {
  const arr = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < n; i++) {
    arr.push(i + 1);
  }
  return arr;
};

function Pagination({ length, pageNumber, paginate }) {
  const paginationArray = getArrayN(length);

  return (
    <FlexWrapper justify="center">
      <List>
        {paginationArray.map((item) => (
          <ListItem key={item}>
            <PaginationLink active={item === pageNumber} href="#" onClick={() => paginate(item)}>
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
  pageNumber: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default Pagination;
