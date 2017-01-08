import React, { Component } from 'react'
import './App.css'

class NavComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <button onClick={this.props.gotoAbout}>Goto About</button>
                <button onClick={this.props.gotoHome}>Goto Home</button>
            </div>
        )
    }
}


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


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            view: <HomeComponent/>
        }
        this.gotoAbout = this.gotoAbout.bind(this)
        this.gotoHome = this.gotoHome.bind(this)
    }

    gotoAbout() {
        this.setState({
            view: <AboutComponent/>
        })
    }

    gotoHome() {
        this.setState({
            view: <HomeComponent/>
        })
    }

    render() {
        return (
            <div>
                <NavComponent gotoAbout={this.gotoAbout} gotoHome={this.gotoHome}/>
                {this.state.view}
            </div>
        )
    }
}

export default App;
