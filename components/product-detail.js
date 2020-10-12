import React, { Component, Fragment } from 'react';

import _ from 'lodash';
import numeral from 'numeral';

import classNames from 'classnames';
import styles from './product-detail.module.scss';
import Stars from './stars';

export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { product,className } = this.props;
    return (
      <div className={classNames(className)}>
        <p className={classNames(styles.name, 'h1')}>{product.name}</p>
        <Stars className={classNames(styles.stars)} star={product.star} />
        <ol className={classNames(styles.properties)}>
          {_.map(product.properties, (property, index) => {
            return <li key={index}>{property}</li>;
          })}
        </ol>
        <table className={classNames(styles.table, 'table table-bordered table-hover')}>
          <thead>
            <tr>
              <th scope='col' className='text-center'>
                Model
              </th>
              <th scope='col' className='text-center'>
                BTU
              </th>
              <th scope='col' className='text-center'>
                ราคา
              </th>
            </tr>
          </thead>
          <tbody>
            {_.map(product.prices, (price, index) => {
              return (
                <tr key={index}>
                  <td>{price.model}</td>
                  <td className='text-center'>{price.btu}</td>
                  <td className='text-right'>{numeral(price.price).format("0,0.00")} ฿</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
