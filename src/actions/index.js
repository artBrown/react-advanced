import {INCREMENT_COUNT} from '../constants/actionTypes'

function incrementCount() {
    return {
        type: INCREMENT_COUNT
    }
}

function addToCart(id) {
    return {
        type: 'ADD_TO_CART',
        payload: id
    }
}

export {incrementCount, addToCart}
