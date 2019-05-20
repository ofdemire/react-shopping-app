import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Thumb from './../../Thumb';
import { formatPrice } from '../../../services/util';

class CartProduct extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    removeProduct: PropTypes.func.isRequired
  };

  state = {
    isMouseOver: false
  };

  handleMouseOver = () => {
    this.setState({ isMouseOver: true });
  };

  handleMouseOut = () => {
    this.setState({ isMouseOver: false });
  };

  render() {
    const { product, removeProduct } = this.props;

    const classes = ['shelf-item'];

    if (!!this.state.isMouseOver) {
      classes.push('shelf-item--mouseover');
    }

    return (
      <div className={classes.join(' ')}>
        <div
          className="shelf-item__del"
          onMouseOver={() => this.handleMouseOver()}
          onMouseOut={() => this.handleMouseOut()}
          onClick={() => removeProduct(product)}
        />
        <Thumb
          classes="shelf-item__thumb"
          src={product.imgSource}
          alt={product.title}
        />
        <div className="shelf-item__details">
          <p className="title">{product.title}</p>
          <p className="desc">
            Cost: ${product.price}
          </p>
        </div>
        <div className="shelf-item__price">
          <span><p className="desc">Profit </p><p>${(parseFloat(product.salePrice) - parseFloat(product.price)).toFixed(2)}</p></span>
        </div>
      </div>
    );
  }
}

export default CartProduct;
