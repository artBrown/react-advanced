import React, {Component} from 'react'
import {Link} from 'react-router'
import './App.css'

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <header>
                    <h1>Our App</h1>
                    <nav>
                        <Link to='/home'>Home</Link>
                        <Link to='/about'>About</Link>
                    </nav>
                </header>
                {this.props.children}
                <footer>
                    Our Footer
                </footer>
            </div>
        )
    }
}

export default App
