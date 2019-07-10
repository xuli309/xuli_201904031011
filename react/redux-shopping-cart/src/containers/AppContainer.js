import React from 'react'
import ProductsContainer from './ProductsContainer';
import CartContainer from './CartContainer'

const AppContainer = () => (
    <div>
        <h1>购物车</h1>
         <hr />
        <ProductsContainer></ProductsContainer>
        <hr />
        <CartContainer />
    </div>
)

export default AppContainer
