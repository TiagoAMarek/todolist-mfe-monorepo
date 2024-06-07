import { useEffect, useState } from "react";
import { buttonStyle, inputStyle } from "./styles";
import { Todos } from "./types";
import { List } from "./list";

function generateTimestampID() {
  return Date.now().toString();
}

export function TodoList() {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todos[]>([])


  const addNewTodoTask = () => {
    const uniqueID = generateTimestampID();
    setTodos([...todos, { id: uniqueID, completed: false, text: todo }])
    setTodo("")
  }

  const toggleTodoCompletion = (targetId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === targetId) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    console.log(todos)
  }, [todos])

  return (
    <>
      <h1>Todo List</h1>
      <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <input
          style={inputStyle}
          id="todo"
          onChange={(event) => setTodo(event.target.value)}
          value={todo}
        />

        <button style={buttonStyle} onClick={addNewTodoTask}>
          Add
        </button>

      </div>
      <List todos={todos} toggleTodoCompletion={toggleTodoCompletion} />
    </>
  )
}
