<template>
  <div>
    <div class="head">
      <van-nav-bar left-text left-arrow />
    </div>
    <div class="top_images">
      <img class="lognimages" src="../images/login-logo.png" alt />
    </div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
      <div class="usenamesbox">
        <el-form-item label="用户名" prop="username" class="user-name-box">
          <el-input type="text" v-model="ruleForm.username" autocomplete="off" class="usenames"></el-input>
        </el-form-item>
      </div>
      <div class="passwordbox">
        <el-form-item label="密码" prop="password" class="pas">
          <el-input
            type="password"
            v-model="ruleForm.password"
            autocomplete="off"
            class="passwrods"
          ></el-input>
        </el-form-item>
      </div>
      <div>
          <el-checkbox label="免登陆" v-model="ruleForm.mdl" class="loginbths"></el-checkbox>
      </div>
      <el-form-item class="btnbox">
        <el-button class="loginbtn" type="primary" @click="submitForm">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        //初始化两个为空的值
        username: "",
        mdl:true, 
      },
      mounted: function() {},
      rules: {
        //校验规则
        username: [
          //用户名
          { required: true, message: "亲！用户名要填哦！", trigger: "blur" } //blur是自动验证
        ],
        password: [
          //密码
          { required: true, message: "亲请输入密码！", trigger: "blur" }
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
      }
    },
    submitForm() {
      //校验整个表单
      this.$refs.ruleForm.validate(async valid => {
        //所有校验规则都通过后得到true,只要有一个规则不通过会的到一个flase
        if (valid) {
          let { username,mdl } = this.ruleForm;
          let { data } = await this.$axios.get(//发送请求，并且传参数
            "http://localhost:1907/user/login",
            {
              params: {
                //发送网络请求，并且传参数
                username,
                mdl
              }
            }
          );
          window.console.log("data", data);

          if (data.code === 1) {
            this.$router.replace({
              path: "/Home",
              params: { username },
              query: { username }
            }); //如果成功跳转到登录页面
            //把token写入localstorage
            localStorage.setItem("Authorization", data.data);
          } else {
            alert("用户名或者密码失败");
          }
        } else {
          window.console.log("登录失败!!");
          return false;
        }
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.loginbths{
  margin-bottom: 1.25rem
}
html {
  display: flex;
}
body {
  width: 100%;
}
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
.usenames {
  width: 22.25rem;
  height: 2.885rem;
}
.passwrods {
  width: 22.25rem;
  height: 2.885rem;
}
.passwordbox {
  width: 100%;
  text-align: center;
}
.usenamesbox {
  width: 100%;
  text-align: center;
}
.btnbox {
  width: 100%;
  text-align: center;
}
.loginbtn {
  width: 22.18125rem;
  height: 2.824375rem;
}
.username {
  float: right;
}
</style>

