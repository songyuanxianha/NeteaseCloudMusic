<template>
    <div id="content">
        <div class="boutique-song-list">
            <img class="top-img" src="/static/img/boutique_song_list.png">
            <img class="song-list-log" src="/static/img/song_list_log.png">
            <span>精品歌单 ></span>
            <p class="boutique-song-list-h">香港金牌作曲人第二辑 | 如果没有香港金牌作曲人第二辑 | 如果没有</p>
            <p class="boutique-song-list-des">你可能没听过他的名，但你一定听过他谱的歌</p>
        </div>
        <div class="all-song-list">
            <div class="all-song-list-header">
                <input type="button" name="song" value="全部歌单 >">
                <p>
                    <span>欧美 |</span>
                    <span>电子 |</span>
                    <span>摇滚</span>
                </p>
            </div>
        </div>
        <div>
            <ul class="song-list-2pictures clearfix">
                <li>
                    <img src="/static/img/song_list_picture.png">
                    <p class="song-list-descript">床前明月光疑似地上霜床前明月光疑似地上霜</p>
                </li>
                <li>
                    <img src="/static/img/song_list_picture.png">
                    <p class="song-list-descript">床前明月光疑似地上霜床前明月光疑似地上霜</p>
                </li>
                <li>
                    <img src="/static/img/song_list_picture.png">
                    <p class="song-list-descript">床前明月光疑似地上霜床前明月光疑似地上霜</p>
                </li>
                <li>
                    <img src="/static/img/song_list_picture.png">
                    <p class="song-list-descript">床前明月光疑似地上霜床前明月光疑似地上霜</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {

    }
</script>

<style scoped>
    .boutique-song-list {
        width: 16rem;
        height: 6.22rem;
        background: #736757;
        position: relative;
    }
    .top-img {
        width: 4.44rem;
        height: 4.44rem;
        position: absolute;
        top: 1.11rem;
        left: 0.45rem;
    }
    .song-list-log {
        width: 0.98rem;
        height: 0.98rem;
        position: absolute;
        top: 1.41rem;
        left: 5.37rem;
    }
    .boutique-song-list span {
        font-size: 0.73rem;
        color: #fff;
        position: absolute;
        top: 1.57rem;
        left: 6.65rem;
    }
    .boutique-song-list-h {
        font-size: 0.62rem;
        width: 9.5rem;
        position: absolute;
        top: 3.16rem;
        left: 5.37rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .boutique-song-list-des {
        font-size: 0.46rem;
        color: #b0aca9;
        position: absolute;
        top: 4.27rem;
        left: 5.37rem;
    }
    .all-song-list {
        background: #f0f4f3;
        position: relative;
    }
    .all-song-list-header {
        width: 16rem;
        height: 2.72rem;
        font-size: 0.53rem;
    }
    .all-song-list-header input {
        width: 4.21rem;
        height: 1.2rem;
        border: 2px solid #dbdfde;
        background: #f0f4f3;
        border-radius: 1rem;
        position: absolute;
        left: 0.45rem;
        top: 0.73rem;

    }
    .all-song-list-header p {
        position: absolute;
        top: 1.07rem;
        left: 10.45rem;
    }
</style>
