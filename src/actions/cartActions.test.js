import {addToCart} from './index'

describe('addToCart', () => {
    it('will return an action object of type ADD_TO_CART', () => {
        expect(addToCart(22).type).toEqual('ADD_TO_CART')
    })

    it('will return an action object with a payload of 22 when passed 22', () => {
        expect(addToCart(22).payload).toEqual(22)
    })
})