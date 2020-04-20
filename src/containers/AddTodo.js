import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) { 
          return
        }
        dispatch(addTodo(input.value))  
        input.value = ''
      }}>
        <TextField id="standard-basic" label="TODO内容を入力" inputRef={node => input = node} />
        <Button variant="contained" color="primary" type="submit" style={{marginLeft: '4px',}}>
          Add Todo
        </Button>
        <Button variant="contained" color="secondary" type="submit" style={{marginLeft: '4px',}}>
         All Delete
        </Button>

      </form>
    </div>
  )
}

export default connect()(AddTodo)