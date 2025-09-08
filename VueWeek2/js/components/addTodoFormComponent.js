export default {
    name: 'AddTodoFormComponent',
    template: `<div class="flex gap-2">
                    <form type=submit @submit.prevent="addTodo" class="flex w-full">
                            <input 
                                label="New Todo"
                                v-model="newTodo" 
                                @keyup.enter="addTodo"
                                type="text" 
                                placeholder="Add a new todo..."
                                class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                            >
                            <button 
                                type="submit"
                                class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition duration-200"
                            >
                                Add
                            </button>
                            </form>
                        </div>`,
    methods: {
    // Todo methods
        addTodo() {
            if (this.newTodo.trim()) {
                this.$emit('add-todo', this.newTodo.trim());
                this.newTodo = '';
            }
        },
    }
}