import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
const { Header, Content, Footer } = Layout;
const items = [{key:'/',label:'home'},{key:'/about',label:'about'},{key:'/cd',label:'home'}]

const Navbar= () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{}}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" style={{backgroundColor:'white'}} />
       
        {/* <Menu
          theme='dark'
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          
          style={{ flex: 1, width:'100%',backgroundColor:'#cbcbcb00' }}
        /> */}

{items.map((elem, index) => (
  <Link to={elem.key}/>
))}
       
      </Header>
      
     
    </Layout>
  );
};
export default Navbar;