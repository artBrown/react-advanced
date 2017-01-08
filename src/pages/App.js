import React, {Component} from 'react'
import { Link } from 'react-router'
import './App.css'

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <p>Welcome to the App</p>
                <Link to='/home'>Home</Link>
                <Link to='/about'>About</Link>
            </div>
        )
    }
}

export default App
