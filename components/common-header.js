import React, { Fragment } from 'react';
import Head from 'next/head';

const CommonHeader = (props) => {
  return (
    <Head>
      <title>Home</title>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1.0'
      ></meta>
    </Head>
  );
};

export default CommonHeader;
