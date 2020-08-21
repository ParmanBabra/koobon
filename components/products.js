import React, { Component, Fragment } from 'react';
import Link from 'next/link';

import classNames from 'classnames';
import { formatMoney } from '../util/format';
import styles from './products.module.scss';

class Products extends Component {
  constructor(props) {
    super(props);
    console.log(props.products);
  }
  renderLabelNew = (product) => {
    let isNew = product.tags.includes('New');
    if (isNew) {
      return <span className='badge badge-danger'>New</span>;
    }

  };

  renderBox = (product) => {
    return (
      <div className={classNames('card', styles.product)} key={product.id}>
        <div className={styles.labels}>
          {this.renderLabelNew(product)}
        </div>
        <img
          className={classNames('card-img-top', styles.image)}
          src={product.boxImage}
          alt={product.name}
        />

        <div className={classNames('card-body', styles['product-body'])}>
          <h3 className={styles.price}>
            ฿ {formatMoney(product.minPrice, 0, '.', ',')}
          </h3>
          <h5 className={classNames('card-title', styles['product-name'])}>
            {product.name}
          </h5>
          <p className={classNames('card-text', styles['product-descroption'])}>
            {product.shotDescription}
          </p>
          <Link href={`/product/${product.id}`} replace>
            <a className={classNames('btn', 'btn-primary', styles['command'])}>
              View
            </a>
          </Link>
        </div>
      </div>
    );
  };

  render() {
    return (
      <Fragment>
        <section className={styles.section}>
          <h3 className={styles.label}>{this.props.label}</h3>
          <div className={styles.layout}>
            {this.props.products.map((product) => this.renderBox(product))}
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Products;
