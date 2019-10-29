<template>
  <div class="list-right">
    <div class="dd" v-for="item in goods" :key="item.list">
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

    window.console.log(this.goods);
  }
};
</script>
<style lang='scss' scoped>
.list-right {
  .dd {
    ul {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      li {
        width: 31%;
        background: #fff;
        margin-bottom: 0.375rem;
        margin-left: 0.375rem;
        img {
          width: 5.25rem;
          height: 5.25rem;
        }
        p {
          padding: 0;
          margin: 0;
        }
      }
    }
  }
}
</style>