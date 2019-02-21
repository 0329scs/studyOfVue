<template>
    <div class="app-wrapper">
      <Sidebar class="sidebar-container"/><!-- @/components/Sidebar.vue(공통영역/lnb) -->
      <div class="main-container">
        <Navbar /><!-- @/components/Navbar.vue(공통영역/상단) -->
        <section class="app-main">
          <transition name="fade-transform" mode="out-in">
            <router-view/><!-- views 안 내용(바뀌는 영역) -->
          </transition>
        </section>
      </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
    components: {
        Navbar,
        Sidebar
  }
}
</script>

<style>

</style>
