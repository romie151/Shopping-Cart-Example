import React from 'react'
import PropTypes from 'prop-types'
import './Product.css'
import chronograph from '../images/chronograph.svg';
import quartz from '../images/quartz.svg';
import weekender from '../images/weekender.svg';

const Product = ({ price, inventory, title }) => (
<div className="productContainer">
  <div id="product">
    <div id="productDetails">
      <img src={chronograph}></img>
      <p id="productTitle">Title: {title}</p>
      <p id="productPrice">&#36;{price}</p>
      <p id="productInventory">{inventory} REMAINING</p>
      {/* {title} - &#36; {price} {inventory ? ` x ${inventory}` : null} */}
    </div>
  </div >
</div >
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product


