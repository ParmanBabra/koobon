import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import styles from './footer.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faLine,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <div className={classNames(styles['top-footer'], 'p-4')}>
          <div className={classNames(styles.container, 'container')}>
            <div className={styles.box}>
              <h5>Information</h5>
              <ul>
                <li>Location</li>
                <li>Email</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className={styles.box}>
              <h5>Why Buy from Us?</h5>
              <ul>
                <li>Installation fee</li>
                <li>Credit card accepted</li>
              </ul>
            </div>
            <div className={styles.box}>
              <h5>Contacts Us</h5>
              <ul>
                <li>
                  <span>Tel :</span> 02-0779316
                </li>
                <li>
                  <span>Tel :</span> 081-4081020
                </li>
                <li>
                  <span>Tel :</span> 094-4866715
                </li>
              </ul>
              <FontAwesomeIcon
                className={styles.icon}
                icon={faFacebookSquare}
              />
              <FontAwesomeIcon className={styles.icon} icon={faLine} />
              <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={classNames('container', styles['footer-text'])}>
            © 2017 - 2020 Air Koobon
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Footer;
