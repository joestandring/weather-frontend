import React from 'react';
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
  return (
    <Layout className="layout bg-rain">
      <Content className="content">
        <SearchGroup />
      </Content>
      <Footer className="footer">
        <FooterContent />
      </Footer>
    </Layout>
  );
}

export default App;
