import React from 'react'
import AddTodo from '../containers/AddTodo'
import DeleteTodo from '../containers/DeleteTodo'

const InputArea  = () => {
    return (
        <div>
            <AddTodo />
            <DeleteTodo />
        </div>
    )
}

export default InputArea