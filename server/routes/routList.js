const express = require('express')
const controller = require('../controllers/listController.js')
const router = express();
router.get('', controller.read)
router.get('/listid?', controller.readById)
router.post('', controller.create)
router.delete('', controller.remove)
module.exports = router;