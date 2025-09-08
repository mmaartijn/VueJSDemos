export default {
    name: 'TodoItemComponent',
    template: `<li 
                                
                                class="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                            >
                                <span :class="{ 'line-through text-gray-500': todo.completed }">
                                    {{ todo.text }}
                                </span>
                                <div class="space-x-2">
                                    <button 
                                        @click="toggleTodo()"
                                        :class="todo.completed ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-green-500 hover:bg-green-600'"
                                        class="text-white px-3 py-1 rounded text-sm transition duration-200"
                                    >
                                        {{ todo.completed ? 'Undo' : 'Done' }}
                                    </button>
                                    <button 
                                        @click="removeTodo()"
                                        class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition duration-200"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>`,
    props: ['todo'],
    methods: {
        toggleTodo() {
            this.todo.completed = !this.todo.completed;
        },
        removeTodo() {
            this.$emit('remove-todo', this.todo);
        }
    }
}