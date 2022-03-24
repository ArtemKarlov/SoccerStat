import React from 'react';
import PropTypes from 'prop-types';

import Container from '../../components/Container';
import Main from '../../components/Main';

function AppMain({ children }) {
  return (
    <Main>
      <Container>{children}</Container>
    </Main>
  );
}

AppMain.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppMain;
