import { useTodos } from "@repo/state-manager";
import { useState } from "react";
import { List } from "./list";
import { buttonStyle, inputStyle } from "./styles";

// My starting plan was to use tailwindcss here as well but I didn't want to lose too much time on it
export function TodoList() {
  const [todo, setTodo] = useState<string>("")
  const { addNewTodoTask, todos } = useTodos();

  return (
    <>
      <h1>Todo List</h1>
      <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <label htmlFor="todo">Insert todo task here:</label>
        <input
          style={inputStyle}
          id="todo"
          onChange={(event) => setTodo(event.target.value)}
          value={todo}
        />

        <button style={buttonStyle} onClick={() => addNewTodoTask(todo, () => setTodo(""))}>
          Add
        </button>

      </div>
      <List todos={todos} />
    </>
  )
}
