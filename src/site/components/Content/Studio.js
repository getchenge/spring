import React, { Component } from 'react';
import styles from './studio.scss';

class Brief extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className="left"><img className={styles.img} src="http://oezn2ph4e.bkt.clouddn.com/5.jpg" alt=""/></div>
        <p className={styles.p}>清泉拥有四间不同规格的专业录音棚及音控室，一流的软硬件设备及经验丰富的工作团队，帮助不同领域的声音得到重新诠释和完美展现，专注于音乐、影视、广告、专题片、游戏、动画等录音制作，影视拍摄制作，多语种翻译等核心业务。</p>
      </div>
    );
  }
}

export default Brief;
