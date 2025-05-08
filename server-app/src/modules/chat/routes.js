const express = require('express');
const ChatController = require('./controller');

class ChatRoutes {
    constructor() {
        this.router = express.Router();
        this.chatController = new ChatController();

        this.setupRoutes();
    }

    getRouter() {
        return this.router;
    }

    setupRoutes() {
        this.router.post('/', this.chatController.createChat);
        this.router.get('/', this.chatController.getChats);
        this.router.get('/:id', this.chatController.getChatById);
        this.router.delete('/:id', this.chatController.clearChat);
        this.router.delete('/', this.chatController.clearAllChats);
    }
}

module.exports = ChatRoutes;
