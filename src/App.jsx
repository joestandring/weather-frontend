import React, { useState } from 'react';
import { Layout } from 'antd';
import './style/theme.css';
import SearchGroup from './components/SearchGroup';
import FooterContent from './components/FooterContent';

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
        <SearchGroup setWeatherData={setWeatherData} weatherData={weatherData} />
      </Content>
      <Footer className="footer">
        <FooterContent />
      </Footer>
    </Layout>
  );
}

export default App;
