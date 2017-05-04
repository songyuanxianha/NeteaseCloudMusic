import Vue from 'vue'
import Router from 'vue-router'
import found from '../pages/index/found/found.vue'
import recommended from '../pages/index/found/recommended/recommended.vue'
import songList from '../pages/index/found/song_List/list.vue'
import radio from '../pages/index/found/radio/radio.vue'
import radioList from '../pages/index/found/radio/radio_list.vue'
import NeteaseExclusive from '../pages/index/NeteaseExclusive/Netease_exclusive.vue'
import newCD from '../pages/index/new_cd/new_cd.vue'
import FM from '../pages/index/FM/FM.vue'
import recommendedDaily from '../pages/index/recommended_daily/recommended_daily.vue'
import hotSong from '../pages/index/cloud_music_hot_song/cloud_music_hot_song.vue'
import songListContent from '../pages/index/song_list_content/song_list_content.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/found',
            component: found,
            children: [
                {
                    path: '/recommended',
                    component: recommended
                },
                {
                    path: '/songList',
                    component: songList
                },
                {
                    path: '/radio',
                    component: radio
                },
                {
                    path: '/',
                    redirect: '/recommended'
                },
                {
                    path: '*',
                    redirect: '/recommended'
                }
            ]
        },
        {
            path: '/radioList',
            component: radioList
        },
        {
            path: '/NeteaseExclusive',
            component: NeteaseExclusive
        },
        {
            path: '/newCD',
            component: newCD
        },
        {
            path: '/FM',
            component: FM
        },
        {
            path: '/recommendedDaily',
            component: recommendedDaily
        },
        {
            path: '/hotSong',
            component: hotSong
        },
        {
            path: '/songListContent',
            component: songListContent
        },
        {
            path: '/',
            redirect: '/found'
        },
        {
            path: '*',
            redirect: '/found'
        }
    ]
})
