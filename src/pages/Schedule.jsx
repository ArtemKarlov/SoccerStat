import React from 'react';

import { useParams } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Schedule() {
  const { id } = useParams();
  return <h1>{id}</h1>;
}

export default Schedule;
