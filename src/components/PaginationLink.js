import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const PaginationLink = styled(Link)`
  display: block;
  position: relative;
  width: 30px;
  padding: 0 5px;
  line-height: 30px;
  text-align: center;
  color: inherit;
  text-decoration: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;

  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
  color: var(--color-text-primary);

  &:hover {
    background-color: var(--color-bg-primary);
    color: var(--color-text-primary);
  }

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-bg-secondary);
      color: var(--color-text-secondary);
    `}
`;

export default PaginationLink;
