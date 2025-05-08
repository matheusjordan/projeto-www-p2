const MessageRepository = require('./repository');

class MessageController {
    constructor() {
        this.messageRepository = new MessageRepository();
    }

    async createMessage(req, res) {
        try {
            const message = await this.messageRepository.insertMessage(req.body);
            res.status(201).json(message);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async getMessages(req, res) {
        try {
            const messages = await this.messageRepository.getMessages(req.params.chatId);
            res.status(200).json(messages);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}

module.exports = MessageController;
