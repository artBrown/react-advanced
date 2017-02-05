import shoppingCart from './shoppingCart'

describe('shoppingCart', () => {
    test('can add new products', () => {
        expect(2+2).toBe(4)
        expect(
            shoppingCart([], {type: 'ADD_TO_CART', payload: { id: 22 }})
        ).toEqual([22])
    })

    test('can remove products', () => {
        let state = []
        state = shoppingCart(state, {type: 'ADD_TO_CART', payload: { id: 22 }})
        expect(
            shoppingCart(state, {type: 'REMOVE_FROM_CART', payload: { id: 22 }})
        ).toEqual([])
    })
})
