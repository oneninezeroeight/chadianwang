<template>
  <div class="cart">
    <el-container>
      <el-header style="height:10.625rem">
        <div class="top">
          <div class="left">
            <div class="l1">
              <div>购物车</div>
              <div>
                共
                <span>{{cartlength}}</span>件宝贝
              </div>
            </div>
          </div>
          <div class="right">管理</div>
        </div>
      </el-header>
      <el-main>
        <div class="list">
          <ul>
            <li>
              <div class="title">
                <span>
                  <van-checkbox v-model="checked" checked-color="red"></van-checkbox>
                </span>
                <span>
                  <van-icon name="https://m.chadian.com/assets/img/i-shop-infoLink-icon.png" />
                </span>
                <span>老茶农茶店</span>
              </div>
              <div class="nav">
                <div class="left">
                  <van-checkbox v-model="checked" checked-color="red"></van-checkbox>
                </div>
                <div class="right">
                  <div class="tp">
                    <img
                      src="https://chadian-img.oss-cn-shanghai.aliyuncs.com/shop/a15651624130406462.jpg?x-oss-process=image/resize,m_fill,h_100,w_100"
                      alt
                    />
                  </div>
                  <div class="text">
                    <div class="name">老茶农自家生产的上等优质红茶，500g无公害有机茶，口感好，甜度高。</div>
                    <div class="price">
                      <span>￥</span>
                      <span>398:00</span>
                      <span>
                        <van-stepper input-width="20px" button-size="20px" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="title">
                <span>
                  <van-checkbox v-model="checked" checked-color="red"></van-checkbox>
                </span>
                <span>
                  <van-icon name="https://m.chadian.com/assets/img/i-shop-infoLink-icon.png" />
                </span>
                <span>老茶农茶店</span>
              </div>
              <div class="nav">
                <div class="left">
                  <van-checkbox v-model="checked" checked-color="red"></van-checkbox>
                </div>
                <div class="right">
                  <div class="tp">
                    <img
                      src="https://chadian-img.oss-cn-shanghai.aliyuncs.com/shop/a15651624130406462.jpg?x-oss-process=image/resize,m_fill,h_100,w_100"
                      alt
                    />
                  </div>
                  <div class="text">
                    <div class="name">老茶农自家生产的上等优质红茶，500g无公害有机茶，口感好，甜度高。</div>
                    <div class="price">
                      <span>￥</span>
                      <span>398:00</span>
                      <span>
                        <van-stepper input-width="20px" button-size="20px" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="title">
                <span>
                  <van-checkbox v-model="checked" checked-color="red"></van-checkbox>
                </span>
                <span>
                  <van-icon name="https://m.chadian.com/assets/img/i-shop-infoLink-icon.png" />
                </span>
                <span>老茶农茶店</span>
              </div>
              <div class="nav">
                <div class="left">
                  <van-checkbox v-model="checked" checked-color="red"></van-checkbox>
                </div>
                <div class="right">
                  <div class="tp">
                    <img
                      src="https://chadian-img.oss-cn-shanghai.aliyuncs.com/shop/a15651624130406462.jpg?x-oss-process=image/resize,m_fill,h_100,w_100"
                      alt
                    />
                  </div>
                  <div class="text">
                    <div class="name">老茶农自家生产的上等优质红茶，500g无公害有机茶，口感好，甜度高。</div>
                    <div class="price">
                      <span>￥</span>
                      <span>398:00</span>
                      <span>
                        <van-stepper input-width="20px" button-size="20px" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="title">
                <span>
                  <van-checkbox v-model="checked" checked-color="red"></van-checkbox>
                </span>
                <span>
                  <van-icon name="https://m.chadian.com/assets/img/i-shop-infoLink-icon.png" />
                </span>
                <span>老茶农茶店</span>
              </div>
              <div class="nav">
                <div class="left">
                  <van-checkbox v-model="checked" checked-color="red"></van-checkbox>
                </div>
                <div class="right">
                  <div class="tp">
                    <img
                      src="https://chadian-img.oss-cn-shanghai.aliyuncs.com/shop/a15651624130406462.jpg?x-oss-process=image/resize,m_fill,h_100,w_100"
                      alt
                    />
                  </div>
                  <div class="text">
                    <div class="name">老茶农自家生产的上等优质红茶，500g无公害有机茶，口感好，甜度高。</div>
                    <div class="price">
                      <span>￥</span>
                      <span>398:00</span>
                      <span>
                        <van-stepper input-width="20px" button-size="20px" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="title">
                <span>
                  <van-checkbox v-model="checked" checked-color="red"></van-checkbox>
                </span>
                <span>
                  <van-icon name="https://m.chadian.com/assets/img/i-shop-infoLink-icon.png" />
                </span>
                <span>老茶农茶店</span>
              </div>
              <div class="nav">
                <div class="left">
                  <van-checkbox v-model="checked" checked-color="red"></van-checkbox>
                </div>
                <div class="right">
                  <div class="tp">
                    <img
                      src="https://chadian-img.oss-cn-shanghai.aliyuncs.com/shop/a15651624130406462.jpg?x-oss-process=image/resize,m_fill,h_100,w_100"
                      alt
                    />
                  </div>
                  <div class="text">
                    <div class="name">老茶农自家生产的上等优质红茶，500g无公害有机茶，口感好，甜度高。</div>
                    <div class="price">
                      <span>￥</span>
                      <span>398:00</span>
                      <span>
                        <van-stepper input-width="20px" button-size="20px" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </el-main>
      <el-footer>
        <dibu />
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import dibu from "./footer.vue";
export default {
  data() {
    return {
      checked: true,
      value: 1
    };
  },

  methods: {
    goods() {
      let goods = {};
      this.$store.commit("cartlist", goods);
    }
  },

  computed: {
    cartlength() {
      this.goods();
      return this.$store.getters.cartlength;
    }
  },
  components: {
    dibu
  }
};
</script>
<style lang='scss' scoped>
.cart {
  .el-header {
    padding: 0;
    background: red;
    .top {
      display: flex;
      justify-content: space-between;
      width: 21.25rem;
      margin: auto;
      margin-top: 2.5rem;
      .left {
        div:nth-child(1) {
          font-size: 1.125rem;
          color: #fff;
          margin-bottom: 0.625rem;
        }
        div:nth-child(2) {
          font-size: 0.875rem;
          color: #fff;
        }
      }

      .right {
        font-size: 1.125rem;

        margin-top: 0.625rem;
        color: #fff;
      }
    }
  }

  .el-main {
    height: 28.125rem;
    background: #ccc;
    position: relative;

    .list {
      position: fixed;
      top: 7.5rem;
      left: 0.625rem;
      z-index: 50;
      height: 31.125rem;
      overflow: scroll;
      ul {
        li {
          background: #fff;
          border-radius: 10px;
          width: 21.25rem;
          z-index: 100;
          margin-bottom: 0.9375rem;
          .title {
            height: 2.15625rem;
            display: flex;
            align-items: center;
            span:nth-child(1) {
              margin-left: 0.625rem;
            }
            span:nth-child(2) {
              margin-left: 0.9375rem;
              margin-right: 0.625rem;
            }
          }
          .nav {
            height: 7rem;
            display: flex;
            align-items: center;
            .left {
              margin-right: 0.9375rem;
              margin-left: 0.625rem;
            }
            .right {
              display: flex;
              align-items: center;
              .tp {
                margin-right: 0.625rem;
                img {
                  width: 5.75rem;
                  height: 5.75rem;
                }
              }

              .text {
                height: 5.875rem;
                .name {
                  width: 9rem;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  font-size: 0.875rem;
                  line-height: 1.125rem;
                  margin-bottom: 0.625rem;
                }

                .price {
                  display: flex;
                  align-items: center;

                  span:nth-child(1) {
                    font-size: 0.75rem;
                    color: red;
                  }

                  span:nth-child(2) {
                    font-size: 1rem;
                    color: red;
                    margin-right: 20px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>