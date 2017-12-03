var router = require('express').Router();
import logger from '../../util/logger';
import controller from './userLoginController';


router.route('/')
.post(controller.post)
module.exports = router;
