<template>
    <div>
        <h2>
            Hello From Todo's
        </h2>
        <todo></todo>
    </div>
</template>

<script>
    import Todo from './Todo.vue';

    export default {
        name: "Todos",
        components: {
            Todo
        }
    }
</script>

<style scoped>

</style>