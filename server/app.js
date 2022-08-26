const http = require('http');
const express = require('express');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const streamRoutes = require('./routes/stream');

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(cors({
  origin: '*',
}));

app.use('/stream', streamRoutes);
app.use((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.status(404).send('FORBIDDEN');
});

server.listen(3002);
