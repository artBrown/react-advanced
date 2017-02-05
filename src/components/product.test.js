import React from 'react'
import { shallow, mount } from 'enzyme'
import Product from './product'
import sinon from 'sinon'

describe('<Product />', () => {
    it('should contain one h2 tag', () => {
        let wrapper = shallow(<Product />)
        expect(
            wrapper.find('h2')
        ).toHaveLength(1)
    })

    it('should render a product description', () => {
        let description = 'lorem ip sum'
        let wrapper = shallow(<Product description={description}/>)
        expect(
            wrapper.find('p').text()
        ).toEqual(description)
    })

    it('will call componentDidMount', () => {
        sinon.spy(Product.prototype, 'componentDidMount')
        let wrapper = mount(<Product/>)
        expect(Product.prototype.componentDidMount.callCount).toEqual(1)
        Product.prototype.componentDidMount.restore()
    })
})
