import React from 'react';
import { Space, Typography } from 'antd';

const { Text } = Typography;

function WeatherDescription({ weatherData }) {
  if (!weatherData) {
    return (
      <Text className="search-description">Input a city to see the current weather where you live.</Text>
    );
  }
  return (
    <Space direction="vertical" className="weather-description-container">
      <Text className="weather-description">
        <span>It is currently </span>
        <span className="highlight">{`${weatherData.temp}°C`}</span>
        <span> in </span>
        <span className="highlight">
          {`${weatherData.name}, ${weatherData.country}`}
        </span>
        <span> with a high of </span>
        <span className="highlight">{`${weatherData.maxTemp}°C`}</span>
        <span> and a low of </span>
        <span className="highlight">{`${weatherData.minTemp}°C`}</span>
        <span>.</span>
      </Text>
      <Text className="weather-description">
        <span>Weather conditions are described as &quot;</span>
        <span className="highlight">{weatherData.description}</span>
        <span>&quot;.</span>
      </Text>
      <Text className="weather-description">
        <span>Pressure is </span>
        <span className="highlight">{`${weatherData.pressure}hPa`}</span>
        <span> and humidity is </span>
        <span className="highlight">{`${weatherData.humidity}%`}</span>
        <span>.</span>
      </Text>
      <Text className="weather-description">
        <span>The sun will rise at </span>
        <span className="highlight">{weatherData.sunrise}</span>
        <span> and set at </span>
        <span className="highlight">{weatherData.sunset}</span>
        <span>.</span>
      </Text>
    </Space>
  );
}

export default WeatherDescription;
