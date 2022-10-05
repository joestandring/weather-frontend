import React from 'react';
import { Input, Row, Typography } from 'antd';

const { Search } = Input;
const { Text } = Typography;

/**
 * Search bar and weather icon for getting weather data
 *
 * @component
 */
function SearchGroup() {
  return (
    <div className="search-group">
      <Row type="flex" justify="center">
        <img
          src="https://openweathermap.org/img/wn/11d@4x.png"
          alt="Weather icon"
        />
      </Row>
      <Row type="flex" className="search-bar">
        <Search enterButton placeholder="Peterborough, UK" />
      </Row>
      <Row justify="center">
        <Text className="search-description">Input a city to see the current weather where you live.</Text>
      </Row>
    </div>
  );
}

export default SearchGroup;
