import React, { Component, Fragment } from 'react';
import MenuBar from './menu-bar';
import Footer from './footer';

//import classNames from 'classnames';
import styles from './layout.module.scss';

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <div className={styles.root}>
          <MenuBar />
          <div className={styles.content}>
            {this.props.children}
          </div>
          <Footer/>
        </div>
      </Fragment>
    );
  }
}

export default Layout;
