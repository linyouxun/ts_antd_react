import * as React from 'react';
import { Icon, Menu, Dropdown } from 'antd';
import './SiteHeader.less';

export class SiteHeader extends React.Component<any, any> {
  onClick() {
  }
  render() {
    const menu = (
      <Menu onClick={this.onClick.bind(this)}>
        <Menu.Item>
          修改密码
        </Menu.Item>
      </Menu>
    );
    return (
      <header className="component site-header">
        <a className="header-logo" href="/" title="首页" />
        <div className="header-content" />
        <div className="header-action">
          <nav>
            <Dropdown overlay={menu}>
              <span className="action-user-name"><Icon type="logout" /><span>退出系统</span></span>
            </Dropdown>
          </nav>
        </div>
      </header>
    );
  }
}

export default SiteHeader;
