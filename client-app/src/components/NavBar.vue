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
      id: item.id,
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

const deleteChat = async (id) => {

  if (confirm(`Tem certeza que deseja excluir a nota: ${id}?`)) {
    await apiService.chats.delete(id);
  }
    
  getChats()
}
</script>

<template>
    <nav>
      <RouterLink class="nav-item" to="/about">Sobre</RouterLink>
      <button @click="clearAll">Limpar Tudo</button>
      <button @click="createChat">Criar Chat</button>
      <div class="nav-item" v-for="item in navItems" :key="item.label">
        <RouterLink class="nav-item-link" :to="item.to">{{ item.label }}</RouterLink>
        <p class="delete-chat" @click="deleteChat(item.id)">excluir</p>
      </div>
    </nav>
</template>

<style scoped>
nav {
  display: flex;
  flex-flow: column-reverse;
  min-width: 170px;
  max-width: 170px;
  gap: 8px;
  padding: 8px;
  border-right: 1px solid #ccc;

}

.delete-chat {
  color: red;
  cursor: pointer;
  opacity: 0;
}

.delete-chat:hover {
  opacity: 1;
  border: 1px solid red;
  border-radius: 4px;
  padding: 4px;
}

.nav-item {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  height: 42px;

  .nav-item-link {
    width: 100%;
  }
}

.nav-item:hover {
  border: 1px solid #fff;
  border-radius: 4px;
  padding: 4px;
}

</style>