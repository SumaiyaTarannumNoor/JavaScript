const express = require('express'),

router = express.Router()

const service = require('../services/user_service')


router.get('/', async(req, res) => {
    
res.send(rows)        
})

module.exports = router;