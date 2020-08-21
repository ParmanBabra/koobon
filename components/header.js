import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './header.module.scss';

class Header extends Component {
  render() {
    return (
      <div className='container px-5 py-4'>
        <h1 className={classNames(styles.h1, 'display-4')}>Air</h1>
        <h6 className={classNames(styles.h6)}>Koobon</h6>
      </div>
    );
  }
}

export default Header;
