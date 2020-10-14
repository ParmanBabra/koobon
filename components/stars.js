import React from 'react';

import _ from 'lodash';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames';
import styles from './stars.module.scss';

const starsToArray = (stars) => {
  let starRound = Math.floor(stars);
  let array = _.range(0, stars);
  array = _.fill(array, 1);

  if (stars - starRound >= 0.5) {
    array.push(0.5);
  }

  return array;
};

const Stars = (props) => {
  return (
    <div {...props}>
      {_.map(starsToArray(props.star), (n, index) => {
        if (n == 1)
          return (
            <FontAwesomeIcon
              key={index}
              icon={faStar}
              className={classNames(styles.star)}
              size='lg'
            />
          );
        else {
          return (
            <FontAwesomeIcon
              key={index}
              icon={faStarHalf}
              className={classNames(styles.star)}
              size='lg'
            />
          );
        }
      })}
    </div>
  );
};

export default Stars;
