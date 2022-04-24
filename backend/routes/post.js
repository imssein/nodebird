const express = require('express');

const router = express.Router();
router.post('/post', (req, res) => {    //POST /post
    res.json( { id: 1, content: 'hello'});
});

router.delete('/post', (req, res) => {  //DELETE /post
    res.json( { id: 1 });
});

module.exports = router;

