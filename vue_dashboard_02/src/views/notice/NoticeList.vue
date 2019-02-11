<template>
  <section>
    <el-table :data="noticeData">
      <el-table-column prop="noticeMngNo" label="No" width="70" align="center"></el-table-column>
      <el-table-column prop="subj" label="제목" header-align="center">
        <template slot-scope="scope">
          <span class="link" @click="onDetail(scope.row.noticeMngNo)">{{scope.row.subj}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="noticeTp" align="center" label="구분" width="150">
      </el-table-column>
      <el-table-column prop="regDt" align="center" label="등록일" width="220">
      </el-table-column>
    </el-table>
    
    <div class="bottomBtns">
      <el-button @click="$router.push('/noticeRegister')" type="primary">공지사항 등록</el-button>
    </div>
  </section>
</template>

<script>
  import axios from 'axios' 
  import camelCase from 'camelcase-keys'
  export default {
    data() {
      return {
        noticeData: []
      }
    },
    methods: {
     onSubmit() {
       this.$router.push('/noticeRegister') //$router.push('경로설정') 
     },
     onDetail(no) {
      //  console.log('no = ', no);
       this.$router.push({
         path: '/noticeDetail',
         query: {no:no}
       })
     }
   },
    created() {
      console.log('noticeList');
      axios.get('http://localhost:3000/notice/list')
      .then(res => {
        const data = camelCase(res.data.body)
        console.log('data = ', data)
        this.noticeData = data
        
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
         
      })
    }
  }
</script>
