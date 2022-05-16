import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../../styledComponents/Input';
import ControlsWrapper from '../../styledComponents/ControlsWrapper';

function Search({ onSearch }) {
  const [search, setSearch] = useState('');

  useEffect(() => {
    onSearch(search);
  }, [search]);

  return (
    <ControlsWrapper>
      <Input onChange={(e) => setSearch(e.target.value)} value={search} />
    </ControlsWrapper>
  );
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;
