import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import './Cart.css'

const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
    )
  ) : (
    <em id="add">Please add some products to cart.</em>
  )

  return (
    <div className="container">
      <h3 className="title">Your Cart</h3>
      <div>{nodes}</div>
      <p>Total: &#36;{total}</p>
      <button id="btn" onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
