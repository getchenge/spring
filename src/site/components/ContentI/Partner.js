import React, { Component } from 'react';
import styles from './partner.scss';

class Partner extends Component {
  render() {
    const { list, loading } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.title}>部分合作公司</div>
        <div className={styles.list}>
          <img className={styles.item} src="http://oezn2ph4e.bkt.clouddn.com/p1.png" alt=""/>
          <img className={styles.item} src="http://oezn2ph4e.bkt.clouddn.com/p2.png" alt=""/>
          <img className={styles.item} src="http://oezn2ph4e.bkt.clouddn.com/p3.png" alt=""/>
          <img className={styles.item} src="http://oezn2ph4e.bkt.clouddn.com/p4.png" alt=""/>
          <img className={styles.item} src="http://oezn2ph4e.bkt.clouddn.com/p5.png" alt=""/>
          <img className={styles.item} src="http://oezn2ph4e.bkt.clouddn.com/p6.png" alt=""/>
          <img className={styles.item} src="http://oezn2ph4e.bkt.clouddn.com/p7.png" alt=""/>
          <img className={styles.item} src="http://oezn2ph4e.bkt.clouddn.com/p8.png" alt=""/>
        </div>
      </div>
    );
  }
}
export default Partner;
