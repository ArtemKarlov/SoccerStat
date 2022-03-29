/* eslint-disable react/prop-types */
import React from 'react';
import LeagueCard from '../Leagues';
import TeamCard from '../Teams';

function CardsItem({ item, resource }) {
  return resource === 'competitions' ? (
    <LeagueCard id={item.id} name={item.name} country={item.area.name} />
  ) : (
    <TeamCard id={item.id} name={item.name} image={item.crestUrl} />
  );
}

export default CardsItem;
