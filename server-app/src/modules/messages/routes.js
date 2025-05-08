const express = require('express');

const MessageController = require('./controller');

class MessageRoutes {
    constructor() {
        this.router = express.Router();
        this.messageController = new MessageController();

        this.setupRoutes();
    }

    getRouter() {
        return this.router;
    }

    setupRoutes() {
        this.router.post('/', this.messageController.createMessage);
        this.router.get('/:chatId', this.messageController.getMessages);
    }
}

module.exports = MessageRoutes;
