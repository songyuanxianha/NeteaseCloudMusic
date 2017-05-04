// 轮播图组件
<template>
    <div>
        <div id="slide">
            <img :src="nowUrl">
            <ol class="clearfix">
            <li v-for="item in isActive" :class="{'active': item}"></li>
            </ol>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        data () {
            return {
                i: 0,
                nowUrl: ''
            }
        },
        props: ['imgUrl', 'isActive'],
        created () {
            let _this = this
            _this.nowUrl = _this.imgUrl[0].pic
            _this.isActive[0] = true
            setInterval(function () {
                _this.nowUrl = _this.imgUrl[_this.i % _this.imgUrl.length].pic
                for (var i = 0; i < _this.isActive.length; i++) {
                    _this.isActive[i] = false
                }
                _this.isActive[_this.i % _this.isActive.length] = true
                _this.i++
            }, 2000)
        }
    }
</script>

<style scoped>
    #slide {
        position: relative;
        width: 16rem;
        height: 6.22rem;
    }
    #slide img {
        width: 16rem;
        height: 6.22rem;
    }
    #slide ol {
        position: absolute;
        top: 4.5rem;
        left: 50%;
        transform: translateX(-50%);
    }
    #slide ol li {
        float: left;
        width: 0.31rem;
        height: 0.31rem;
        border-radius: 50%;
        background: #7f635f;
        margin-right: 0.6rem;
        opacity: 0.7;
        filter: alpha(opacity=70);
    }
    #slide .active {
        background: #a83129;
    }
</style>
