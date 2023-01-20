// Write your code here
import React from 'react'

const TodoItem = props => {
  const {details, deleteItem} = props
  const {id, title} = details
  const checkItem = () => {
    deleteItem(id)
  }
  return (
    <li>
      <p>{title}</p>
      <button type="button" onClick={checkItem}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
