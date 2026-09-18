import React, { useState, useEffect } from 'react';
import { Task } from '../types/task';
import { validateTitle, validateDescription } from '../utils/validations';

interface TaskFormProps {
  initialTask?: Task;
  onSubmit: (task: Omit<Task, 'id' | 'createdAt' | 'updatedAt'>) => void;
  onCancel: () => void;
}

interface FormErrors {
  title?: string;
  description?: string;
}

const TaskForm: React.FC<TaskFormProps> = ({ initialTask, onSubmit, onCancel }) => {
  const [title, setTitle] = useState(initialTask?.title || '');
  const [description, setDescription] = useState(initialTask?.description || '');
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isEditing = !!initialTask;

  useEffect(() => {
    if (initialTask) {
      setTitle(initialTask.title);
      setDescription(initialTask.description);
    }
  }, [initialTask]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    const titleError = validateTitle(title);
    if (titleError) {
      newErrors.title = titleError;
    }

    const descriptionError = validateDescription(description);
    if (descriptionError) {
      newErrors.description = descriptionError;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      onSubmit({
        title: title.trim(),
        description: description.trim(),
        completed: initialTask?.completed || false,
      });
      
      if (!isEditing) {
        setTitle('');
        setDescription('');
        setErrors({});
      }
    } catch (error) {
      console.error('Error al guardar la tarea:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    
    if (errors.title) {
      const error = validateTitle(newTitle);
      setErrors(prev => ({ ...prev, title: error }));
    }
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newDescription = e.target.value;
    setDescription(newDescription);
    
    if (errors.description) {
      const error = validateDescription(newDescription);
      setErrors(prev => ({ ...prev, description: error }));
    }
  };

  const handleCancel = () => {
    setTitle(initialTask?.title || '');
    setDescription(initialTask?.description || '');
    setErrors({});
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="task-form" noValidate>
      <h2>{isEditing ? 'Editar Tarea' : 'Nueva Tarea'}</h2>
      
      <div className="form-group">
        <label htmlFor="title">Título *</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={handleTitleChange}
          className={`form-control ${errors.title ? 'error' : ''}`}
          placeholder="Ingresa el título de la tarea"
          disabled={isSubmitting}
          maxLength={100}
        />
        {errors.title && (
          <span className="error-message" role="alert">{errors.title}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="description">Descripción</label>
        <textarea
          id="description"
          value={description}
          onChange={handleDescriptionChange}
          className={`form-control ${errors.description ? 'error' : ''}`}
          placeholder="Ingresa la descripción de la tarea (opcional)"
          disabled={isSubmitting}
          rows={4}
          maxLength={500}
        />
        {errors.description && (
          <span className="error-message" role="alert">{errors.description}</span>
        )}
        <span className="char-count">{description.length}/500</span>
      </div>

      <div className="form-actions">
        <button
          type="submit"
          className="btn-submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Guardando...' : (isEditing ? 'Actualizar' : 'Crear Tarea')}
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="btn-cancel"
          disabled={isSubmitting}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
};

export default TaskForm;