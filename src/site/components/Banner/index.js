import React, { Component } from 'react';
import styles from './style.scss';
import { Carousel as Slider, Icon } from 'antd';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  const styles = Object.assign({}, style, { display: 'block', background: 'red' });
  return (
    <div
      className={className}
      style={styles}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  const styles = Object.assign({}, style, { display: 'block', background: 'green' });
  return (
    <div
      className={className}
      style={styles}
      onClick={onClick}
    ></div>
  );
}

class Banner extends Component {
  constructor(props) {
    super(props)
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
  }
  next() {
    console.info('Slider__', this.slider);
    this.slider.innerSlider.slickNext()
  }
  previous() {
    this.slider.innerSlider.slickPrev()
  }
  render() {
    const { pix, loading } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      draggable: true,
      // autoplay: true,
      // autoplaySpeed: 18000,
      // arrows:true,
      // centerMode:true,
      // nextArrow: <SampleNextArrow />,
      // prevArrow: <SamplePrevArrow />
    };

    const slides = pix && pix.map((pic, idx) => {
      const style = {
        background: `url(${pic.src})`
      }
      return (
        <div className={styles.slide} key={idx}>
          <div style={style} className={styles.backdrop}></div>
          <img className={styles.img} src={pic.src} />
        </div>
      );
    });
    const loading_pane = loading ? (<div className={styles.slide}><h3>loading</h3></div>) : '';
    return (
      <div className={styles.container} id="banner">
        <Slider {...settings} ref={c => this.slider = c}>
          {slides}
          {loading_pane}
        </Slider>
        <div className={styles.prev} onClick={this.previous}><Icon type="left" /></div>
        <div className={styles.next} onClick={this.next}><Icon type="right" /></div>
      </div>
    );
  }
}

export default Banner;
