import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './pages/App'
import Home from './pages/Home'
import About from './pages/About'
import {Route, Router, hashHistory, IndexRoute} from 'react-router'

// ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(
    (<Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home}/>
            <Route path='/home' component={Home}/>
            <Route path='/about' component={About}/>
        </Route>
    </Router>),
    document.getElementById('root'))
