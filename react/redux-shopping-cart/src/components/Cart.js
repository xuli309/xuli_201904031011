import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const Cart = ({ products, total, onCheckoutClicked }) => {
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
      <h5>请选择商品到购物车</h5>
    )

  return (
    <div>
      <h3>你的购物车</h3>
      <hr />
      <div>{nodes}</div>
      <p>总价格: ￥{total}</p>
      <button onClick={onCheckoutClicked}
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
