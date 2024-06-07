import { createContext, useContext, useState } from "react";

export type Todos = {
  id: string
  completed: boolean
  text: string
}

export type TodosContextProps = {
  todos: Todos[]
  setTodos: React.Dispatch<React.SetStateAction<Todos[]>>
  toggleTodoCompletion: (targetId: string) => void
  addNewTodoTask: (todo: string, callback: () => void) => void
};

function generateTimestampID() {
  return Date.now().toString();
}

export const TodosContext = createContext<TodosContextProps | null>(null);

export function TodosContextProvider({ children }: { children: React.ReactNode }) {
  const [todos, setTodos] = useState<Todos[]>([])

  const addNewTodoTask = (todo: string, callback: () => void) => {
    const uniqueID = generateTimestampID();
    setTodos([...todos, { id: uniqueID, completed: false, text: todo }])
    callback()
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

  return (
    <TodosContext.Provider
      value={{
        addNewTodoTask,
        setTodos,
        todos,
        toggleTodoCompletion,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}

export function useTodos() {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error("useTodos must be used within a TodosContextProvider");
  }
  return context;
}
