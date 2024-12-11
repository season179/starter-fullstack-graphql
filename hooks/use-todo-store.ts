"use client";

import { create } from 'zustand';
import { Todo, TodoStore } from '@/lib/types';

export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  filter: 'all',
  addTodo: (title: string, priority: Todo['priority']) =>
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false,
          createdAt: new Date(),
          priority,
        },
      ],
    })),
  toggleTodo: (id: string) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
  deleteTodo: (id: string) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  setFilter: (filter) => set({ filter }),
  clearCompleted: () =>
    set((state) => ({
      todos: state.todos.filter((todo) => !todo.completed),
    })),
}));