<template>
    <div>
        <p>Please Add An Item...</p>
        <input type="text" v-model="todoItem">
        <button @click="addTodoItem(todoItem)">+</button>
        <ul v-if="todos.length">
            <li
                :key="todo.id"
                v-for="todo in todos">
                {{ todo.text }}
                <button @click="removeTodoItem(todo)">-</button>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex';

    export default {
        name: "todo",
        data(){
            return {
                todoItem: ''
            }
        },
        computed: {
            ...mapState([
                'todos'
            ])
        },
        methods: {
            ...mapActions([
                'addTodo',
                'removeTodo'
            ]),
            addTodoItem(value){
                let item = { text: value }
                this.addTodo(item)
                this.todoItem = '';
            },
            removeTodoItem(todo){
                this.removeTodo(todo)
            }
        }

    }
</script>

<style scoped>
    li {
        list-style-type: none;
    }
</style>