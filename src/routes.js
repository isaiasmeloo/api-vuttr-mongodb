const express = require('express')
const router = express.Router()
const toolsController = require('./controllers/ToolsController')

router.post('/tools', toolsController.store)
router.get('/tools', toolsController.getAll)
router.delete('/tools/:id', toolsController.remove)

module.exports = router