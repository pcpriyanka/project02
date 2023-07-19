import React, { Component } from 'react'
import ToDo from './ToDo.js';

export default class TodoList extends Component {
    render() {
        return (
            <ul>
                {this.props.todos.map(todo =>
                    <ToDo
                        key={todo.id}
                        {...todo}
                    />
                )}
            </ul>
        )
    }
}