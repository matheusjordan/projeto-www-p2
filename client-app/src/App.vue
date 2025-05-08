<script setup>
import { onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'

onMounted(() => {
  console.log('NEED TO GET ALL CHAT NOTES')  
})
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
}
</style>
