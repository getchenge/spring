import React, { Component } from 'react';
import styles from './style.scss';
import { Link } from 'dva/router';

class Footer extends Component {
  render() {
    const y = new Date().getFullYear();
    return (
      <div className={styles.container}>
        Copyright 1997-{y} @ Spring Media Ltd. All Rights Reserved.
      </div>
    );
  }
}

export default Footer;
