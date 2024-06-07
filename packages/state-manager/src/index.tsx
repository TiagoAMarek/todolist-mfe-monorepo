import { createContext, useContext, useEffect, useState } from "react";
import { generateTimestampId } from "./services/generateTimestampId";
import { LocalStorageService } from "./services/localstorage";

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

const localStorageService = LocalStorageService();

export const TodosContext = createContext<TodosContextProps | null>(null);

export function TodosContextProvider({ children }: { children: React.ReactNode }) {

  const [todos, setTodos] = useState<Todos[]>(() => {
    // This is causing server side rendering inconsistency, with more time I would fix this
    const persistedTodos = localStorageService.get("todos");
    return persistedTodos ? persistedTodos as Todos[] : [] as Todos[]
  })

  const addNewTodoTask = (todo: string, callback: () => void) => {
    const uniqueID = generateTimestampId();
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

  useEffect(() => {
    localStorageService.set("todos", todos);
  }, [todos]);

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

