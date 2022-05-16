import styled from 'styled-components';

const Container = styled.div`
  margin: 0 auto;
  padding: 0 30px;
  width: 100%;
  height: 100%;
  min-width: 300px;

  @media screen and (min-width: 767px) {
    max-width: 600px;
  }
  @media screen and (min-width: 1024px) {
    max-width: 1200px;
  }
`;

export default Container;
