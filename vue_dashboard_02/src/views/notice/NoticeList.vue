<template>
  <section>
    <el-form class="toolbar" :inline="true">
      <el-form-item label="검색">
          <el-row :gutter="5">
            <el-col :span="6">
              <el-select v-model="noticeOption" placeholder="Select">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
          <el-col :span="14">
            <el-input v-model="search" @keyup.enter.native="onList" placeholder="검색어를 입력하세요"></el-input>
          </el-col>
          <el-col :span="4">
            <el-button type="primary" @click="onList">검색</el-button>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
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
    
    <el-pagination layout="prev, pager, next" 
      :page-size="pageSize" 
      :total="total"
      :current-page.sync="currentPage" 
      @current-change="onPageChange"> 
    </el-pagination>

    <div class="bottomBtns">
      <el-button @click="$router.push('/notice/register')" type="primary">공지사항 등록</el-button>
    </div>
  </section>
</template>

<script>
  // import axios from 'axios'
  import camelCase from 'camelcase-keys'
  import {noticeList} from '@/api/app.js'
  export default {
    data() {
      return {
        noticeData: [],
        total: 1,
        pageSize: 10,
        currentPage: 1
      }
    },
    methods: {
      onList() {
        // axios.get('http://localhost:3000/notice/list')
        noticeList({search:this.search})
        .then(res => {
          const data = camelCase(res.data.body)
          console.log('data = ', data)
          // this.noticeData = data

          console.log('data.length =', data.length);

          this.total = data.length

          let currnetMaxLow = this.currentPage * this.pageSize
          let currnetMinLow = currnetMaxLow - this.pageSize

          console.log(currnetMaxLow, currnetMinLow)

          this.noticeData = data.slice(currnetMinLow, currnetMaxLow)
          
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          
        })
      },
      onSubmit() {
        this.$router.push('/noticeRegister') //$router.push('경로설정') 
      },
      onDetail(no) {
        //  console.log('no = ', no);
        this.$router.push({
          path: '/notice/detail',
          query: {no:no}
        })
      },
      onPageChange(pageNo) {
        console.log(pageNo);
        this.currentPage = pageNo
        this.onList();
      }
    },
    mounted() {
      console.log('noticeList');
      this.onList();
    }
  }
</script>
