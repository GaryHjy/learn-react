import { FC, useState, useEffect } from 'react';
import { IRouteComponentProps, useLocation } from 'umi';
import { Menu } from 'antd';
import { MenuInfo } from 'rc-menu/lib/interface';
import './index.less';

// 菜单列表
const menuList = [
  {
    title: '首页',
    key: '/',
  },
  {
    title: 'css方案',
    key: '/css-scheme',
  },
];

const useMenuSelectKeys = () => {
  const [selectKeys, setSelectKeys] = useState<string[]>([]);
  const { pathname } = useLocation();

  useEffect(() => {
    const match =
      menuList.find(
        (menu) => menu.key !== '/' && pathname.includes(menu.key),
      ) || menuList[0];
    match && setSelectKeys([match.key]);
  }, [pathname]);

  return { selectKeys };
};

const Layout: FC<IRouteComponentProps> = (props) => {
  const { pathname } = props.location;
  const { selectKeys } = useMenuSelectKeys();

  const onChangeRoute = ({ key }: MenuInfo) => {
    if (pathname !== key) {
      props.history.push(key);
    }
  };

  return (
    <div className="layout">
      <div className="layout-header">
        <Menu
          mode="horizontal"
          selectedKeys={selectKeys}
          onClick={onChangeRoute}
        >
          {menuList.map((menu) => (
            <Menu.Item key={menu.key}>{menu.title}</Menu.Item>
          ))}
        </Menu>
      </div>
      <div className="layout-body">{props.children}</div>
    </div>
  );
};

export default Layout;
