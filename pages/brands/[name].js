import React, { Fragment } from 'react';

import { slugify } from './../../util/format';

import Layout from '../../components/layout';
import CommonHeader from '../../components/common-header';
import Carousel from '../../components/carousel';
import ProductList from '../../components/product-list';


import brands from '../../data/brands';
import { get as getBrand } from '../../data/brands.action';

import products from '../../data/products';
import { filter } from '../../data/product.action';

import promotions from '../../data/promotions';

const Brand = (props) => {
  let brands = [props.brand];
  let { promotions, products } = props;
  return (
    <div>
      <CommonHeader />
      <Layout>
        <Carousel showSearhPanel={false} brands={brands} details={promotions} />
        <ProductList title={props.brand.title} products={products} />
      </Layout>
    </div>
  );
};

export async function getStaticPaths() {
  let paths = brands.map((item) => ({
    params: {
      name: slugify(item.brand),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  let brand = getBrand(brands, params.name);
  let promotionResults = promotions.filter((item) => item.brand == brand.brand);
  let productResults = filter(products, brand.brand);

  return {
    props: {
      brand,
      promotions: promotionResults,
      products: productResults,
    },
  };
}

export default Brand;
