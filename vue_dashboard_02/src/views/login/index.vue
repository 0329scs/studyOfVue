<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
      <h3 class="title">관리자 로그인</h3>
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input v-model="loginForm.username" name="username" type="text" auto-complete="on" placeholder="아이디를 입력해주세요" />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          :type="pwdType"
          v-model="loginForm.password"
          name="password"
          auto-complete="on"
          placeholder="비밀번호를 입력해주세요"
          @keyup.enter.native="handleLogin" />
        <span class="show-pwd" @click="showPwd">
          <svg-icon icon-class="password" />
        </span>
      </el-form-item>
      <el-form-item>
        <el-button :loading="loading" type="primary" style="width:100%;" @click.native.prevent="handleLogin">
          로그인
        </el-button>
      </el-form-item>
      <el-form-item>
        <el-button :loading="loading" type="primary" style="width:100%;" @click="$router.push('/')">
          비회원
        </el-button>
      </el-form-item>
      <el-form-item>
        <el-button :loading="loading" type="primary" style="width:100%;" @click="$router.push('/registration')">
          회원가입
        </el-button>
      </el-form-item>
      <div class="tips">
        <span style="margin-right:20px;">username: admin</span>
        <span> password: admin</span>
      </div>
    </el-form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
// import {mapActions, mapState, mapMutations, mapGetters} from 'vuex' 상황에 따라 쓸 수 있다

export default {
 
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!value.length) {
        callback(new Error('아이디를 입력해주세요'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (!value.length) {
        callback(new Error('비밀번호를 입력해주세요'))
      } else {
        callback()
      }
    }
    return {
      showModal: false,
      loginForm: {
        username: '',
        password: '',
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePass }]
      },
      // loading: false,
      pwdType: 'password',
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      
      },
      immediate: true
    },
    userId(id) {
      console.log('watch id =', id);

      this.$router.push('/')
    }
  },
  computed: {
    ...mapState({
      userId: state => state.user.id,
      loading: state => state.user.loading
    })
  },
  methods: {
    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    handleLogin() {
      console.log('====로그인 버튼====')

      this.$refs.loginForm.validate(vaild => {
        if(vaild) {
          console.log('===벨류데이션 체크===')

          // this.loading = true;
          console.log(this.$store.state.user.loading);

          this.$store.state.user.loading = true

          console.log(this.$store.state.user.loading);

          console.log('this.loginForm = ', this.loginForm);

          // this.$store.dispatch('Login', this.loginForm) vuex 비구조화 할당
          this.Login(this.loginForm)
        }
      })
    },
    ...mapActions([
      'Login',
      // 'User',
      // 'Join' 때에 따라 다양하게 사용가능
    ])
  },
  mounted() {
    console.log('mounted', this.loading, this.userId)
  },
}
</script>

<style rel="stylesheet/scss" lang="scss">
$bg:#2d3a4b;
$light_gray:#eee;

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: #fff !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}

</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 520px;
    max-width: 100%;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
  .title {
    font-size: 26px;
    font-weight: 400;
    color: $light_gray;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .refresh {
    color: red;
    font-size: 20px;
  }
}
</style>
