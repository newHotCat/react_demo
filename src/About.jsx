import React from 'react'
import Layout1 from './components/common/layout1.jsx'
import {Switch, Route} from 'react-router-dom'


// import * as _ from 'lodash'

class About extends React.Component {
    constructor () {
        super()
    }

    render () {
        return (
            <div className="awrap">
                <h1>我是about</h1>
                {this.props.children}
                <Layout1/>
            </div>
        )
    }
}

export default About