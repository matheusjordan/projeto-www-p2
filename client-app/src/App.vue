<script setup>
import { onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'

</script>

<template>
  <header>
    
  </header>
  <div class="container">
    <NavBar />
    <div class="wrapper">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-flow: row;
  height: 100%;
}

.wrapper {
  display: flex;
  flex-flow: column;
  height: 100%;
  width: 100%;
}
</style>
