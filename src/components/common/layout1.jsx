import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';

import HeadContent from './header'

const { Header, Content, Footer } = Layout;

class Layout1 extends React.Component {
    render () {
        return (
            <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
              <HeadContent/>
            </Header>
            <Content style={{ padding: '0 50px', marginTop: 64 }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>Content</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Ant Design ©2018 Created by Ant UED
            </Footer>
          </Layout> 
        )
    }
}

export default Layout1