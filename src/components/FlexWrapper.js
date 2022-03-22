import styled from 'styled-components';

const FlexWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${(props) => {
    switch (props.justify) {
      case 'center':
        return 'center';
      case 'right':
        return 'flex-end';
      default:
        return 'flex-start';
    }
  }};
  align-items: center;
`;

export default FlexWrapper;
