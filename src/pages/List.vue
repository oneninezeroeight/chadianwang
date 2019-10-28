<template>
  <div class="list">
    <div class="header">
      <toubu />
    </div>
    <div class="nav">
      <el-container>
        <el-aside width="89px">
          <left />
        </el-aside>
        <el-main>
          <right />
        </el-main>
      </el-container>
    </div>
    <div class="footer">
      <dibu />
    </div>
  </div>
</template>
<script>
import dibu from "./footer.vue";
import toubu from "../components/list/Header.vue";
import left from "../components/list/left.vue";
import right from "../components/list/right.vue";
export default {
  data() {
    return {};
  },
  components: {
    dibu,
    toubu,
    left,
    right
  }
};
</script>
<style lang='scss' scoped>
.el-container {
  background: rgba(192, 192, 192, 0.2);
}
.el-header {
  width: 100%;
  padding: 0;
  background: #fff;
  text-align: center;

  z-index: 28;
  position: fixed;
  top: 0;
  left: 0;
}
.el-container {
  height: 35.5rem;
  .el-aside {
    background: #fff;
    height: 35.40625rem;
  }

  .el-main {
    // position: absolute;
    // left: 2.375rem;
    // top: 0;
    padding: 0;
  }
}
// .el-footer {
//   padding: 0;
//   margin: 0;
//   height: 0;
// }
</style>