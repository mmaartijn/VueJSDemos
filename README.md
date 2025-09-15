# VueJS Demos

This repository contains demo projects for learning Vue.js, organized by week.

## Week 1: Basic Counter Demo

**Folder:** `VueWeek1`

- Simple counter component implemented in vanilla JavaScript.
- Demonstrates basic component structure and reactivity.
- Files:
  - `index.html`: Main HTML file.
  - `js/app.js`: Application logic.
  - `js/components/counterComponent.js`: Counter component.

## Week 2: Todo List Demo

**Folder:** `VueWeek2`

- Todo list application with multiple components.
- Features:
  - Add new todo items.
  - Display a list of todos.
  - Individual todo item component.
  - Counter component reused from Week 1.
- Files:
  - `index.html`: Main HTML file.
  - `js/app.js`: Application logic.
  - `js/components/addTodoFormComponent.js`: Form to add todos.
  - `js/components/todoListComponent.js`: List of todos.
  - `js/components/todoItemComponent.js`: Individual todo item.
  - `js/components/counterComponent.js`: Counter component.


## Week 3: Vue CLI Project & REST API Demo

**Folder:** `VueWeek3`

- Vue.js project scaffolded with Vite and Vue CLI.
- Demonstrates a more advanced project structure with single-file components and routing.
- Integrates with a mock REST API using `json-server` and `db/db.json` for course data.
- Features:
  - Home, About, and Counter components (`src/components/`).
  - Vue Router for navigation (`src/router/`).
  - Axios for HTTP requests to the mock API.
  - Example course data in `db/db.json`.
- Files:
  - `index.html`: Main entry point for Vite.
  - `src/App.vue`: Root Vue component.
  - `src/components/`: Contains `homeComponent.vue`, `aboutComponent.vue`, `counterComponent.vue`.
  - `src/router/`: Vue Router setup.
  - `db/db.json`: Mock database for course, lessons, and exercises.

### How to Run Week 3 Demo

1. Install dependencies:
  - Run `npm install` in the `VueWeek3` folder.
2. Start the development server:
  - Run `npm run dev` in the `VueWeek3` folder.
3. Start the mock API server:
  - Run `json-server --watch db/db.json --port 3000` in the `VueWeek3` folder.
4. Open the app in your browser at the provided local URL (usually `http://localhost:5173`).
5. The app will fetch course data from the mock API and display lessons and exercises.

---

These demos are intended for educational purposes and to illustrate core Vue.js concepts such as components, reactivity, event handling, routing, and API integration.
