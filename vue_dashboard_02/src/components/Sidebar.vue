<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :show-timeout="200"
      :default-active="$route.path"
      mode="vertical"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
      :router="true"
    >
      <el-menu-item index="0" :route="{name:'HelloWorld'}">HOME</el-menu-item>
      <el-menu-item index="1" :route="{name:'NoticeList'}">NOTICE</el-menu-item>
      <el-menu-item index="2" :route="{name:'PopupRegister'}">POPUP</el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>

export default {
 
}
</script>
