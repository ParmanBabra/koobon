import React, { Component } from 'react';

import classNames from 'classnames';
import styles from './product-list.module.scss';

export default class ProductList extends Component {
  products = [];
  title = '';

  constructor(props) {
    super(props);

    this.products = props.products;
    this.title = props.title;
  }

  buildItem = (product) => {
    return (
      <div className={classNames('card', styles['product-item'])}>
        <img src={product.boxImage} class='card-img-top' alt={product.name} />
        <div class='card-body'>
          <h5 class='card-title'>{product.name}</h5>
          <p class='card-text'>{product.shortDescription}</p>
        </div>
        <a href='#' class='btn btn-primary'>
          View
        </a>
      </div>
    );
  };

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.backgound}>
          {this.props.color1 && <div className={this.props.color1}></div>}
          {this.props.color2 && <div className={this.props.color2}></div>}
          {this.props.color3 && <div className={this.props.color3}></div>}
        </div>
        <div className={styles['product-list']}>
          <p className='h1'>{this.title}</p>
          <hr />
          <div className={styles['product-items']}>
            {this.products.map((item) => this.buildItem(item))}
          </div>
        </div>
      </div>
    );
  }
}
