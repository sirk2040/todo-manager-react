const TodoForm = ({
  todoText,
  setTodoText,
  handleAdd,
  todoUpdateId,
  handleCancel,
}) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleAdd();
      }}
    >
      <input
        type="text"
        placeholder="type here ...."
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />

      <p>
        <button>{todoUpdateId === "" ? "Add Todo" : "Update"}</button>

        {todoUpdateId !== "" && (
          <button type="button" onClick={() => handleCancel()}>
            cancel
          </button>
        )}
      </p>
    </form>
  );
};
export default TodoForm;
