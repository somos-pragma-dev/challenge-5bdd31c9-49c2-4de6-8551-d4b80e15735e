export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface TaskFormData {
  title: string;
  description: string;
}

export interface ValidationResult {
  isValid: boolean;
  errorMessage?: string;
}

export interface TaskFilter {
  showCompleted?: boolean;
  searchTerm?: string;
}

export type TaskSortField = 'title' | 'createdAt' | 'updatedAt';
export type SortDirection = 'asc' | 'desc';

export interface TaskSortConfig {
  field: TaskSortField;
  direction: SortDirection;
}

export interface UseTasksReturn {
  tasks: Task[];
  filteredTasks: Task[];
  isLoading: boolean;
  error: string | null;
  addTask: (task: TaskFormData) => void;
  updateTask: (id: string, updates: Partial<TaskFormData>) => void;
  deleteTask: (id: string) => void;
  toggleTaskComplete: (id: string) => void;
  setFilter: (filter: TaskFilter) => void;
  setSort: (config: TaskSortConfig) => void;
  clearError: () => void;
}

export interface TaskAction {
  type: 'ADD' | 'UPDATE' | 'DELETE' | 'TOGGLE' | 'SET_ALL' | 'SET_FILTER' | 'SET_SORT' | 'SET_ERROR' | 'CLEAR_ERROR';
  payload?: any;
}

export const createEmptyTask = (): Task => ({
  id: '',
  title: '',
  description: '',
  completed: false,
  createdAt: new Date(),
  updatedAt: new Date(),
});

export const generateTaskId = (): string => {
  return `task-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
};

export const createTaskFromForm = (formData: TaskFormData): Task => {
  const now = new Date();
  return {
    id: generateTaskId(),
    title: formData.title.trim(),
    description: formData.description.trim(),
    completed: false,
    createdAt: now,
    updatedAt: now,
  };
};