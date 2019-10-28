<template>
  <van-tabbar v-model="active" active-color="red">
    <van-tabbar-item
      :icon="item.ic"
      v-for="item in menus"
      :key="item.name"
      @click="goto(item.name)"
    >{{item.text}}</van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      menus: [
        {
          name: "home",
          path: "/home",
          text: "首页",

          ic: "wap-home-o"
        },
        {
          name: "list",
          path: "/list",
          text: "分类",
          ic: "apps-o"
        },
        {
          name: "news",
          path: "/news",
          text: "消息",
          ic: "chat-o"
        },
        {
          name: "cart",
          path: "/cart",
          text: "购物车",
          ic: "shopping-cart-o"
        },
        {
          name: "mine",
          path: "/mine",
          text: "我的",
          ic: "user-circle-o"
        }
      ]
    };
  },

  methods: {
    goto(name) {
      // window.console.log(name);
      this.$router.push({ name: name, params: {} });
    }
  }
};
</script>
<style lang='scss' scoped>
</style>