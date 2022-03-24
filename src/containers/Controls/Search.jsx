import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../../components/Input';

function Search({ onSearch }) {
  const [search, setSearch] = useState('');

  useEffect(() => {
    onSearch(search);
  }, [search]);

  return <Input onChange={(e) => setSearch(e.target.value)} value={search} />;
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;
