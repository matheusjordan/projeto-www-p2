require('dotenv').config();

const express = require('express');
const server = express();

server.use(express.json());
server.use(cors());

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = server;