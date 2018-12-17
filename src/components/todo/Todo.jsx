import React from 'react'

import AddTodo from './addTodo'
import TodoItem from './todoItem'
import {connect} from 'react-redux'
import {addTodo} from '../../store/action'

let items = [
    1, 2, 3
]

class Todo extends React.Component {
    constructor (props) {
        super(props)
        console.log(this.props)
    }

    render () {
        return (
            <div>
                <AddTodo onAddTodo={(v) => {
                    this.props.dispatch(addTodo(v))
                }}/>
                <TodoItem items={this.props.items}/>
            </div>
        )}
}
const select = (state) => ({
    items: state.todos
})
export default connect(select)(Todo)