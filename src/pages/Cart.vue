<template>
  <div class="cart">
    <el-container>
      <el-header style="height:10.625rem">
        <div class="top">
          <div class="left">
            <div class="l1">
              <div>购物车</div>
              <div>
                共
                <span>6</span>件宝贝
              </div>
            </div>
          </div>
          <div class="right">管理</div>
        </div>
      </el-header>
      <el-main>
        <div class="list">
          <ul>
            <li>
              <div class="title">
                <span>
                  <van-checkbox v-model="checked" checked-color="red"></van-checkbox>
                </span>
                <span></span>
                <span></span>
              </div>
              <div class="nav"></div>
            </li>
          </ul>
        </div>
      </el-main>
      <el-footer>
        <dibu />
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import dibu from "./footer.vue";
export default {
  data() {
    return {
      checked: true
    };
  },
  components: {
    dibu
  }
};
</script>
<style lang='scss' scoped>
.cart {
  .el-header {
    padding: 0;
    background: red;
    .top {
      display: flex;
      justify-content: space-between;
      width: 21.25rem;
      margin: auto;
      margin-top: 2.5rem;
      .left {
        div:nth-child(1) {
          font-size: 1.125rem;
          color: #fff;
          margin-bottom: 0.625rem;
        }
        div:nth-child(2) {
          font-size: 0.875rem;
          color: #fff;
        }
      }

      .right {
        font-size: 1.125rem;

        margin-top: 0.625rem;
        color: #fff;
      }
    }
  }

  .el-main {
    height: 28.125rem;
    background: #ccc;
  }
}
</style>