import React, { Component, Fragment } from 'react';
import Anime, { anime } from 'react-anime';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faThList } from '@fortawesome/free-solid-svg-icons';

import classnames from 'classnames';
import styles from './menu-bar.module.scss';

export default class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false };
  }

  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  render() {
    return (
        <div className={styles['menu-bar']}>
          <a
            className={classnames('btn', styles.menu)}
            onClick={this.toggleMenu}
          >
            <FontAwesomeIcon
              className={classnames(styles.icon)}
              icon={faBars}
            />
            Menu
          </a>
          <Anime opacity={[0, 1]} easing='linear' duration='1000'>
            {this.state.showMenu && (
              <div className={classnames('card', styles.list)}>
                <ul
                  className={classnames(
                    'list-group',
                    'list-group-flush',
                    styles['list-group'],
                  )}
                >
                  <li
                    className={classnames(
                      'list-group-item',
                      styles['list-item'],
                    )}
                  >
                    Home
                    <FontAwesomeIcon
                      className={classnames(styles.icon)}
                      icon={faHome}
                    />
                  </li>
                  <li
                    className={classnames(
                      'list-group-item',
                      styles['list-item'],
                    )}
                  >
                    Products
                    <FontAwesomeIcon
                      className={classnames(styles.icon)}
                      icon={faThList}
                    />
                  </li>
                </ul>
              </div>
            )}
          </Anime>
        </div>
    );
  }
}
