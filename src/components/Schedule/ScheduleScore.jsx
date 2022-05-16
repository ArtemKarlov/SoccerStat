/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import WeightedText from '../../styledComponents/WeightedText';

function ScheduleScore({ score, homeTeam, awayTeam }) {
  const { id } = useParams();
  const isHome = homeTeam.id === parseInt(id, 10);
  const isAway = awayTeam.id === parseInt(id, 10);
  const { duration, fullTime, extraTime, penalties } = score;

  return (
    <>
      <div>
        <WeightedText isBold={isHome}>{fullTime.homeTeam}</WeightedText>
        {' : '}
        <WeightedText isBold={isAway}>{fullTime.awayTeam}</WeightedText>
      </div>
      {duration === 'EXTRA_TIME' && (
        <div>
          (<WeightedText isBold={isHome}>{extraTime.homeTeam}</WeightedText>
          {' : '}
          <WeightedText isBold={isAway}>{extraTime.awayTeam}</WeightedText>)
        </div>
      )}
      {duration === 'PENALTY_SHOOTOUT' && (
        <div>
          (<WeightedText isBold={isHome}>{penalties.homeTeam}</WeightedText>
          {' : '}
          <WeightedText isBold={isAway}>{penalties.awayTeam}</WeightedText>)
        </div>
      )}
    </>
  );
}

ScheduleScore.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  score: PropTypes.object.isRequired,
  homeTeam: PropTypes.objectOf({ id: PropTypes.number, name: PropTypes.string }).isRequired,
  awayTeam: PropTypes.objectOf({ id: PropTypes.number, name: PropTypes.string }).isRequired,
};

export default ScheduleScore;
