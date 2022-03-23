import React from 'react';
import PropTypes from 'prop-types';

import Link from '../../components/Link';
import Card from '../../components/Card';
import CardTitle from '../../components/CardTitle';
import CardText from '../../components/CardText';

function League(props) {
  const { id, name, country } = props;

  return (
    <Link href={`/${id}`}>
      <Card>
        <CardTitle>{name}</CardTitle>
        <CardText>{country}</CardText>
      </Card>
    </Link>
  );
}

League.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default League;
