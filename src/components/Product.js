import React from 'react'
import PropTypes from 'prop-types'
import './Product.css'

const Product = ({ price, inventory, title }) => (
  <div className="productContainer">
    <div id="product">
      <p>Title: {title}</p>
      <p>Price: {price}</p>
      <p>Inventory: {inventory}</p>
      {title} - &#36;{price}{inventory ? ` x ${inventory}` : null}
    </div>
  </div >
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string
}

export default Product
