<template>
  <section class="detail">
    <el-form label-width="180px">

      <el-form-item label="제목" prop="subj" @keyup.native ="onKeyup">
        <el-input v-model="form.subj"></el-input>
      </el-form-item>

      <el-form-item label="팝업구분">
          <el-select v-model="form.popupTp">
            <el-option
              v-for="item in tpOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
      </el-form-item>

      <el-form-item label="대체텍스트" v-show="form.popupTp == '이용동의'">
        <el-input v-model="form.subConts"></el-input>
      </el-form-item>

      <el-form-item label="바로가기">
        <el-radio-group v-model="form.cnntUrlYn">
          <el-radio label="사용"></el-radio>
          <el-radio label="미사용"></el-radio>
        </el-radio-group>
        <el-input v-model="form.cnntUrl" placeholder="팝업 이미지 클릭시 이동할 URL을 입력하세요.">
        </el-input>
      </el-form-item>

      <el-form-item label="이미지등록">
        <el-upload :disabled="form.popupTp == '이용동의'"
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
          <div slot="tip" :class="['ex-1', {'ex-2': classChk}]">※ JPG,PNG 파일만 업로드 가능합니다. 해상도는 400 X 600에 최적화 되어있습니다.</div>
        </el-upload>
      </el-form-item>

    </el-form>

    <div class="bottomBtns">
      <el-button v-if="!modifyYn" type="primary" @click="onSubmit('form')">등록</el-button>
      <el-button v-if="modifyYn" type="primary" @click="onUpdate('form')">수정</el-button>
      <el-button type="primary" @click="onCancel">취소</el-button>
      <el-button type="primary" @click="showModal = true">팝업보기</el-button>
    </div>
    <popup-modal v-if="showModal" @close="showModal = false"
      :form="this.form"
      :file="this.file"
    >
    </popup-modal>
    
  </section>
</template>
<script>
  import PopupModal from '@/views/popup/PopupModal.vue'
  export default {
    components: {
      PopupModal
      // model: PopupModal
    },
    watch: { // 컴포넌트 변경사항을 주시하다가 변경 시 작동
      'form.subj'(subj, oldSubj) {
        // console.log('newSubj = ', subj)
        // console.log('oldSubj = ', oldSubj)
      }
    },
    data() {
      return {
       
        form: {
          subj: '',
          popupTp: '기본',
          subConts: '',
          cnntUrlYn: '',
          cnntUrl: ''
        },
        
        fileList: [],
        file: '',
        modifyYn: false,
        classChk: false,
        // classChk: true,
        showModal: false,

        tpOptions: [{
          value: '기본',
          label: '기본'
        }, {
          value: '이용동의',
          label: '이용동의'
        }, {
          value: '이벤트',
          label: '이벤트'
        }]
      }
    },
    
    methods: {
      onKeyup(e) {
        // console.log(e)
        if(this.form.subj.length > 10) {
          this.form.subj = this.form.subj.substring(0, 10)
        }
      },
   
      onSubmit() {
       
      },
    
      // 글 수정
      onUpdate() {
        
      },

      // 글 등록 취소
      onCancel() {
        
      },

      // 이미지 삭제
      onImgRemove(file, fileList) {

      },

      // 이미지 변환
      onImgChange(file, fileList) {
        console.log('file = ', file)
        this.file = file.url
      }
    }
    
  }
</script>
<style scoped>
  .ex-1 {
    color: red
  }
  .ex-2 {
    display: none;
  }
 
</style>

