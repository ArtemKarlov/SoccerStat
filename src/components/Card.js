import styled from 'styled-components';

const Card = styled.article`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  color: var(--color-text-primary);
  background-color: var(--color-bg-primary);
  border-radius: 5px;
  box-shadow: none;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: var(--shadow-primary);
    transform: scale(1.02);
  }
`;

export default Card;
