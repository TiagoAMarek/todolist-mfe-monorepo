import { TodoList } from "@repo/todolist";

export default function Home() {
  return (
    <div className="font-sans flex w-full p-8">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
        <TodoList></TodoList>
      </main>
    </div>
  );
}
