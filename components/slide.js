import React, { Component, createRef } from 'react';
import anime from 'animejs/lib/anime.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import styles from './slide.module.scss';

class Slide extends Component {
  refSlide = null;
  timer = null;
  count = 0;

  constructor(props) {
    super(props);
    this.refSlide = createRef();
  }

  play = () => {
    this.count++;
    if (this.count == 3) this.count = 0;

    anime({
      targets: this.refSlide.current,
      translateX: `-${this.count * 100}%`,
      duration: 2000,
      easing: 'linear',
    });
  };

  componentDidMount = () => {
    this.timer = setInterval(() => this.play(), 5000);
  };

  componentWillUnmount = () => {
    clearInterval(this.timer);
  };

  render() {
    return (
      <div className={styles.slide}>
        <div ref={this.refSlide} className={styles.layout}>
          <img
            className={styles.image}
            src='/images/promote-air-conditioner.jpg'
          ></img>
          <img
            className={styles.image}
            src='/images/promote-air-conditioner.jpg'
          ></img>
          <img
            className={styles.image}
            src='/images/promote-air-conditioner.jpg'
          ></img>
        </div>

        <div className={styles.buttons}>
          <button type='button' className={classNames('btn', styles.button)}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button type='button' className={classNames('btn', styles.button)}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    );
  }
}

export default Slide;
