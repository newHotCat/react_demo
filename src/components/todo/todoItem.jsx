import React, {Component} from 'react'

class TodoItem extends Component {
    render () {
        return (
            <ul>
                {
                    this.props.items.map((v, k) => {
                        return <li key={k}>{v}</li>
                    })
                }
            </ul>
        )
    }
}

export default TodoItem