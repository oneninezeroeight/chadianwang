<template>
  <div class="list-right">
    <!-- <div class="dd" v-for="item in goods" :key="item.list"> -->
      <div class="dd">
      <a :name="item.list"></a>
      <div class="title">{{item.title}}</div>
      <ul>
        <li v-for="ele in item.main" :key="ele.id">
          <img :src="ele.url" alt />
          <p>{{ele.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goods: [],
      list: []
    };
  },
  async created() {
    //发起ajax请求
    let { data } = await this.$axios.get("http://localhost:1907/list/");
    this.goods = data[0];

    window.console.log(data);
  }
};
</script>
<style lang='scss' scoped>
.rigth {
}
</style>