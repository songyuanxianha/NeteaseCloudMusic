<template>
    <div id="content">
        <my-slide :imgUrl="radioImgUrl" :isActive="radioActive"></my-slide>
        <div id="radio">
            <div>
                <span class="recommended-h">
                    电台个性推荐
                </span>
                <ul class="clearfix song-list-3pictures">
                    <li>
                        <img src="/static/img/song_list.png">
                        <p class="song-list-descript">床前明月光疑似地上霜床前明月光疑似地上霜
                        床前明月光疑似地上霜床前明月光疑似地上霜</p>
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
            <div class="recommended-song-list">
                <router-link to="/radioList" tag="span" class="recommended-h">
                    创作翻唱 >
                </router-link>
                <ul class="clearfix song-list-3pictures">
                    <li>
                        <img src="/static/img/song_list.png">
                        <p class="song-list-descript">床前明月光疑似地上霜床前明月光疑似地上霜
                        床前明月光疑似地上霜床前明月光疑似地上霜</p>
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
    </div>
</template>

<script type="text/javascript">
    import mySlide from '../../../../components/slide.vue'
    export default {
        data () {
            return {
                radioImgUrl: ['/static/img/radio_slide.png', '/static/img/5.png'],
                radioActive: [false, false]
            }
        },
        components: {
            mySlide
        }
    }
</script>

<style scoped>
    #radio {
        margin-top: 1rem;
    }
    .recommended-song-list {
        background: #fff;
    }
</style>
