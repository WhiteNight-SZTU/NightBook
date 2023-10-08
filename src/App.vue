<script setup>
import WarningBar from './components/WarningBar.vue';
import MouseType_1 from './components/MouseType_1.vue';
</script>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      username: "",
      password: "",
      show: false,
      showPassword:false,
      show_password_emoji:"🙈",
    };
  },
  methods: {
    async login() {
      const message={
        username:this.username,
        password:this.password
      };
      
;
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
      if(this.show_password_emoji=="🙈")
      {
        this.show_password_emoji = "🐵";
      }else
      {
        this.show_password_emoji = "🙈";
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.show = true;
    }, 100);
  },
};
</script>

<template #suffix>
  <div>
    <MouseType_1 style="z-index: 1;"></MouseType_1>
  <div class="login" :class="{'show': show}">
    <h2>登录</h2>
    <form @submit.prevent="login" class="login-form">
      <div class="form-group">
        <label for="username" style="color: aliceblue;cursor: none;">用户名</label>
        <input type="account" id="username" v-model="username" required />
      </div>
      <div class="form-group">
        <label for="password" style="color: aliceblue;cursor: none;">密码</label>
        <div class="password-input">
          <input
            :type="showPassword ? 'text' : 'password'"
            id="password"
            v-model="password"
            required
          />
          <span @click="togglePasswordVisibility" class="show-password">
            {{ showPassword ? '隐藏密码' : '显示密码' }}
            <span class="clickable-span">{{ show_password_emoji }}</span>
          </span>
        </div>
     
      </div>
      <button type="submit">登录</button>
    </form>
  </div>
  </div>
 
</template>


<style>
@import "assets/css/global.css";

.login {
  display: flex;
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
  min-width: 50vh;
  min-height: 50vh;
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
.password-input input[type="text"],
.login button{
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  cursor: none;
}

.login button{
  margin-top: 15px;
  cursor: none
}
.show-password{
  user-select: none;

}
</style>
