const express = require('express');
const router = express.Router();

router.use('/chats', new ChatRoutes().getRouter());
router.use('/messages', new MessageRoutes().getRouter());

module.exports = router;