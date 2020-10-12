import React from 'react';

import CommonHeader from './../../components/common-header';
import Layout from './../../components/layout';

import Images from './../../components/images';
import ProductDetail from './../../components/product-detail';
import Features from './../../components/features';

import products from './../../data/products';
import { get } from './../../data/product.action';

import styles from './[id].module.scss';

const Product = (props) => {
  let { product } = props;

  return (
    <div>
      <CommonHeader />
      <Layout>
        <div className={styles['product-info']}>
          <Images className={styles['product-images']} product={product}/>
          <ProductDetail className={styles['product-detail']} product={product}/>
        </div>
        <Features product={product}/>
      </Layout>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: '1',
        },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  var product = get(products, params.id);

  return {
    props: {
      product,
    },
  };
}

export default Product;
