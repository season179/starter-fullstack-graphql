import { TodoList } from '@/components/todo-list';

export default function Home() {
  return (
    <main className="container mx-auto py-8 px-4">
      <TodoList />
    </main>
  );
}