//新碟上架
<template>
    <div>
        <my-nav :title="cdTitle"></my-nav>
        <div class="date">
            <span class="mouth">4月</span>
            <span class="year">/2017年</span>
        </div>
        <div class="cd-list">
            <ul class="clearfix">
                <li>
                    <img src="/static/img/cd.png">
                    <p class="cd-name">猎户星座</p>
                    <p class="singer">朴树</p>
                </li>
                <li>
                    <img src="/static/img/cd.png">
                    <p class="cd-name">猎户星座</p>
                    <p class="singer">朴树</p>
                </li>
                <li>
                    <img src="/static/img/cd.png">
                    <p class="cd-name">猎户星座</p>
                    <p class="singer">朴树</p>
                </li>
                <li>
                    <img src="/static/img/cd.png">
                    <p class="cd-name">猎户星座</p>
                    <p class="singer">朴树</p>
                </li>
                <li>
                    <img src="/static/img/cd.png">
                    <p class="cd-name">猎户星座</p>
                    <p class="singer">朴树</p>
                </li>
                <li>
                    <img src="/static/img/cd.png">
                    <p class="cd-name">猎户星座</p>
                    <p class="singer">朴树</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">
    import myNav from '../../../components/nav.vue'
    export default{
        data () {
            return {
                cdTitle: '新碟上架'
            }
        },
        components: {
            myNav
        }
    }
</script>

<style scoped>
    .date {
        height: 0.67rem;
        position: relative;
        top: 0.74rem;
        left: 0.58rem;
        border-left: 0.09rem solid #d5382f;
    }
    .mouth {
        font-size: 0.65rem;
        position: absolute;
        left: 0.45rem;
    }
    .year {
        font-size: 0.43rem;
        position: absolute;
        left: 1.82rem;
    }
    .cd-list {
        position: relative;
        top: 3.66rem;
        left: 0.56rem;
    }
    .cd-list li {
        float: left;
        width: 6.58rem;
        height: 5.73rem;
        margin-right: 1.4rem;
        margin-bottom: 2.96rem;
        background-image: url(/static/img/new.png);
        background-size: 6.58rem 5.73rem;
    }
    .cd-list img {
        width: 5.69rem;
        height: 5.69rem;
    }
    .cd-name {
        font-size: 0.61rem;
        margin-top: 0.44rem;
    }
    .singer {
        font-size: 0.44rem;
        margin-top: 0.4rem;
    }
</style>
