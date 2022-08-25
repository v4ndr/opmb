/* eslint-disable no-restricted-syntax */
const stream = require('youtube-audio-stream');
const urlsByMood = require('../links.json');

async function streamAudioFromUrl(url, res) {
  try {
    for await (const chunk of stream(url)) {
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

exports.getAudioByMood = (req, res) => {
  const { mood } = req.query;
  const urls = urlsByMood[mood];
  // eslint-disable-next-line no-bitwise
  const randomUrl = urls[urls.length * Math.random() | 0];
  streamAudioFromUrl(randomUrl, res);
};
