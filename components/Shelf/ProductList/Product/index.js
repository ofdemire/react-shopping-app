import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { OverflowDetector } from 'react-overflow';

import Thumb from '../../../Thumb';
import { formatPrice } from '../../../../services/util';
import { addProduct } from '../../../../services/cart/actions';



const Product = ({ product, addProduct }) => {
  product.quantity = 1;

  let formattedPrice = formatPrice(product.price, product.currencyId);

  let USAformattedPrice = formatPrice(product.salePrice, product.currencyId);

  let amazon_com = "https://www.blogcdn.com/www.joystiq.com/media/2011/10/amazon-logo.png";

  let amazon_ca = "https://d1ic4altzx8ueg.cloudfront.net/global/images/providers/buy-on-amazon-png-1.png";

  let prime_logo = "https://allycommerce.com/wp-content/uploads/2018/08/small-and-light-prime-logo._V509606070_.png";

  let productInstallment;

  var style = {
    display: "inline-block"
  }

  function handleOverflowChange(isOverflowed) {
      console.log(isOverflowed);
  }



  return (
    <div
      className="shelf-item"
      data-sku={product.ISBN}
    >
      {product.isPrime && (
        <div className="shelf-stopper">
          <img src={prime_logo}/>
          <p>in Amazon.ca</p>
          </div>
        
      )}



      <div onClick={()=> window.open(product.url, "_blank")}>
        <Thumb 
          classes="shelf-item__thumb"
          src={product.imgSource}
          alt={product.title}
        />
      </div>
      <div className="shelf-innerProduct">
        <OverflowDetector onOverflowChange={handleOverflowChange} >
          <p className="shelf-item__title">{product.title}</p>
        </OverflowDetector>
      <div className ="shelf-price-container">
        <div className="shelf-item__price">
          <div className="val">
            <div>
              <small>US$</small>
              <b>{formattedPrice.substr(0, formattedPrice.length - 3)}</b>
              <span>{formattedPrice.substr(formattedPrice.length - 3, 3)}</span>
            </div>
            <img className="image_container" src={amazon_ca} alt="amazon.ca" />
          </div>
        </div>
        <div onClick={() => addProduct(product)} class="next"><span></span></div>
        <div className="shelf-item__price">
          <div className="val">
            <div>
              <small>US$</small>
              <b>{USAformattedPrice.substr(0, USAformattedPrice.length - 3)}</b>
              <span>{USAformattedPrice.substr(USAformattedPrice.length - 3, 3)}</span>
            </div>
            <img className="image_container" src={amazon_com} alt="amazon.com" />
          </div>
        </div>
        <div>
        <p className="text_container"><span>Sales Rank => </span><span className="color_change">#{product.salesRank} in </span><span>Amazon.com</span></p>
        </div>
       </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired
};

export default connect(
  null,
  { addProduct }
)(Product);
