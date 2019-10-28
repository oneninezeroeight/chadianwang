<template>
  <van-swipe :autoplay="3000" indicator-color="white" style="height:130px">
    <van-swipe-item v-for="(item,index) in lunbo" :key="index">
      <img :src="item.img" alt />
    </van-swipe-item>
  </van-swipe>
</template>
<script>
export default {
  data() {
    return {
      lunbo: [
        {
          img:
            "https://chadian-img.oss-cn-shanghai.aliyuncs.com/product/d44a8fedb3644860b5ffdb30f76510f3.jpg"
        },
        {
          img:
            "https://chadian-img.oss-cn-shanghai.aliyuncs.com/product/6f38f2fa4d5c46f6ad98f11f3fb2988d.jpg"
        },
        {
          img:
            "https://chadian-img.oss-cn-shanghai.aliyuncs.com/product/dcb51109e25d4b4cb5dd140c42159ea5.jpg"
        },
        {
          img:
            "https://chadian-img.oss-cn-shanghai.aliyuncs.com/product/46ff188aedd04c96ae72d56eaead2b2c.jpg"
        },
        {
          img:
            "https://chadian-img.oss-cn-shanghai.aliyuncs.com/product/46ff188aedd04c96ae72d56eaead2b2c.jpg"
        },
        {
          img:
            "https://chadian-img.oss-cn-shanghai.aliyuncs.com/product/57819a5cb62d435cb64b351d59572e8d.jpg"
        },
        {
          img:
            "https://chadian-img.oss-cn-shanghai.aliyuncs.com/product/0218bde2038549cfaf4046ec77685be1.jpg"
        },
        {
          img:
            "https://chadian-img.oss-cn-shanghai.aliyuncs.com/product/da4d5cf1f0424cb6989840084f293b01.jpg"
        },
        {
          img:
            "https://chadian-img.oss-cn-shanghai.aliyuncs.com/product/6ee04e0d6dae4790be98f8146f9b8e04.jpg"
        },
        {
          img:
            "https://chadian-img.oss-cn-shanghai.aliyuncs.com/product/e24d6d84f70a4eb6a681323b48fb21ba.jpg"
        },
        {
          img:
            "https://chadian-img.oss-cn-shanghai.aliyuncs.com/product/77076eee5e1e4844a3b0de06d033ce93.jpg"
        },

        {
          img:
            "https://chadian-img.oss-cn-shanghai.aliyuncs.com/product/45e77669413d4bbca0dc82eb808570d4.jpg"
        },
        {
          img:
            "https://chadian-img.oss-cn-shanghai.aliyuncs.com/product/7a01d07b6b814508bc58381522c98f6d.jpg"
        },
        {
          img:
            "https://chadian-img.oss-cn-shanghai.aliyuncs.com/product/2066d61d228a4f839577d14cbf103520.jpg"
        },
        {
          img:
            "https://chadian-img.oss-cn-shanghai.aliyuncs.com/product/8d7561ea9b594010bdec168c79d8b44e.jpg"
        },
        {
          img:
            "https://chadian-img.oss-cn-shanghai.aliyuncs.com/product/d0ae986fbc244482be942c123b2da086.jpg"
        },
        {
          img:
            "https://chadian-img.oss-cn-shanghai.aliyuncs.com/product/d44a8fedb3644860b5ffdb30f76510f3.jpg"
        },
        {
          img:
            "https://chadian-img.oss-cn-shanghai.aliyuncs.com/product/6f38f2fa4d5c46f6ad98f11f3fb2988d.jpg"
        }
      ]
    };
  }
};
</script>
<style lang='scss' scoped>
.van-swipe-item {
  img {
    height: 8.125rem;
    width: 23.375rem;
  }
}
</style>