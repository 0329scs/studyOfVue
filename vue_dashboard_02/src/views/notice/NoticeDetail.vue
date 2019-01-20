<template>
  <section class="detail">
    <el-form ref="form" labl-width="120px">
      <el-form-item label="제목">
        <el-input readonly></el-input>
      </el-form-item>
      <el-form-item label="구분" label-width="">
        <el-input readonly></el-input>
      </el-form-item>
      <el-form-item label="작성일">
        <el-input readonly></el-input>
      </el-form-item>
      <el-form-item label="내용">
        <el-input class="contsProps" ></el-input>
      </el-form-item>
    </el-form>
    <div class="bottomBtns">
      <el-button type="primary">목록</el-button>
      <el-button type="primary">수정</el-button>
      <el-button type="primary">삭제</el-button>
    </div>
  </section>
</template>
<script>
  import { VueEditor } from 'vue2-editor'
  export default {
    components: {
      VueEditor
    },
  }
</script>
<style scoped>
  .el-select .el-input {
    width: 110px;
  }

  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
