<template>
  <div class="my">
    <el-container>
      <el-header style="height:10.625rem">
        <div class="h1">
          <div class="left">
            <div class="l1">
              <img
                src="https://chadian-img.oss-cn-shanghai.aliyuncs.com/Users/1e97a35358484942bddea179d3c816bc.png"
                alt
              />
            </div>
            <div class="l2">
              <div>18617271159</div>
              <div>个人会员</div>
            </div>
          </div>
          <div class="right">
            <van-icon name="https://m.chadian.com/assets/img/i-info-modity.png" size="1.4rem" />
          </div>
        </div>
        <div class="h2">
          <ul>
            <li v-for="item in list1" :key="item.text">
              <div>{{item.num}}</div>
              <div>{{item.text}}</div>
            </li>
          </ul>
        </div>

        <div class="h3">
          <div class="tb">
            <div>我的订单</div>
            <div>
              全部
              <van-icon name="arrow" />
            </div>
          </div>
          <div class="nr">
            <ul>
              <li v-for="item in list2" :key="item.name">
                <img :src="item.src" alt />
                <div>{{item.name}}</div>
              </li>
            </ul>
          </div>
        </div>
      </el-header>
      <el-main>
        <div class="main-nav">
          <div class="tb">
            <div>我的订单</div>
          </div>
          <div class="nr">
            <ul>
              <li v-for="item in list3" :key="item.name">
                <img :src="item.src" alt />
                <div>{{item.name}}</div>
              </li>
            </ul>
          </div>
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
      list1: [
        { num: "0", text: "收藏夹" },
        { num: "0", text: "关注店铺" },
        { num: "0", text: "消息" },
        { num: "0", text: "积分" }
      ],
      list2: [
        {
          src: "https://m.chadian.com/assets/img/i-myOrder-item1-icon.png",
          name: "待付款"
        },
        {
          src: "https://m.chadian.com/assets/img/i-myOrder-item2-icon.png",
          name: "待发货"
        },
        {
          src: "https://m.chadian.com/assets/img/i-myOrder-item3-icon.png",
          name: "待收货"
        },
        {
          src: "https://m.chadian.com/assets/img/i-myOrder-item4-icon.png",
          name: "待评价"
        },
        {
          src: "https://m.chadian.com/assets/img/i-myOrder-item5-icon.png",
          name: "退换/售后"
        }
      ],
      list3: [
        {
          src: "https://m.chadian.com/assets/img/i-myTools-item-i-icon.png",
          name: "我的收藏"
        },
        {
          src: "https://m.chadian.com/assets/img/i-myOrder-item2-icon.png",
          name: "收货地址"
        },
        {
          src: "https://m.chadian.com/assets/img/i-myTools-item1-icon.png",
          name: "我的评价"
        },
        {
          src: "https://m.chadian.com/assets/img/i-myTools-item2-icon.png",
          name: "个人资料"
        },
        {
          src: "https://m.chadian.com/assets/img/i-myTools-item3-icon.png",
          name: "账户安全"
        },
        {
          src: "https://m.chadian.com/assets/img/i-myTools-item5-icon.png",
          name: "优惠劵"
        },
        {
          src: "https://m.chadian.com/assets/img/i-myTools-item5-icon.png",
          name: "红包记录"
        }
      ]
    };
  },
  components: {
    dibu
  }
};
</script>
<style lang='scss' scoped>
.my {
  .el-header {
    background: red;
    position: relative;
    .h1 {
      display: flex;
      justify-content: space-between;
      margin-top: 1.875rem;
      .left {
        display: flex;
        .l1 {
          img {
            height: 3.0625rem;
            width: 3.0625rem;
            border-radius: 1.53125rem;
            border: 2px solid #fff;
            margin-right: 0.625rem;
          }
        }
        .l2 {
          div:nth-child(1) {
            font-size: 1rem;
            line-height: 1rem;
            color: #fff;
            margin-bottom: 0.9375rem;
          }

          div:nth-child(2) {
            font-size: 0.75rem;
            color: #fff;
            line-height: 1rem;
            border: 1px solid #fff;
            width: 4.625rem;
            text-align: center;
            border-radius: 0.5rem;
          }
        }
      }
    }

    .h2 {
      margin-top: 0.625rem;
      ul {
        display: flex;
        justify-content: space-between;
        li {
          div {
            color: #fff;
            text-align: center;
            font-size: 0.875rem;
          }
        }
      }
    }

    .h3 {
      width: 21.25rem;
      height: 7.5rem;

      background: #fff;
      z-index: 10;
      position: absolute;
      top: 9.375rem;
      left: 0.625rem;
      border-radius: 0.625rem;
      .tb {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
        div:nth-child(1) {
          line-height: 2.8125rem;
          font-size: 0.875rem;
          margin-left: 0.625rem;
        }
        div:nth-child(2) {
          line-height: 2.8125rem;
          font-size: 0.75rem;
          color: #707070;
          margin-right: 0.625rem;
        }
      }
      .nr {
        ul {
          display: flex;
          justify-content: space-around;
          height: 4.75rem;
          align-items: center;
          li {
            text-align: center;
            img {
              width: 1.59375rem;
              height: 1.375rem;
            }
            div {
              font-size: 0.875rem;
            }
          }
        }
      }
    }
  }

  .el-main {
    height: 28.4375rem;
    background: #ccc;
    position: relative;
    .main-nav {
      position: absolute;
      top: 6.875rem;
      left: 0.625rem;
      background: #fff;
      width: 21.25rem;
      height: 11.9375rem;
      border-radius: 0.625rem;
      .tb {
        border-bottom: 1px solid #ccc;
        div {
          line-height: 2.8125rem;
          font-size: 0.875rem;
          margin-left: 0.625rem;
        }
      }
      .nr {
        ul {
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          align-items: center;

          li {
            width: 25%;
            text-align: center;
            height: 50%;

            img {
              width: 1.46875rem;
              height: 1.46875rem;
              margin-top: 15px;
              margin-bottom: 0.3125rem;
            }
            div {
              font-size: 0.875rem;
              line-height: 0.875rem;
            }
          }
        }
      }
    }
  }
}
</style>
