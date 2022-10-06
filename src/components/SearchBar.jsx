import React, { useState } from 'react';
import { Input, message } from 'antd';
import axios from 'axios';
import config from '../config.json';

const { Search } = Input;

/**
 * Search bar for fetching weather data via provided input
 *
 * @param {object} setWeatherData - Weather data object
 * @component
 */
function SearchBar({ setWeatherData }) {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Requests weather data on API using input search string
   */
  function handleSearch() {
    setIsLoading(true);

    axios.get(`${config.api_url}/Weather?query=${query}`)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        message.error(error.response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <Search
      loading={isLoading}
      enterButton
      placeholder="Peterborough, UK"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onSearch={() => handleSearch()}
    />
  );
}

export default SearchBar;
