import React from 'react';
import Head from 'next/head';
import Layout from '../../components/layout';
//import ProductImages from '../../components/product-images';

import products from '../../data/products';
import { get } from '../../data/product.action';

import styles from './[id].module.scss';

const Product = (props) => (
  <div>
    <Head>
      <title>Product</title>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0'
      ></meta>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Layout>
      <section className={styles['product-layout']}>
        <ProductImages images={props.product.images} />
      </section>
    </Layout>
  </div>
);

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
