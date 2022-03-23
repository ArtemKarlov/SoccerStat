import styled from 'styled-components';

const Img = styled.img`
  display: block;
  width: ${(props) => props.width && `${props.width}px`};
  height: ${(props) => props.height && `${props.height}px`};
`;

export default Img;
