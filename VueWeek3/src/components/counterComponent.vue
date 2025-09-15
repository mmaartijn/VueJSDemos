<script setup>
    import { onMounted, ref, defineProps } from 'vue';

    const props = defineProps({
        'initialCount': {
            type: Number,
            default: 0
        },
    });

    let count = ref(props.initialCount);

    onMounted(() => {
        alert(count.value);
    });

    function increment() {
        count.value++;
    }
    function decrement() {
        count.value--;
    }

    function reset() {
        count.value = props.initialCount;
    }
</script>

<template>
<!-- Counter Section -->
        <div class="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 class="text-2xl font-semibold text-gray-800 mb-4">Counter Example</h2>
            <div class="text-center">
                <p class="text-6xl font-bold text-indigo-600 mb-4">{{ count }}</p>
                <div class="space-x-4">
                    <button 
                        @click="increment" 
                        class="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition duration-200"
                    >
                        Increment
                    </button>
                    <button 
                        @click="decrement" 
                        class="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition duration-200"
                    >
                        Decrement
                    </button>
                    <button 
                        @click="reset" 
                        class="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition duration-200"
                    >
                        Reset
                    </button>
                </div>
            </div>
        </div>
</template>

<style>

</style>