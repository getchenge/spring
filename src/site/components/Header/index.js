import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import styles from './style.scss';
const SubMenu = Menu.SubMenu;
import { Link } from 'dva/router';
import logo from '../../../assets/logo.png';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  navigate(param, e) {
    const selector = param.replace(/[^a-z]/ig, '');
    const to = document.querySelector(`#${selector}`);
    if (!to) {
      return;
    }
    to.scrollIntoView({ behavior: 'smooth' });
  }
  render() {
    const { location, navs } = this.props;
    const menu_nav = navs && navs.map((nav, idx) => {
      const link = (<div onClick={this.navigate.bind(this, nav.link)}>{nav.title}</div>);
      return (
        <Menu.Item key={idx}>
          {link}
        </Menu.Item>
      );
    });
    return (
      <Menu
        selectedKeys={[location.pathname]}
        mode="horizontal"
        theme="dark"
        className={styles.menu}
      >
        <div key="/index" className={styles.logo}>
          <Link to="/"><img className={styles.logoimg} src={logo} /><span className={styles.logoname}>清泉</span></Link>
        </div>
        {menu_nav}
      </Menu>
    );
  }
}

export default Header;
