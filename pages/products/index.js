import React, { Fragment } from 'react';

import { slugify } from './../../util/format';

import Layout from '../../components/layout';
import CommonHeader from '../../components/common-header';
import Carousel from '../../components/carousel';
import ProductList from '../../components/product-list';


import brands from '../../data/brands';
import { get as getBrand } from '../../data/brands.action';

import products from '../../data/products';

import promotions from '../../data/promotions';

const Products = (props) => {
  let { promotions, products } = props;
  return (
    <div>
      <CommonHeader />
      <Layout>
        <Carousel showSearhPanel={false} brands={[]} details={promotions} />
        <ProductList title="สินค้าทั้งหมด" products={products} />
      </Layout>
    </div>
  );
};



export async function getStaticProps({ params }) {
  let promotionResults = promotions.filter((item) => !item.brand);

  return {
    props: {
      promotions: promotionResults,
      products: products,
    },
  };
}

export default Products;
