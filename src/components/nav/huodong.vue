<template>
  <div id="hd">
    <div class="hd" v-for="(item,index) in huodong" :key="index">
      <div class="title">
        <div v-for="ele in item.text" :key="ele">{{ele}}</div>
      </div>
      <div class="js">
        <dl v-for="e in item.imgs" :key="e.name">
          <dt>{{e.name}}</dt>
          <dd>
            <img :src="e.img" alt />
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      huodong: [
        {
          imgs: [
            {
              name: "限时半价",
              img:
                " https://chadian-img.oss-cn-shanghai.aliyuncs.com/product/i15619784620006972.jpeg"
            },
            {
              name: "买好茶",
              img:
                "https://chadian-img.oss-cn-shanghai.aliyuncs.com/shopbanner/88ed527b15e9440f90643fd655313234.jpg"
            },
            {
              name: "源头好货",
              img:
                "https://chadian-img.oss-cn-shanghai.aliyuncs.com/Upload/791cb15e265c407e922f34f3a75b975d.jpg"
            },
            {
              name: "精选特卖",
              img:
                "https://chadian-img.oss-cn-shanghai.aliyuncs.com/product/i15674915530009160.jpeg"
            }
          ],
          text: ["限时抢购", "天天特买"]
        },

        {
          imgs: [
            {
              name: "寻深藏的店",
              img:
                "https://chadian-img.oss-cn-shanghai.aliyuncs.com/product/i15682270870003431.jpeg"
            },
            {
              name: "好货",
              img:
                "https://chadian-img.oss-cn-shanghai.aliyuncs.com/product/i15707256380002540.jpeg"
            },
            {
              name: "源头好货",
              img:
                "https://chadian-img.oss-cn-shanghai.aliyuncs.com/product/i15606812650002542.jpeg"
            },
            {
              name: "精选特卖",
              img:
                "https://chadian-img.oss-cn-shanghai.aliyuncs.com/product/i15674915530009160.jpeg"
            }
          ],
          text: ["每日好店", "发现好茶"]
        },

        {
          imgs: [
            {
              name: "红包可累积",
              img: "https://m.chadian.com/assets/img/app_hongbao.png"
            },
            {
              name: "积分可抵扣",
              img: "https://m.chadian.com/assets/img/app_jifen.png"
            },
            {
              name: "好货",
              img:
                "https://chadian-img.oss-cn-shanghai.aliyuncs.com/Upload/c4194f1d56b94cdcb596d18790b9cd0a.jpg"
            },
            {
              name: "让感观贴近产品",
              img:
                "https://chadian-img.oss-cn-shanghai.aliyuncs.com/Upload/f345df31a28843cfa2e1a9884427c3bf.jpg"
            }
          ],
          text: ["每日红包", "积分签到", "哇哦视频"]
        }
      ],
      lb: [
        "热门   免费开店，免费入驻，买好茶，卖好茶，就上茶店网。",
        "热门   APP 公众号 小程序 请搜索 茶店网 使用-点击进入茶文化知识",
        "热门   茶店网chadian.com 商家招募入驻零门槛-点击进入茶文化知识"
        // "热门   APP 公众号 小程序 请搜索 茶店网 使用-点击进入茶文化知识"
      ]
    };
  }
};
</script>
<style lang='scss' scoped>
.hd {
  //   margin-top: 0.9375rem;
  padding: 0.3125rem 0.625rem;
  //   margin-bottom: 0.625rem;

  .title {
    width: 70%;
    margin-bottom: 0.375rem;
    display: flex;
    justify-content: space-between;
  }

  .js {
    display: flex;
    justify-content: space-between;
    // margin-bottom: 0.625rem;

    dl {
      width: 25%;
      margin: 0;

      dt {
        font-size: 0.75rem;
        margin-bottom: 0.375rem;
      }
      dd {
        margin: 0;
        img {
          width: 4.78125rem;
          height: 4.78125rem;
        }
      }
    }
  }
}
</style>