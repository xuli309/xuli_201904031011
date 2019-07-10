import React from 'react'

import PropTypes from 'prop-types'
import Product from './Product'

const ProductItem = ({ product, onAddToCart }) => (
    <div style={{ marginBottom: 20 }}>
        <Product title={product.title}
            price={product.price}
            quantity={product.inventory}></Product>
        <button onClick={onAddToCart} disabled={product.inventory > 0 ? '' : 'disabled'}>
            {product.inventory > 0 ? '添加购物车' : '售完'}
        </button>
    </div>
)

ProductItem.propTypes = {
    product:PropTypes.shape({
        title:PropTypes.string.isRequired,
        price:PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired
    }).isRequired,
    onAddToCart:PropTypes.func.isRequired
}



export default ProductItem