var router = require('express').Router();
import logger from '../../util/logger';
import controller from './userRegisterController';


router.route('/')
.post(controller.post)
module.exports = router;
