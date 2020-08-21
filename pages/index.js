import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import Slide from '../components/slide';
import Brands from '../components/brands';
import Products from '../components/products';

import products from '../data/products';
import { filter } from '../data/product.action';

const Home = (props) => (
  <div>
    <Head>
      <title>Home</title>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0'
      ></meta>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Layout>
      <Slide />
      <Brands />
      <Products products={props.newProducts} label='New Product' />
      <Products products={props.hotProducts} label='Hot Product' />
    </Layout>
  </div>
);

export async function getStaticProps() {
  var newProducts = filter(products, 'New');
  var hotProducts = filter(products, 'Hot');

  return {
    props: {
      newProducts: newProducts,
      hotProducts: hotProducts,
    },
  };
}

export default Home;
