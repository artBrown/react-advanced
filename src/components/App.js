import React, {Component} from 'react'
import CountWidget from '../containers/CountWidget'

class App extends React.Component {
    render() {
        return (
            <div>
                <CountWidget store={this.props.store} />
            </div>
        )
    }
}

export default App
