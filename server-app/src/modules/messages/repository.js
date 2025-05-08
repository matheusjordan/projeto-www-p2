const { chats, messages } = require('../../database/db');

class MessageRepository {
    constructor() {
        this.chats = chats;
        this.messages = messages;
    }

    async insertMessage(chatId, message) {
        const chat = this.getChatById(chatId);

        if (!chat) {
            throw new Error('Chat not found');
        }

        chat.messages.push(message);
        messages.push(message);
        return message;
    }

    async getMessages(chatId) {
        const chat = this.getChatById(chatId);

        if (!chat) {
            throw new Error('Chat not found');
        }

        return chat.messages;
    }
}

let messageRepository = null;

if (!messageRepository) {
    messageRepository = new MessageRepository();
}

module.exports = messageRepository;