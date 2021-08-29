<template>
  <el-row>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</el-row>
</template>

<script>
import { ElButton} from 'element-plus'

export default {
  components:{
    ElButton
  },
    data() {
    return {
      img: [
        {
            id: 1,
             banner: require('../assets/images/banner/banner1.jpg' )
        },
        {
            id: 2,
             banner: require('../assets/images/banner/banner2.jpg' ) 
        },
        {
            id: 3,
             banner: require('../assets/images/banner/banner3.jpg' )
        },
        {
            id: 4,
             banner: require('../assets/images/banner/banner4.jpg' ) 
        },
        {
            id: 5,
             banner: require('../assets/images/banner/banner5.jpg' )
        },
        {
            id: 6,
             banner: require('../assets/images/banner/banner6.jpg' )
        },
      ]
    };
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
</style>