import React from "react"
import {
  // HashRouter as Router,
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"
import App from "../App.jsx"
// import Index from "../components/Index"
import About from "../About.jsx"
import ChildrenRender from "./childrenRender"
import Todo from '../components/todo'

const baseRouter=()=>{
  return (
    <Router>
      <App>
        <Switch>
          <Route exact path="a" component={About}></Route>
          <Route path="/b" render={() =>( <h1>123</h1>)}></Route>
          <Route path='/children' render={ChildrenRender}></Route>
          <Route path='/todo' component={Todo}/>
        </Switch>
      </App>
    </Router>
  )
}

export default baseRouter