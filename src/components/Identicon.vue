<template>
    <div class="hello">
        <h3>{{ title }}</h3>

        <div>
            Input:
            <input v-model="text" type="text">
        </div>
        <div>
            Output: {{ reverse }}
            <div>-- Using computed property to reverse output --</div>
            <div v-html="identicon"></div>
        </div>
    </div>
</template>

<script>

    import jdenticon from 'jdenticon';

    export default {
        name: 'Identicon',
        data(){
            return {
                title: 'My Identicon Generator',
                text: ''

            }
        },
        computed: {
            identicon(){
                return jdenticon.toSvg(this.text, 200);
            },
            reverse(){
                return this.text.split('').reverse().join('');
            }
        },
        methods: {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
