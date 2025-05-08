<script setup>
const navItems = [
  {
    label: 'Chat 3',
    to: '/chat/3'
  }
]
</script>

<template>
    <nav>
        <button>Limpar Tudo</button>
        <button>Criar Chat</button>
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