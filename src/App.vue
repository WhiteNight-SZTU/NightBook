<template>
  <div class="login" :class="{'show': show}">
    <h2>登录</h2>
    <form @submit.prevent="login" class="login-form">
      <div class="form-group">
        <label for="username">用户名</label>
        <input type="account" id="username" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="password">&ensp;密码&ensp;</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">登录</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      show: false,
    };
  },
  methods: {
    login() {
    },
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 100);
  },
};
</script>

<style>
@import "assets/css/global.css";

.login {
  display: flex;
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
  min-width: 40vh;
  min-height: 40vh;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 4s;
  border: 1px solid;
  background-color: rgba(255, 255, 255, 0.5);
}
.login.show {
  opacity: 1;
}
.login-form {
  width: 100%; 
  max-width: 400px; 
  padding: 20px;
}
.login input[type="account"],
.login input[type="password"],
.login button {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
