var router = require('express').Router();

router.use('/userLogin', require('./userLogin/userLoginRoutes'));

module.exports = router;
