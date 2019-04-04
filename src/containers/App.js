import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import './App.css'
import icon from '../images/icon.svg';

const App = () => (
  <div>
    <div id="nav">
      <h2 id="storeName">Acme Store</h2>
      {/* SVG icon image taken from the wireframe */}
      <img id="shoppingCart" src={icon}></img>
      <text id="Your-cart-is-empty">
        <tspan x="25" y="14">Your cart is empty</tspan>
      </text>
    </div>

    {/* <div id="line"></div> */}
    <ProductsContainer />
    {/* <hr /> */}
    {/* <CartContainer /> */}
  </div>
)

export default App


