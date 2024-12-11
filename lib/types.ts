export type Todo = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
  priority: 'low' | 'medium' | 'high';
};

export type TodoStore = {
  todos: Todo[];
  filter: 'all' | 'active' | 'completed';
  addTodo: (title: string, priority: Todo['priority']) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  setFilter: (filter: TodoStore['filter']) => void;
  clearCompleted: () => void;
};

export type TodoFilter = {
  label: string;
  value: TodoStore['filter'];
};

export type PriorityOption = {
  label: string;
  value: Todo['priority'];
  color: string;
};