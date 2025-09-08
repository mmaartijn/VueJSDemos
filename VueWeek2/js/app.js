// Vue 3 Application
const { createApp } = Vue;
import counterComponent from './components/counterComponent.js';
import todoListComponent from './components/todoListComponent.js';

createApp({
    components: {
        CounterComponent: counterComponent,
        TodoListComponent: todoListComponent
    },
    data() {
        return {

            // Page content
            title: 'Welcome to Vue 3!',
            subtitle: 'A simple demo with Tailwind CSS styling',
            
            // Input functionality
            message: '',
        }
    },
    methods: {
        
        
        
    },
    computed: {
        
    },
    mounted() {
        // This runs when the component is mounted
        console.log('Vue app has been mounted!');
        
    }
}).mount('#app');
