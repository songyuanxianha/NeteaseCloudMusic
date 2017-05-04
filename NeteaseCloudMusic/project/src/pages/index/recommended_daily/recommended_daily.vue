//每日推荐
<template>
    <div>
        <my-nav :title="myTitle"></my-nav>
        <div class="recommended-daily-date">
            <div class="date-warp">
                <img src="/static/img/date_box.png">
                <p class="date">{{date}}</p>
            </div>
            <p class="updata">根据你的口味每天6:00更新</p>
        </div>
        <song :song="mySong"></song>
    </div>
</template>

<script type="text/javascript">
    import myNav from '../../../components/nav.vue'
    import song from '../../../components/song_list.vue'
    import newSongs from '../../../../data/recommed_new_songs.json'
    export default {
        data () {
            return {
                myTitle: '每日歌曲推荐',
                date: '',
                mySong: []
            }
        },
        components: {
            myNav,
            song
        },
        created () {
            this.getDate()
        },
        methods: {
            getDate () {
                var mydate = new Date()
                this.date = mydate.getDate()
                this.getMySong()
            },
            getMySong () {
                for (var i = 0; i < newSongs.result.length; i++) {
                    this.mySong[i] = newSongs.result[i].song
                }
            }
        }
    }
</script>

<style scoped>
    .recommended-daily-date {
        width: 16rem;
        height: 7.12rem;
        background: #2d2d2d;
        position: relative;
        top: 2.31rem;
    }
    .date-warp {
        width: 3.04rem;
        height: 3.07rem;
        position: absolute;
        top: 1.81rem;
        left: 0.73rem;
    }
    .recommended-daily-date img {
        width: 3.04rem;
        height: 3.07rem;
    }
    .date {
        color: #fff;
        position: absolute;
        top: 1.26rem;
        left: 50%;
        transform: translateX(-50%);
    }
    .updata {
        font-size: 0.5rem;
        color: #fff;
        position: absolute;
        top: 5.7rem;
        left: 0.73rem;
    }
</style>
