import React from 'react'
import PropTypes from 'prop-types'
import './ProductList.css'

const ProductsList = ({ title, children }) => (
  <div className="outside">
    {/* <h3 className="titles">{title}</h3> */}
    <div className="stuff">{children}</div>
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductsList
