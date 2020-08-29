import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faLine,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

import classNames from 'classnames';
import styles from './footer.module.scss';

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <div className={classNames(styles.footer)}>
          <p className='h3'>ติดต่อเรา</p>
          <p>
            ร้านคู้บอนแอร์
            <br />
            โทร. 02-0779316
            <br />
            สายด่วน. 081-4081020 , 094-4866715
          </p>
          <p className='h4'>tangkwa-pingpong@hotmail.com</p>
          <div className={classNames(styles.icons)}>
            <FontAwesomeIcon icon={faTwitter} size='2x' className={classNames(styles.icon)}/>
            <FontAwesomeIcon icon={faLine} size='2x' className={classNames(styles.icon)}/>
            <FontAwesomeIcon icon={faFacebook} size='2x' className={classNames(styles.icon)}/>
            <FontAwesomeIcon icon={faYoutube} size='2x' className={classNames(styles.icon)}/>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Footer;
