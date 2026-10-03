import { useState } from "react";
import "./App.css";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

const App = () => {
  const [todos, setTodo] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Practice JavaScript", completed: false },
    { id: 3, text: "Build a project", completed: true },
  ]);

  const [todoText, setTodoText] = useState("");
  const [filter, setFilter] = useState("all");
  const [todoUpdateId, setTodoUpdateId] = useState("");

  const handleCheckbox = (id) => {
    const selectedTodo = todos.map((todo) => {
      return todo.id === id
        ? { ...todo, completed: todo.completed === true ? false : true }
        : todo;
    });
    setTodo(selectedTodo);
  };
  const handleDelete = (id) => {
    const selectedTodo = todos.filter((todo) => todo.id !== id);
    setTodo(selectedTodo);
  };
  const handleAdd = () => {
    if (todoText.trim() === "") {
      return alert("Todo cant be empty....");
    }
    if (todoUpdateId === "") {
      let newId = crypto.randomUUID();

      setTodo([...todos, { id: newId, text: todoText, completed: false }]);
      setTodoText("");
    } else {
      const updatedTodo = todos.map((todo) => {
        if (todoUpdateId === todo.id) {
          return {
            ...todo,
            text: todoText,
          };
        } else {
          return todo;
        }
      });
      setTodo(updatedTodo);
      setTodoUpdateId("");
      setTodoText("");
    }
  };

  const handleAll = () => {
    setFilter("all");
  };
  const handleActive = () => {
    setFilter("active");
  };
  const handleComlete = () => {
    setFilter("completed");
  };

  const handleEdit = (id) => {
    const selectedTodo = todos.find((todo) => todo.id === id);
    console.log(selectedTodo);
    setTodoText(selectedTodo.text);
    setTodoUpdateId(selectedTodo.id);
  };
  const handleCancel = () => {
    setTodoText("");
    setTodoUpdateId("");
  };
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") {
      return todo.completed === true;
    } else if (filter === "active") {
      return todo.completed === false;
    } else if (filter === "all") {
      return todo;
    }
  });

  return (
    <div className="todo-container">
      <h1>Todo Manager</h1>
      <button onClick={() => handleAll()}>All</button>
      <button onClick={handleActive}>Active</button>
      <button onClick={handleComlete}>Completed</button>

      <p>Todos: {todos.filter((todo) => todo.completed === false).length}</p>
      <TodoForm
        todoText={todoText}
        setTodoText={setTodoText}
        handleAdd={handleAdd}
        todoUpdateId={todoUpdateId}
        handleCancel={handleCancel}
      />
      <h2>Todo List</h2>

      <TodoList
        filteredTodos={filteredTodos}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleCheckbox={handleCheckbox}
      />
    </div>
  );
};
export default App;
