import React, { Component, createRef } from 'react';
import anime from 'animejs/lib/anime.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';

import styles from './brands.module.scss';

class Brands extends Component {
  refBrands = null;
  index = 0;

  constructor(props) {
    super(props);
    this.refBrands = createRef();
  }

  handleMoveLeft = () => {
  };
  handleMoveRight = () => {
  };

  render() {
    return (
      <div className={styles.layout}>
        <div className={styles['layout-color']}>
          <button
            type='button'
            className={classNames('btn', styles['button-left'], styles.button)}
            onClick={this.handleMoveLeft}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <div className={styles.outer}>
            <div ref={this.refBrands} className={styles.brands}>
              <img
                className={styles.logo}
                src='/images/logo-mitsubishi-electric.png'
              ></img>
              <img className={styles.logo} src='/images/logo-daikin.png'></img>
              <img
                className={styles.logo}
                src='/images/logo-panasonic.png'
              ></img>
              <img className={styles.logo} src='/images/logo-samsung.png'></img>
              <img
                className={styles.logo}
                src='/images/logo-central-air.png'
              ></img>
              <img className={styles.logo} src='/images/logo-lg.png'></img>
            </div>
          </div>
          <button
            type='button'
            className={classNames('btn', styles['button-right'], styles.button)}
            onClick={this.handleMoveRight}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    );
  }
}

export default Brands;
