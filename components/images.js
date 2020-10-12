import React, { Component, Fragment } from 'react';

import anime from 'animejs/lib/anime';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames';
import styles from './images.module.scss';

export default class Images extends Component {
  scollLength = 0;

  constructor(props) {
    super(props);

    this.scollLength = Math.max(this.props.product.images.length - 5, 0);

    this.state = {
      selectedIndex: 0,
      scollIndex: 0,
    };
  }

  onSelectThumbnail = (index) => {
    this.setState({ selectedIndex: index });
  };

  onClickUp = () => {
    let newIndex = this.state.scollIndex - 1;
    newIndex = Math.max(newIndex, 0);
    anime({
      targets: '.inner',
      duration: 1000,
      translateY: -(newIndex * 15) + 'vh',
    });

    this.setState({ scollIndex: newIndex });
  };
  onClickDown = () => {
    let newIndex = this.state.scollIndex + 1;
    newIndex = Math.min(newIndex, this.scollLength);
    anime({
      targets: '.inner',
      duration: 1000,
      translateY: -(newIndex * 15) + 'vh',
    });

    this.setState({ scollIndex: newIndex });
  };

  render() {
    let { images } = this.props.product;
    let { selectedIndex } = this.state;

    return (
      <div className={classNames(styles.images, this.props.className)}>
        <div className={styles.thumbnails}>
          <div className={classNames('inner', styles['thumbnails-inner'])}>
            {images.map((url, index) => (
              <div
                key={index}
                className={classNames(
                  'thumbnail',
                  index == selectedIndex ? 'selected' : '',
                )}
                onClick={() => this.onSelectThumbnail(index)}
              >
                <img src={url} className={'img-thumbnail'}></img>
              </div>
            ))}
          </div>
          <button
            type='button'
            className={classNames('btn', styles['btn-up'])}
            onClick={this.onClickUp}
          >
            <FontAwesomeIcon icon={faAngleUp} size='1x' />
          </button>
          <button
            type='button'
            className={classNames('btn', styles['btn-down'])}
            onClick={this.onClickDown}
          >
            <FontAwesomeIcon icon={faAngleDown} size='1x' />
          </button>
        </div>
        <img src={images[selectedIndex]} className={styles.preview}></img>
      </div>
    );
  }
}
