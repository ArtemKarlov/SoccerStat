import React from 'react';
import PropTypes from 'prop-types';

import GridWrapper from '../../components/GridWrapper';
import League from './League';

function LeagueList(props) {
  const { leagues } = props;

  return (
    <GridWrapper cols="3">
      {leagues.map((league) => (
        <League key={league.id} id={league.id} name={league.name} country={league.area.name} />
      ))}
    </GridWrapper>
  );
}

LeagueList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  leagues: PropTypes.array.isRequired,
};

export default LeagueList;
