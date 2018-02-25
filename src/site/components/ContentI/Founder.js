import React, { Component } from 'react';
import styles from './founder.scss';
import { Icon } from 'antd';

class Founder extends Component {
  render() {
    const { list, loading } = this.props;
    const loading_pane = loading ? (<div className={styles.slide}><h3>loading</h3></div>) : '';
    return (
      <div className={styles.wraper}>
        <div className={styles.title}>创始人</div>
        <div className={`${styles.left} ${styles.mask}`}>
          <img src="http://oezn2ph4e.bkt.clouddn.com/e2.jpg" alt="" />
        </div>
        <div className={styles.founder1}>徐哥简介<Icon type='caret-left' /></div>
        <div className={`${styles.right}`}>
          <div className={`${styles.imgwraper} ${styles.mask}`}>
            <img src="http://oezn2ph4e.bkt.clouddn.com/e3.jpg" alt="" />
          </div>
        </div>
        <div className={styles.founder2}>龙哥简介<Icon type='caret-up' /></div>
      </div>
    );
  }
}
export default Founder;
