import React from 'react';
import { Menu, Icon } from 'antd';
import styles from './style.scss';
const SubMenu = Menu.SubMenu;
import { Link } from 'dva/router';
import logo from '../../../assets/logo.png';

function Header({ location, navs }) {
  const menu_nav = navs && navs.map((nav, idx) => {
    const link = nav.target ? (<Link to={nav.link} target={nav.target}>{nav.title}</Link>) : (<Link to={nav.link}>{nav.title}</Link>);
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
      <Menu.Item key="/index" className={styles.logo}>
        <Link to="/"><img className={styles.logoimg} src={logo} /><span className={styles.logoname}>清泉</span></Link>
      </Menu.Item>
      {menu_nav}
    </Menu>
  );
}

export default Header;
