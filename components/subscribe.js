import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';

import classNames from 'classnames';
import styles from './subscribe.module.scss';

export default class Subscribe extends Component {
  render() {
    return (
      <div className={styles.root}>
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
            placeholder='ติดตามพวกเรา'
            aria-label='ติดตามพวกเรา'
            aria-describedby='addon-wrapping'
          />
          <div className={classNames('input-group-prepend', styles.icon)}>
            <span className='input-group-text' id='addon-wrapping'>
              <FontAwesomeIcon icon={faBell} size='2x' />
            </span>
          </div>
        </div>
      </div>
    );
  }
}
