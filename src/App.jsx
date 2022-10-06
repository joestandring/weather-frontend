import React, { useState } from 'react';
import { Layout, Row } from 'antd';
import './style/theme.css';
import SearchBar from './components/SearchBar';
import FooterContent from './components/FooterContent';
import WeatherIcon from './components/WeatherIcon';
import WeatherDescription from './components/WeatherDescription';

const { Content, Footer } = Layout;

/**
 * Main app component
 *
 * @component
 */
function App() {
  const [weatherData, setWeatherData] = useState(null);

  /**
   * Gets a background image from weather condition code
   *
   * @returns class name for backgound
   */
  function backgound() {
    if (!weatherData) return 'bg-clouds';
    switch (weatherData.id.toString().charAt(0)) {
      case '6':
        return 'bg-snow';
      case '8':
        return 'bg-clouds';
      default:
        return 'bg-clouds';
    }
  }

  return (
    <Layout className={`layout ${backgound()}`}>
      <Content className="content">
        <div className="container">
          <Row className="weather-icon">
            <WeatherIcon weatherIcon={weatherData ? weatherData.icon : '02d'} />
          </Row>
          <Row>
            <SearchBar setWeatherData={setWeatherData} weatherData={weatherData} />
          </Row>
          <Row>
            <WeatherDescription weatherData={weatherData} />
          </Row>
        </div>
      </Content>
      <Footer className="footer">
        <FooterContent />
      </Footer>
    </Layout>
  );
}

export default App;
