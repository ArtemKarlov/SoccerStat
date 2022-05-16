import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import WeightedText from '../../styledComponents/WeightedText';

function ScheduleTeams({ homeTeam, awayTeam }) {
  const { id } = useParams();
  const isHome = homeTeam.id === parseInt(id, 10);
  const isAway = awayTeam.id === parseInt(id, 10);

  return (
    <>
      <WeightedText isBold={isHome}>{homeTeam.name}</WeightedText>
      {' - '}
      <WeightedText isBold={isAway}>{awayTeam.name}</WeightedText>
    </>
  );
}

ScheduleTeams.propTypes = {
  homeTeam: PropTypes.shape({ id: PropTypes.number, name: PropTypes.string }).isRequired,
  awayTeam: PropTypes.shape({ id: PropTypes.number, name: PropTypes.string }).isRequired,
};

export default ScheduleTeams;
