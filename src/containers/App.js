import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import './App.css'

const App = () => (
  <div>
    <div id="nav">
      <h2 id="storeName">Acme Store</h2>
      <svg id="shoppingCart" width="17px" height="14px" viewBox="0 0 17 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
        <g id="v2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Desktop" transform="translate(-1054.000000, -75.000000)" fill="#292929" fill-rule="nonzero">
            <g id="Header" transform="translate(82.000000, 55.000000)">
              <g id="Cart-Btn" transform="translate(972.000000, 19.000000)">
                <path d="M16.9337172,4.87274964 C16.866376,4.77793318 16.757373,4.72154612 16.6408278,4.72154612 L3.53442727,4.72154612 L2.56579092,1.26236146 C2.52251295,1.10720725 2.38100656,1 2.21992632,1 L0.359153264,1 C0.160900662,1 0,1.16090066 0,1.35915326 C0,1.55740587 0.160900662,1.71830653 0.359153264,1.71830653 L1.94768815,1.71830653 L4.21071287,9.800512 C3.38035052,9.8136211 2.70855434,10.4922412 2.70855434,11.3256563 C2.70855434,12.167332 3.39328004,12.8520577 4.23495571,12.8520577 L4.69521062,12.8520577 C4.63577075,12.9924866 4.60290823,13.146743 4.60290823,13.3085415 C4.60290823,13.9562744 5.12996564,14.4833318 5.77751898,14.4833318 C6.42525189,14.4833318 6.95230931,13.9562744 6.95230931,13.3085415 C6.95230931,13.146743 6.91926721,12.9924866 6.86000692,12.8520577 L10.6630808,12.8520577 C10.5887361,13.0061345 10.5458173,13.1781689 10.5458173,13.3606187 C10.5458173,14.0083516 11.0728747,14.5354091 11.720428,14.5354091 C12.3679814,14.5354091 12.8950388,14.0083516 12.8950388,13.3606187 C12.8950388,13.1783484 12.85212,13.006314 12.7777752,12.8520577 L13.408628,12.8520577 C13.6068806,12.8520577 13.7677812,12.691157 13.7677812,12.4929044 C13.7677812,12.2946518 13.6068806,12.1337512 13.408628,12.1337512 L4.23477613,12.1337512 C3.78924651,12.1337512 3.42668129,11.771186 3.42668129,11.3256563 C3.42668129,10.8801267 3.78924651,10.5175615 4.23477613,10.5175615 L4.68299941,10.5175615 L14.8730754,10.5175615 C15.0530112,10.5175615 15.2006232,10.3846748 15.2268414,10.2121016 L16.9798684,5.19921996 C17.0182978,5.08931906 17.0010585,4.96774568 16.9337172,4.87274964 Z M11.7202485,13.8167434 C11.4686616,13.8167434 11.2639442,13.612026 11.2639442,13.3602596 C11.2639442,13.1084931 11.4686616,12.9037758 11.7202485,12.9037758 C11.9718353,12.9037758 12.1765527,13.1084931 12.1765527,13.3602596 C12.1765527,13.612026 11.9718353,13.8167434 11.7202485,13.8167434 Z M6.2338232,13.3081824 C6.2338232,13.5597692 6.02892626,13.7646662 5.7773394,13.7646662 C5.52575254,13.7646662 5.32103518,13.5599488 5.32103518,13.3081824 C5.32103518,13.0564159 5.52575254,12.8516986 5.7773394,12.8516986 C6.02892626,12.8516986 6.2338232,13.0565955 6.2338232,13.3081824 Z M15.8557187,6.23753205 L13.3842055,6.23753205 L13.4975184,5.43967307 L16.1347808,5.43967307 L15.8557187,6.23753205 Z M15.2381547,8.00348865 L13.133337,8.00348865 L13.282206,6.95601815 L15.6046706,6.95601815 L15.2381547,8.00348865 Z M14.6103548,9.79925496 L12.8781586,9.79925496 L13.0311579,8.72179517 L14.9872861,8.72179517 L14.6103548,9.79925496 Z M10.3125472,9.79925496 L10.3125472,8.72179517 L12.3056683,8.72179517 L12.1524894,9.79925496 L10.3125472,9.79925496 Z M7.75429854,9.79925496 L7.60111968,8.72179517 L9.59424071,8.72179517 L9.59424071,9.79925496 L7.75429854,9.79925496 Z M4.95613546,9.79925496 L4.65444672,8.72179517 L6.87563008,8.72179517 L7.02862937,9.79925496 L4.95613546,9.79925496 Z M10.3125472,6.23753205 L10.3125472,5.43967307 L12.7718492,5.43967307 L12.6585364,6.23753205 L10.3125472,6.23753205 Z M12.5565368,6.95583857 L12.4076678,8.00330907 L10.3125472,8.00330907 L10.3125472,6.95583857 L12.5565368,6.95583857 Z M9.59424071,6.23753205 L7.24807202,6.23753205 L7.13475916,5.43967307 L9.59406114,5.43967307 L9.59406114,6.23753205 L9.59424071,6.23753205 Z M9.59424071,6.95583857 L9.59424071,8.00330907 L7.49912015,8.00330907 L7.35025112,6.95583857 L9.59424071,6.95583857 Z M6.77345098,8.00348865 L4.4533209,8.00348865 L4.15989268,6.95601815 L6.62458195,6.95601815 L6.77345098,8.00348865 Z M6.40908999,5.43985265 L6.52240285,6.23771162 L3.95894643,6.23771162 L3.7355531,5.43985265 L6.40908999,5.43985265 Z" id="Shape"></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <text id="Your-cart-is-empty">
        <tspan x="25" y="14">Your cart is empty</tspan>
      </text>
    </div>

    <hr />
    <ProductsContainer />
    <hr />
    <CartContainer />
  </div>
)

export default App


