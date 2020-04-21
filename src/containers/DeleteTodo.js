import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../actions'
import Button from '@material-ui/core/Button'

const buttonCss = {
  display : "inline-block",
  marginLeft : "4px"
}

const DeleteTodo = ({ dispatch }) => {
  return (
    <div style={buttonCss}>
      <form onSubmit={e => {
        e.preventDefault()
        dispatch(deleteTodo())  
      }}>
        <Button variant="contained" color="secondary" type="submit" style={{marginLeft: '4px',}}>
          All Delete
        </Button>
      </form>
    </div>
  )
}

export default connect()(DeleteTodo)