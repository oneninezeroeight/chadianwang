<template>
  <div class="nav-top">
    <div class="bt">
      <div class="left">茶店头条</div>
      <div class="right">
        <el-carousel height="17.5px" direction="vertical" :autoplay="true">
          <el-carousel-item v-for="item in lb" :key="item">
            <div>{{item}}</div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="tp">
      <img
        src="https://chadian-img.oss-cn-shanghai.aliyuncs.com/product/6f43c1082b704587addb05c9fdcf6f63.jpg"
        alt
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lb: [
        "热门   免费开店，免费入驻，买好茶，卖好茶，就上茶店网。",
        "热门   APP 公众号 小程序 请搜索 茶店网 使用-点击进入茶文化知识",
        "热门   茶店网chadian.com 商家招募入驻零门槛-点击进入茶文化知识"
      ]
    };
  }
};
</script>
<style lang='scss' scoped>
.bt {
  margin-bottom: 1.3125rem;
  .left {
    width: 20%;
    float: left;
    margin-right: 0.625rem;
    font-size: 1rem;
  }
  .right {
    margin-top: 0.1875rem;
    float: left;
    width: 75%;
    font-size: 0.75rem;
  }
}
.tp {
  background: rgba(192, 192, 192, 0.2);
  padding: 0.625rem;

  img {
    width: 100%;
    height: 5.5rem;
  }
}
</style>