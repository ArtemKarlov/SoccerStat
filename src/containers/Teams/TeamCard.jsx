import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

// import BaseLink from '../../components/BaseLink';
import Card from '../../components/Card';
import CardTitle from '../../components/CardTitle';
import Img from '../../components/Img';

function TeamCard(props) {
  const { id, name, image } = props;

  const navigate = useNavigate();

  return (
    // <BaseLink to={`${id}`}>
    <Card
      onClick={() => {
        navigate(`${id}/matches`);
      }}
    >
      <CardTitle>{name}</CardTitle>
      <Img width={70} height={70} src={image} />
    </Card>
    // </BaseLink>
  );
}

TeamCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default TeamCard;
