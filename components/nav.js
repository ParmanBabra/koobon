import React from 'react';
import Link from 'next/link';

import classNames from 'classnames';
import styles from './nav.module.scss';

const Nav = () => (
  <nav>
    <ul className={classNames('nav', styles.nav)}>
      <li className={classNames('nav', styles['nav-item'])}>
        <Link href='/' replace>
          <a className='nav-link p-3 m-0'>Home</a>
        </Link>
      </li>
      <li className={classNames('nav', styles['nav-item'])}>
        <Link href='#' replace>
          <a className='nav-link p-3 m-0'>Products</a>
        </Link>
      </li>
      <li className={classNames('nav', styles['nav-item'])}>
        <Link href='#' replace>
          <a className='nav-link p-3 m-0'>Services</a>
        </Link>
      </li>
      <li className={classNames('nav', styles['nav-item'])}>
        <Link href='#' replace>
          <a className='nav-link p-3 m-0'>Blog</a>
        </Link>
      </li>
      <li className={classNames('nav', styles['nav-item'])}>
        <Link href='#' replace>
          <a className='nav-link p-3 m-0'>Contact</a>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
