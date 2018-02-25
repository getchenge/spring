import React, { Component } from 'react';
import { Input } from 'antd';
import styles from './demo.scss';
import rewind from '../../../assets/audio_rewind.png';
import stop from '../../../assets/audio_stop.png';
import play from '../../../assets/audio_play.png';
import pause from '../../../assets/audio_pause.png';
import forward from '../../../assets/audio_forward.png';

class Founder extends Component {
  render() {
    const { list, loading } = this.props;
    const loading_pane = loading ? (<div className={styles.slide}><h3>loading</h3></div>) : '';
    return (
      <div className={styles.wraper}>
        <div className={`${styles['left']} ${styles['demo']} ${styles['pane']}`}>
          <div className={`${styles['demo-title']} ${styles['pane']}`}>配音演员名字</div>
          <div className={styles.player}>
            <div className={styles.audio}><img src="" alt="" /></div>
            <div className={styles.control}>
              <div className={styles.rewind}><img src={rewind} alt="" /></div>
              <div className={styles.stop}><img src={stop} alt="" /></div>
              <div className={styles.play}><img src={play} alt="" /></div>
              <div className={styles.pause}><img src={pause} alt="" /></div>
              <div className={styles.forward}><img src={forward} alt="" /></div>
            </div>
          </div>
        </div>
        <div className={`${styles['right']} ${styles['search']} ${styles['pane']}`}>
          <div className={styles.query}>
            <Input className={`${styles.input} ${styles.pane}`} />
          </div>
          <div className={styles.results}>
            <div className={styles.result}>姓名 标签</div>
            <div className={styles.result}>姓名 标签</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Founder;
