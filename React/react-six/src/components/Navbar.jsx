import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {useNavigate} from 'react-router-dom'
const { Header, Content, Footer } = Layout;
const arr = [
  { key: '/', label: 'home' },
   { key: '/about', label: 'about' }, 
   { key: '/contact', label: 'contact' },
   { key: '/product', label: 'product' }
  ]

const Navbar = (props) => {
  const navite = useNavigate()
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{height:'100vh'}}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" style={{ backgroundColor: 'white' }} />

        <Menu
          theme='dark'
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={arr}
          onClick={(a)=>{
            console.log(a.key);
            navite(a.key)
            
          }}

          style={{ flex: 1, width: '100%', backgroundColor: '#cbcbcb00' }}
        />



      </Header>
       <Content style={{ padding: '0 48px',height:'100%' }}>
       
        <div
          style={{
            background: colorBgContainer,
            minHeight:'80vh' ,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
         {props.children}
        </div>
      </Content>


    </Layout>
  );
};
export default Navbar;