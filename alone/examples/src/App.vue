<template>
  <div id="app">
    제이쿼리 / 라이브러리 연동<br>
    <DatePicker></DatePicker><br>
    <button type="button" class="btn btn-primary btn-lg">Large Button</button>
    <Chart></Chart>
  </div>
</template>

<script>
import DatePicker from './DatePicker.vue'
import Chart from './Chart.vue';
export default {
  components: {
    DatePicker,
    Chart
  }
}
</script>

<style>

</style>
