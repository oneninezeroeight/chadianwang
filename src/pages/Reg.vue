<template>
  <div>
    <div class="head">
      <van-nav-bar left-text left-arrow />
    </div>
    <div class="top_images">
      <img class="lognimages" src="../images/login-logo.png" alt />
    </div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="regForm" label-width="100px">
      <div class="phonebox">
        <el-form-item label prop="username">
          <el-input class="phones" v-model="ruleForm.username" placeholder="请输入手机号码"></el-input>
        </el-form-item>
      </div>
      <div class="SiSbox">
        <el-form-item label prop="SiSpassword" size="mini">
          <el-input
            class="sis"
            type="password"
            v-model="ruleForm.SiSpassword"
            placeholder="请输入验证码"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <button class="btn" :disabled="disabled" @click="endTime">{{text}}</button>
      </div>
      <div class="regbtn">
        <el-form-item>
          <el-button class="btnsreg" type="primary" @click="submitForm">注册</el-button>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    const checkUsername = async (rule, value, callback) => {
      //校验用户名是否存在
      let { data } = await this.$axios.get("http://localhost:1907/user/check", {
        //发送网络请求
        params: {
          //查看用户表是否存在用户名
          username: this.ruleForm.username
        }
      });
      if (data.code === 0) {
        //如果存在
        callback(new Error("用户名已存在"));
      } else {
        //否则验证通过
        callback();
      }
    };
    return {
      disabled: false,
      time: 60,
      text: "获取验证码",
      ruleForm: {
        //初始化两个为空的值
        username: "",
        SiSpassword: ""
      },
      mounted: function() {},
      rules: {
        //校验规则
        username: [
          { required: true, message: "亲！手机号码要填哦！", trigger: "blur" }, //blur是自动验证
          {
            min: 11,
            max: 11,
            message: "亲手机长度必须11个字符",
            trigger: "blur"
          },
          { validator: checkUsername, trigger: "blur" } //确认用户名是否存在
        ],
        SiSpassword: [
          { required: false, message: "亲！验证码失败呀！", trigger: "blur" },
          {
            min: 4,
            max: 4,
            message: "亲验证码长度必须4个字符",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    //验证手机号码部分
    sendcode() {
      // 手机验证部分
      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/; //手机正则
      if (this.ruleForm.username == "") {
        //如果正确
        alert("请输入手机号码");
      } else if (!reg.test(this.ruleForm.username)) {
        alert("手机格式不正确请重新输入");
        return;
      } else {
        this.time = 60;
        this.disabled = true;
        this.startTime();
        /*axios.post(url).then(
      res=>{
      this.phonedata=res.data;
     })*/
      }
    },
    startTime() {
      //开启定时器发送短信验证码
      const timer = window.setInterval(() => {
        window.console.warn(this);
        if (this.time > 0) {
          window.console.warn(this.time);
          this.text = this.time + "s后重试";
          this.time = this.time - 1;
          this.disabled = true;
        } else {
          this.time = 60;
          this.text = "点击获取验证码";
          this.disabled = false;
          window.clearInterval(timer);
        }
      }, 1000);
    },
    endTime() {
      this.startTime();
    },
    submitForm() {
      window.console.log(this);
      //校验整个表单
      this.$refs.regForm.validate(async valid => {
        //所有校验规则都通过后得到true,只要有一个规则不通过会的到一个flase
        if (valid) {
          let { username } = this.ruleForm;
          let { data } = await this.$axios.post(
            "http://localhost:1907/user/reg",
            {
              //发送网络请求，并且传参数
              username
            }
          );
          window.console.log("data", data);
          if (data.code === 1) {
            alert("注册成功");
            
            this.$router.replace({
              path: "/Login",
              params: { username },
              query: { username }
            }); //如果成功跳转到登录页面
          } else {
            alert("注册失败");
          }
        } else {
          window.console.log("注册失败!!");
          return false;
        }
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.head {
  width: 100%;
}
.top_images {
  width: 100%;
  text-align: center;
  margin-bottom: 1.875rem;
}
.lognimages {
  width: 7.045625rem;
  height: 2.99125rem;
}
.phonebox {
  width: 100%;
}
.phones {
  text-indent: -60px;
  border: none;
}
.SiSbox {
  width: 100%;
  margin: auto;
}
.sis {
  text-indent: -60px;
  border: none;
  float: left;
}
.btn {
  float: right;
  margin-top: -3.5rem;
  color: black;
  margin-right: -0.01rem;
  font-size: 0.75rem;
  height: 3.125rem;
  width: 3.75rem;
  border: 0.0625rem solid black;
  background: white;
}
.regbtn {
  width: 100%;
  margin-left: 40px;
}
.btnsreg {
  width: 100%;
  height: 2.824375rem;
  margin-left: -90px;
}
</style>