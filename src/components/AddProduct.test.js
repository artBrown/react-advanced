import React from 'react'
import { shallow } from 'enzyme'
import AddProduct from './AddProduct'
import sinon from 'sinon'

describe('<AddProduct />', () => {
    it('responds to click events', () => {
        let handleClick = sinon.spy()
        let wrapper = shallow(<AddProduct handleClick={handleClick} />)
        wrapper.find('button').simulate('click')
        expect(handleClick.calledOnce).toEqual(true)
    })
})