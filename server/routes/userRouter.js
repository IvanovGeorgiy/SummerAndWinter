const Router = require('express');
const router = new Router();

router.get('/order', (req, res) => {
    res.json({message : "Working?"})
})
module.exports = router;