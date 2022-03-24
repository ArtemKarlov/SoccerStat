import React from 'react';
import PropTypes from 'prop-types';
// import { useNavigate } from 'react-router-dom';

import BaseLink from '../../components/BaseLink';
import Card from '../../components/Card';
import CardTitle from '../../components/CardTitle';
import CardText from '../../components/CardText';

function League(props) {
  const { id, name, country } = props;

  // const navigate = useNavigate();

  return (
    <BaseLink to={`${id}`}>
      <Card
      // onClick={() => {navigate(`${id}`);}}
      >
        <CardTitle>{name}</CardTitle>
        <CardText>{country}</CardText>
      </Card>
    </BaseLink>
  );
}

League.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default League;
