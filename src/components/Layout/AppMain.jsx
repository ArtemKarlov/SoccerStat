import React from 'react';
import PropTypes from 'prop-types';

import Container from '../../styledComponents/Container';
import Main from '../../styledComponents/Main';
import MainWrapper from '../../styledComponents/MainWrapper';

function AppMain({ children }) {
  return (
    <Main>
      <Container>
        <MainWrapper column>{children}</MainWrapper>
      </Container>
    </Main>
  );
}

AppMain.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppMain;
