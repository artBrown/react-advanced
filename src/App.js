import React, {Component} from 'react'
import './App.css'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            count: this.state.count + 1
        })
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
