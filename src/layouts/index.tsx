import React, { useState } from 'react';
import { Layout, theme } from 'antd';
import LayoutMenu from './components/menu';
import ContextMenu from './components/contextMenu';
import LayoutHeader from './components/header';
import { Outlet } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const PageLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        width={208}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <LayoutMenu collapsed={collapsed} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <LayoutHeader
            collapsed={collapsed}
            changeCollapsed={value => setCollapsed(value)}
          />
        </Header>
        <ContextMenu />
        <Content
          style={{
            margin: '16px 12px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default PageLayout;
