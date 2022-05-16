import styled, { css } from 'styled-components';

const ScheduleElement = styled.div`
  text-align: center;
  color: var(--color-text-primary);
  font-weight: var(--fw-normal);
  font-size: var(--fs-sm);

  ${(props) =>
    props.teams &&
    css`
      display: grid;
      grid-template-columns: 1fr 15px 1fr;
      column-gap: 10px;
      justify-items: center;

      & > span:first-child {
        justify-self: end;
      }

      & > span:last-child {
        justify-self: start;
      }
    `}

  ${(props) =>
    props.score &&
    css`
      display: grid;
      grid-template-columns: repeat(3, 50px);
      column-gap: 5px;
      justify-items: center;
      justify-content: center;
    `}

  @media screen and (min-width: 767px) {
    font-size: var(--fs-sm);
  }
  @media screen and (min-width: 1024px) {
    font-size: var(--fs-sm);
  }
`;

export default ScheduleElement;
