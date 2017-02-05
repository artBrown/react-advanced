import React from 'react'
import { shallow } from 'enzyme'
import Product from './product'

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
})
