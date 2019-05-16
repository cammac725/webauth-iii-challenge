const express = require('express');

const configMiddleware = require('./middleware')
const authRouter = require('../auth/auth-router');
const usersRouter = require('../users/users-router');

const server = express();

configMiddleware(server);

server.use('/api/auth', authRouter);
server.use('/api/users', usersRouter);

server.get('/', (req, res) => {
  res.send("Engage!")
})

module.exports = server;