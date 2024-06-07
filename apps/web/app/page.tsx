import { TodoList } from "@repo/todolist";

// I would have liked to add more integration tests to cover the pages, but I ran out of time
export default function Home() {
  return (
    <div className="font-sans flex w-full p-8">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
        <TodoList></TodoList>
      </main>
    </div>
  );
}
