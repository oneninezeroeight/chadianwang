<template>
  <ul>
    <li v-for="(item) in left" :key="item.name">
      <a :href="item.href">{{item.name}}</a>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      left: [
        { name: "黑茶", href: "#hc" },
        { name: "白茶", href: "#bc" },
        { name: "乌龙茶", href: "#wulongca" },
        { name: "红茶", href: "#honngca" },
        { name: "绿茶", href: "#lvca" },
        { name: "花果茶", href: "#huaguoca" },
        { name: "茶具", href: "#caju" },
        { name: "茶壶", href: "#cahu" },
        { name: "茶盘", href: "#capan" },
        { name: "茶配件", href: "#capeijian" },
        { name: "茶食品", href: "#cashipin" },
        { name: "工艺品", href: "#gongyipin" },
        { name: "沐浴样式", href: "#ziyang" },
        { name: "机械配件", href: "#jiqipeijian" },
        { name: "茶家具", href: "#cajiaju" },
        { name: "黄茶", href: "#huangca" }
      ],
      goods: [],
      list: []
    };
  },

  async created() {
    //发起ajax请求
    let { data } = await this.$axios.get("http://116.62.5.240:2020/list/");
    this.goods = data.data[0].list;

    // window.console.log(this.goods);
  }
};
</script>
<style lang='scss' scoped>
ul {
  margin: 0;
  padding: 0;
  // position: absolute;
  li {
    list-style-type: none;
    width: 5.5625rem;
    height: 2.3125rem;
    border-bottom: 1px solid rgba(192, 192, 192, 0.3);
    font-size: 0.875rem;
    text-align: center;
    line-height: 2.3125rem;
    a {
      text-decoration: none;
      color: #000;
    }
  }
}
</style>