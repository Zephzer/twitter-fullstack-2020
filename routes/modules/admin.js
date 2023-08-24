const express = require('express')
const router = express.Router()
const adminController = require('../../controllers/admin-controller')
const { generalErrorHandler } = require('../../middleware/error-handler')

router.get('/tweets', adminController.getTweets)

router.use('/', (req, res) => res.redirect('/admin/tweets'))
router.use('/', generalErrorHandler)

module.exports = router
