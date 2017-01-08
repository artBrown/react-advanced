import React, { Component } from 'react'
import './App.css'
import {Route, Router, hashHistory} from 'react-router'

class HomeComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <p>Welcome to the home page</p>
            </div>
        )
    }
}

class AboutComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <p>About us</p>
            </div>
        )
    }
}


class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={HomeComponent} />
                <Route path='/home' component={HomeComponent} />
                <Route path='/about' component={AboutComponent} />
            </Router>
        )
    }
}

export default App
