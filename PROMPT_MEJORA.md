# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener un ZIP con el proyecto completo y arrancable.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Lo que le falta a este proyecto

Esto NO lo tenes que adivinar: salio de comparar el proyecto contra la arquitectura declarada del reto y de un analisis estatico del codigo. Completalo TODO.

### Boilerplate del stack que falta

Sin esto no compila ni arranca. Es andamiaje, no toca nada de lo pedagogico:

- **Punto de entrada del stack elegido** — Sin un punto de entrada reconocible, el runtime no tiene por donde arrancar la aplicacion.
- **Capa de interfaz (controller/handler)** — Sin una capa de interfaz explicita, no hay forma de invocar la logica de negocio desde afuera del proceso.

## Como saber que terminaste

```bash
el comando de build o arranque canonico del stack elegido
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Contexto técnico original
Crear una aplicación React con TypeScript, componentes funcionales y hooks

### Reto
- Tema: TypeScript React
- Seniority: junior-l1
- Tipo: practical
- Título: Creación de una aplicación React con TypeScript
- Tiempo estimado: 4 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Configuración del entorno y creación de la estructura básica — objetivo: Tener un entorno de desarrollo configurado y una estructura básica de la aplicación lista para comenzar a desarrollar. — entregable (NO resolver): Entorno de desarrollo configurado y estructura básica de la aplicación creada.
- Fase 2: Desarrollo de la interfaz de usuario — objetivo: Desarrollar la interfaz de usuario para la gestión de tareas, incluyendo la visualización de la lista de tareas y los formularios para añadir y editar tareas. — entregable (NO resolver): Interfaz de usuario completa para la gestión de tareas.
- Fase 3: Implementación de la lógica de negocio — objetivo: Implementar la lógica de negocio para la gestión de tareas, incluyendo la creación, lectura, actualización y eliminación de tareas. — entregable (NO resolver): Lógica de negocio completa para la gestión de tareas.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (ZIP).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: package.json ===
{
  "name": "react-typescript-task-manager",
  "version": "1.0.0",
  "description": "Aplicación de gestión de tareas con React y TypeScript",
  "main": "src/index.tsx",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "lint": "eslint src --ext .ts,.tsx",
    "format": "prettier --write src/**/*.{ts,tsx}"
  },
  "dependencies": {
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "typescript": "5.4.5"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "6.4.2",
    "@testing-library/react": "14.3.1",
    "@types/react": "18.2.79",
    "@types/react-dom": "18.2.25",
    "eslint": "8.57.0",
    "prettier": "3.2.5",
    "jest": "29.7.0",
    "react-scripts": "5.0.1"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "keywords": [
    "react",
    "typescript",
    "task-manager",
    "hooks"
  ],
  "author": "",
  "license": "MIT"
}

// === ARCHIVO: tsconfig.json ===
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": [
      "ES2020",
      "DOM",
      "DOM.Iterable"
    ],
    "jsx": "react-jsx",
    "module": "ESNext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "allowJs": true,
    "noEmit": true,
    "isolatedModules": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "skipLibCheck": true,
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "src/*"
      ]
    }
  },
  "include": [
    "src"
  ],
  "exclude": [
    "node_modules",
    "build",
    "dist"
  ],
  "compileOnSave": false,
  "buildOnSave": false
}

// === ARCHIVO: src/index.tsx ===
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.css';

/**
 * Punto de entrada de la aplicación React.
 * Este archivo es responsable de inicializar el árbol de componentes
 * y montarlo en el elemento root del DOM.
 * 
 * El uso de createRoot permite el modo concurrente de React 18,
 * lo que habilita características como concurrent rendering y
 * transiciones de estado fluidas.
 */
const container: HTMLElement | null = document.getElementById('root');

if (!container) {
  throw new Error('No se encontró el elemento root en el DOM');
}

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Registro del service worker para producción (PWA)
if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        console.log('Service Worker registrado:', registration);
      })
      .catch((error) => {
        console.error('Error al registrar Service Worker:', error);
      });
  });
}

// Tipos globales para el DOM
declare global {
  interface Window {
    serviceWorker?: ServiceWorkerContainer;
  }
}

// Exportación vacía para indicar que es un módulo
export {};

// === ARCHIVO: src/App.tsx ===
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


// === ARCHIVO: src/components/TaskList.tsx ===
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

// === ARCHIVO: src/components/TaskForm.tsx ===
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

// === ARCHIVO: src/components/__tests__/TaskForm.test.tsx ===
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

// === ARCHIVO: src/types/task.ts ===
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

// === ARCHIVO: src/utils/validations.ts ===
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

// === ARCHIVO: src/hooks/useTasks.ts ===
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


// === ARCHIVO: src/styles/main.css ===
:root {
  --color-primary: #4a90d9;
  --color-primary-hover: #357abd;
  --color-secondary: #6c757d;
  --color-success: #28a745;
  --color-danger: #dc3545;
  --color-warning: #ffc107;
  --color-background: #f8f9fa;
  --color-surface: #ffffff;
  --color-text-primary: #212529;
  --color-text-secondary: #6c757d;
  --color-border: #dee2e6;
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.25rem;
  --font-size-xl: 1.5rem;
  --transition-fast: 150ms ease;
  --transition-normal: 250ms ease;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--font-family);
  font-size: var(--font-size-base);
  color: var(--color-text-primary);
  background-color: var(--color-background);
  min-height: 100vh;
}

#root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 800px;
  margin: 0 auto;
  padding: var(--spacing-lg);
  width: 100%;
}

.app__header {
  text-align: center;
  margin-bottom: var(--spacing-xl);
  padding-bottom: var(--spacing-md);
  border-bottom: 2px solid var(--color-border);
}

.app__title {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-xs);
}

.app__subtitle {
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
}

.app__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.task-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.task-list__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-sm);
}

.task-list__title {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--color-text-primary);
}

.task-list__count {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  background-color: var(--color-border);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
}

.task-list__empty {
  text-align: center;
  padding: var(--spacing-xl);
  color: var(--color-text-secondary);
  background-color: var(--color-surface);
  border-radius: var(--radius-md);
  border: 2px dashed var(--color-border);
}

.task-list__items {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: var(--spacing-md);
  background-color: var(--color-surface);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--transition-normal), transform var(--transition-fast);
}

.task-item:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.task-item--completed {
  opacity: 0.7;
}

.task-item--completed .task-item__title {
  text-decoration: line-through;
  color: var(--color-text-secondary);
}

.task-item__content {
  flex: 1;
  min-width: 0;
}

.task-item__title {
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-xs);
  word-break: break-word;
}

.task-item__description {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: 1.4;
  word-break: break-word;
}

.task-item__actions {
  display: flex;
  gap: var(--spacing-xs);
  margin-left: var(--spacing-md);
  flex-shrink: 0;
}

.task-form {
  background-color: var(--color-surface);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
}

.task-form__title {
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin-bottom: var(--spacing-md);
  color: var(--color-text-primary);
}

.task-form__group {
  margin-bottom: var(--spacing-md);
}

.task-form__label {
  display: block;
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-xs);
}

.task-form__input,
.task-form__textarea {
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--font-size-base);
  font-family: var(--font-family);
  color: var(--color-text-primary);
  background-color: var(--color-surface);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-sm);
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}

.task-form__input:focus,
.task-form__textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(74, 144, 217, 0.15);
}

.task-form__input--error,
.task-form__textarea--error {
  border-color: var(--color-danger);
}

.task-form__textarea {
  min-height: 100px;
  resize: vertical;
}

.task-form__error {
  font-size: var(--font-size-sm);
  color: var(--color-danger);
  margin-top: var(--spacing-xs);
}

.task-form__actions {
  display: flex;
  gap: var(--spacing-sm);
  justify-content: flex-end;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--font-size-base);
  font-weight: 600;
  font-family: var(--font-family);
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: background-color var(--transition-fast), transform var(--transition-fast), box-shadow var(--transition-fast);
}

.btn:hover {
  transform: translateY(-1px);
}

.btn:active {
  transform: translateY(0);
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.btn--primary {
  background-color: var(--color-primary);
  color: white;
}

.btn--primary:hover:not(:disabled) {
  background-color: var(--color-primary-hover);
  box-shadow: var(--shadow-sm);
}

.btn--secondary {
  background-color: var(--color-secondary);
  color: white;
}

.btn--secondary:hover:not(:disabled) {
  background-color: #5a6268;
}

.btn--success {
  background-color: var(--color-success);
  color: white;
}

.btn--danger {
  background-color: var(--color-danger);
  color: white;
}

.btn--danger:hover:not(:disabled) {
  background-color: #c82333;
}

.btn--small {
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: var(--font-size-sm);
}

.btn--icon {
  padding: var(--spacing-xs);
  width: 32px;
  height: 32px;
}

.btn--icon-small {
  padding: 2px;
  width: 24px;
  height: 24px;
  font-size: var(--font-size-sm);
}

@media (max-width: 600px) {
  .app {
    padding: var(--spacing-md);
  }

  .task-item {
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  .task-item__actions {
    margin-left: 0;
    width: 100%;
    justify-content: flex-end;
  }

  .task-form__actions {
    flex-direction: column;
  }

  .task-form__actions .btn {
    width: 100%;
  }
}

```
