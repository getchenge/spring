import React, { Component } from 'react';
import styles from './style.scss';
import { Menu, Icon } from 'antd';
import logo from '../../../assets/logo.png';
// import { Button } from 'material-ui/Button';
import { Link } from 'dva/router';
const { Item, SubMenu } = Menu;

class NavBar extends Component {
  render() {
    const { list, location, className } = this.props;
    console.info('location', location);
    const menu_nav = list && list.map((nav) => {
      const link = `/dashboard/${nav.name}`;
      const newLink = `/dashboard/${nav.name}?index=new`;
      const editLink = `/dashboard/${nav.name}?index=edit`;
      if (nav.value && nav.value.length > 0) {
        const subItems = nav.value.map((item, idx) => {
          const link = `/dashboard/${nav.name}?index=${idx}`;
          return (
            <Item className={styles.item} data-key={link} key={link}>
              <Link className={`${styles.a} ${styles['sub-item']}`} to={link}>{item.caption || item.title || idx + 1}</Link>
            </Item>
          );
        });
        return (
          <SubMenu className={styles.item} title={nav.caption} key={nav.name}>
            {subItems}
            <Item className={styles.item} key={newLink}>
              <Link className={`${styles.a} ${styles['sub-item']}`} to={newLink}><Icon type='plus-square-o' /></Link>
            </Item>
            <Item className={styles.item} key={editLink}>
              <Link className={`${styles.a} ${styles['sub-item']}`} to={editLink}><Icon type='edit' /></Link>
            </Item>
          </SubMenu>
        );
      }
      return (
        <SubMenu className={styles.item} title={nav.caption} key={nav.name}>
          <Item className={styles.item} key={newLink}>
            <Link className={`${styles.a} ${styles['sub-item']}`} to={newLink}><Icon type='plus-square-o' /></Link>
          </Item>
          <Item className={styles.item} key={editLink}>
            <Link className={`${styles.a} ${styles['sub-item']}`} to={editLink}><Icon type='edit' /></Link>
          </Item>
        </SubMenu>
      );
    });
    return (
      <Menu
        selectedKeys={[`${location.pathname}${location.search}`]}
        mode="inline"
        theme="dark"
        className={className}
      >
        <div className={styles.logo}>
          <Link className={styles.a} to="/dashboard/"><img src={logo} alt="" /></Link>
        </div>
        {menu_nav}
        <Item className={styles.item} key="/dashboard/add">
          <Link className={styles.aplus} to="/dashboard/add"><Icon type='plus' /></Link>
        </Item>
      </Menu>
    );
  }
}

export default NavBar;
