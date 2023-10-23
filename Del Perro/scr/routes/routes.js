const express = require('express');
const router = express.Router();
const controller = require('../controllers/apiController');

// Definição de rotas
router.get('/', controller.get);
router.post('/', controller.post);

module.exports = router;
