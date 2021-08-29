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
                <input class="search-txt" type="text">
                <button class="search-btn" type="submit" />
            </div>
            <div class="nav-user">
                <div class="nav-newit a-hover" :class="($route.path == '/newit') ? 'isactive' : '' ">
                    <slot name="nav-newit"></slot>
                </div>
                <div class="nav-msg">Msg</div>
                <div class="nav-username">CallmeRED</div>
                <div class="nav-avatar"><slot name="nav-user" /></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyHeader',
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
    .isactive {
        background-color: #e8e8e8;
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
        width: 327px;
        height: 28px;
        border-radius: 4px;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
    .search-txt {
        width: 300px;
        height: 28px;
        padding: 0 4px;
        font-size: 1.4rem;
        border:none;
        outline: none;
        background-color: #e8e8e8;
    }
    .search-btn {
        width: 27px;
        height: 28px;
        cursor: pointer;
        border:none;
    }
    .nav-user {
        width: 300px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
    .nav-avatar {
        width: 28px;
        height: 28px;
        border-radius: 14px;
        overflow: hidden;
    }
</style>