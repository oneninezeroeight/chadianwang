<template>
  <van-row>
    <van-col span="3" class="left">
      <div></div>
    </van-col>
    <van-col span="18">
      <van-search placeholder="请输入搜索关键词" shape="round" background="white" />
    </van-col>
    <van-col span="3" class="right">
      <van-icon name="chat-o" size="1.375rem" color="gray" />
      <p>消息</p>
    </van-col>
  </van-row>
</template>
<script>
export default {};
</script>
<style lang='scss' scoped>
.van-row {
  display: flex;
  justify-content: space-around;
  align-items: center;
  .left {
    text-align: center;
    width: 2.5625rem;
    div {
      width: 1.25rem;
      height: 1.1875rem;
      margin: auto;
      background-image: url(../../assets/images/i-category-icon-gray.png);
      background-size: contain;
    }
  }
  .right {
    p {
      margin: 0;
      color: gray;
      font-size: 0.75rem;
      line-height: 0.75rem;
    }
  }
}
</style>