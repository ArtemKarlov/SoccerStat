import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

// import BaseLink from '../../components/BaseLink';
import Card from '../../components/Card';
import CardTitle from '../../components/CardTitle';
import CardText from '../../components/CardText';

function LeagueCard(props) {
  const { id, name, country } = props;

  const navigate = useNavigate();

  return (
    // <BaseLink to={`${id}`}>
    <Card
      onClick={() => {
        navigate(`${id}/matches`);
      }}
    >
      <CardTitle>{name}</CardTitle>
      <CardText>{country}</CardText>
    </Card>
    // </BaseLink>
  );
}

LeagueCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default LeagueCard;
