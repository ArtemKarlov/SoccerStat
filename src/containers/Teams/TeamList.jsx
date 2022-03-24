import React from 'react';
import PropTypes from 'prop-types';

import GridWrapper from '../../components/GridWrapper';
import Team from './Team';

function TeamList(props) {
  const { items } = props;

  return (
    <GridWrapper cols="4">
      {items.map((item) => (
        <Team key={item.id} id={item.id} name={item.name} image={item.crestUrl} />
      ))}
    </GridWrapper>
  );
}

TeamList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.array.isRequired,
};

export default TeamList;
