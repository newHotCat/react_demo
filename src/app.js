import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'


import Router from './router/index.jsx'
import store from './store'

ReactDOM.render(
<Provider store={store}><Router /></Provider>, 
document.getElementById('app'))
