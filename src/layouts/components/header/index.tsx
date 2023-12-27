import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons';
import React from 'react';
import { Avatar } from 'antd';
import './style.less';
interface IsProps {
  collapsed: boolean;
  changeCollapsed: (value: boolean) => void;
}
const LayoutHeader: React.FC<IsProps> = props => {
  const { collapsed, changeCollapsed } = props;
  return (
    <div className={'header'}>
      <div className={'flex-between-center'}>
        <div className={'flex-center-center gap-8'}>
          <i
            className={'icon'}
            onClick={() => changeCollapsed(!collapsed)}
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </i>
          <span>欢迎进入 React+Vite 组件库</span>
        </div>
        <div className={'padding-r-12 flex-center-center gap-8'}>
          <Avatar
            size={40}
            icon={<UserOutlined />}
          />
          <span>欢迎您,蔡迎澳</span>
        </div>
      </div>
    </div>
  );
};
export default LayoutHeader;
