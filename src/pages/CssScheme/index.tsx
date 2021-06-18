import { Tabs } from 'antd';
import { dynamic } from 'umi';

const { TabPane } = Tabs;

const cssSchemeTabConfig = [
  {
    title: '普通方式',
    key: 'native',
    component: dynamic(() => import('./components/Native')),
  },
  {
    title: 'css module',
    key: 'cssModule',
    component: dynamic(() => import('./components/CssModule')),
  },
  {
    title: 'css in js',
    key: 'cssInJs',
    component: dynamic(() => import('./components/CssInJs')),
  },
];

const index = () => {
  return (
    <div>
      <h1>css方案</h1>
      <Tabs>
        {cssSchemeTabConfig.map((tab) => {
          const TabComponent = tab.component;
          return (
            <TabPane tab={tab.title} key={tab.key}>
              <TabComponent />
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
};

export default index;
