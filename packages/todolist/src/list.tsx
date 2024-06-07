import { useTodos } from "@repo/state-manager";
import { listItemStyle } from "./styles";
import { Todos } from "./types";

type ListProps = {
  todos: Todos[];
}

export function List({ todos }: ListProps) {
  const { toggleTodoCompletion } = useTodos()

  return (
    <ul >
      {todos.map((todo) => (
        <li key={todo.id} style={{
          ...listItemStyle,

        }}>
          <input type="checkbox" style={{ marginRight: "6px" }} onChange={() => toggleTodoCompletion(todo.id)} />
          <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>{todo.text}</span>
        </li>
      ))}
    </ul >
  )
}
