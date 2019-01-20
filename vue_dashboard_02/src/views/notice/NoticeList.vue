<template>
  <section>
    <el-table>
      <el-table-column label="No" width="70" align="center"></el-table-column>
      <el-table-column label="제목" header-align="center">
      </el-table-column>
      <el-table-column align="center" label="구분" width="150">
      </el-table-column>
      <el-table-column align="center" label="등록일" width="220">
      </el-table-column>
    </el-table>
    
    <div class="bottomBtns">
      <el-button type="primary" v-on:click="onSubmit">공지사항 등록</el-button>
      <!-- <el-button type="primary" ><router-link to="/noticeRegister">공지사항 등록</router-link></el-button> -->
    </div>
  </section>
</template>

<script>
  export default {
   methods: {
     onSubmit() {
       this.$router.push('/noticeRegister') //$router.push('경로설정') 
     }
   }
  }
</script>
