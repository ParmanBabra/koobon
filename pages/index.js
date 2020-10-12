import React, { Fragment } from 'react';
import Layout from '../components/layout';
import CommonHeader from '../components/common-header';
import Scripts from '../components/scripts';
import Carousel from '../components/carousel';
import HighlightProduct from '../components/highlight-product';
import ProductList from '../components/product-list';
import Subscribe from '../components/subscribe';

import styles from './index.module.scss';

import products from '../data/products';
import brands from '../data/brands';
import promotions from '../data/promotions';
import { filter } from '../data/product.action';

const Home = (props) => (
  <Fragment>
    <CommonHeader />

    <Layout>
      <Carousel showSearhPanel={true} brands={brands} details={promotions} />
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

    <Scripts />
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
