import React, { Component } from 'react';
import styles from './classify.scss';

class Classify extends Component {
  render() {
    const { list, loading } = this.props;
    const loading_pane = loading ? (<div className={styles.slide}><h3>loading</h3></div>) : '';
    return (
      <div className={styles.wraper}>
        <div className={`${styles.left} ${styles.mask}`}>
          <img src="http://oezn2ph4e.bkt.clouddn.com/e1.jpg" alt="" />
        </div>
        <div className={styles.title}>分类</div>
        <div className={styles.right}>
          <div className={styles.text}>
            <div className={styles.item}>
              分类1
            </div>
            <div className={styles.item}>
              分类2
            </div>
            <div className={styles.item}>
              分类3
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Classify;
