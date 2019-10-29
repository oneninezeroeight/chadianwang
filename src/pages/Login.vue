<template>
  <div class="login">
    <div class="top">
      <div class="top-dh">
        <van-nav-bar left-text left-arrow />
      </div>
      <div class="top_images">
        <img class="logn" src="../images/login-logo.png" alt />
      </div>
    </div>
    <div class="nav">
      <van-cell-group>
        <van-field required clearable label="用户名" right-icon="question-o" placeholder="请输入用户名" />
        <van-field type="password" label="密码" placeholder="请输入密码" required />
      </van-cell-group>
    </div>
    <input type="submit" value="登录" id="loginbutton" />
  </div>
</template>
<script>
export default {};
</script>
<style lang='scss' scoped>
.top_images {
  margin: auto;
  width: 130px;
  height: 50px;
  margin-bottom: -3.375rem;
  margin-top: 4.25rem;
}
.logn {
  border: 0;
  height: 2.99125rem;
  max-width: 100%;
  width: 7.045625rem;
  vertical-align: middle;
  text-align: center;
  margin-left: 0.5rem;
}
.van-cell-group {
  margin-top: 5.875rem;
}
#loginbutton {
  width: 22.18125rem;
  height: 2.824375rem;
  text-align: center;
  padding-left: 0.3125rem;
  padding-right: 0.3125rem;
  border-radius: 0.625rem;
  font-size: 1.417rem;
  color: #fff;
  background-color: #f02b2b;
  outline: none;
  border: none;
  line-height: 2.824375rem;
  margin-top: 1.3125rem;
  margin-left: 0.5125rem;
}
</style>

