import React, { Fragment } from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import Carousel from '../components/carousel';
import HighlightProduct from '../components/highlight-product';
import ProductList from '../components/product-list';
import Subscribe from '../components/subscribe';

import styles from './index.module.scss';

import products from '../data/products';
import { filter } from '../data/product.action';

const Home = (props) => (
  <Fragment>
    <Head>
      <title>Home</title>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0'
      ></meta>

      <script
        src='https://code.jquery.com/jquery-3.5.1.slim.min.js'
        integrity='sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj'
        crossorigin='anonymous'
      ></script>
      <script
        src='https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js'
        integrity='sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN'
        crossorigin='anonymous'
      ></script>
      <script
        src='https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js'
        integrity='sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV'
        crossorigin='anonymous'
      ></script>
    </Head>

    <Layout>
      <Carousel showSearhPanel='true' />
      <HighlightProduct />
      <ProductList
        title='Hot Product'
        color1={styles['hot-product-color1']}
        color2={styles['hot-product-color2']}
        products={props.hotProducts}
      />
      <ProductList
        title='Promotions'
        color1={styles['promotions-color1']}
        color2={styles['promotions-color2']}
        products={props.promotionProducts}
      />
      <Subscribe />
    </Layout>
  </Fragment>
);

export async function getStaticProps() {
  var promotionProducts = filter(products, 'New');
  var hotProducts = filter(products, 'Hot');

  return {
    props: {
      promotionProducts: promotionProducts,
      hotProducts: hotProducts,
    },
  };
}

export default Home;
