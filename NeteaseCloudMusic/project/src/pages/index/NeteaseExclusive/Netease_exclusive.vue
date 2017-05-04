//网易独家
<template>
    <div>
        <my-nav :title="recomTitle"></my-nav>
        <div class="exclusive-list">
            <ul>
                <li>
                    <img src="/static/img/exclusive.png">
                    <p>时光飞逝，重温梁静茹五月天《春娇与志明》现场版</p>
                    <p>4月3日</p>
                </li>
                <li>
                    <img src="/static/img/exclusive.png">
                    <p>时光飞逝，重温梁静茹五月天《春娇与志明》现场版</p>
                    <p>4月3日</p>
                </li>
                <li>
                    <img src="/static/img/exclusive.png">
                    <p>时光飞逝，重温梁静茹五月天《春娇与志明》现场版</p>
                    <p>4月3日</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">
    import myNav from '../../../components/nav.vue'
    export default {
        data () {
            return {
                recomTitle: '网易独家'
            }
        },
        components: {
            myNav
        }
    }
</script>

<style scoped>
    .exclusive-list {
        margin-top: 2.31rem;
    }
    .exclusive-list li {
        margin-bottom: 0.96rem;
    }
    .exclusive-list img {
        width: 16rem;
        height: 6.18rem;
    }
    .exclusive-list p {
        font-size: 0.65rem;
        line-height: 0.65rem;
        margin-top: 0.41rem;
    }
</style>
