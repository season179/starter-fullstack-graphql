"use client";

import { Todo } from '@/lib/types';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PRIORITY_OPTIONS } from '@/lib/constants';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  const priorityColor = PRIORITY_OPTIONS.find(
    (option) => option.value === todo.priority
  )?.color;

  return (
    <div className="flex items-center gap-3 p-4 bg-card rounded-lg border">
      <div className={cn('w-1 h-8 rounded-full', priorityColor)} />
      <Checkbox
        checked={todo.completed}
        onCheckedChange={() => onToggle(todo.id)}
        className="h-5 w-5"
      />
      <span
        className={cn(
          'flex-1',
          todo.completed && 'line-through text-muted-foreground'
        )}
      >
        {todo.title}
      </span>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onDelete(todo.id)}
        className="text-destructive hover:text-destructive hover:bg-destructive/10"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
}