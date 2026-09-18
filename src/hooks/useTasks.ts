import { useState, useReducer, useMemo, useCallback } from 'react';
import {
  Task,
  TaskFormData,
  TaskFilter,
  TaskSortConfig,
  TaskAction,
  UseTasksReturn,
  createTaskFromForm
} from '../types/task';
import { validateTaskForm } from '../utils/validations';

const initialTasks: Task[] = [
  {
    id: 'task-demo-1',
    title: 'Aprender TypeScript',
    description: 'Estudiar los tipos básicos y avanzados de TypeScript',
    completed: true,
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
  },
  {
    id: 'task-demo-2',
    title: 'Crear componentes React',
    description: 'Desarrollar componentes funcionales con hooks',
    completed: false,
    createdAt: new Date('2024-01-16'),
    updatedAt: new Date('2024-01-16'),
  },
];

const initialFilter: TaskFilter = {
  showCompleted: true,
  searchTerm: '',
};

const initialSort: TaskSortConfig = {
  field: 'createdAt',
  direction: 'desc',
};

const taskReducer = (state: { tasks: Task[]; filter: TaskFilter; sort: TaskSortConfig; error: string | null; }, action: TaskAction) => {
  switch (action.type) {
    case 'SET_ALL':
      return { ...state, tasks: action.payload };

    case 'ADD': {
      const newTask = action.payload as Task;
      return { ...state, tasks: [...state.tasks, newTask] };
    }

    case 'UPDATE': {
      const { id, updates } = action.payload as { id: string; updates: Partial<Task> };
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === id
            ? { ...task, ...updates, updatedAt: new Date() }
            : task
        ),
      };
    }

    case 'DELETE':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload),
      };

    case 'TOGGLE':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload
            ? { ...task, completed: !task.completed, updatedAt: new Date() }
            : task
        ),
      };

    case 'SET_FILTER':
      return { ...state, filter: action.payload };

    case 'SET_SORT':
      return { ...state, sort: action.payload };

    case 'SET_ERROR':
      return { ...state, error: action.payload };

    case 'CLEAR_ERROR':
      return { ...state, error: null };

    default:
      return state;
  }
};

export const useTasks = (): UseTasksReturn => {
  const [state, dispatch] = useReducer(taskReducer, {
    tasks: initialTasks,
    filter: initialFilter,
    sort: initialSort,
    error: null,
  });

  const [isLoading, setIsLoading] = useState(false);

  const filteredTasks = useMemo(() => {
    let result = [...state.tasks];

    if (!state.filter.showCompleted) {
      result = result.filter(task => !task.completed);
    }

    if (state.filter.searchTerm && state.filter.searchTerm.trim().length > 0) {
      const searchLower = state.filter.searchTerm.toLowerCase().trim();
      result = result.filter(
        task =>
          task.title.toLowerCase().includes(searchLower) ||
          task.description.toLowerCase().includes(searchLower)
      );
    }

    result.sort((a, b) => {
      const field = state.sort.field;
      const direction = state.sort.direction;

      let comparison = 0;

      if (field === 'title') {
        comparison = a.title.localeCompare(b.title);
      } else if (field === 'createdAt') {
        comparison = new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      } else if (field === 'updatedAt') {
        comparison = new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime();
      }

      return direction === 'asc' ? comparison : -comparison;
    });

    return result;
  }, [state.tasks, state.filter, state.sort]);

  const addTask = useCallback((formData: TaskFormData) => {
    const validation = validateTaskForm(formData);

    if (!validation.isValid) {
      const firstError = Object.values(validation.errors)[0];
      dispatch({ type: 'SET_ERROR', payload: firstError });
      return;
    }

    const newTask = createTaskFromForm(formData);
    dispatch({ type: 'ADD', payload: newTask });
    dispatch({ type: 'CLEAR_ERROR' });
  }, []);

  const updateTask = useCallback((id: string, updates: Partial<TaskFormData>) => {
    if (updates.title === undefined && updates.description === undefined) {
      return;
    }

    const taskToUpdate = state.tasks.find(t => t.id === id);
    if (!taskToUpdate) {
      dispatch({ type: 'SET_ERROR', payload: 'Tarea no encontrada' });
      return;
    }

    const fullUpdate = { ...taskToUpdate, ...updates };
    const validation = validateTaskForm({
      title: fullUpdate.title,
      description: fullUpdate.description,
    });

    if (!validation.isValid) {
      const firstError = Object.values(validation.errors)[0];
      dispatch({ type: 'SET_ERROR', payload: firstError });
      return;
    }

    dispatch({
      type: 'UPDATE',
      payload: { id, updates: { title: updates.title?.trim(), description: updates.description?.trim() } },
    });
    dispatch({ type: 'CLEAR_ERROR' });
  }, [state.tasks]);

  const deleteTask = useCallback((id: string) => {
    const taskExists = state.tasks.some(t => t.id === id);
    if (!taskExists) {
      dispatch({ type: 'SET_ERROR', payload: 'Tarea no encontrada' });
      return;
    }

    dispatch({ type: 'DELETE', payload: id });
    dispatch({ type: 'CLEAR_ERROR' });
  }, [state.tasks]);

  const toggleTaskComplete = useCallback((id: string) => {
    const taskExists = state.tasks.some(t => t.id === id);
    if (!taskExists) {
      dispatch({ type: 'SET_ERROR', payload: 'Tarea no encontrada' });
      return;
    }

    dispatch({ type: 'TOGGLE', payload: id });
    dispatch({ type: 'CLEAR_ERROR' });
  }, [state.tasks]);

  const setFilter = useCallback((filter: TaskFilter) => {
    dispatch({ type: 'SET_FILTER', payload: filter });
  }, []);

  const setSort = useCallback((sortConfig: TaskSortConfig) => {
    dispatch({ type: 'SET_SORT', payload: sortConfig });
  }, []);

  const clearError = useCallback(() => {
    dispatch({ type: 'CLEAR_ERROR' });
  }, []);

  return {
    tasks: state.tasks,
    filteredTasks,
    isLoading,
    error: state.error,
    addTask,
    updateTask,
    deleteTask,
    toggleTaskComplete,
    setFilter,
    setSort,
    clearError,
  };
};

export default useTasks;