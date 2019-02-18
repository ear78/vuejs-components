<template>
    <ul>
        <router-link to="/" tag="li" active-class="active" exact><a>Todos</a></router-link>
        <router-link to="/product1" tag="li" active-class="active" exact><a>Sale Priced</a></router-link>
        <router-link to="/product2" tag="li" active-class="active" exact><a>Regular Priced</a></router-link>
        <router-link to="/identicon" tag="li" active-class="active" exact><a>Identicon</a></router-link>
        <header-link></header-link>
    </ul>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    ul {
        display: flex;
        justify-content: center;
        padding-left: 0;
        background: #f2f2f2;
        padding: 15px 0;
        border: 1px solid gainsboro;
        border-radius: 3px;
        box-shadow: 0 3px 8px rgba(0,0,0,.05);
    }

    li {
        list-style-type: none;
        margin-right: 10px;
    }

    a {
        text-decoration: none;
        color: #707070;
    }

    li.active a {
        color: #4ac08e;
    }

</style>