<template>
  <el-container>
    <el-header>
      <toubu />
    </el-header>
    <el-main>Main</el-main>
    <el-footer>
      <dibu />
    </el-footer>
  </el-container>
</template>

<script>
import dibu from "./footer.vue";
import toubu from "./Header.vue";

export default {
  data() {
    return {};
  },
  components: {
    dibu,
    toubu
  }
};
</script>
<style scoped>
</style>