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
          headerStyle:`${styles.container} ${styles.dark}`
        });
      }else{
        me.setState({
          headerStyle:`${styles.container}`
        });
      }
    })
  }
  render() {
    const { location, navs } = this.props;
    let items = Object.assign([], navs);
    const headerStyle = this.state.headerStyle;
    if (navs) {
      items.splice(Math.floor((items.length + 1) / 2), 0, 'logo');
    }
    const Navs = items.map((nav, idx) => {
      if (nav === 'logo') {
        return <a href='/' className={styles.logo}></a>
      }
      return (<a href={nav.link} className={styles.item} key={idx}><span>{nav.title}</span></a>);
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