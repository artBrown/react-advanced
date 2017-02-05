import React from 'react'
import CountWidget from '../containers/CountWidget'
import Products from '../containers/products'
import ShoppingCart from '../containers/shoppingCart'

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome to our shop</h1>
                <Products />
                <ShoppingCart />
            </div>
        )
    }
}

export default App
