//发现栏目下个性推荐
<template>
    <div id="content">
        <my-slide :imgUrl="url" :isActive="myActive"></my-slide>
        <div id="recommend">
            <router-link tag="div" to="/FM" class="recommend-classification1">
                <img src="/static/img/1.png">
                <span>私人FM</span>
            </router-link>
            <router-link tag="div" to="/recommendedDaily" class="recommend-classification2">
                <img src="/static/img/2.png">
                <span>每日歌曲推荐</span>
            </router-link>
            <router-link tag="div" to="/hotSong" class="recommend-classification3">
                <img src="/static/img/3.png">
                <span>云音乐热歌榜</span>
            </router-link>
        </div>
        <div class="recommended-song-list">  <!-- 推荐歌单 -->
            <router-link to="/songList" tag="span" class="recommended-h">
                推荐歌单 >
            </router-link>
            <ul class="clearfix song-list-3pictures">
                <router-link tag="li" to="/songListContent" v-for="item in recommendedSongList" :key="item.id">
                    <img :src="item.picUrl">
                    <p class="song-list-descript">{{item.name}}</p>
                </router-link>
            </ul>
        </div>
        <div class="sole"> <!-- 独家放送 -->
            <router-link to="/NeteaseExclusive" tag="div" class="recommended-h sole-h">
                <span>独家放送 ></span>
            </router-link>
            <ul class="song-list-2pictures clearfix">
                <li v-for="item in NeteaseExclusive1">
                    <img :src="item.picUrl">
                    <p class="song-list-descript">{{item.name}}</p>
                </li>
                <li class="sole-large-picture">
                    <img :src="NeteaseExclusive2.picUrl">
                    <p class="song-list-descript">{{NeteaseExclusive2.name}}</p>
                </li>
            </ul>
        </div>
        <div class="recommended-song-list new-song">  <!-- 最新音乐 -->
            <router-link to="/newCD" tag="div">
                <span class="recommended-h">最新音乐 ></span>
            </router-link>
            <div class="song-list-3pictures">
                <ul class="clearfix">
                    <li>
                        <img src="/static/img/new_song.png">
                        <div class="song-list-descript">
                            <p>新歌推荐</p>
                            <p>推荐合口味的新歌</p>
                        </div>
                    </li>
                    <li>
                        <img src="/static/img/song_list.png">
                        <p class="song-list-descript">床前明月光疑似地上霜</p>
                    </li>
                    <li>
                        <img src="/static/img/song_list.png">
                        <p class="song-list-descript">床前明月光疑似地上霜</p>
                    </li>
                    <li>
                        <img src="/static/img/song_list.png">
                        <p class="song-list-descript">床前明月光疑似地上霜</p>
                    </li>
                    <li>
                        <img src="/static/img/song_list.png">
                        <p class="song-list-descript">床前明月光疑似地上霜</p>
                    </li>
                    <li>
                        <img src="/static/img/song_list.png">
                        <p class="song-list-descript">床前明月光疑似地上霜</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="sole"> <!-- 推荐MV-->
            <router-link to="/radio" tag="div" class="recommended-h sole-h">
                <span>推荐MV ></span>
            </router-link>
            <ul class="song-list-2pictures clearfix MV">
                <li v-for="item in myMV">
                    <img :src="item.picUrl">
                    <p class="song-list-descript">{{item.name}}</p>
                </li>
            </ul>
        </div>
        <div class="sole"> <!-- 主播电台-->
            <router-link to="/radio" tag="div" class="recommended-h sole-h">
                <span>主播电台 ></span>
            </router-link>
            <ul class="song-list-2pictures clearfix MV">
                <li>
                    <img src="/static/img/4.png">
                    <p class="song-list-descript">床前明月光疑似地上霜床前明月光疑似地上霜</p>
                </li>
                <li>
                    <img src="/static/img/4.png">
                    <p class="song-list-descript">床前明月光疑似地上霜床前明月光疑似地上霜</p>
                </li>
                <li>
                    <img src="/static/img/4.png">
                    <p class="song-list-descript">床前明月光疑似地上霜床前明月光疑似地上霜</p>
                </li>
                <li>
                    <img src="/static/img/4.png">
                    <p class="song-list-descript">床前明月光疑似地上霜床前明月光疑似地上霜</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">
    import mySlide from '../../../../components/slide.vue'
    import personalized from '../../../../../data/personalized.json'
    import NeteaseExclusive from '../../../../../data/netease_exclusive.json'
    import banner from '../../../../../data/banner.json'
    import MV from '../../../../../data/recommed_mv.json'
    import newSong from '../../../../../data/new_song.json'

    export default {
        data () {
            return {
                url: [],
                myActive: [false, false, false, false, false, false],
                recommendedSongList: [], // 首页推荐歌单
                NeteaseExclusive1: [], // 网易独家小图部分
                NeteaseExclusive2: [], // 网易独家大图部分
                myMV: [] // 推荐MV

            }
        },
        components: {
            mySlide
        },
        created () {
            this.recommendedSongList = personalized.result
            this.NeteaseExclusiveData()
            this.url = banner.banners
            this.myMV = MV.result
            console.log(this.url)
        },
        methods: {
            NeteaseExclusiveData () {
                this.NeteaseExclusive1 = NeteaseExclusive.result.slice(0, 2)
                this.NeteaseExclusive2 = NeteaseExclusive.result[2]
            }
        }
    }
</script>

<style scoped>
    #recommend {
        width: 16rem;
        height: 4.49rem;
        background: #f0f4f3;
        padding-left: 1.3rem;
        border-bottom: 1px solid #d7dbda;
        justify-content: center;
        align-items: center;
        display: -webkit-flex;
    }
    #recommend div {
        float: left;
        position: relative;
        top: -1.5rem;
    }
    #recommend div span{
        position: absolute;
        top: 2.67rem;
        font-size: 0.47rem;
    }
    #recommend img{
        width: 2.33rem;
        height: 2.33rem;
        position: absolute;
        top: 0;
    }
    .recommend-classification1 {
        flex: 1;
    }
    .recommend-classification2 {
        flex: 1;
    }
    .recommend-classification3 {
        flex: 1;
    }
    .recommended-song-list {
        background: #f0f4f3;
    }
    .recommended-h {
        font-size: 0.65rem;
        line-height: 0.65rem;
        margin-top: 1.05rem;
        margin-left: 0.39rem;
    }
    .sole {
        margin-top: 0rem;
        background: #f0f4f3;
    }
    .sole-large-picture img {
        width: 16rem;
        height: 6.18rem;
        margin-top: 0.6rem;
    }
    .sole-large-picture p {
        width: 15.9rem !important;
    }
    .sole-h {
       margin-bottom: 0.6rem;
       margin-top: 0 !important;
    }
    .new-song {
        margin-top: 0rem;
    }
</style>
