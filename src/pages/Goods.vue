<template>
  <div class="goods">
    <div class="dw">
      <div class="header">
        <div class="left">
          <van-icon name="arrow-left" />
        </div>
        <div class="center">
          <van-tabs v-model="active">
            <van-tab title="商品"></van-tab>
            <van-tab title="详情"></van-tab>
            <van-tab title="评价"></van-tab>
            <van-tab title="推荐"></van-tab>
          </van-tabs>
        </div>
        <div class="right">
          <span class="s1">
            <van-icon name="shopping-cart-o" :info="length" />
          </span>
          <van-icon name="https://m.chadian.com/assets/img/i-selectHead-icon.png" />
        </div>
      </div>
    </div>
    <!-- <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item>
        <img :src="datas[0].src" />
      </van-swipe-item>
    </van-swipe>-->

    <div class="tp">
      <img :src="list.src" alt />
    </div>

    <van-cell-group>
      <van-cell>
        <div class="goods-title">{{list.text}}</div>
        <div class="goods-price">{{ list.price}}</div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="10">运费：{{ goods.express }}</van-col>
        <van-col span="14">剩余：{{ goods.remain }}</van-col>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell value="进入店铺" icon="shop-o" is-link>
        <template slot="title">
          <span class="van-cell-text">松古巨人茶叶旗舰店</span>
        </template>
      </van-cell>
      <van-cell title="线下门店" icon="location-o" is-link />
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell title="查看商品详情" is-link />
    </van-cell-group>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o">客服</van-goods-action-icon>
      <van-goods-action-icon icon="cart-o" @click="gotocart">购物车</van-goods-action-icon>
      <van-goods-action-button type="warning" @click="addcart()">加入购物车</van-goods-action-button>
      <van-goods-action-button type="danger">立即购买</van-goods-action-button>
    </van-goods-action>
  </div>
</template>

<script>
import {
  Tag,
  Col,
  Icon,
  Cell,
  CellGroup,
  Swipe,
  SwipeItem,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from "vant";

import qs from "qs"; //引入方式
// Vue.prototype.$qs = Qs; //全局加载
// this.$qs.stringify(data); //使用方式
// this.$qs.parse(data); //使用方式

export default {
  components: {
    [Tag.name]: Tag,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton
  },
  data() {
    return {
      goods: {
        title: "金骏眉（单芽）红茶茶叶 2019新茶 明前特级黄芽蜜香100克罐装",
        price: 75000,
        express: "免运费",
        remain: 19,
        thumb: [
          "https://chadian-img.oss-cn-shanghai.aliyuncs.com/shop/a15688971995877644.jpg?x-oss-process=image/resize,m_fill,h_600,w_600",
          "https://chadian-img.oss-cn-shanghai.aliyuncs.com/shop/a15688972008046108.jpg?x-oss-process=image/resize,m_fill,h_600,w_600",
          "https://chadian-img.oss-cn-shanghai.aliyuncs.com/shop/a15688972026112830.jpg?x-oss-process=image/resize,m_fill,h_600,w_600",
          "https://chadian-img.oss-cn-shanghai.aliyuncs.com/shop/a15688972018551697.jpg?x-oss-process=image/resize,m_fill,h_600,w_600",
          "https://chadian-img.oss-cn-shanghai.aliyuncs.com/shop/a15688972028527543.jpg?x-oss-process=image/resize,m_fill,h_600,w_600"
        ]
      },
      active: 1,
      list: {},
      length: "",
      gid: ""
    };
  },

  //生命周期函数
  created() {
    //id是从Home使用转过来的，在这里接收
    let { id, index } = this.$route.params;
    this.gid = index;
    window.console.log(id);

    this.getData(id);
  },
  computed: {},
  methods: {
    formatPrice() {
      return "¥" + (this.goods.price / 100).toFixed(2);
    },
    onClickCart() {
      this.$router.push("cart");
    },

    async getData(id) {
      let data = await this.$axios.get("http://localhost:1907/goods/find", {
        params: {
          //这里是人家网站自带的必须参数，id是我们点击商品得id

          id: id
        }
      });

      let datas = data.data;
      this.list = datas[0];
      // window.console.log(this.list);
      this.carlength();
    },
    async carlength() {
      let { data } = await this.$axios.post("http://localhost:1907/goods/cart");
      // window.console.log(data);
      this.length = data.length;
      // window.console.log(this.length);
    },
    gotocart() {
      this.$router.push({ name: "cart", params: {} });
    },
    async addcart() {
      let gid = this.gid;
      let src = this.list.src;
      let text = this.list.text;
      let price = this.list.price.slice(1);
      let num = 1;

      // window.console.log(goods);

      let { data } = await this.$axios.post(
        "http://localhost:1907/goods/addcart",
        qs.stringify({
          gid,
          src,
          text,
          price,
          num
        })
      );

      // let data = await this.$axios.get("http://localhost:1907/goods/addcart", {
      //   params: {
      //     goods
      //   }
      // });
      // window.console.log(goods);
      window.console.log(data);
    }
  }
};
</script>

<style lang="less">
.goods {
  padding-bottom: 50px;

  .dw {
    position: fixed;
    top: 0;
    z-index: 30;
    background: #fff;
    width: 100%;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: fixed;
      background: #fff;
      width: 100%;
      .left {
        flex: 1;
      }
      .center {
        flex: 5;
      }
      .right {
        flex: 1;
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .tp {
    margin-top: 2.75rem;
    img {
      width: 100%;
    }
  }
  &-swipe {
    img {
      width: 100%;
      display: block;
    }
  }
  &-title {
    font-size: 16px;
  }
  &-price {
    color: #f44;
  }
  &-express {
    color: #999;
    font-size: 12px;
    padding: 5px 15px;
  }
  &-cell-group {
    margin: 15px 0;
    .van-cell__value {
      color: #999;
    }
  }
  &-tag {
    margin-left: 5px;
  }
}
</style>