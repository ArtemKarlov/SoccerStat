/* eslint-disable react/prop-types */
import React from 'react';

import ScheduleRow from '../../components/ScheduleRow';
import ScheduleElement from '../../components/ScheduleElement';

import { API_DICTIONARY } from '../../config';

function ScheduleItem({ item }) {
  const { utcDate, status, score, homeTeam, awayTeam } = item;

  const { matchStatus } = API_DICTIONARY;

  const dateOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  const date = new Date(utcDate);

  const getMatchScore = () => {
    const { duration, fullTime, extraTime, penalties } = score;
    const regularScore = `${fullTime.homeTeam}:${fullTime.awayTeam}`;
    const extraScore =
      duration === 'EXTRA_TIME' ? `(${extraTime.homeTeam}:${extraTime.awayTeam})` : '';
    const penaltiesScore =
      duration === 'PENALTY_SHOOTOUT' ? `(${penalties.homeTeam}:${penalties.awayTeam})` : '';
    return regularScore + extraScore + penaltiesScore;
  };

  const matchTeams = `${homeTeam.name} - ${awayTeam.name}`;
  const matchScore = getMatchScore();

  return (
    <ScheduleRow>
      <ScheduleElement>{date.toLocaleString('ru-RU', dateOptions)}</ScheduleElement>
      <ScheduleElement>{matchStatus[status]}</ScheduleElement>
      <ScheduleElement>{matchTeams}</ScheduleElement>
      <ScheduleElement>{status === 'FINISHED' && matchScore}</ScheduleElement>
    </ScheduleRow>
  );
}

export default ScheduleItem;
