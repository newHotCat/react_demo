import React, { Component } from 'react'
import {
  Route,
  Link
} from "react-router-dom"
class Parent extends Component{
  constructor(props){
      super(props)
  }
  render(){
    const active={background:'green'}
    const ListItemLink = (matchs) => {
      console.log('matchs',matchs)
        const {to,...rest}=matchs

        return (
            <Route path={to} children={(matchD) => {
              console.log('matchD',matchD)
              const {match,history}=matchD
              return(
                <li style={match?active:{}}>
                  <Link to={to} {...rest} />
                </li>
              )
          }
          } />
        )
    }
    const Abc = (props) => {
        console.log(props)
        return (
            <h3>{props.children}</h3>
        )
    }
    return (<div>
          这里是children属性进行渲染页
          <ul>
            <ListItemLink to="/children/child1" name="child1">children1</ListItemLink>
            <ListItemLink to="/children/child2" >children2</ListItemLink>
            <Abc name="name">我是child-ABC</Abc>
          </ul>
          <hr/>
          {this.props.children}
      </div>)
  }
}

export default Parent