import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const buttonCss = {
  display : "inline-block",
  marginLeft : "4px"
}

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div style={buttonCss}>
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
      </form>
    </div>
  )
}

export default connect()(AddTodo)