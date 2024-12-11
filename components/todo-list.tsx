"use client";

import { TodoItem } from '@/components/todo-item';
import { TodoInput } from '@/components/todo-input';
import { TodoFilters } from '@/components/todo-filters';
import { useTodoStore } from '@/hooks/use-todo-store';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Todo } from '@/lib/types';

function filterTodos(todos: Todo[], filter: string): Todo[] {
  switch (filter) {
    case 'active':
      return todos.filter((todo) => !todo.completed);
    case 'completed':
      return todos.filter((todo) => todo.completed);
    default:
      return todos;
  }
}

export function TodoList() {
  const { todos, filter, addTodo, toggleTodo, deleteTodo, setFilter, clearCompleted } =
    useTodoStore();

  const filteredTodos = filterTodos(todos, filter);
  const hasCompletedTodos = todos.some((todo) => todo.completed);

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center">Todo List</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <TodoInput onAdd={addTodo} />
        <TodoFilters
          currentFilter={filter}
          onFilterChange={setFilter}
          onClearCompleted={clearCompleted}
          hasCompletedTodos={hasCompletedTodos}
        />
        <div className="space-y-2">
          {filteredTodos.length === 0 ? (
            <p className="text-center text-muted-foreground">
              {filter === 'all'
                ? 'No todos yet. Add one above!'
                : `No ${filter} todos.`}
            </p>
          ) : (
            filteredTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
}