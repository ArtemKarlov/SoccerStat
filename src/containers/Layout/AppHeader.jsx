import React from 'react';
// import PropTypes from 'prop-types';

import Header from '../../components/Header';
import Container from '../../components/Container';
import FlexWrapper from '../../components/FlexWrapper';
import Nav from '../../components/Nav';
import HeaderLink from '../../components/HeaderLink';
import Img from '../../components/Img';
import List from '../../components/List';
import ListItem from '../../components/ListItem';
import BaseLink from '../../components/BaseLink';

import logo from '../../images/ball.png';

function AppHeader() {
  return (
    <Header>
      <Container>
        <FlexWrapper>
          <BaseLink to="/">
            <Img width={60} height={60} src={logo} />
          </BaseLink>
          <Nav>
            <List>
              <ListItem>
                <HeaderLink to="/competitions">Leagues</HeaderLink>
              </ListItem>
              <ListItem>
                <HeaderLink to="/teams">Teams</HeaderLink>
              </ListItem>
            </List>
          </Nav>
        </FlexWrapper>
      </Container>
    </Header>
  );
}

// Header.propTypes = {
//   // eslint-disable-next-line react/forbid-prop-types
//   leagues: PropTypes.array.isRequired,
// };

export default AppHeader;
