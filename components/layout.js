import React, { Component, Fragment } from 'react';
import Head from 'next/head';
import Heaeder from './header';
import Footer from './footer';
import Nav from './nav';

import classNames from 'classnames';
import styles from './layout.module.scss';

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <div className={styles.layout}>
          <Head>
            <link
              rel='stylesheet'
              href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css'
            />
          </Head>
          <Heaeder />
          <div className={styles.root}>
            <div className={styles['color-gradient']}></div>
            <div className='container'>
              <Nav />
              <div className={styles['background']}>{this.props.children}</div>
            </div>
          </div>
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default Layout;
