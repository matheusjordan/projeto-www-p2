require('dotenv').config();
const routes = require('./server-routes');
const cors = require('cors');
const express = require('express');

const server = express();
server.use(express.json());
server.use(cors({
    origin: process.env.CORS_ORIGIN,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true
}));

server.use('/', routes);

const runServer = () => {
    const port = process.env.PORT || 3000;

    server.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

module.exports = { runServer };