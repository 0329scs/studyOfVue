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
      <el-button v-if="!modifyYn" type="primary" @click="onSubmit">등록</el-button>
      <el-button v-else type="primary" @click="onModify">수정</el-button>
      <el-button type="primary" @click="onCancel">취소</el-button>
    </div>
  </section>
</template>
<script>
  import { VueEditor } from 'vue2-editor'
  import axios from 'axios'
  import camelCase from 'camelcase-keys'
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
        },
        modifyYn: false,
        no: this.$route.query.no
      }
    },
    created() {
      if(this.no) {
        
        this.modifyYn = true

        axios.get(`http://localhost:3000/notice/detail/${this.no}`)
        .then(res => {
          console.log('res = ', res)

          const data = camelCase(res.data.body)

          this.form.subj = data.subj
          this.form.conts = data.conts
          this.form.dpTp = data.noticeTp
          // this.form.init = data.init
          console.log(data.init)
          
          if(data.init !== "") {

            this.form.init = data.init.split(",")
            
            console.log(this.form.init)
          
          } else {
            this.form.init = []
          }

        })
        .catch(err => {
          console.log(err);
        })
        .finally(_=> {

        })
      }
    },
    methods: {
      onModify() { //수정
        axios({
          method: 'POST',
          url: 'http://localhost:3000/notice/modify',
          data: {form: this.form, no: this.no}
        })
        .then(res => {
          console.log('res = ', res);
          if (res.data.ok) this.$router.push('/notice/list')
        })
        .catch(err => {
          console.log(err);
          alert('에러가 발생하였습니다.');
        })
        .finally(() => {

        })
      },
      onSubmit() { //등록

        // this = VueComponent
        axios({
          method: 'POST',
          url: 'http://localhost:3000/notice/register',
          data: {form: this.form}
        })
        .then(res => {
          console.log('res = ', res);
          if (res.data.ok) this.$router.push('/notice/list')
        })
        .catch(err => {
          console.log(err);
          alert('에러가 발생하였습니다.');
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
          this.$router.push('/notice/list')
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
