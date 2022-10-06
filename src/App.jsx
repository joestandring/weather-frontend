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

  return (
    <Layout className="layout bg-rain">
      <Content className="content">
        <div className="container">
          <Row className="weather-icon">
            <WeatherIcon />
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
