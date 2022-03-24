import React from 'react';
import PropTypes from 'prop-types';

import GridWrapper from '../../components/GridWrapper';
import League from './League';

function LeagueList(props) {
  const { items } = props;

  return (
    <GridWrapper cols="3">
      {items.map((item) => (
        <League key={item.id} id={item.id} name={item.name} country={item.area.name} />
      ))}
    </GridWrapper>
  );
}

LeagueList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.array.isRequired,
};

export default LeagueList;
