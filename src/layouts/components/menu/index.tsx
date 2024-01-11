import React, { useState } from 'react';
import { AppstoreOutlined, ProfileOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import logo from '@/assets/react.svg';
import './style.less';
import { useNavigate } from 'react-router-dom';
type MenuItem = Required<MenuProps>['items'][number];

export const menuItems: MenuItem[] = [
  {
    label: '通用组件',
    key: '1',
    icon: <AppstoreOutlined />,
    children: [
      {
        label: 'Button',
        key: '/button'
      }
    ]
  },
  {
    label: '表单组件',
    key: '2',
    icon: <ProfileOutlined />,
    children: [
      {
        label: 'Form',
        key: '/form'
      }
    ]
  },
  {
    label: 'Redux Demo',
    key: '3',
    icon: <ProfileOutlined />,
    children: [
      {
        label: 'Redux',
        key: '/ReduxDemo'
      }
    ]
  }
];

interface IsProps {
  collapsed: boolean;
}
const LayoutMenu: React.FC<IsProps> = props => {
  const { collapsed } = props;
  const [current, setCurrent] = useState('1');
  const navigate = useNavigate();

  const menuClick: MenuProps['onClick'] = ({ key }: { key: string }) => {
    navigate(key);
    setCurrent(key);
  };

  return (
    <>
      <div className={'logo'}>
        <a className={'flex-between-center gap-8'}>
          <img
            src={logo}
            alt={'react'}
          />
          {!collapsed && <h1>React+Vite 组件库</h1>}
        </a>
      </div>
      <Menu
        theme={'dark'}
        onClick={menuClick}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="inline"
        items={menuItems}
      />
    </>
  );
};

export default LayoutMenu;
