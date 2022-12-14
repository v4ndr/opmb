const express = require('express');

const router = express.Router();
const streamCtrl = require('../controllers/stream');

router.get('/', streamCtrl.getAudioByMood);

module.exports = router;
