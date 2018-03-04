import React, { Component } from 'react';
import styles from './style.scss';
import logo from '../../../assets/logoI.png';
import logoL from '../../../assets/logoL.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerStyle: styles.container
    };
  }
  componentDidMount() {
    const me = this;
    window.addEventListener('scroll', () => {
      const scrolltop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
      const header = document.querySelector('#header');
      const banner = document.querySelector('#banner');
      if (scrolltop > banner.offsetHeight - header.offsetHeight) {
        me.setState({
          headerStyle: `${styles.container} ${styles.dark}`
        });
      } else {
        me.setState({
          headerStyle: `${styles.container}`
        });
      }
    })
  }
  render() {
    const { location, navs } = this.props;
    console.info('location__', location);
    let items = Object.assign([], navs);
    const headerStyle = this.state.headerStyle;
    if (navs) {
      items.splice(Math.floor((items.length + 1) / 2), 0, 'logo');
    }
    const Navs = items.map((nav, idx) => {
      if (nav === 'logo') {
        return <a href='/' className={styles.logo} key={idx}></a>
      }
      const item_class = location.pathname === nav.link ? `${styles.item} ${styles.cur}` : styles.item;
      const subitem_class = `${location.pathname}${location.search}${location.hash}` === 'sublink' ? `${styles.subitem} ${styles.cur}` : styles.subitem;
      return (
        <div className={item_class} key={idx}>
          <a href={nav.link} className={styles.link} key={idx}><span>{nav.title}</span></a>
          <div className={styles.subnavs_wraper}>
            <div className={styles.subnavs}>
              <div className={subitem_class}>
                <a href={nav.link} className={styles.link} key={idx}><span>{nav.title}</span></a>
              </div>
              <div className={styles.subitem}>
                <a href={nav.link} className={styles.link} key={idx}><span>{nav.title}</span></a>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className={`${styles.wraper}`} id='header'>
        <div className={headerStyle} ref=''>
          {Navs}
        </div>
      </div>
    );
  }
}

export default Header;