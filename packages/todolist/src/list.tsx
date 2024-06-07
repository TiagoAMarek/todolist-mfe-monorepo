import { listItemStyle } from "./styles";
import { Todos } from "./types";

type ListProps = {
  todos: Todos[];
  toggleTodoCompletion: (targetId: string) => void;
}

export function List({ todos, toggleTodoCompletion }: ListProps) {

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
