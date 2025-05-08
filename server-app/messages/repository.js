const { chats, messages } = require('../db');

class ChatRepository {
    constructor() {
        this.chats = chats;
        this.messages = messages;
    }

    async insertMessage(chatId, message) {
        const chat = this.getChatById(chatId);
        chat.messages.push(message);
        messages.push(message);
        return message;
    }

    async getMessages(chatId) {
        const chat = this.getChatById(chatId);
        return chat.messages;
    }
}

module.exports = ChatRepository;