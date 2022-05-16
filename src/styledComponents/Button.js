import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) =>
    props.secondary ? 'var(--color-bg-secondary)' : 'var(--color-bg-primary)'};
  color: ${(props) =>
    props.secondary ? 'var(--color-text-secondary)' : 'var(--color-text-primary)'};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid
    ${(props) => (props.secondary ? 'var(--color-text-secondary)' : 'var(--color-text-primary)')};
  border-radius: 3px;

  cursor: pointer;
  outline: none;
`;

export default Button;
