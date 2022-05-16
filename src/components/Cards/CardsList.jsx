import React from 'react';
import PropTypes from 'prop-types';

import GridWrapper from '../../styledComponents/GridWrapper';
import CardsItem from './CardsItem';

function CardsList(props) {
  const { items, resource } = props;

  return (
    <GridWrapper cols={resource === 'competitions' ? '3' : '4'}>
      {items.map((item) => (
        <CardsItem key={item.id} resource={resource} item={item} />
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
