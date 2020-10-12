import React, { Component } from 'react';
import Link from 'next/link';

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
      <div
        key={product.id}
        className={classNames('card', styles['product-item'])}
      >
        <img
          src={product.boxImage}
          className='card-img-top'
          alt={product.name}
        />
        <div className='card-body'>
          <h5 className='card-title'>{product.name}</h5>
          <p className='card-text'>{product.shortDescription}</p>
        </div>
        <Link href='/product/[id]' as={`/product/${product.id}`}>
          <a className='btn btn-primary'>View</a>
        </Link>
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
          {this.products.length == 0 ? (
            <div className={styles['empty-product']}>
              <u>
                <p className='h1'>ไม่พบสินค้า</p>
              </u>
            </div>
          ) : (
            <div className={styles['product-items']}>
              {this.products.map((item) => this.buildItem(item))}
            </div>
          )}
        </div>
      </div>
    );
  }
}
