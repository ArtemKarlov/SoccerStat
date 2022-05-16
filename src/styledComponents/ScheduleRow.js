import styled, { css } from 'styled-components';

const ScheduleRow = styled.div`
  padding: 15px 0;
  display: grid;
  grid-template-columns: 100%;
  align-content: start;
  column-gap: 10px;
  row-gap: 10px;
  justify-content: center;
  justify-items: stretch;
  align-items: center;
  border-radius: 5px;
  background-color: var(--color-bg-secondary);

  ${(props) =>
    props.header &&
    css`
      margin-bottom: 15px;
      background-color: var(--color-bg-primary);
      & div {
        font-weight: var(--fw-bold);
      }
      & > div:last-child > div:first-child {
        margin-bottom: 8px;
      }
    `}

  @media screen and (min-width: 767px) {
    grid-template-columns: minmax(200px, 1fr) 100px;
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: 200px 100px minmax(200px, 1fr) 200px;
  }
`;

export default ScheduleRow;
