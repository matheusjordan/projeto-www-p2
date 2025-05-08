<script setup>
import { onMounted, onUpdated, ref, reactive, watch } from 'vue'
import { useRoute } from 'vue-router'
import apiService from '../services/api-service'
const route = useRoute()
const chatId = ref(route.params.id)
const inputMessage = ref("");

const chat = reactive({
    id: chatId.value,
    name: 'Chat ' + chatId.value,
    messages: []
})

const sendMessage = async () => {
    await apiService.messages.create({
        chatId: chatId.value,
        message: inputMessage.value
    })
    getMessages()
    inputMessage.value = ""
}

const getMessages = async () => {
    const messages = await apiService.messages.getByChatId(chatId.value)
    chat.messages = messages
}

watch(() => route.params.id, async () => {
    chatId.value = route.params.id
    getMessages()
})

onMounted(() => {
    getMessages()
})
</script>

<template>
    <div>
        <h1>Nota {{ chatId }}</h1>
    </div>

    <div class="msg-container" v-if="chat.messages.length > 0">
        <div class="msg-item" v-for="message in chat.messages" :key="message.id">
            <p>{{ message.message }}</p>
        </div>
    </div>
    <div class="msg-container" v-else>
        <p>Nenhuma mensagem encontrada</p>
    </div>

    <div class="msg-input">
        <input v-model="inputMessage" type="text" placeholder="Digite sua mensagem">
        <button @click="sendMessage">Enviar</button>
    </div>

</template>

<style scoped>

</style>