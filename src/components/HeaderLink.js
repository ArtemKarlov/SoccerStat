import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderLink = styled(NavLink)`
  display: block;
  position: relative;
  width: 100px;
  padding: 0 10px;
  line-height: 60px;
  text-align: center;
  color: inherit;
  text-decoration: none;
  outline: none;
  border: none;

  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
  color: var(--color-text-primary);

  &:hover {
    background-color: var(--color-bg-secondary);
    color: var(--color-text-secondary);
  }

  &.active::after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background-color: var(--color-text-primary);
  }
`;

export default HeaderLink;
