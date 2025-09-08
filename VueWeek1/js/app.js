// Vue 3 Application
const { createApp } = Vue;
import counterComponent from './components/counterComponent.js';

createApp({
    components: {
        CounterComponent: counterComponent
    },
    data() {
        return {

            // Page content
            title: 'Welcome to Vue 3!',
            subtitle: 'A simple demo with Tailwind CSS styling',
            
            // Input functionality
            message: '',
            
            // Todo functionality
            newTodo: '',
            todos: [
                { text: 'Learn Vue 3', completed: false },
                { text: 'Style with Tailwind CSS', completed: true },
                { text: 'Build awesome apps', completed: false }
            ]
        }
    },
    methods: {
        // Todo methods
        addTodo() {
            if (this.newTodo.trim()) {
                this.todos.push({
                    text: this.newTodo.trim(),
                    completed: false
                });
                this.newTodo = '';
            }
        },
        removeTodo(index) {
            this.todos.splice(index, 1);
        },
        toggleTodo(index) {
            this.todos[index].completed = !this.todos[index].completed;
        }
    },
    computed: {
        // Example of computed property
        completedTodos() {
            return this.todos.filter(todo => todo.completed).length;
        },
        totalTodos() {
            return this.todos.length;
        }
    },
    mounted() {
        // This runs when the component is mounted
        console.log('Vue app has been mounted!');
        console.log(`Total todos: ${this.totalTodos}, Completed: ${this.completedTodos}`);
    }
}).mount('#app');
