const TodoItem = ({ todo, handleEdit, handleDelete, handleCheckbox }) => {
  return (
    <div className="Todo" >
      <p>{todo.text}</p>
      <p>Completed: {todo.completed.toString()}</p>
      <button onClick={() => handleEdit(todo.id)}>Edit</button>
      <button onClick={() => handleDelete(todo.id)}>Delete</button>
      <input
        type="Checkbox"
        checked={todo.completed}
        onChange={() => handleCheckbox(todo.id)}
      />
    </div>
  );
};
export default TodoItem;
