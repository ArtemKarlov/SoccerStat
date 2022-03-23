import React from 'react';
// import PropTypes from 'prop-types';

import Header from '../../components/Header';
import Container from '../../components/Container';
import FlexWrapper from '../../components/FlexWrapper';
import Nav from '../../components/Nav';
import NavLink from '../../components/NavLink';
import Img from '../../components/Img';
import List from '../../components/List';
import ListItem from '../../components/ListItem';

function AppHeader() {
  return (
    <Header>
      <Container>
        <FlexWrapper>
          <Img
            width={40}
            height={40}
            src="https://www.diekaes.de/wp-content/uploads/2018/01/logo-placeholder.png"
          />
          <Nav>
            <List>
              <ListItem>
                <NavLink href="/leagues" active>
                  Leagues
                </NavLink>
              </ListItem>
              <ListItem>
                <NavLink href="/teams">Teams</NavLink>
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
