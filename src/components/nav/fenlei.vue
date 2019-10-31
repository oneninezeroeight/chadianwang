<template>
  <div class="fenlei">
    <ul>
      <li v-for="item in fenlei" :key="item.text" @click="goto">
        <img :src="item.img" alt />
        <p>{{item.text}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fenlei: [
        {
          img:
            "https://chadian-img.oss-cn-shanghai.aliyuncs.com/ShopBanner/13b8ba8d765744ec9ee0867ba6eb4619.png",
          text: "黑茶"
        },
        {
          img:
            "https://chadian-img.oss-cn-shanghai.aliyuncs.com/ShopBanner/95c9bc7f9bba49088cf77a61b8c36297.png",
          text: "白茶"
        },
        {
          img:
            "https://chadian-img.oss-cn-shanghai.aliyuncs.com/ShopBanner/cc624150985e4fe39d893a8d6f783829.png",
          text: "乌龙茶"
        },
        {
          img:
            "https://chadian-img.oss-cn-shanghai.aliyuncs.com/ShopBanner/d1abcca6e5824ea2b71b2d53f84d0091.png",
          text: "红茶"
        },
        {
          img:
            "https://chadian-img.oss-cn-shanghai.aliyuncs.com/ShopBanner/d33389f7c42143fc8fb3e4175448af9d.png",
          text: "绿茶"
        },
        {
          img:
            "https://chadian-img.oss-cn-shanghai.aliyuncs.com/ShopBanner/f2eef3e6017d4e5991dd54c961009a30.png",
          text: "花果茶"
        },
        {
          img:
            "https://chadian-img.oss-cn-shanghai.aliyuncs.com/ShopBanner/bc046fd72ad3402f92aef08d4ee449f9.png",
          text: "茶具"
        },
        {
          img:
            "https://chadian-img.oss-cn-shanghai.aliyuncs.com/ShopBanner/b6679dcd1e1c4f259f60db813b6ed222.png",
          text: "茶壶"
        },
        {
          img:
            "https://chadian-img.oss-cn-shanghai.aliyuncs.com/ShopBanner/569cc4389bbb4bf795b0f0f19f8b1938.png",
          text: "茶盘"
        },
        {
          img:
            "https://chadian-img.oss-cn-shanghai.aliyuncs.com/ShopBanner/afc5265af3824e0db2a129935520efb9.png",
          text: "茶配件"
        }
      ]
    };
  },
  methods:{
    goto(){
       this.$router.push({ name: "list", params: {} });
    }
  }
};
</script>
<style lang='scss' scoped>
.fenlei {
  margin-bottom: 0.625rem;
  ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    li {
      width: 20%;
      text-align: center;
      margin-top: 0.625rem;
      img {
        width: 2.5rem;
        height: 2.5rem;
      }
      p {
        margin: 0;
      }
    }
  }
}
</style>