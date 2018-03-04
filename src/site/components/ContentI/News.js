import React, { Component } from 'react';
import styles from './news.scss';
import { Carousel as Slider } from 'antd';

class News extends Component {
  render() {
    const { list, loading } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      draggable: false,
      // fade: true,
      // dotsClass: 'dots'
      // autoplay: true,
      // autoplaySpeed: 18000,
      // arrows:true,
      // centerMode:true
    };
    const pix = [{ src: 'http://oezn2ph4e.bkt.clouddn.com/e1.jpg' }, { src: 'http://oezn2ph4e.bkt.clouddn.com/e1.jpg' }, { src: 'http://oezn2ph4e.bkt.clouddn.com/e1.jpg' }];
    const slides = pix && pix.map((pic, idx) => {
      const style = {
        background: `url(${pic.src})`
      }
      return (
        <div className={`${styles.slide}`} key={idx}>
          <img className={styles.img} src={pic.src} />
        </div>
      );
    });
    const loading_pane = loading ? (<div className={styles.slide}><h3>loading</h3></div>) : '';
    return (
      <div className={styles.wraper}>
        <div className={styles.title}>最新动态</div>
        <div className={styles.left}>
          <div className={styles.text}>这里就输入一些公司最新的情况，<br />字数不用太多，简明扼要就好，稍微注意一下上下行字数排列，要错落开。</div>
        </div>
        <div className={`${styles.right} ${styles.mask}`}>
          <Slider {...settings}>
            {slides}
            {loading_pane}
          </Slider>
        </div>
      </div>
    );
  }
}
export default News;
