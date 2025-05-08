const express = require('express');
const router = express.Router();

const chatRoutes = require('../modules/chat/routes');
const messageRoutes = require('../modules/messages/routes');

router.use('/chats', chatRoutes);
router.use('/messages', messageRoutes);

module.exports = router;