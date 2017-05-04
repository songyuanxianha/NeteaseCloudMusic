<template>
    <div>
        <my-nav :title="listTitle"></my-nav>
        <div class="cover">
        </div>
    </div>
</template>

<script type="text/javascript">
    import myNav from '../../../components/nav.vue'
    export default {
        data () {
            return {
                listTitle: '歌单'
            }
        },
        components: {
            myNav
        }
    }
</script>

<style scoped>
    #nav {
        background: #333534;
    }
</style>
