const { chats } = require('../../database/db');
const { v4: uuidv4 } = require('uuid');
const Chat = require('./models');

class ChatRepository {

    async createChat({ name }) {
        const newChat = new Chat(uuidv4(), name, []);
        chats.push(newChat);
        return newChat;
    }
    
    async getChats() {
        return chats;
    }

    async getChatById(id) {
        return chats.find(chat => chat.id === id);
    }

    async deleteChat(id) {
        const chat = chats.find(chat => chat.id == id);
        chats.splice(chats.indexOf(chat), 1);
        return chat;
    }

    async clearChat(chatId) {
        const chat = chats.find(chat => chat.id == chatId);
        chat.messages = [];
        return chat;
    }
    
    async clearAllChats() {
        chats.splice(0, chats.length);
        return chats;
    }
}

let chatRepository = null;

if (!chatRepository) {
    chatRepository = new ChatRepository();
}

module.exports = chatRepository;