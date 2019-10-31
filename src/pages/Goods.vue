<template>
  <div class="goods">
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
          <van-icon name="shopping-cart-o" info="9" />
        </span>
        <van-icon name="https://m.chadian.com/assets/img/i-selectHead-icon.png" />
      </div>
    </div>
    <van-swipe class="goods-swipe" :autoplay="3000">
      <van-swipe-item v-for="thumb in goods.thumb" :key="thumb">
        <img :src="thumb" />
      </van-swipe-item>
    </van-swipe>

    <van-cell-group>
      <van-cell>
        <div class="goods-title">{{ goods.title }}</div>
        <div class="goods-price">{{ formatPrice(goods.price) }}</div>
      </van-cell>
      <van-cell class="goods-express">
        <van-col span="10">运费：{{ goods.express }}</van-col>
        <van-col span="14">剩余：{{ goods.remain }}</van-col>
      </van-cell>
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell value="进入店铺" icon="shop-o" is-link @click="sorry">
        <template slot="title">
          <span class="van-cell-text">松古巨人茶叶旗舰店</span>
        </template>
      </van-cell>
      <van-cell title="线下门店" icon="location-o" is-link @click="sorry" />
    </van-cell-group>

    <van-cell-group class="goods-cell-group">
      <van-cell title="查看商品详情" is-link @click="sorry" />
    </van-cell-group>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" @click="sorry">客服</van-goods-action-icon>
      <van-goods-action-icon icon="cart-o" @click="onClickCart">购物车</van-goods-action-icon>
      <van-goods-action-button type="warning" @click="sorry">加入购物车</van-goods-action-button>
      <van-goods-action-button type="danger" @click="sorry">立即购买</van-goods-action-button>
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
  Toast,
  SwipeItem,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from "vant";
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
      active: 1
    };
  },
  methods: {
    formatPrice() {
      return "¥" + (this.goods.price / 100).toFixed(2);
    },
    onClickCart() {
      this.$router.push("cart");
    },
    sorry() {
      Toast("暂无后续逻辑~");
    }
  }
};
</script>

<style lang="less">
.goods {
  padding-bottom: 50px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
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