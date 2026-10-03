import TodoItem from "./TodoItem";
const TodoList = ({
  filteredTodos,
  handleEdit,
  handleDelete,
  handleCheckbox,
}) => {
  return (
    <div>
      {filteredTodos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleCheckbox={handleCheckbox}
          />
        );
      })}
    </div>
  );
};
export default TodoList;
