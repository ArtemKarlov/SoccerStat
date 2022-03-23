import styled from 'styled-components';

const FlexWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  justify-content: ${(props) => {
    switch (props.justify) {
      case 'center':
        return 'center';
      case 'right':
        return 'flex-end';
      case 'between':
        return 'space-between';
      default:
        return 'flex-start';
    }
  }};
  align-items: center;
  gap: 40px;
`;

export default FlexWrapper;
