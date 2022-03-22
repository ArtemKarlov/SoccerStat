import React from 'react';
import Button from './components/Button';
import Container from './components/Container';
import Main from './components/Main';
import Header from './components/Header';
import Img from './components/Img';
import Card from './components/Card';
import Link from './components/Link';
import List from './components/List';
import ListItem from './components/ListItem';
import Nav from './components/Navigation';
import FlexWrapper from './components/FlexWrapper';
import GridWrapper from './components/GridWrapper';
import CardTitle from './components/CardTitle';
import CardText from './components/CardText';
import Footer from './components/Footer';

function App() {
  return (
    <div id="app">
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
                <ListItem>test</ListItem>
                <ListItem>test</ListItem>
              </List>
            </Nav>
          </FlexWrapper>
        </Container>
      </Header>
      <Main>
        <Container>
          <h1>Hello</h1>
          <Button
            onClick={() => {
              console.log('click');
            }}
          >
            butвton
          </Button>
          <Button
            secondary
            onClick={() => {
              console.log('click');
            }}
          >
            butвton
          </Button>
          <GridWrapper cols="3">
            <Link href="/">
              <Card>
                <CardTitle>League</CardTitle>
                <CardText>CardText</CardText>
              </Card>
            </Link>
            <Link href="/">
              <Card>
                <CardTitle>League</CardTitle>
                <CardText>CardText</CardText>
              </Card>
            </Link>
            <Link href="/">
              <Card>
                <CardTitle>League</CardTitle>
                <CardText>CardText</CardText>
              </Card>
            </Link>
            <Link href="/">
              <Card>
                <CardTitle>League</CardTitle>
                <CardText>CardText</CardText>
              </Card>
            </Link>
            <Link href="/">
              <Card>
                <CardTitle>League</CardTitle>
                <CardText>CardText</CardText>
              </Card>
            </Link>
            <Link href="/">
              <Card>
                <CardTitle>League</CardTitle>
                <CardText>CardText</CardText>
              </Card>
            </Link>
            <Link href="/">
              <Card>
                <CardTitle>League</CardTitle>
                <CardText>CardText</CardText>
              </Card>
            </Link>
            <Link href="/">
              <Card>
                <CardTitle>League</CardTitle>
                <CardText>CardText</CardText>
              </Card>
            </Link>
            <Link href="/">
              <Card>
                <CardTitle>League</CardTitle>
                <CardText>CardText</CardText>
              </Card>
            </Link>
          </GridWrapper>
        </Container>
      </Main>
      <Footer>Footer</Footer>
    </div>
  );
}

export default App;
