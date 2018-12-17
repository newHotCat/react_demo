import React, {Component} from 'react'

class AddTodo extends Component {

    clickAdd () {
        const value = this.input.value
        this.props.onAddTodo(value)
        this.input.value = ''
    }

    render () {
        return (
            <div>
                <input type="text" ref={(v) => this.input = v}/>
                <button onClick={this.clickAdd.bind(this)}>添加</button>
            </div>
        )
    }
}

export default AddTodo