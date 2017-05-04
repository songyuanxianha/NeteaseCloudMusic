<template>
    <div>
        <div class="play-all">
            <img src="/static/img/play.png">
            <span>播放全部</span>
        </div>
        <div>
            <ul  class="recommended-daily-list">
                    <li v-for="item in song">
                        <h3>{{item.name}}</h3>
                        <p>{{item.song.artists.name}}</p>
                    </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        props: ['song']
    }
</script>

<style>
    .play-all {
        width: 16rem;
        height: 2.23rem;
        position: relative;
        top: 2.86rem;
        left: 0.73rem;
        font-size: 0.65rem;
    }
    .play-all img {
        width: 0.89rem;
        height: 0.89rem;
    }
    .play-all span {
        position: absolute;
        top: 0.1rem;
        left: 1.59rem;
    }
    .recommended-daily-list {
        position: relative;
        top: 2.23rem;
        left: 0.73rem;
    }
    .recommended-daily-list li {
        height: 2.43rem;
        border-bottom: 1px solid #d8dcdb;
        margin-top: 0.47rem;
        margin-bottom: 0.47rem; 
    }
    .recommended-daily-list h3 {
        font-size: 0.59rem;
    }
    .recommended-daily-list p {
        font-size: 0.43rem;
        margin-top: 0.4rem;
    }
</style>
