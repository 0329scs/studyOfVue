<template>
  <section class="detail">
    {{form}}
    <el-form ref="form" label-width="150px">
      <el-form-item label="제목">
        <el-input v-model="form.subj"></el-input>
      </el-form-item>
      <el-form-item label="헤드라인 등록">
        <el-radio-group  v-model="form.dpTp">
          <el-radio label="헤드라인"></el-radio>
          <el-radio label="일반"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="팝업개시 대상" prop="">
        <el-checkbox-group  v-model="form.init">
          <el-checkbox label="PC Web"></el-checkbox>
          <el-checkbox label="Mobile Web"></el-checkbox>
          <el-checkbox label="APP"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="내용">
        <vue-editor id="editor"  v-model="form.conts"></vue-editor>
      </el-form-item>
    </el-form>
    <div class="bottomBtns">
      <el-button type="primary" @click="onSubmit">등록</el-button>
      <!-- <el-button type="primary">수정</el-button> -->
      <el-button type="primary" @click="onCancel">취소</el-button>
    </div>
  </section>
</template>
<script>
  import { VueEditor } from 'vue2-editor'
  import axios from 'axios'
  export default {
    components: {
      VueEditor
    },
    data() {
      return {
        form: {
          subj: '',
          dpTp: '',
          init: [],
          conts: ''
        }
      }
    },
    methods: {
      //등록
      onSubmit() {
        // this = VueComponent
        axios({
          method: 'POST',
          url: 'http://localhost:3000/notice/register',
          data: {form: this.form}
        })
        .then(res => {

        })
        .catch(err => {

        })
        .finally(() => {

        })
      },
      //취소
      onCancel() {
        this.$confirm("등록을 취소하시겠습니까?", {
          confirmButtonText: 'OK',
          cancelButtonText: 'Cancel',
          center: true,
          type: 'warning'
        })
        .then(() => {
          this.$router.push('/noticeList')
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '취소되었습니다.'
          })
          console.log(err);
        })
      }
    }
  }
</script>
<style>

</style>
