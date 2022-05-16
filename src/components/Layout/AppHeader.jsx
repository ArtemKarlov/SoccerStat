import React from 'react';

import Header from '../../styledComponents/Header';
import Container from '../../styledComponents/Container';
import FlexWrapper from '../../styledComponents/FlexWrapper';
import Nav from '../../styledComponents/Nav';
import HeaderLink from '../../styledComponents/HeaderLink';
import Img from '../../styledComponents/Img';
import List from '../../styledComponents/List';
import ListItem from '../../styledComponents/ListItem';
import BaseLink from '../../styledComponents/BaseLink';

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

export default AppHeader;
