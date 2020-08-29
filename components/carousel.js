import React, { Component, createRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faSearch } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames';
import styles from './carousel.module.scss';

import promotes from './../data/promotes';

class Carousel extends Component {
  constructor(props) {
    super(props);
  }

  buildItem = (active, index, promotion) => {
    return (
      <div
        key={index}
        className={classNames('carousel-item', active ? 'active' : '')}
      >
        <div className={classNames(styles.label)}>
          <p className={classNames('h1', styles.h1)}>{promotion.title}</p>
          <p className='h6'>{promotion.description}</p>
        </div>
        <img
          src={promotion.image}
          className={classNames('d-block', styles.image)}
        />
      </div>
    );
  };

  buildIndicator = (active, index) => {
    return (
      <li
        key={index}
        data-target='#carousel'
        data-slide-to={index}
        className={classNames(
          styles['carousel-indicator'],
          active ? 'active' : '',
        )}
      >
        <FontAwesomeIcon icon={faCircle} />
      </li>
    );
  };

  buildLogo = (image, index) => {
    var color = 'color-main-3';

    if (index % 3 == 1) {
      color = 'color-main-2';
    }
    if (index % 3 == 2) {
      color = 'color-main-1';
    }

    return (
      <div className={classNames(styles.logo, color)}>
        <img src={image} className={classNames('d-block')} />
      </div>
    );
  };

  buildSearchPanel = () => {
    if (this.props.showSearhPanel) {
      return (
        <div className={styles['search-panel']}>
          <div
            className={classNames(
              'input-group',
              'flex-nowrap',
              styles['input-group'],
            )}
          >
            <input
              type='text'
              className={classNames('form-control', styles.input)}
              placeholder='ค้นหา'
              aria-label='ค้นหา'
              aria-describedby='addon-wrapping'
            />
            <div className={classNames('input-group-prepend', styles.icon)}>
              <span className='input-group-text' id='addon-wrapping'>
                <FontAwesomeIcon icon={faSearch} size='lg' />
              </span>
            </div>
          </div>
          <div className={classNames(styles.logos)}>
            {this.buildLogo('/images/logo-central-air.png', 0)}
            {this.buildLogo('/images/logo-daikin.png', 1)}
            {this.buildLogo('/images/logo-lg.png', 2)}

            {this.buildLogo('/images/logo-mitsubishi-electric.png', 3)}
            {this.buildLogo('/images/logo-panasonic.png', 4)}
            {this.buildLogo('/images/logo-samsung.png', 5)}
          </div>
        </div>
      );
    }
  };

  render() {
    return (
      <div
        id='carousel'
        className={classNames('carousel', 'slide', styles.carousel)}
        data-ride='carousel'
      >
        <ol
          className={classNames(
            'carousel-indicators',
            styles['carousel-indicators'],
          )}
        >
          {promotes.map((item, index) =>
            this.buildIndicator(index == 0, index),
          )}
        </ol>
        <div className={classNames('carousel-inner')}>
          {promotes.map((item, index) =>
            this.buildItem(index == 0, index, item),
          )}
        </div>
        {this.buildSearchPanel()}
      </div>
    );
  }
}

export default Carousel;
