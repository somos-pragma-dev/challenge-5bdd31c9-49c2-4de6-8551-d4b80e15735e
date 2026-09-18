import React from 'react';
import { Task } from '../types/task';

interface TaskListProps {
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
  onToggleComplete: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onEdit, onDelete, onToggleComplete }) => {
  if (tasks.length === 0) {
    return (
      <div className="task-list-empty">
        <p>No hay tareas disponibles. ¡Crea una nueva tarea!</p>
      </div>
    );
  }

  const handleToggle = (id: string) => {
    onToggleComplete(id);
  };

  const handleEdit = (task: Task) => {
    onEdit(task);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar esta tarea?')) {
      onDelete(id);
    }
  };

  return (
    <div className="task-list">
      <h2>Lista de Tareas</h2>
      <ul className="task-list-items">
        {tasks.map((task) => (
          <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <div className="task-item-content">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggle(task.id)}
                className="task-checkbox"
              />
              <div className="task-info">
                <h3 className="task-title">{task.title}</h3>
                {task.description && (
                  <p className="task-description">{task.description}</p>
                )}
                <span className="task-date">
                  Creada: {new Date(task.createdAt).toLocaleDateString('es-ES')}
                </span>
              </div>
            </div>
            <div className="task-actions">
              <button
                onClick={() => handleEdit(task)}
                className="btn-edit"
                aria-label={`Editar tarea ${task.title}`}
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(task.id)}
                className="btn-delete"
                aria-label={`Eliminar tarea ${task.title}`}
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="task-list-summary">
        <p>Total de tareas: {tasks.length}</p>
        <p>Tareas completadas: {tasks.filter(t => t.completed).length}</p>
        <p>Tareas pendientes: {tasks.filter(t => !t.completed).length}</p>
      </div>
    </div>
  );
};

export default TaskList;