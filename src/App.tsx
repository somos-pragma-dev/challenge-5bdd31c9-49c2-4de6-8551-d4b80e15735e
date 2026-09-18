import React, { useState, useCallback, useMemo } from 'react';
import { TaskList } from './components/TaskList';
import { TaskForm } from './components/TaskForm';
import { Task, TaskFormData } from './types/task';
import { validateTaskForm } from './utils/validations';

/**
 * Componente raíz de la aplicación de gestión de tareas.
 * 
 * Este componente actúa como orquestador principal, coordinando el estado
 * de las tareas y la interacción entre los componentes TaskList y TaskForm.
 * Implementa el patrón de "lifting state up" para compartir el estado
 * entre componentes hermanos.
 * 
 * La estructura sigue los principios de React funcional con hooks:
 * - useState para el estado local de tareas
 * - useCallback para memoizar funciones que pasan como props
 * - useMemo para calcular valores derivados
 */
interface AppState {
  tasks: Task[];
  editingTask: Task | null;
  error: string | null;
}

const initialState: AppState = {
  tasks: [],
  editingTask: null,
  error: null,
};

const App: React.FC = () => {
  const [state, setState] = useState<AppState>(initialState);

  // Memoización del handler de creación de tareas
  const handleCreateTask = useCallback((formData: TaskFormData) => {
    const validation = validateTaskForm(formData);
    
    if (!validation.isValid) {
      setState((prev) => ({
        ...prev,
        error: validation.errors.join(', '),
      }));
      return;
    }

    const newTask: Task = {
      id: crypto.randomUUID(),
      title: formData.title.trim(),
      description: formData.description.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    setState((prev) => ({
      ...prev,
      tasks: [...prev.tasks, newTask],
      error: null,
    }));
  }, []);

  // Memoización del handler de actualización de tareas
  const handleUpdateTask = useCallback((taskId: string, formData: TaskFormData) => {
    const validation = validateTaskForm(formData);
    
    if (!validation.isValid) {
      setState((prev) => ({
        ...prev,
        error: validation.errors.join(', '),
      }));
      return;
    }

    setState((prev) => ({
      ...prev,
      tasks: prev.tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              title: formData.title.trim(),
              description: formData.description.trim(),
              updatedAt: new Date().toISOString(),
            }
          : task
      ),
      editingTask: null,
      error: null,
    }));
  }, []);

  // Handler de eliminación de tareas
  const handleDeleteTask = useCallback((taskId: string) => {
    setState((prev) => ({
      ...prev,
      tasks: prev.tasks.filter((task) => task.id !== taskId),
    }));
  }, []);

  // Handler para marcar tarea como completada
  const handleToggleComplete = useCallback((taskId: string) => {
    setState((prev) => ({
      ...prev,
      tasks: prev.tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              completed: !task.completed,
              updatedAt: new Date().toISOString(),
            }
          : task
      ),
    }));
  }, []);

  // Handler para iniciar edición de tarea
  const handleStartEdit = useCallback((task: Task) => {
    setState((prev) => ({
      ...prev,
      editingTask: task,
    }));
  }, []);

  // Handler para cancelar edición
  const handleCancelEdit = useCallback(() => {
    setState((prev) => ({
      ...prev,
      editingTask: null,
      error: null,
    }));
  }, []);

  // Memoización de estadísticas de tareas
  const taskStats = useMemo(() => {
    const total = state.tasks.length;
    const completed = state.tasks.filter((t) => t.completed).length;
    const pending = total - completed;
    const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

    return { total, completed, pending, completionRate };
  }, [state.tasks]);

  // Limpiar error cuando el usuario comienza a interactuar
  const handleClearError = useCallback(() => {
    setState((prev) => ({ ...prev, error: null }));
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Gestor de Tareas</h1>
        <div className="task-stats">
          <span className="stat-item">
            Total: <strong>{taskStats.total}</strong>
          </span>
          <span className="stat-item">
            Pendientes: <strong>{taskStats.pending}</strong>
          </span>
          <span className="stat-item">
            Completadas: <strong>{taskStats.completed}</strong>
          </span>
          <span className="stat-item">
            Progreso: <strong>{taskStats.completionRate}%</strong>
          </span>
        </div>
      </header>

      {state.error && (
        <div className="error-banner" role="alert">
          <p>{state.error}</p>
          <button onClick={handleClearError} aria-label="Cerrar error">
            ×
          </button>
        </div>
      )}

      <main className="app-main">
        <section className="task-form-section">
          <h2>
            {state.editingTask ? 'Editar Tarea' : 'Nueva Tarea'}
          </h2>
          <TaskForm
            initialData={state.editingTask}
            onSubmit={state.editingTask
              ? (data) => handleUpdateTask(state.editingTask!.id, data)
              : handleCreateTask
            }
            onCancel={state.editingTask ? handleCancelEdit : undefined}
          />
        </section>

        <section className="task-list-section">
          <h2>Lista de Tareas</h2>
          {state.tasks.length === 0 ? (
            <div className="empty-state">
              <p>No hay tareas aún. ¡Crea tu primera tarea!</p>
            </div>
          ) : (
            <TaskList
              tasks={state.tasks}
              onDelete={handleDeleteTask}
              onToggleComplete={handleToggleComplete}
              onEdit={handleStartEdit}
            />
          )}
        </section>
      </main>

      <footer className="app-footer">
        <p>
          Aplicación de gestión de tareas construida con React 18 y TypeScript
        </p>
      </footer>
    </div>
  );
};

export default App;