import React from 'react';
import { Typography, Row, Col, Space, Layout } from 'antd';

import Cards from './components/Cards';
import Links from './components/Links';
import './App.css';
import FotoF from './faiz.jpg';
import FotoD from './dina.jpg';

const { Footer, Content } = Layout;
const { Title } = Typography;
const header_space = 20;

const App = () => (
  <div className="App">

    <Layout style={{}}>

      <Row className="my-header">
        <Col span={12} style={{ textAlign: 'start', paddingLeft: '10%' }}>
          <Title level={4}>Kelompok 25</Title>
        </Col>
        <Col span={12}>
          <Space direction="horizontal" size={header_space} >
            <Links href='faiz'>Link 1</Links>
            <Links href='dina'>Link 2</Links>
          </Space>
        </Col>
      </Row>

      <Content style={{ padding: 10, paddingBottom: '10%', paddingTop: '5%', background: 'white', height: '85vh' }}>
        <Space direction="horizontal" size='large' >
          <Cards nama="Faiz Noerdiyan Cesara " nim="21120117130060" img={FotoF}></Cards>
          <Cards nama="Dina Lusiana" nim="21120117120030" img={FotoD}></Cards>
        </Space>
      </Content>

      <Footer style={{ background: 'white', height: '5vh' }}>
        <h2>Made by Kelompok 25 - 2020 :)</h2>
      </Footer>

    </Layout>
  </div>
);

export default App;