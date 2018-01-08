var router = require('express').Router();

router.use('/userLogin', require('./userLogin/userLoginRoutes'));
router.use('/userRegister', require('./userRegister/userRegisterRoutes'));

module.exports = router;
