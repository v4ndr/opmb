/* eslint-disable no-restricted-syntax */
const stream = require('youtube-audio-stream');

async function handleView(req, res) {
  try {
    for await (const chunk of stream('http://youtube.com/watch?v=t8p0mKhvuuw')) {
      res.write(chunk);
    }
    res.end();
  } catch (err) {
    console.error(err);
    if (!res.headersSent) {
      res.writeHead(500);
      res.end('internal system error');
    }
  }
}

exports.streamAudioById = (req, res) => {
  handleView(req, res);
};
