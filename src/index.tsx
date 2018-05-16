import * as React from 'react';
import { render } from 'react-dom';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { Menu, Icon, Layout, Breadcrumb } from 'antd';
// import 'antd/lib/menu/style';
// import 'antd/lib/icon/style';
// import 'antd/lib/layout/style';
// import 'antd/lib/breadcrumb/style';
import SiteHeader from '../src/compoments/SiteHeader';
import routes from './routes';

const { Content, Footer, Sider } = Layout;
const { SubMenu, Item } = Menu;

import './index.less';

interface IAppProps {
  name: string;
}
interface IAppState {
  collapsed: boolean
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: any) {
    super(props);
    console.log('log init index');
    this.state = {
      collapsed: false,
    };
  }
  onCollapse(collapsed: boolean) {
    this.setState({ collapsed });
  }

  onClickSilderMenu() {
    // this.props.history.push(path);

    // 匹配路由
    // let matchURL = matchPath(window.location.pathname, {
    //   path,
    //   exact: true,
    //   strict: true
    // });
    // console.log(matchURL)
    // let reg = new RegExp(key);
    // if (!reg.test(window.location.pathname)) {

    // }
  }
  public render(): JSX.Element {
    let { name } = this.props;

    const menus = routes.map((item) => {
      return (
        <Item key={!!item.key ? item.key : item.path}>
          <Icon type="pie-chart" />
          <span>{item.name}</span>
        </Item>
      );
    });
    return (
      <div>
        <SiteHeader />
        <Layout className="wrapper">
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse.bind(this)}
          >
            <Menu theme="dark" defaultSelectedKeys={['/']} mode="inline" onClick={this.onClickSilderMenu.bind(this)}>
              {menus}
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <Switch>
                  {routes.map((item) => {
                    return (
                      <Route exact strict key={item.key} {...item} />
                    );
                  })}
                </Switch>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              test @ 阿斯达斯达舒对
            </Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}

render(<Router><App name="test"/></Router>, document.getElementById('root'));
