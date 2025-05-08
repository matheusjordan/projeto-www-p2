<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const chatId = route.params.id

const chat = {
    id: chatId,
    name: 'Chat ' + chatId,
    messages: [
        {
            id: 1,
            message: 'Nota 1'
        },
        {
            id: 2,
            message: 'Nota 2'
        }
    ]
}

</script>

<template>
    <div>
        <h1>Nota {{ chatId }}</h1>
    </div>

    <div class="msg-container">
        <div class="msg-item" v-for="message in chat.messages" :key="message.id">
            <p>{{ message.message }}</p>
        </div>
    </div>

    <div class="msg-input">
        <input type="text" placeholder="Digite sua mensagem">
        <button >Enviar</button>
    </div>

</template>

<style scoped>

</style>