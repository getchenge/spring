import React, { Component } from 'react';
import styles from './style.scss';
import qrcode from '../../../assets/wechat.jpg';

class Partner extends Component {
  render() {
    // const { list, loading } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.text}>公司地址：上海市普陀区江宁路1306弄富丽大厦七座1602室</div>
        <div className={styles.text}>
          电话：021-52527144&nbsp;&nbsp;&nbsp;&nbsp;邮箱：springmedia@163.com
        </div>
        <div className={styles.list}>
          <div className={`${styles.item} ${styles.wechat}`}>
            <div className={styles.content}><img src={qrcode} alt=""/></div>
            <div className={styles.title}>微信公众号</div>
          </div>
          <div className={styles.item}>
            <div className={styles.content}></div>
            <div className={styles.title}>官方微博</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Partner;
