<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
                {{form.subj}}
                <hr/>
            </slot>
          </div>
            
          <div class="modal-body">
            <slot name="body">
              <span class="contsProps"></span>
              <img class="popupImg" :src="file" alt=""/><br/>
            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <div>
                <el-checkbox></el-checkbox>
              </div>
              <p/>
              <p/>
                <!-- 푸터입니다 -->
            </slot>
          </div>
              <el-button class="popupBtn" @click="$emit('close')" type="primary">닫기</el-button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['form', 'file'],
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  margin: 0px auto;
  padding: 100px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
  margin-top: 0;
  text-align: center;
  /* color: #42b983; */
}

.modal-body {
  margin: 10px 0;
}

.modal-footer {
  margin: 0px 0;
  position: absolute;
  text-align: left;
}

.popupImg {
  width: 100%;
}
.popupBtn {
  text-align: center;
  float: right;
}
.modal-footer .el-checkbox {
  margin-left:8px;
}

.modal-default-button {
  float: right; 
}
.modal-footer .modal-default-button {
  width:80px;
  height:30px;
  font-size:14px;
  font-weight:300;
  color:#fff;
  line-height:30px;
  border:0;
  border-radius:2px;
  padding:0;
  background:#3f51b5;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>
