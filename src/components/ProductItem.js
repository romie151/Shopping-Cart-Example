import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import './ProductItem.css'
import CartContainer from './Cart.js'

const ProductItem = ({ product, onAddToCartClicked }) => (
  //Container for each product 
  <div className="productItem" style={{ marginBottom: 20 }}>
    <Product
      title={product.title}
      price={product.price}
      inventory={product.inventory} 
      /> 
    <button id={product.title}
      onClick={CartContainer}
      disabled={product.inventory > 0 ? '' : 'disabled'}>
      {product.inventory > 0 ? 'ADD TO CART' : 'SOLD OUT'}
    </button>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
