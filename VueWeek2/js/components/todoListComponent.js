import todoItemComponent from './todoItemComponent.js';
import addTodoFormComponent from './addTodoFormComponent.js';

export default {
    name: 'TodoListComponent',
    components: {
        TodoItemComponent: todoItemComponent,
        AddTodoFormComponent: addTodoFormComponent
    },
    template: `<!-- Todo List Section -->
                <div class="bg-white rounded-lg shadow-md p-6">
                    <h2 class="text-2xl font-semibold text-gray-800 mb-4">Simple Todo List</h2>
                    <div class="space-y-4">
                        <add-todo-form-component 
                            v-model:new-todo="newTodo" 
                            @add-todo="addTodo"></add-todo-form-component>
                         <ul class="space-y-2" v-if="todos.length > 0">
                            <todo-item-component 
                                v-for="todo in todos" 
                                :key="todo" :todo="todo"
                                @remove-todo.once="removeTodo"></todo-item-component>      
                        </ul>
                        
                        <div v-else class="text-center text-gray-500 py-4">
                            No todos yet. Add one above!
                        </div>
                    </div>
                </div>
        
   `,
    data() {
        return {
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
        removeTodo(todo) {
            console.log('In the parent component, removing todo at index:', todo);
            this.todos = this.todos.filter(t => t !== todo);
            // this.todos.splice(index, 1);
        },
        addTodo(newTodoText) {
            this.todos.push({ text: newTodoText, completed: false });
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
        console.log(`Total todos: ${this.totalTodos}, Completed: ${this.completedTodos}`);
    }
}