import React, { Component } from 'react';
import styles from './style.scss';
import qrcode from '../../../assets/wechat.jpg';
import weibo from '../../../assets/weibo.png';

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
            <div className={styles.content}><img src={qrcode} alt="微信公众号二维码" /></div>
            <div className={styles.title}>微信公众号</div>
          </div>
          <a className={styles.item} href='https://weibo.com/springmedia' targe='_blank'>
            <div className={styles.content}><img src={weibo} alt="微博二维码" /></div>
            <div className={styles.title}>官方微博</div>
          </a>
        </div>
      </div>
    );
  }
}
export default Partner;
