<script setup>
import { onMounted, ref } from 'vue'
import apiService from '../services/api-service'

const navItems = ref([])

onMounted(() => {
    getChats()
})

const getChats = async () => {
  const chats = await apiService.chats.getAll();
  
  const newNavItems = chats.map(item => {
    return {
      label: `Nota: ${item.id}`,
      to: `/chat/${item.id}`
    }
  })

  navItems.value = newNavItems
}

const clearAll = async () => {
  await apiService.chats.clearAll();
  getChats()
}

const createChat = async () => {
  const newChat = await apiService.chats.create('Chat ' + new Date().toISOString());
  getChats()
}
</script>

<template>
    <nav>
        <button @click="clearAll">Limpar Tudo</button>
        <button @click="createChat">Criar Chat</button>
        <RouterLink v-for="item in navItems" :key="item.label" :to="item.to">{{ item.label }}</RouterLink>
        <RouterLink to="/about">Sobre</RouterLink>
      </nav>
</template>

<style scoped>
nav {
    display: flex;
    flex-flow: column;
    min-width: 100px;
    gap: 8px;
  }
</style>