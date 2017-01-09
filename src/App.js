import React, {Component} from 'react'
import {Link} from 'react-router'
import './App.css'

import constants from './constants/app-constants'
import {incrementActions} from './actions/app-actions'
import {TodoStore} from './stores/count-store'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: TodoStore.getCount()
        }
        this.increment = this.increment.bind(this)
        this._onChange = this._onChange.bind(this)
    }

    componentDidMount() {
        TodoStore.addChangeListener(this._onChange)
    }

    componentWillUnount() {
        TodoStore.removeChangeListener(this._onChange)
    }

    _onChange() {
        this.setState({
            count: TodoStore.getCount()
        })
    }


    increment() {
        incrementActions.incrementCount()
    }

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increase Count</button>
            </div>
        )
    }
}

export default App
