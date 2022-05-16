/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

import ScheduleRow from '../../styledComponents/ScheduleRow';
import ScheduleElement from '../../styledComponents/ScheduleElement';
import ScheduleTeams from './ScheduleTeams';
import ScheduleScore from './ScheduleScore';

import { API_DICTIONARY } from '../../config';

function ScheduleItem({ item }) {
  const { utcDate, status, score, homeTeam, awayTeam } = item;

  const { matchStatus } = API_DICTIONARY;

  const dateOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };
  const timeOptions = {
    hour: '2-digit',
    minute: '2-digit',
  };
  const date = new Date(utcDate);
  const matchDate = `
    ${date.toLocaleDateString('ru-RU', dateOptions)} 
    ${date.toLocaleTimeString('ru-RU', timeOptions)}
  `;

  return (
    <ScheduleRow>
      <ScheduleElement>{matchDate}</ScheduleElement>
      <ScheduleElement>{matchStatus[status]}</ScheduleElement>
      <ScheduleElement teams>
        <ScheduleTeams homeTeam={homeTeam} awayTeam={awayTeam} />
      </ScheduleElement>
      {status === 'FINISHED' ? (
        <ScheduleElement score>
          <ScheduleScore score={score} homeTeam={homeTeam} awayTeam={awayTeam} />
        </ScheduleElement>
      ) : (
        <ScheduleElement>- : -</ScheduleElement>
      )}
    </ScheduleRow>
  );
}

ScheduleItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
};

export default ScheduleItem;
