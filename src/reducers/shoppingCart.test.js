import shoppingCart from './shoppingCart'
test('shoppingCart', () => {
    expect(2+2).toBe(4)
    expect(
        shoppingCart([], {type: 'ADD_TO_CART', payload: { id: 22 }})
    ).toEqual([22])
})