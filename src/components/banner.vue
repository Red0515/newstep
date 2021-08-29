<template>
    <div>
        <ul>
            <li v-for="item in img" :key="item.id">
                <img :src="item.banner" alt="" />
            </li>
        </ul>
        <img src="../assets/images/banner/banner2.jpg" alt="">
    </div>
</template>

<script>

export default {
    data() {
    return {
      img: [
        {
            id: 1,
             banner: '../assets/images/banner/banner1.jpg' 
        },
        {
            id: 2,
             banner: '../assets/images/banner/banner2.jpg' 
        },
        {
            id: 3,
             banner: '../assets/images/banner/banner3.jpg' 
        },
        {
            id: 4,
             banner: '../assets/images/banner/banner4.jpg' 
        },
        {
            id: 5,
             banner: '../assets/images/banner/banner5.jpg' 
        },
        {
            id: 6,
             banner: '../assets/images/banner/banner6.jpg' 
        },
      ]
    };
  },
}
</script>

<style lang="less" scoped>
  .van-swipe {
      width: 500px;
  }
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    
  }
</style>