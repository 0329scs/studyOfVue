<template>
  <el-menu class="navbar" mode="horizontal">
    <el-menu-item index="1" class="welcome-wrapper">
    </el-menu-item>  
   <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        <i class="el-icon-setting"/>
        <i class="el-icon-caret-bottom"/>
      </div>
      <el-dropdown-menu slot="dropdown" class="user-dropdown">
        <el-dropdown-item>
          <router-link class="inlineBlock" to="/">Home</router-link>
        </el-dropdown-item>
        <el-dropdown-item divided>
          <span style="display:block;">LogOut</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-menu>
</template>

<script>

export default {
  methods: {
    logout() {
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

.navbar {
  height: 60px;
  line-height: 50px;
  border-radius: 0px !important;

  .welcome-wrapper {
    line-height: 50px;
    font-size: 25px;
    position: absolute;
    right: 250px;
  }

  .kor-wrapper {
    line-height: 50px;
    position: absolute;
    right: 150px;
  }

  .eng-wrapper {
    line-height: 50px;
    position: absolute;
    right: 80px;
  }

  .country-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  
   .avatar-container {
    // line-height: 500px;
    font-size: 40px;
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    cursor: pointer;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 0px;
      position: relative;
      line-height: initial;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
      .el-icon-setting {
        width:20px;
        height:40px;
        font-size:20px;
        line-height:40px;
        text-align:center;
      }
    }
  }
}
</style>

