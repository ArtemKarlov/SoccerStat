import styled from 'styled-components';

const GridWrapper = styled.div`
  width: 100%;
  padding: 30px;
  display: grid;
  grid-template-columns: 100%;
  align-content: start;
  gap: 30px;

  @media screen and (min-width: 767px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(${(props) => props.cols || '4'}, 1fr);
  }
`;

export default GridWrapper;
