import styled from 'styled-components';

const WeightedText = styled.span`
  font-weight: ${(props) => (props.isBold ? 'var(--fw-bold)' : 'var(--fw-norma)')};
`;

export default WeightedText;
