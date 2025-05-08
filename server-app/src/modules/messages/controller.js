const messageRepository = require('./repository');

class MessageController {

    async createMessage(req, res) {
        try {
            const message = await messageRepository.insertMessage(req.body);
            res.status(201).json(message);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    async getMessages(req, res) {
        try {
            const messages = await messageRepository.getMessages(req.params.chatId);
            res.status(200).json(messages);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}

let messageController = null;

if (!messageController) {
    messageController = new MessageController();
}

module.exports = messageController;
