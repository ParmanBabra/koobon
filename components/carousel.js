import React, { Component, createRef } from 'react';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faSearch } from '@fortawesome/free-solid-svg-icons';

import { slugify } from './../util/format';

import classNames from 'classnames';
import styles from './carousel.module.scss';

class Carousel extends Component {
  details = [];
  brands = [];
  showSearhPanel = false;

  constructor(props) {
    super(props);

    this.details = this.props.details;
    this.brands = this.props.brands;
    this.showSearhPanel = this.props.showSearhPanel;
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

  buildLogo = (brand, index) => {
    var color = 'color-main-3';

    if (index % 3 == 1) {
      color = 'color-main-2';
    }
    if (index % 3 == 2) {
      color = 'color-main-1';
    }
    return (
      <div key={brand.id} className={classNames(styles.logo, color)} >
        <Link href="/brands/[name]" as={`/brands/${slugify(brand.brand)}`}>
          <img src={brand.logo} className={classNames('d-block')} />
        </Link>
      </div>
    );
  };

  buildSearchPanel = () => {
    if (this.showSearhPanel) {
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
            {this.brands.map((brand, index)=>this.buildLogo(brand, index))}
          </div>
        </div>
      );
    }
  };

  render() {
    if (!this.details) {
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
          />
          {this.buildSearchPanel()}
        </div>
      );
    }

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
          {this.details.map((item, index) =>
            this.buildIndicator(index == 0, index),
          )}
        </ol>
        <div className={classNames('carousel-inner')}>
          {this.details.map((item, index) =>
            this.buildItem(index == 0, index, item),
          )}
        </div>
        {this.buildSearchPanel()}
      </div>
    );
  }
}

export default Carousel;
