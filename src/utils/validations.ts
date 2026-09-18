import { ValidationResult, TaskFormData } from '../types/task';

export const MIN_TITLE_LENGTH = 3;
export const MAX_TITLE_LENGTH = 100;
export const MIN_DESCRIPTION_LENGTH = 5;
export const MAX_DESCRIPTION_LENGTH = 500;

export const validateTaskTitle = (title: string): ValidationResult => {
  if (!title || title.trim().length === 0) {
    return {
      isValid: false,
      errorMessage: 'El título es obligatorio',
    };
  }

  const trimmedTitle = title.trim();

  if (trimmedTitle.length < MIN_TITLE_LENGTH) {
    return {
      isValid: false,
      errorMessage: `El título debe tener al menos ${MIN_TITLE_LENGTH} caracteres`,
    };
  }

  if (trimmedTitle.length > MAX_TITLE_LENGTH) {
    return {
      isValid: false,
      errorMessage: `El título no puede exceder los ${MAX_TITLE_LENGTH} caracteres`,
    };
  }

  return { isValid: true };
};

export const validateTaskDescription = (description: string): ValidationResult => {
  if (!description || description.trim().length === 0) {
    return {
      isValid: false,
      errorMessage: 'La descripción es obligatoria',
    };
  }

  const trimmedDescription = description.trim();

  if (trimmedDescription.length < MIN_DESCRIPTION_LENGTH) {
    return {
      isValid: false,
      errorMessage: `La descripción debe tener al menos ${MIN_DESCRIPTION_LENGTH} caracteres`,
    };
  }

  if (trimmedDescription.length > MAX_DESCRIPTION_LENGTH) {
    return {
      isValid: false,
      errorMessage: `La descripción no puede exceder los ${MAX_DESCRIPTION_LENGTH} caracteres`,
    };
  }

  return { isValid: true };
};

export const validateTaskForm = (formData: TaskFormData): { isValid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};

  const titleValidation = validateTaskTitle(formData.title);
  if (!titleValidation.isValid && titleValidation.errorMessage) {
    errors.title = titleValidation.errorMessage;
  }

  const descriptionValidation = validateTaskDescription(formData.description);
  if (!descriptionValidation.isValid && descriptionValidation.errorMessage) {
    errors.description = descriptionValidation.errorMessage;
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export const validateTaskUpdate = (updates: Partial<TaskFormData>): { isValid: boolean; errors: Record<string, string> } => {
  const errors: Record<string, string> = {};

  if (updates.title !== undefined) {
    const titleValidation = validateTaskTitle(updates.title);
    if (!titleValidation.isValid && titleValidation.errorMessage) {
      errors.title = titleValidation.errorMessage;
    }
  }

  if (updates.description !== undefined) {
    const descriptionValidation = validateTaskDescription(updates.description);
    if (!descriptionValidation.isValid && descriptionValidation.errorMessage) {
      errors.description = descriptionValidation.errorMessage;
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

export const sanitizeInput = (input: string): string => {
  return input.trim().replace(/\s+/g, ' ');
};

export const isValidTaskId = (id: string): boolean => {
  const taskIdPattern = /^task-[0-9]+-[a-z0-9]+$/;
  return taskIdPattern.test(id);
};