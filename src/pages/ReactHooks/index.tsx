import { FC, useCallback, useMemo } from 'react';
import { history, useLocation } from 'umi';

import { Tabs } from 'antd';

const { TabPane } = Tabs;

const TAB_CONFIG = [
  {
    title: 'useState',
    key: '/react-hooks/use-state',
  },
  {
    title: 'useEffect',
    key: '/react-hooks/use-effect',
  },
  {
    title: 'useContext',
    key: '/react-hooks/use-context',
  },
];

const ReactHooks: FC = (props) => {
  const { pathname } = useLocation();

  const path = useMemo(() => pathname, [pathname]);

  // tab切换
  const onChangeTabs = useCallback(
    (key: string) => {
      if (key !== path) {
        history.push(key);
      }
    },
    [path],
  );

  return (
    <div>
      <Tabs onChange={onChangeTabs} activeKey={path}>
        {TAB_CONFIG.map((tab) => (
          <TabPane tab={tab.title} key={tab.key} />
        ))}
      </Tabs>
      {props.children}
    </div>
  );
};

export default ReactHooks;
