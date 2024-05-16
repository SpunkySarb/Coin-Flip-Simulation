import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './Components/Layout';
import Rules from './Components/Rules';
import { ConfigProvider } from 'antd';
import Simulation from './Components/Simulation';

function App() {
  return (
   <ConfigProvider theme={{token:{colorPrimary:'black'}}}>
    <Layout>
<Simulation/>
   </Layout>
   </ConfigProvider>
  );
}

export default App;
