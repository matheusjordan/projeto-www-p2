const express = require('express');

const messageController = require('./controller');

class MessageRoutes {
    constructor() {
        this.router = express.Router();
        this.messageController = messageController;

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

let messageRoutes = null;

if (!messageRoutes) {
    messageRoutes = new MessageRoutes();
}

module.exports = messageRoutes.getRouter();
