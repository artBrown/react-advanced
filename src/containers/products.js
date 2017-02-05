import {connect} from 'react-redux'

import Products from '../components/products'

// class Products extends React.Component {
//     render() {
//         <Products/>
//     }
// }

/* store.getState */
function mapStateToProps(state) {
    return {
        products: state.products
    }
}

/* store.dispatch */
function mapDispatchToProps(dispatch) {
    return {
        handleClick(id) {
            dispatch({
                type: 'ADD_TO_CART',
                payload: {
                    id
                }
            })
        }
    }
}

let ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(Products)

export default ProductsContainer


