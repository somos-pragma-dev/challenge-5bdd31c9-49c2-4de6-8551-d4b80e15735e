# Creación de una aplicación React con TypeScript

Debes crear una aplicación React que utilice TypeScript, componentes funcionales y hooks. La aplicación simulará un sistema de gestión de tareas donde los usuarios pueden crear, leer, actualizar y eliminar tareas. Los usuarios deben poder ver una lista de tareas, añadir nuevas tareas y editar o eliminar las existentes. El sistema debe validar que las tareas tengan un título y una descripción antes de ser guardadas.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | TypeScript React |
| **Nivel** | junior-l1 |
| **Tipo** | practical |
| **Tiempo estimado** | 4 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Configuración del entorno y creación de la estructura básica

**Objetivo:** Tener un entorno de desarrollo configurado y una estructura básica de la aplicación lista para comenzar a desarrollar.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Configura un entorno de desarrollo para una aplicación React con TypeScript.
- Crea la estructura básica de la aplicación incluyendo la carpeta 'src' y los archivos necesarios.

**Entregable:** Entorno de desarrollo configurado y estructura básica de la aplicación creada.

<details>
<summary>Pistas de conocimiento</summary>

- Recuerda que TypeScript requiere una configuración adicional en el proyecto React.
- Los componentes funcionales y hooks son una parte esencial de React.

</details>

### Fase 2: Desarrollo de la interfaz de usuario

**Objetivo:** Desarrollar la interfaz de usuario para la gestión de tareas, incluyendo la visualización de la lista de tareas y los formularios para añadir y editar tareas.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Crea los componentes necesarios para mostrar la lista de tareas y los formularios para añadir y editar tareas.
- Asegúrate de que la interfaz de usuario sea intuitiva y fácil de usar.

**Entregable:** Interfaz de usuario completa para la gestión de tareas.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza componentes funcionales y hooks para gestionar el estado de las tareas.
- Asegúrate de que los formularios validen los datos de entrada.

</details>

### Fase 3: Implementación de la lógica de negocio

**Objetivo:** Implementar la lógica de negocio para la gestión de tareas, incluyendo la creación, lectura, actualización y eliminación de tareas.

**Tiempo estimado:** 1 hora

**Instrucciones:**

- Implementa la lógica para crear, leer, actualizar y eliminar tareas.
- Asegúrate de que la aplicación maneje correctamente los errores y las validaciones.

**Entregable:** Lógica de negocio completa para la gestión de tareas.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza hooks para gestionar el estado de las tareas.
- Asegúrate de que la aplicación maneje correctamente los errores y las validaciones.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es un componente funcional en React y cómo se utiliza?
- **paraQueSirve**: ¿Para qué sirven los hooks en React y cómo se aplican en este reto?
- **comoSeUsa**: ¿Cómo se usa TypeScript en una aplicación React para validar los datos de entrada?
- **erroresComunes**: ¿Qué errores comunes puedes encontrar al desarrollar una aplicación React con TypeScript y cómo los solucionaste en este reto?
- **queDecisionesImplica**: ¿Qué decisiones implica la implementación de la lógica de negocio en este reto y cómo las tomaste?

## Criterios de Evaluacion

- Configuración correcta del entorno de desarrollo para una aplicación React con TypeScript.
- Estructura básica de la aplicación creada correctamente.
- Interfaz de usuario completa y funcional para la gestión de tareas.
- Lógica de negocio completa y funcional para la gestión de tareas.
- Manejo correcto de errores y validaciones en la aplicación.

## Como trabajar con un asistente de IA

Hay dos caminos, elegi uno:

- **AGENTS.md** (recomendado) — instrucciones nativas del repo. Abri esta carpeta con tu agente local (Claude Code, Cursor, Codex, Copilot, Gemini) y las carga solo. Sabe que archivos faltan y con que comando se verifica, y completa el scaffold escribiendo en disco.
- **PROMPT_MEJORA.md** — para copiar y pegar en un chat (claude.ai, ChatGPT). Devuelve un ZIP con el proyecto. Sirve si no tenes un agente en el IDE.

Ninguno de los dos resuelve las fases del reto: eso es tu trabajo.

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
el comando de build o arranque canonico del stack elegido
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
