<template>
    <div id="nav">
        <img src="/static/img/to.png" @click="back">
        <span>{{title}}</span>
    </div>
</template>

<script>
    export default {
        props: ['title'],
        methods: {
            back () {
                window.history.go(-1)
            }
        }
    }
</script>

<style scoped>
    #nav span {
        color: #fff;
        position: absolute;
        top: 0.85rem;
        left: 2.39rem;
    }
</style>
