<template>
    <div id="product-list-one">
        <h2>{{ title }}</h2>
        <ul>
            <li :key="product.id" v-for="product in products">{{ product.name }} | ${{ product.price }}</li>
        </ul>
        <hr>
        <button @click="reducePrice(4)">Reduce Price</button>
    </div>
</template>

<script>
    // import { mapMutations } from 'vuex';
    import { mapActions } from 'vuex';

    export default {
        name: "ProductListOne",
        props: [''],
        data(){
            return {
                title: 'Product List One'
            }
        },
        computed: {
            products(){
                return this.$store.state.products;
            }
        },
        methods: {
            ...mapActions([
                'reducePrice'
            ])
        }

    }
</script>

<style scoped>

</style>