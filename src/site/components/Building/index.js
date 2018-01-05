import React, { Component } from 'react';
import styles from './style.scss';

class Building extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.hint}>
          <div className={styles.content}>网站建设中</div>
        </div>
      </div>
    );
  }
}
export default Building;