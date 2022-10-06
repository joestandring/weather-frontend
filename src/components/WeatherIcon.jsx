import React from 'react';

/**
 * A dynamic weather icon which changes depending on forecast
 *
 * @component
 * @param {string} weatherIcon - icon reference
 * @returns Image
 */
function WeatherIcon({ weatherIcon }) {
  return (
    <img
      src={`https://openweathermap.org/img/wn/${weatherIcon}@4x.png`}
      alt="Weather icon"
    />
  );
}

export default WeatherIcon;
