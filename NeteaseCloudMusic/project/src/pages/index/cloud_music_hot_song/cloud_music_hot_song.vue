<template>
    <div>
        <my-nav></my-nav>
        <div class="hot-song-top">
            <p class="cloud-music">云音乐</p>
            <p class="hot-song">热歌榜</p>
            <p class="updata">最近更新：4月27号</p>
        </div>
        <song :song="hotSong"></song>
    </div>
</template>

<script type="text/javascript">
    import myNav from '../../../components/nav.vue'
    import song from '../../../components/song_list.vue'
    export default {
        data () {
            return {
                hotSong: [{'songName': '我害怕', 'singer': '薛之谦-我害怕'}, {'songName': '我害怕', 'singer': '薛之谦-我害怕'}, {'songName': '我害怕', 'singer': '薛之谦-我害怕'}, {'songName': '我害怕', 'singer': '薛之谦-我害怕'}, {'songName': '我害怕', 'singer': '薛之谦-我害怕'}, {'songName': '我害怕', 'singer': '薛之谦-我害怕'}]
            }
        },
        components: {
            myNav,
            song
        }
    }
</script>

<style scoped>
    .hot-song-top {
        width: 16rem;
        height: 7.12rem;
        background: #d33b30;
        position: relative;
        top: 2.31rem;
        color: #fff;
    }
    .cloud-music {
        font-size: 0.64rem;
        position: absolute;
        top: 0.58rem;
        left: 1.26rem;
    }
    .hot-song {
        font-size: 1.74rem;
        position: absolute;
        top: 1.88rem;
        left: 1.26rem;
    }
    .updata {
        font-size: 0.42rem;
        position: absolute;
        top: 4.08rem;
        left: 1.26rem;
    }
</style>
