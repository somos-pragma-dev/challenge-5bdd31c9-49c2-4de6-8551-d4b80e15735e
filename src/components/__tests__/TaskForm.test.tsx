import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import TaskForm from '../TaskForm';

describe('TaskForm', () => {
  const mockOnSubmit = jest.fn();
  const mockOnCancel = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('Renderizado inicial', () => {
    it('debe renderizar el formulario de creación cuando no hay tarea inicial', () => {
      render(
        <TaskForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} />
      );

      expect(screen.getByText('Nueva Tarea')).toBeInTheDocument();
      expect(screen.getByLabelText('Título *')).toBeInTheDocument();
      expect(screen.getByLabelText('Descripción')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Crear Tarea' })).toBeInTheDocument();
    });

    it('debe renderizar el formulario de edición cuando hay tarea inicial', () => {
      const existingTask = {
        id: '1',
        title: 'Tarea existente',
        description: 'Descripción existente',
        completed: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      render(
        <TaskForm initialTask={existingTask} onSubmit={mockOnSubmit} onCancel={mockOnCancel} />
      );

      expect(screen.getByText('Editar Tarea')).toBeInTheDocument();
      expect(screen.getByLabelText('Título *')).toHaveValue('Tarea existente');
      expect(screen.getByLabelText('Descripción')).toHaveValue('Descripción existente');
      expect(screen.getByRole('button', { name: 'Actualizar' })).toBeInTheDocument();
    });
  });

  describe('Validación de campos', () => {
    it('debe mostrar error cuando el título está vacío al enviar', async () => {
      render(
        <TaskForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} />
      );

      const submitButton = screen.getByRole('button', { name: 'Crear Tarea' });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(/El título es obligatorio/i)).toBeInTheDocument();
      });

      expect(mockOnSubmit).not.toHaveBeenCalled();
    });

    it('debe mostrar error cuando el título tiene menos de 3 caracteres', async () => {
      render(
        <TaskForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} />
      );

      const titleInput = screen.getByLabelText('Título *');
      fireEvent.change(titleInput, { target: { value: 'AB' } });

      const submitButton = screen.getByRole('button', { name: 'Crear Tarea' });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(/El título debe tener al menos 3 caracteres/i)).toBeInTheDocument();
      });

      expect(mockOnSubmit).not.toHaveBeenCalled();
    });

    it('debe mostrar error cuando la descripción excede 500 caracteres', async () => {
      render(
        <TaskForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} />
      );

      const titleInput = screen.getByLabelText('Título *');
      fireEvent.change(titleInput, { target: { value: 'Título válido' } });

      const descriptionInput = screen.getByLabelText('Descripción');
      const longDescription = 'A'.repeat(501);
      fireEvent.change(descriptionInput, { target: { value: longDescription } });

      const submitButton = screen.getByRole('button', { name: 'Crear Tarea' });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(/La descripción no puede exceder 500 caracteres/i)).toBeInTheDocument();
      });

      expect(mockOnSubmit).not.toHaveBeenCalled();
    });

    it('debe validar en tiempo real cuando el usuario corrige el título', async () => {
      render(
        <TaskForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} />
      );

      const titleInput = screen.getByLabelText('Título *');
      fireEvent.change(titleInput, { target: { value: 'AB' } });
      fireEvent.blur(titleInput);

      await waitFor(() => {
        expect(screen.getByText(/El título debe tener al menos 3 caracteres/i)).toBeInTheDocument();
      });

      fireEvent.change(titleInput, { target: { value: 'Título válido' } });

      await waitFor(() => {
        expect(screen.queryByText(/El título debe tener al menos 3 caracteres/i)).not.toBeInTheDocument();
      });
    });
  });

  describe('Envío del formulario', () => {
    it('debe llamar onSubmit con los datos correctos cuando el formulario es válido', async () => {
      render(
        <TaskForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} />
      );

      const titleInput = screen.getByLabelText('Título *');
      fireEvent.change(titleInput, { target: { value: 'Nueva tarea de prueba' } });

      const descriptionInput = screen.getByLabelText('Descripción');
      fireEvent.change(descriptionInput, { target: { value: 'Descripción de prueba' } });

      const submitButton = screen.getByRole('button', { name: 'Crear Tarea' });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(mockOnSubmit).toHaveBeenCalledWith({
          title: 'Nueva tarea de prueba',
          description: 'Descripción de prueba',
          completed: false,
        });
      });
    });

    it('debe limpiar el formulario después de un envío exitoso en modo creación', async () => {
      render(
        <TaskForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} />
      );

      const titleInput = screen.getByLabelText('Título *');
      fireEvent.change(titleInput, { target: { value: 'Tarea para limpiar' } });

      const descriptionInput = screen.getByLabelText('Descripción');
      fireEvent.change(descriptionInput, { target: { value: 'Descripción para limpiar' } });

      const submitButton = screen.getByRole('button', { name: 'Crear Tarea' });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(titleInput).toHaveValue('');
      });
      expect(descriptionInput).toHaveValue('');
    });

    it('debe mantener los datos cuando se cancela la edición', async () => {
      const existingTask = {
        id: '1',
        title: 'Tarea original',
        description: 'Descripción original',
        completed: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      render(
        <TaskForm initialTask={existingTask} onSubmit={mockOnSubmit} onCancel={mockOnCancel} />
      );

      const titleInput = screen.getByLabelText('Título *');
      fireEvent.change(titleInput, { target: { value: 'Tarea modificada' } });

      const cancelButton = screen.getByRole('button', { name: 'Cancelar' });
      fireEvent.click(cancelButton);

      expect(mockOnCancel).toHaveBeenCalled();
      expect(titleInput).toHaveValue('Tarea original');
    });
  });

  describe('Estados de interacción', () => {
    it('debe deshabilitar los campos mientras está enviando', () => {
      render(
        <TaskForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} />
      );

      const titleInput = screen.getByLabelText('Título *') as HTMLInputElement;
      const submitButton = screen.getByRole('button', { name: 'Crear Tarea' });
      const cancelButton = screen.getByRole('button', { name: 'Cancelar' });

      expect(titleInput.disabled).toBe(false);
      expect(submitButton.disabled).toBe(false);
      expect(cancelButton.disabled).toBe(false);
    });

    it('debe mostrar el contador de caracteres de la descripción', () => {
      render(
        <TaskForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} />
      );

      expect(screen.getByText('0/500')).toBeInTheDocument();

      const descriptionInput = screen.getByLabelText('Descripción');
      fireEvent.change(descriptionInput, { target: { value: '12345' } });

      expect(screen.getByText('5/500')).toBeInTheDocument();
    });
  });

  describe('Manejo de errores', () => {
    it('debe manejar errores durante el envío', async () => {
      const mockOnSubmitWithError = jest.fn().mockImplementation(() => {
        throw new Error('Error de red');
      });

      const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

      render(
        <TaskForm onSubmit={mockOnSubmitWithError} onCancel={mockOnCancel} />
      );

      const titleInput = screen.getByLabelText('Título *');
      fireEvent.change(titleInput, { target: { value: 'Tarea con error' } });

      const submitButton = screen.getByRole('button', { name: 'Crear Tarea' });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(consoleSpy).toHaveBeenCalled();
      });

      consoleSpy.mockRestore();
    });
  });
});