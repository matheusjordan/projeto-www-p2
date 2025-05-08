const chatRepository = require('./repository');

class ChatController {

    async createChat(req, res) {
        const chat = await chatRepository.createChat(req.body);
        res.status(201).json(chat);
    }

    async getChats(req, res) {
        const chats = await chatRepository.getChats();
        res.status(200).json(chats);
    }

    async getChatById(req, res) {
        const chat = await chatRepository.getChatById(req.params.id);

        if (!chat) {
            res.status(404).json({ message: 'Chat not found' });
            return;
        }

        res.status(200).json(chat);
    }

    async clearChat(req, res) {
        const chat = await chatRepository.clearChat(req.params.id);
        res.status(200).json(chat);
    }

    async clearAllChats(req, res) {
        const chats = await chatRepository.clearAllChats();
        res.status(200).json(chats);
    }
}

let chatController = null;

if (!chatController) {
    chatController = new ChatController();
}

module.exports = chatController;
