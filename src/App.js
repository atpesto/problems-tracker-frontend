import React, { Component } from 'react';
import { Layout } from 'antd';


const { Header, Footer, Content } = Layout;

class App extends Component {
  render() {
    return (
      <div>
        <Layout
          style={{
            minHeight: '100vh',
          }}
        >
          <Header
            style={{
              color: '#fff',
              textAlign: 'center',
              fontSize: '2em',
            }}
          >
            Competitive Programming
          </Header>
          <Content>
            Projects Tracker
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Made with <span role="img" aria-label="heart">❤️</span>
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;
