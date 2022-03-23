import styled, { css } from 'styled-components';

import Link from './Link';

const PaginationLink = styled(Link)`
  display: block;
  position: relative;
  width: 30px;
  padding: 0 5px;
  line-height: 30px;
  text-align: center;

  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
  color: var(--color-text-primary);

  &:hover {
    background-color: var(--color-bg-secondary);
    color: var(--color-text-secondary);
  }

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-bg-secondary);
      color: var(--color-text-secondary);
    `}
`;

export default PaginationLink;
