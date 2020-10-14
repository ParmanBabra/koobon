import React, { Component, Fragment } from 'react';

import _ from 'lodash';

import classNames from 'classnames';
import styles from './features.module.scss';

const buildItem = (feature, index) => {
  return (
    <div key={index} className={classNames('card', styles['feature-item'])}>
      <img src={feature.image} className='card-img-top' alt={feature.title} />
      <div className='card-body'>
        <h5 className='card-title'>{feature.title}</h5>
        <p className='card-text'>{feature.description}</p>
      </div>
    </div>
  );
};

const Features = (props) => {
  if(props.product.featuries.length == 0){
    return <section>

    </section>;
  }
  return (

    <section className={classNames(styles.section)}>
      <p className={classNames('h1')}>Features</p>
      <hr></hr>
      <div className={classNames(styles.features)}>
        {_.map(props.product.featuries, (feature, index) =>
          buildItem(feature, index),
        )}
      </div>
    </section>
  );
};

export default Features;
