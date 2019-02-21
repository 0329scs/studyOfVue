<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>

export default {
  name: 'App',
}
</script>

<style rel="stylesheet/scss" lang="scss">

  @import "src/styles/mixin.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    &.mobile.openSidebar{
      position: fixed;
      top: 0;
    }
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
  #app .sidebar-container {
    width:250px !important;
  }
  #app .main-container {
    margin-left:250px;
  }
  #app .hideSidebar .sidebar-container {
    width:36px !important;
  }
  #app .hideSidebar .main-container {
    margin-left:36px;
  }
  #app .mobile .main-container {
    margin-left:0;
  }

// app-main

.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  position: relative;
  overflow: hidden;
  padding:30px 40px;
}
.dashboard-container {
  font-size: 30px;
  line-height: 46px;
}
/* .menu-wrapper:last-child {
  position:absolute;
  bottom:0;
  left:0;
  width:100%;
  border-top:1px rgba(255,255,255,0.2) solid;
} */
.toolbar {
  position:relative;
  margin-bottom:30px;
  background:#f4f4f4;
  border-radius:4px;
}
.toolbar::after, .toolbar::before {
  content:'';
  display:table;
}
.toolbar::after {
  clear:both;
}
.toolbar.middle {
  margin-top:30px;
}
.regBtns {
  position:absolute;
  top:calc(50% - 20px);
  right:15px;
}
.el-form-item {
  padding:15px;
  margin:0;
  margin-right:0 !important;
  padding-right:0;
}
.el-table.el-table--border {
  border:0;
  border-top:1px #d7d7d7 solid;
}
.el-table::before {
  background-color:#d7d7d7;
}
.el-table .el-table__header th {
  height:40px;
  font-size:12px;
  font-weight:normal;
  padding:0;
  background:#f5f5f5;
  border-bottom:1px #d7d7d7 solid;
  border-right:1px #e5e5e5 solid;
}
.el-table .el-table__header th:last-child,
.el-table .el-table__header th:nth-last-child(2),
.el-table .el-table__body td:last-child {
  border-right:0;
}
.el-table::after {
  display:none;
}
.el-table .el-table__body tr:hover td,
.el-table .el-table__body .el-table__row:hover td {
  background-color:initial !important;
}
.el-table .link {
  cursor:pointer;
  color:#409EFF;
}
.el-table .link:hover {
  text-decoration:underline;
}
.el-pagination {
  text-align: center;
  /* font-size: 30px; */
  margin-top:20px;
}
.bottomBtns {
  position:relative;
  text-align:center;
  margin-top:20px;
}
.detail .el-form-item {
  border-radius:0;
  background:none;
  border-bottom:1px solid #ebeef5;
  padding:10px 15px;
}
.detail .el-form-item:first-child {
  border-top:1px #d7d7d7 solid;
}
.detail .el-form-item:last-child {
  border-color:#d7d7d7;
}
.detail .el-form-item__label {
  padding-right:30px;
}
.detail .el-row .upload-btn {
  width:140px;
}
.detail .el-row .upload-input {
  width:calc(100% - 140px);
  padding-right:10px;
}
.detail .el-upload__tip {
  margin-top:0;
}
.detail .el-date-editor + .el-checkbox {
  margin-left:10px;
}
.detail .ql-toolbar {
  line-height:normal;
}
.el-dialog .el-form-item {
  border:0 !important;
}

.contsProps {
  margin: 0;
  line-height: 1.0;
  /* font-size:14px; */
  /* color:#616161; */
  /* padding:0px 0px 45px; */
  /* border-bottom:1px #c5c5c5 solid; */
}
</style>
