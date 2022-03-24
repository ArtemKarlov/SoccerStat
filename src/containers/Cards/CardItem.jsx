/* eslint-disable react/prop-types */
import React from 'react';
import League from '../Leagues/League';
import Team from '../Teams/Team';

function CardItem({ item, resource }) {
  return resource === 'competitions' ? (
    <League id={item.id} name={item.name} country={item.area.name} />
  ) : (
    <Team id={item.id} name={item.name} image={item.crestUrl} />
  );
}

export default CardItem;
