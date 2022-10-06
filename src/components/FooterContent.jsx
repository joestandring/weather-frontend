import React from 'react';
import { Typography } from 'antd';

const { Text } = Typography;

/**
 * Information displayed on the page footer
 *
 * @component
 */
function FooterContent() {
  return (
    <Text>
      Made with
      <a href="https://openweathermap.org/"> OpenWeatherMap </a>
      | Photos from
      <a href="https://unsplash.com/"> Unsplash</a>
    </Text>
  );
}

export default FooterContent;
