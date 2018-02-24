import React, { Component } from 'react';
import styles from './style.scss';
import { Carousel as Slider } from 'antd';

class Banner extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.state = {
      curIndex: 0
    };
  }
  next() {
    console.info('Slider__', this.slider);
    this.slider.innerSlider.slickNext()
  }
  previous() {
    this.slider.innerSlider.slickPrev()
  }
  // show() {
  //   this.slider.innerSlider.slickGoTo();
  // }
  render() {
    const { pix, loading } = this.props;
    console.info('pix__', pix);
    const settings = {
      dots: true,
      infinite: true,
      speed: 700,
      initialSlide: this.state.curIndex,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      draggable: false,
      fade: true,
      dotsClass: 'dots'
      // autoplay: true,
      // autoplaySpeed: 18000,
      // arrows:true,
      // centerMode:true
    };

    const slides = pix && pix.map((pic, idx) => {
      const style = {
        background: `url(${pic.src})`
      }
      return (
        <div className={styles.slide} key={idx}>
          <img className={styles.img} src={pic.src} />
        </div>
      );
    });
    const loading_pane = loading ? (<div className={styles.slide}><h3>loading</h3></div>) : '';
    return (
      <div className={styles.container} id="banner">
        <Slider {...settings}>
          {slides}
          {loading_pane}
        </Slider>
      </div>
    );
  }
}

export default Banner;
