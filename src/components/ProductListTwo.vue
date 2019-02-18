<template>
    <div id="product-list-two">
        <h2>{{ title }}</h2>
        <ul>
            <li :key="product.id" v-for="product in saleProducts">{{ product.name }} | ${{ product.price }}</li>
        </ul>
    </div>

</template>

<script>
    export default {
        name: "ProductListTwo",
        props: [''],
        data(){
            return {
                title: 'Product List Two'
            }
        },
        computed: {
            products(){
                return this.$store.state.products;
            },
            saleProducts(){
                return this.$store.getters.saleProducts;
            }
        }

    }
</script>

<style scoped>

</style>