const express = require('express');
const fs = require('fs');
const http = require('http');
const path = require('path');
const cors = require('cors');
const { Server } = require('socket.io');

const data = require('./data.json')

const PORT = process.env.PORT || 3001;
const CLIENT_URL = 'http://localhost:3000';

const app = express();

app.use(cors());

app.get('/api/', (req, res) => {
  res.json(data);
});

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: CLIENT_URL,
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  createdSocket = socket;
});

fs.watch(path.join(__dirname, 'data.json'), () => {
  createdSocket.emit('change');
});

server.listen(PORT);
