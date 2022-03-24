import React from 'react';
import PropTypes from 'prop-types';

import GridWrapper from '../../components/GridWrapper';
import CardItem from './CardItem';

function CardsList(props) {
  const { items, resource } = props;

  return (
    <GridWrapper cols={resource === 'competitions' ? '3' : '4'}>
      {items.map((item) => (
        <CardItem key={item.id} resource={resource} item={item} />
      ))}
    </GridWrapper>
  );
}

CardsList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  items: PropTypes.array.isRequired,
  resource: PropTypes.string.isRequired,
};

export default CardsList;
