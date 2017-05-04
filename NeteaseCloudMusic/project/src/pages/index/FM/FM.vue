<template>
    <div id="FM">
        <my-nav class="FM-nav"></my-nav>
        <div class="FM-content">
            <img src="/static/img/FM.png">
            <p class="name">喜帖街</p>
            <p class="FM-singer">谢安琪</p>
        </div>
    </div>
</template>

<script type="text/javascript">
    import myNav from '../../../components/nav.vue'
    export default {
        components: {
            myNav
        }
    }
</script>

<style scoped>
    #FM {
        width: 16rem;
        height: 28.4rem;
        background: #1b1c1e;
        color: #fff;
        position: relative;
    }
    .FM-nav {
        width: 16rem;
        height: 2.31rem;
        background: #1b1c1e !important;
    }
    .FM-nav img {
        width: 0.89rem;
        height: 0.78rem;
        position: absolute;
        left: 0.62rem;
        top: 0.85rem; 
    }
    .FM-content img {
        width: 13.55rem;
        height: 13.55rem;
        position: absolute;
        top: 2.97rem;
        left: 1.21rem;
    }
    .FM-content p {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
    .name {
        font-size: 0.74rem;
        top: 17.77rem;
    }
    .FM-singer {
        font-size: 0.58rem;
        top: 19.16rem;
    }
</style>
