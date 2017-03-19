const express = require('express')
const router = express.Router()
const controller = require('../controllers/memoController')

router.get('/memos', controller.getMemos)
router.post('/memo', controller.createMemo)
router.put('/memo/:slug', controller.updateMemo)
router.delete('/memo/:slug', controller.deleteMemo)

module.exports = router
