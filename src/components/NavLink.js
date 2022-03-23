import styled, { css } from 'styled-components';

import Link from './Link';

const NavLink = styled(Link)`
  display: block;
  position: relative;
  width: 100px;
  padding: 0 10px;
  line-height: 70px;
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
      &::after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 4px;
        background-color: var(--color-text-primary);
      }
    `}
`;

export default NavLink;
