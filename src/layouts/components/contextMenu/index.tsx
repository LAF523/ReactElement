import { Menu, MenuProps, Tabs } from 'antd';
import React, { useRef } from 'react';
import './style.less';
import { ReloadOutlined, ArrowLeftOutlined, ArrowRightOutlined, CloseOutlined } from '@ant-design/icons';
import getItem from '../../../utils';
import useRightClick from '../../../hooks/useRightClick.ts';
type MenuItem = Required<MenuProps>['items'][number];

const menuItemList: MenuItem[] = [
  getItem('刷新', '1', <ReloadOutlined />),
  getItem('关闭左侧', '2', <ArrowLeftOutlined />),
  getItem('关闭右侧', '3', <ArrowRightOutlined />),
  getItem('关闭其它', '4', <CloseOutlined />)
];
const items = [
  {
    label: 'About组件',
    key: '/about',
    children: null
  },
  {
    label: 'Home组件',
    key: '/home',
    children: null
  }
];
const ContextMenu: React.FC = () => {
  const { x, y, target } = useRightClick(e => {
    closeMenu(e);
  });
  const [menuVisible, setMenuVisible] = React.useState(false);
  const visible = useRef<boolean>();
  //找到右击对应的tabs
  const getPageKey = (target: any, depth: number): any => {
    depth = depth || 0;
    if (depth > 2) {
      return null;
    }
    let pageKey = target.getAttribute('aria-controls');
    pageKey =
      pageKey || (target.previousElementSibling ? target.previousElementSibling.getAttribute('aria-controls') : null);
    return pageKey || (target.firstElementChild ? getPageKey(target.firstElementChild, ++depth) : null);
  };
  //右击
  const contextmenu = (e: any) => {
    const selectTab = getPageKey(e.target, 0);
    if (selectTab !== null) {
      e.preventDefault();
      setMenuVisible(true);
      visible.current = true;
    }
  };
  const closeMenu = (e: any) => {
    if (
      visible.current === true &&
      e.getAttribute('class') &&
      [
        'anticon',
        'ant-menu-item-icon',
        'ant-menu-item',
        'ant-menu-title-content',
        'ant-menu-item ant-menu-item-active',
        'ant-menu-item ant-menu-item-active ant-menu-item-selected'
      ].indexOf(e.getAttribute('class')) < 0
    ) {
      setMenuVisible(false);
    }
  };
  const onClick = (key: any) => {
    const url = target?.getAttribute('aria-controls').replace('rc-tabs-1-panel-', '');
    console.log(key, target, url);
    setMenuVisible(false);
  };
  return (
    <div className={'layout-context-menu'}>
      {menuVisible && (
        <div
          className={'context-menu'}
          style={{ left: x, top: y }}
        >
          <Menu
            onClick={onClick}
            theme={'light'}
            mode="inline"
            items={menuItemList}
          />
        </div>
      )}
      <Tabs
        onContextMenu={contextmenu}
        tabPosition={'top'}
        items={items}
      />
    </div>
  );
};

export default ContextMenu;
