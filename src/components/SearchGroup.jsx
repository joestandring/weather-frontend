import React, { useState } from 'react';
import {
  Input,
  message,
  Row,
  Typography,
} from 'antd';
import axios from 'axios';
import config from '../config.json';

const { Search } = Input;
const { Text } = Typography;

/**
 * Search bar and weather icon for getting weather data
 *
 * @component
 */
function SearchGroup({ setWeatherData }) {
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
    <div className="search-group">
      <Row type="flex" justify="center">
        <img
          src="https://openweathermap.org/img/wn/11d@4x.png"
          alt="Weather icon"
        />
      </Row>
      <Row type="flex" className="search-bar">
        <Search
          loading={isLoading}
          enterButton
          placeholder="Peterborough, UK"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onSearch={() => handleSearch()}
        />
      </Row>
      <Row justify="center">
        <Text className="search-description">Input a city to see the current weather where you live.</Text>
      </Row>
    </div>
  );
}

export default SearchGroup;
