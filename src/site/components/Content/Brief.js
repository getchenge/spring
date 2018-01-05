import React, { Component } from 'react';
import styles from './brief.scss';

class Brief extends Component {
  render() {
    return (
      <div className={styles.container} id="about">
        <img className={styles.img} src="http://oezn2ph4e.bkt.clouddn.com/10.jpg" alt=""/>
        <p className={styles.p}>Spring Media（清泉工作室）成立于一九九七年（香港），是一间提供专业影视制作服务的公司。于2006年开办上海分公司，专门从事广告音频制作、影视剧配音、音频缩混、游戏语音制作、翻译、音乐制作等。</p>
      </div>
    );
  }
}

export default Brief;
