// http://oezn2ph4e.bkt.clouddn.com/e4.jpg
import React, { Component } from 'react';
import styles from './member.scss';

class Members extends Component {
  render() {
    const { list, loading } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.title}>核心团队</div>
        <div className={`${styles.imgwraper} ${styles.mask}`}>
          <img src='http://oezn2ph4e.bkt.clouddn.com/e4.jpg' />
        </div>
        <div className={styles.desc}>
          这里就输入一些人员简介，<br />字数不用太多，简明扼要就好，稍微注意一下上下行字数排列，要错落开。</div>
        <div className={`${styles.list} ${styles.mask}`}>
          <div className={`${styles.item} ${styles.pd}`}>
            <img src="http://oezn2ph4e.bkt.clouddn.com/e5.jpg" />
          </div>
          <div className={`${styles.item} ${styles.pd}`}>
            <img src="http://oezn2ph4e.bkt.clouddn.com/e5.jpg" />
          </div>
          <div className={styles.item}>
            <img src="http://oezn2ph4e.bkt.clouddn.com/e5.jpg" />
          </div>
        </div>
      </div>
    );
  }
}
export default Members;
