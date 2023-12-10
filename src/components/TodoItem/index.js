import './index.css'

const TodoItem = props => {
  const {todoList, d} = props
  const {id, title} = todoList

  const deleteButton = () => {
    d(id)
  }

  return (
    <li className="card-item">
      <p className="title">{title}</p>
      <button className="delete-button" type="button" onClick={deleteButton}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
