const { chats } = require('../../database/db');
const { v4: uuidv4 } = require('uuid');
const Chat = require('./models');

class ChatRepository {
    constructor() {
        this.chats = chats;
    }

    async createChat(name) {
        const newChat = new Chat(uuidv4(), name, [], new Date().toISOString());
        this.chats.push(newChat);
        return newChat;
    }
    
    async getChats() {
        return this.chats;
    }

    async getChatById(id) {
        return this.chats.find(chat => chat.id === id);
    }

    async clearChat(chatId) {
        const chat = this.getChatById(chatId);
        chat.messages = [];
        return chat;
    }
    
    async clearAllChats() {
        this.chats = [];
        return this.chats;
    }
}

let chatRepository = null;

if (!chatRepository) {
    chatRepository = new ChatRepository();
}

module.exports = chatRepository;