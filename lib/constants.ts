import { PriorityOption, TodoFilter } from './types';

export const PRIORITY_OPTIONS: PriorityOption[] = [
  { label: 'Low', value: 'low', color: 'bg-blue-500' },
  { label: 'Medium', value: 'medium', color: 'bg-yellow-500' },
  { label: 'High', value: 'high', color: 'bg-red-500' },
];

export const FILTER_OPTIONS: TodoFilter[] = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Completed', value: 'completed' },
];