<template>
  <div class="nav">
    <div class="nav-top">
      <div class="nt1">
        <dl v-for="item in navtop" :key="item.text1">
          <dt>{{item.text1}}</dt>
          <dd>{{item.text2}}</dd>
        </dl>
      </div>
    </div>
    <div class="list">
      <div class="list">
        <ul>
          <li v-for="item in list" :key="item.id">
            <div class="l-tp">
              <img :src="item.src" alt />
            </div>
            <div class="l-title">{{item.text}}</div>
            <div class="l-price">
              <p class="p1">{{item.price}}</p>
              <p class="p2">{{item.fk}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navtop: [
        { text1: "全部", text2: "猜你喜欢" },
        { text1: "视频", text2: "产品更直观" },
        { text1: "便宜好货", text2: "低价抢购" }
      ],
      list: []
    };
  },
  async created() {
    //发起ajax请求
    let data = await this.$axios.get("http://localhost:1907/goods/", {
      params: {
        act: "index"
      }
    });
    let test = data.data[0];
    this.list = test[0];
    // window.console.log(this.list);
  }
};
</script>
<style lang='scss' scoped>
.nav-top {
  background: rgba(192, 192, 192, 0.2);

  .nt1 {
    width: 70%;
    display: flex;
    justify-content: space-between;
    dl {
      padding: 10px 0.3125rem;
      margin: 0;

      dt {
        font-size: 1.125rem;
        text-align: center;
      }
      dd {
        text-align: center;
        font-size: 14px;
        color: #ccc;
        margin: 0;
      }
    }

    dl:nth-child(1) {
      padding: 10px 0.3125rem;

      dt {
        color: red;
        font-size: 1.125rem;
        text-align: center;
      }
      dd {
        color: fff;
        text-align: center;
        font-size: 14px;
        border: 0.0625rem solid red;
        border-radius: 20px;
        padding: 2px;
        background: -webkit-linear-gradient(left, #ff6e02, #fc4245);
      }
    }
  }
}

.list {
  background: rgba(192, 192, 192, 0.2);
  ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    li {
      background: #fff;
      width: 48%;
      height: 15.4375rem;
      margin-bottom: 0.5rem;
      .l-tp {
        margin-bottom: 0.375rem;
        img {
          width: 10.9375rem;
          height: 10.9375rem;
        }
      }
      .l-title {
        width: 9.75rem;
        height: 2.0625rem;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 0.875rem;
        line-height: 1rem;
        margin: auto;
      }
      .l-price {
        width: 9.75rem;
        display: flex;
        margin: auto;
        .p1 {
          margin: 0;
          font-size: 1.125rem;
          color: red;
          line-height: 1.625rem;
          margin-right: 0.3125rem;
        }
        .p2 {
          margin: 0;
          font-size: 0.75rem;
          color: #ccc;
          line-height: 1.625rem;
        }
      }
    }
  }
}
</style>