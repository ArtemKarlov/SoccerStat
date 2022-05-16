import styled from 'styled-components';

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  & > div:last-child {
    margin-top: auto;
  }
`;

export default MainWrapper;
