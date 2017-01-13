import React, {Component} from 'react'
import './App.css'
import {incrementCount} from './actions/index'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        let action = incrementCount()
        console.log(action)
        // TODO dispatch to the store
    }

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.handleClick}>Increment Count</button>
            </div>
        )
    }
}

export default App
