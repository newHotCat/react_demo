import React from 'react'
import Layout1 from './components/common/layout1.jsx'
import {Link} from 'react-router-dom'

// import * as _ from 'lodash'

class App extends React.Component {
    constructor () {
        super()
    }

    render () {
        return (
            <div className="wrap">
                <Link to="/b">b</Link>
                <Link to="/">/</Link>
                {this.props.children}
                <Layout1/>
            </div>
        )
    }
}

export default App