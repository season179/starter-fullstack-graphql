"use client";

import { Button } from '@/components/ui/button';
import { FILTER_OPTIONS } from '@/lib/constants';
import { TodoStore } from '@/lib/types';
import { cn } from '@/lib/utils';

interface TodoFiltersProps {
  currentFilter: TodoStore['filter'];
  onFilterChange: (filter: TodoStore['filter']) => void;
  onClearCompleted: () => void;
  hasCompletedTodos: boolean;
}

export function TodoFilters({
  currentFilter,
  onFilterChange,
  onClearCompleted,
  hasCompletedTodos,
}: TodoFiltersProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2">
      <div className="flex flex-wrap gap-2">
        {FILTER_OPTIONS.map((filter) => (
          <Button
            key={filter.value}
            variant="ghost"
            size="sm"
            onClick={() => onFilterChange(filter.value)}
            className={cn(
              'text-sm',
              currentFilter === filter.value && 'bg-secondary'
            )}
          >
            {filter.label}
          </Button>
        ))}
      </div>
      {hasCompletedTodos && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onClearCompleted}
          className="text-sm text-destructive hover:text-destructive hover:bg-destructive/10"
        >
          Clear completed
        </Button>
      )}
    </div>
  );
}