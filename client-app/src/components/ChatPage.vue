<script setup>
import { onMounted, ref, reactive, watch } from 'vue'
import { useRoute } from 'vue-router'
import apiService from '../services/api-service'
import eventMitt from '../core/event-mitt'
const route = useRoute()
const chatId = ref(route.params.id)
const chatName = ref(route.params.name)

const inputMessage = ref("");
const editMode = ref(false)

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

const editChat = () => {
    editMode.value = true
}

const saveChat = async () => {
    await apiService.chats.updateName(chatId.value, chatName.value) 
    editMode.value = false
    eventMitt.emit$('chat-updated', true)
}

watch(() => route.params.id, async () => {
    chatId.value = route.params.id
    chatName.value = route.params.name
    getMessages()
})

onMounted(() => {
    getMessages()
})
</script>

<template>
    <div class="chat-header" v-if="!editMode">
        <h1>{{ chatName }}</h1>
        <button @click="editChat">Editar Título</button>
    </div>
    <div class="chat-header" v-else>
        <div class="chat-header-input-container">
            <input class="chat-header-input" v-model="chatName" type="text" placeholder="Digite o título da nota">
        <button @click="saveChat">Salvar</button>
        </div>
    </div>

    <div class="msg-container" v-if="chat.messages.length > 0">
        <div class="messages">
            <div class="msg-item" v-for="message in chat.messages" :key="message.id">
            <p>{{ message.message }}</p>
        </div>
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

.messages {
    display: flex;
    flex-flow: column;
    gap: 10px;
}

.msg-container {
    padding: 10px;
    overflow: scroll;
}

.chat-header-input-container {
    display: flex;
    flex-flow: row;
    gap: 10px;
}

.chat-header-input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.msg-input {
    display: flex;
    flex-flow: row;
    margin-top: auto;
    gap: 10px;
    border-top: 1px solid #ccc;
    padding: 10px;

    input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    
}

.msg-item {
    padding: 10px;
    border: 1px solid #ccc;
}

.chat-header {
    border-bottom: 1px solid #ccc;
    padding: 10px;
}
</style>