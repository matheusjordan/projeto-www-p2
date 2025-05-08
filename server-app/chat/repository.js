const { chats } = require('../db');

class ChatRepository {
    constructor() {
        this.chats = chats;
    }

    async createChat(chat) {
        this.chats.push(chat);
        return chat;
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

module.exports = ChatRepository;