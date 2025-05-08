const express = require('express');
const chatController = require('./controller');

class ChatRoutes {
    constructor() {
        this.router = express.Router();
        this.chatController = chatController;

        this.setupRoutes();
    }

    getRouter() {
        return this.router;
    }

    setupRoutes() {
        this.router.post('/', this.chatController.createChat);
        this.router.get('/', this.chatController.getChats);
        this.router.get('/:id', this.chatController.getChatById);
        this.router.delete('/:id', this.chatController.deleteChat);
        this.router.delete('/', this.chatController.clearAllChats);
        this.router.patch('/:id', this.chatController.updateChatName);
    }
}

let chatRoutes = null;

if (!chatRoutes) {
    chatRoutes = new ChatRoutes();
}

module.exports = chatRoutes.getRouter();
