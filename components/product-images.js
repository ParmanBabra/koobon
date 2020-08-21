import React, { Component, Fragment } from 'react';
import Link from 'next/link';

import classNames from 'classnames';
//import styles from './products.module.scss';

class ProductImage extends Component {
  state = {
    index: 0,
    image: null,
  };

  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    const { index } = this.state;

    this.setImage(index);
  };

  setImage = (index) => {
    let image = this.props.images[index];
    this.setState({ image });
  };

  render() {
    let image = this.state.image;
    return (
      <Fragment>
        <div>
          <img src={image}/>
        </div>
      </Fragment>
    );
  }
}

export default ProductImage;
