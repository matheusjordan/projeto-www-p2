const { chats, messages } = require('../../database/db');
const Message = require('./models');
const { v4: uuidv4 } = require('uuid');

class MessageRepository {
    async insertMessage({chatId, message}) {
        const chat = chats.find(chat => chat.id === chatId);

        console.log(message, chatId);
        if (!chat) {
            throw new Error('Chat not found');
        }

        const newMessage = new Message(uuidv4(), message, new Date().toISOString());

        chat.messages.push(newMessage);
        messages.push(newMessage);
        return message;
    }

    async getMessages(chatId) {
        const chat = chats.find(chat => chat.id == chatId)

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