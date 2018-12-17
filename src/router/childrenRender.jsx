import React from "react"
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"

import Parent from "../components/test/children/Parent"
// import Child1 from "../components/test/children/Child1"
// import Child2 from "../components/test/children/Child2"

const ParentRouter=()=>{
  return (
    <Parent>
        <Switch>
            <Route path={`/children/child1`} render={()=><h5>子组件child1</h5> } />
            <Route path="/children/child2" render={()=><h5>子组件child2</h5> } />
        </Switch>
    </Parent>
  )
}

export default ParentRouter