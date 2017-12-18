import React, { Component } from 'react';
import styles from './style.scss';
import { Link } from 'dva/router';
import { Icon } from 'antd';
import img from '../../../assets/wechat.jpg';

class Footer extends Component {
  constructor(props) {
    super(props);
    // this.props.show = false;
    this.toggleQR = this.toggleQR.bind(this);
    this.state = {
      show: false
    }
  }
  toggleQR() {
    const isShow = this.state.show || false;
    console.info('toggleQR__!', isShow, !isShow);
    this.setState({
      show: !isShow
    });
  }
  render() {
    const toggleQR = this.toggleQR;
    const isShow = this.state.show;
    const y = new Date().getFullYear();
    return (
      <div className={styles.container}>
        <div className={styles.focus}>
          <div className={`${styles.wechatqrcode}${isShow ? ` ${styles.show}` : ''}`}><img className={styles.qrcode} src={img} alt="" /></div>
          <span className={styles.follow}>关注我们： </span>
          <a href="javasript:;" onClick={toggleQR} className={`${styles.wechat}${isShow ? ` ${styles.active}` : ''}`}><Icon type="wechat" /></a>
          <a href="https://weibo.com/springmedia" className={styles.weibo} target="_blank"><Icon type="weibo" /></a>
        </div>
        <p className={styles.copyright}>Copyright © 1997-{y} Spring Media Ltd. All Rights Reserved.</p>
      </div>
    );
  }
}

export default Footer;
