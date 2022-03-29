import styled from 'styled-components';

const ScheduleTable = styled.div`
  display: flex;
  flex-direction: column;

  & > div:nth-child(odd) {
    background-color: var(--color-bg-primary);
  }

  & > div:nth-child(even) {
    background-color: var(--color-bg-secondary);
  }
`;

export default ScheduleTable;
