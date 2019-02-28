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

      <el-form-item label="이미지등록">
        <el-upload 
          class="upload-demo"
          action=""
          name="file"
          :multiple="false"
          :on-remove="onImgRemove"
          :on-change="onImgChange"
          :auto-upload="false"
          :limit="1"
          :file-list="fileList"
          list-type="picture">
          <el-button size="small" type="info">파일업로드</el-button>
        </el-upload>
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
  // import axios from 'axios'
  import camelCase from 'camelcase-keys'
  import {noticeRegister, noticeDetail, noticeModify} from '@/api/app.js'
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
        fileList: [],
        imgFile: '',
        modifyYn: false,
        no: this.$route.query.no
      }
    },
    created() {
      if(this.no) {
        
        this.modifyYn = true

        // axios.get(`http://localhost:3000/notice/detail/${this.no}`)
        noticeDetail(this.no)
        .then(res => {
          console.log('res = ', res)

          const data = camelCase(res.data.body)

          this.form.subj = data.subj
          this.form.conts = data.conts
          this.form.dpTp = data.noticeTp
          // this.form.init = data.init
          
          if(data.init !== "") {

            this.form.init = data.init.split(",")
            
            console.log(this.form.init)
          
          } else {
            this.form.init = []
          }

          if(data.phyImgName) {
            this.fileList = [{name:data.oriImgName, url: `http://localhost:3000/images/${data.phyImgName}`}]
          }
          this.form.phyImgName = data.phyImgName
          this.form.oriImgName = data.oriImgName

        })
        .catch(err => {
          console.log(err);
        })
        .finally(_=> {

        })
      }
    },
    methods: {
      onImgRemove(file) {
        console.log('=== onImgRemove ===')
        console.log(file)
        console.log('=== onImgRemove ===')
        this.imgFile = ''
        this.form.oriImgName = ''
      },
      onImgChange(file) {
        console.log('=== onImgChange ===')
        console.log(file)
        console.log('=== onImgChange ===')

        let fileName = file.name // 파일명

        console.log('fileName = ', fileName)

        let lastDot = fileName.lastIndexOf('.') // 확장자

        console.log('lastDot = ', lastDot)

        let fileExt = fileName.substring(lastDot).toLowerCase()

        console.log('fileExt = ', fileExt)

        if(fileExt !== '.jpg' && fileExt !== '.png' && fileExt !== '.jpeg') {
          alert('JPG, PNG 파일만 업로드 가능합니다.')
          this.fileList = []
        } else {
          this.imgFile = file
        }
      },
      onModify() { //수정
        // axios({
        //   method: 'POST',
        //   url: 'http://localhost:3000/notice/modify',
        //   data: {form: this.form, no: this.no}
        // })
        const formData = new FormData()

        formData.append('form', JSON.stringify(this.form))
        formData.append('no', this.no)

        if(this.imgFile) {
          formData.append('image', this.imgFile.raw)
        }
        noticeModify(formData)
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
        // axios({
        //   method: 'POST',
        //   url: 'http://localhost:3000/notice/register',
        //   data: {form: this.form}
        // })

        // console.log('file = ', this.imgFile)

        const formData = new FormData()

        formData.append('form', JSON.stringify(this.form))
        
        if(this.imgFile) {
          formData.append('image', this.imgFile.raw)
        }

        console.log(formData)

        noticeRegister(formData)
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
