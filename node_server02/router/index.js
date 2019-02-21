const express = require('express')
const router = express.Router()

const notice = require('./notice')

const login = require('./login')

router.use('/notice', notice)

router.use('/login', login)

module.exports = router