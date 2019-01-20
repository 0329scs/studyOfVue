const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
  console.log('[[[[[ NOTICE REGISTER]]]]]')
  console.log(' REGISTER REQ', req.body); 
})

module.exports = router