import styled, { css } from 'styled-components';

const Card = styled.article`
  position: relative;
  padding: 30px;
  width: 100%;
  height: 100%;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  color: var(--color-text-secondary);
  background-color: var(--color-bg-secondary);
  border-radius: 5px;
  box-shadow: none;
  cursor: pointer;
  transition: box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    box-shadow: var(--shadow-secondary);
    transform: scale(1.01);
  }

  ${(props) =>
    props.bg &&
    css`
      background-image: url('${props.bg}');
      background-position: left 2% bottom 3%;
      background-repeat: no-repeat;
      background-size: 30%;
    `}
`;

export default Card;
