// 发现一栏
<template>
    <div>
        <div id="nav">
            <img class="to-mine" src="/static/img/nav_mine.png">
        </div>
        <div id="found-nav">
            <router-link tag="span" to="/recommended">个性推荐</router-link>
            <router-link tag="span" to="/songList">歌单</router-link>
            <router-link tag="span" to="/radio">主播电台</router-link>
            <span>排行榜</span>
        </div> 
        <router-view></router-view>
    </div>
</template>

<script type="text/javascript">
    export default {}
</script>

<style scoped>
    .to-mine {
        width: 1.04rem;
        height: 0.65rem;
        position: absolute;
        left: 0.62rem;
        top: 0.85rem;  
    }
    #found-nav {
        width: 16rem;
        height: 1.71rem;
        position: fixed;
        top: 2.31rem;
        background: #fff;
        left: 0;
        font-size: 0.53rem;
        /*margin-left: 0.8rem;*/
        padding-left: 0.8rem;
        z-index: 1;
        /*margin-top: 0.56rem;*/
    }
    #found-nav span {
        display: inline-block;
        text-align: center;
        width: 2.43rem;
        margin-top: 0.41rem;
        margin-right: 1.3rem;
    }
    .router-link-active {
        border-bottom: 0.12rem solid #d33b30;
        padding-bottom: 0.45rem;
        color: #d33b30;
    }
</style>
