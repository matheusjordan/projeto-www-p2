const ChatRepository = require('./repository');

class ChatController {
    constructor() {
        this.chatRepository = new ChatRepository();
    }

    async createChat(req, res) {
        const chat = await this.chatRepository.createChat(req.body);
        res.status(201).json(chat);
    }

    async getChats(req, res) {
        const chats = await this.chatRepository.getChats();
        res.status(200).json(chats);
    }

    async getChatById(req, res) {
        const chat = await this.chatRepository.getChatById(req.params.id);

        if (!chat) {
            res.status(404).json({ message: 'Chat not found' });
            return;
        }

        res.status(200).json(chat);
    }

    async clearChat(req, res) {
        const chat = await this.chatRepository.clearChat(req.params.id);
        res.status(200).json(chat);
    }

    async clearAllChats(req, res) {
        const chats = await this.chatRepository.clearAllChats();
        res.status(200).json(chats);
    }
}

module.exports = ChatController;
