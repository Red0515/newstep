<template>
  <my-header>
      <template #nav-home>
        <router-link to="/home">首页</router-link>
      </template>
      <template #nav-movie>
        <router-link to="/movie">影视</router-link>
      </template>
      <template #nav-book>
          <router-link to="/book">书籍</router-link>
      </template>
      <template #nav-music>
        <router-link to="/music">音乐</router-link>
      </template>
      <template #nav-game>
          <router-link to="/game">游戏</router-link>
      </template>
          
      <template #nav-newit>
        <router-link to="/newit">
          <span class="iconfont" style="color: rgb(128,128,128); font-size: 18px;">&#xe655;</span>
        </router-link>
      </template>
      <template #nav-user>
        <router-link to="/user">
          <img style="width: 100%; height: 100%;" src="./assets/images/Feather.jpg" alt="">
        </router-link>
      </template>
  </my-header>
  <div class="main-wrap">
    <router-view></router-view>

  </div>
</template>

<script>
import MyHeader from './components/header.vue'

export default {
  components: {
    MyHeader
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
  .main-wrap {
    width: 1200px;
    height: 2000px;
    margin: 0 auto;
    padding-top: 46px;
    background-color: aqua;
  }

  :deep(.container) {
  }
</style>