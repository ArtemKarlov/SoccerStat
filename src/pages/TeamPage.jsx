import React from 'react';

import { useParams } from 'react-router-dom';

function TeamPage() {
  const { id } = useParams();
  return <h1>Team {id}</h1>;
}

export default TeamPage;
