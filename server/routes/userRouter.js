const {Router} = require('express');
const router = new Router();

router.post('/reg', (req, res) => {
    res.json({message : "Working?"})
})
module.exports = router;