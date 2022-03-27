import React from 'react';

import { useParams } from 'react-router-dom';

function League() {
  const { id } = useParams();
  return <h1>League {id}</h1>;
}

export default League;
