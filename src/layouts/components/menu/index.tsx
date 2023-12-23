import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import logo from '../../../assets/react.svg';
import './style.less';
import getItem from '../../../utils';
type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 1', '1'),
    getItem('Option 2', '2'),
    getItem('Option 3', '3'),
    getItem('Option 4', '4')
  ]),

  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')])
  ]),

  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12')
  ])
];
interface IsProps {
  collapsed: boolean;
}
const LayoutMenu: React.FC<IsProps> = props => {
  const { collapsed } = props;
  const [current, setCurrent] = useState('1');
  const onClick: MenuProps['onClick'] = e => {
    console.log('click ', e);
    setCurrent(e.key);
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
        onClick={onClick}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </>
  );
};

export default LayoutMenu;
