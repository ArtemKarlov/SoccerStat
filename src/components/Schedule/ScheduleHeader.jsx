/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

import ScheduleRow from '../../styledComponents/ScheduleRow';
import ScheduleElement from '../../styledComponents/ScheduleElement';

function ScheduleHeader() {
  return (
    <ScheduleRow header>
      <ScheduleElement>Дата</ScheduleElement>
      <ScheduleElement>Статус</ScheduleElement>
      <ScheduleElement>Команды</ScheduleElement>
      <ScheduleElement>
        <ScheduleElement>Счет</ScheduleElement>
        <ScheduleElement score>
          <span>ОВ</span>
          <span>ДВ</span>
          <span>П</span>
        </ScheduleElement>
      </ScheduleElement>
    </ScheduleRow>
  );
}

export default ScheduleHeader;
