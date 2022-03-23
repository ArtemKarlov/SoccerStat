import styled from 'styled-components';

const Input = styled.input`
  margin: 0;
  padding: 0.25em 1em;
  border: 2px solid
    ${(props) => (props.secondary ? 'var(--color-text-secondary)' : 'var(--color-text-primary)')};
  border-radius: 3px;
  background-color: var(--color-bg);
  outline: none;

  color: var(--color-text-primary);
  font-size: 1em;
`;

export default Input;
