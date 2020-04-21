import React from 'react'
import PropTypes from 'prop-types'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';

const Todo = ({ onClick, completed, text }) => (
  <FormGroup row>
    <FormControlLabel 
      control={
        <Checkbox 
          onChange={onClick} 
          checked={completed ? true : false} />
      } 
      label={text} />
    </FormGroup>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo