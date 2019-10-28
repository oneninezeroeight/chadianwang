<template>
  <el-container>
    <el-header>
      <van-sticky :offset-top="0">
        <toubu />
      </van-sticky>
    </el-header>
    <el-main>
      <lunbo />
      <fenlei />
      <huodong />
      <navtop />
      <list />
    </el-main>
    <el-footer>
      <dibu />
    </el-footer>
  </el-container>
</template>
<script>
import dibu from "./footer.vue";
import toubu from "./Header.vue";
import lunbo from "../components/nav/lbt.vue";
import fenlei from "../components/nav/fenlei.vue";
import huodong from "../components/nav/huodong.vue";
import navtop from "../components/nav/nav-top.vue";
import list from "../components/nav/list.vue";

export default {
  data() {
    return {};
  },
  components: {
    dibu,
    toubu,
    lunbo,
    fenlei,
    huodong,
    navtop,
    list
  }
};
</script>
<style lang='scss' scoped>
.el-header {
  padding: 0;
  background: red;
  text-align: center;

  z-index: 2;
}
.el-main {
  padding: 0;
}
</style>