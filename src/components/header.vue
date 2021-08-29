<template>
    <div class="layout">
        <div class="header">
            <div class="logo">
                <a href="/home"><img src="../assets/images/logo.svg" alt=""></a>
            </div>
            <div class="nav-home a-hover" :class="($route.path == '/home') ? 'isactive' : '' " ><slot name="nav-home" /></div>
            <div class="nav-movie a-hover" :class="($route.path == '/movie') ? 'isactive' : '' "><slot name="nav-movie" /></div>
            <div class="nav-book a-hover" :class="($route.path == '/book') ? 'isactive' : '' "><slot name="nav-book" /></div>
            <div class="nav-music a-hover" :class="($route.path == '/music') ? 'isactive' : '' "><slot name="nav-music" /></div>
            <div class="nav-game a-hover" :class="($route.path == '/game') ? 'isactive' : '' "><slot name="nav-game" /></div>
            <div class="search">
                <div class="search-icon iconfont">&#xe7ae;</div>
                <input class="search-txt" type="text">
                <span class="iconfont search-clear">&#xe60f;</span>
                <button class="search-btn iconfont" type="submit">&#xe74d;</button>
            </div>
            <div class="nav-user">
                <div class="nav-newit a-hover" :class="($route.path == '/newit') ? 'isactive' : '' ">
                    <slot name="nav-newit"></slot>
                </div>
                <div class="nav-msg iconfont">
                    &#xe603;
                    <msg-preview></msg-preview>
                </div>
                <div class="nav-username">CallmeRED</div>
                <div class="nav-avatar">
                    <slot name="nav-user" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MsgPreview from '../components/msgpreview'
export default {
    name: 'MyHeader',
    components: {
        MsgPreview
    },
    data() {
        return {
        }
    },
    created: function () {
    },
    methods: {
    },
    computed: {
         
    }
}
</script>

<style lang="less" scoped>
    .layout {
        width: 100%;
        height: 46px;
        // margin: 0 auto;
        position: fixed;
        background-color: white;
    }
    .iconfont {
        color: #808080;
    }
    .isactive {
        background-color: #e8e8e8;
        :deep(a) {
            font-weight: 600;
        }
    }
    .header {
        width: 1200px;
        height: 46px;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
    .logo {
        height: 26px;
        line-height: 26px;
        img {
            height: 100%;
        }
    }
    .a-hover {
        height: 18px;
        line-height: 18px;
        padding: 4px;
        border-radius: 4px;
    }
    .search {
        // width: 327px;
        height: 28px;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        background-color: #e8e8e8;
    }
    .search-icon {
        // width: 28px;
        height: 28px;
        line-height: 28px;
        padding: 6px;
        // border-right: solid rgb(167, 167, 167) 1px;
    }
    .search-txt {
        width: 300px;
        height: 100%;
        padding: 0 28px 0 0;
        font-size: 1.4rem;
        border:none;
        outline: none;
        background-color: #e8e8e8;
        // background: url('../assets/images/search.png') no-repeat 8px,center;
        // background-size: 14px;
    }
    .search-btn {
        width: 36px;
        height: 28px;
        cursor: pointer;
        border:none;
    }
    .search-clear {
        position: absolute;
        right: 42px;
        cursor: pointer;
    }
    .nav-user {
        width: 300px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
    .nav-msg {
        position: relative;
        font-size: 18px;
        cursor: pointer;
    }
    .nav-avatar {
        width: 28px;
        height: 28px;
        border-radius: 14px;
        overflow: hidden;
    }
</style>