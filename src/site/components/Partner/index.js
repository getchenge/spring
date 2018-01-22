import React, { Component } from 'React';
import styles from './styles.scss';
import apple from '../../../assets/partners/apple.svg';
import adidas from '../../../assets/partners/adidas.png';
import benz from '../../../assets/partners/benz.png';
import blizzard from '../../../assets/partners/blizzard.png';
import cn from '../../../assets/partners/cn.png';
import dc from '../../../assets/partners/DSC.png';
import disney from '../../../assets/partners/disney.png';
import jgm from '../../../assets/partners/jgm.png';
import pepsi from '../../../assets/partners/pepsi.png';

class Partner extends Component {
  render() {
    const partners = [{ src: apple, theme: 'light', color: '#fff', size: '50%' }, { src: adidas, theme: 'dark', color: '#000', size: '70%' }, { src: benz, theme: 'dark', color: '#000', size: '60%' }, { src: blizzard, theme: 'dark', color: '#000', size: '70%' }, { src: cn, theme: 'dark', color: '#000', size: '60%' }, { src: dc, theme: 'dark', color: '#000', size: '80%' }, { src: disney, theme: 'light', color: '#fff', size: '80%' }, { src: jgm, theme: 'light', color: 'transparent', size: '100%' }, { src: pepsi, theme: 'light', color: '#fff', size: '100%' }];
    const partners_el = partners.map(partner => {
      const style = {
        backgroundImage: `url(${partner.src})`,
        backgroundColor: partner.color,
        backgroundSize: partner.size
      };
      return (
        <div className={`${styles.partner} ${styles[partner.theme]}`} style={style}></div>
      );
    });
    return (
      <div className={styles.container} id="partner">
        <div className={styles.caption}>合作伙伴</div>
        <div className={styles.wraper}>
          <div className={styles.list}>
            {partners_el}
            {partners_el}
            {partners_el}
          </div>
        </div>
        <div className={styles.line}></div>
      </div>
    );
  }
}

export default Partner;
